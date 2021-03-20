import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthorizeApproval } from '../authorize-approval/entities/authorize-approval.entity';
import { Authorize } from './entities/authorize.entity';
import { Citizen } from './models';

@Injectable()
export class AuthorizeService {


  // CRUD Entity for Authorize Created By Override 
  constructor(@InjectRepository(Authorize) private readonly repo: Repository<Authorize>,@Inject('BASIC_DATA_SERVICE') private client: ClientProxy) {
  }



  // findAll Authorizes Created By Override 
  async findAll(): Promise<Authorize[]> {
    return await this.repo.find();
  }



  // findOne Authorize Created By Override 
  findOne(id: string): Promise<Authorize> {
    return this.repo.findOne(id);
  }



  // update Authorize Created By Override 
  async update(id: string, req: Authorize): Promise<Authorize> {
    const existAuthorize = await this.repo.findOne(id);
    this.repo.merge(existAuthorize, req);
    return await this.repo.save(existAuthorize);
  }



  // remove Authorize Created By Override 
  async remove(id: string): Promise<any> {
    return await this.repo.delete(id);
  }



  // save Authorize Created By Override 
  async save(req: Authorize): Promise<Authorize> {



      let citizen =  await this.client.send<Citizen>('Citizen/getBySSN', req.delegator.ssn).toPromise() 
      if (! citizen )
      throw new RpcException('Please use a correct SSN')

      req.delegator.name = `${citizen.firstName } ${citizen.secondName } ${citizen.thirdName } ${citizen.fourthName }`
      req.delegator.residence = citizen.country.name;
      req.delegator.issueDate = citizen.issueDate;
      req.delegator.expireDate = citizen.expireDate;
      

      for await (const d of req.delegated) {

        let citizen =  await this.client.send<Citizen>('Citizen/getBySSN', d.ssn).toPromise() 
        if (! citizen )
        throw new RpcException('Please use a correct SSN')
  

        d.name = `${citizen.firstName } ${citizen.secondName } ${citizen.thirdName } ${citizen.fourthName }`
        d.residence = citizen.country.name;
        d.issueDate = citizen.issueDate;
        d.expireDate = citizen.expireDate;
      }

      req.valueDate = Date.now()
    
    let authorize = await this.repo.save(req);

    if (authorize.type.needApproval === true){
      authorize.approvals =[];

      for await (const d of authorize.delegated) {
        let citizen =  await this.client.send<Citizen>('Citizen/getBySSN', d.ssn).toPromise() 
        if (! citizen )
        throw new RpcException('Please use a correct SSN')
  
        d.name = `${citizen.firstName } ${citizen.secondName } ${citizen.thirdName } ${citizen.fourthName }`
        d.residence = citizen.country.name;
        d.issueDate = citizen.issueDate;
        d.expireDate = citizen.expireDate;

        let  approval = new AuthorizeApproval();
        approval.delegated = d;
        approval.valueDate = authorize.valueDate
        authorize.approvals.push(approval)
        
      }
      await this.repo.save(authorize);
    }
    return authorize
  }



  // end of Authorize sevice
}
