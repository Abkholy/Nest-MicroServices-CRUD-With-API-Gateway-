import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { APIURLS } from '../../shared/Api-urls';
import { AuthorizeApproval } from '../authorize-model.dto';

@Injectable()
export class AuthorizeApprovalService {
    
    
    // CRUD Entity for AuthorizeApproval Created By Override 
    constructor(@Inject('TRANSACTION_SERVICE') private client: ClientProxy,) 
      { 
     }
    
     
    
     async onApplicationBootstrap() {
    
    await this.client.connect();
    
    }
    // findAll AuthorizeApprovals Created By Override 
    async findAll() :Promise<AuthorizeApproval[]> {
     return await this.client.send<any>(APIURLS.Transaction.AuthorizeApproval.getAll, []).toPromise() }
    
     
    
    // findOne AuthorizeApproval Created By Override 
     async findOne(id: string) :Promise<AuthorizeApproval> {
     return  await this.client.send<AuthorizeApproval>(APIURLS.Transaction.AuthorizeApproval.getById, id).toPromise() }
    
     
    
    // update AuthorizeApproval Created By Override 
     async update(id: string, req: AuthorizeApproval) :Promise<AuthorizeApproval> {
     return await this.client.send<AuthorizeApproval>(APIURLS.Transaction.AuthorizeApproval.update, { id: id, body: req }).toPromise() }
    
     
    
    // remove AuthorizeApproval Created By Override 
     async remove(id: string) :Promise<any> {
     return await this.client.send<AuthorizeApproval>(APIURLS.Transaction.AuthorizeApproval.Delete, id).toPromise() }
    
     
    
    // save AuthorizeApproval Created By Override 
     async save(req: AuthorizeApproval) :Promise<AuthorizeApproval> {
      return await this.client.send<AuthorizeApproval>(APIURLS.Transaction.AuthorizeApproval.Add, req).toPromise()  }
    
     
    
    // end of AuthorizeApproval sevice
}
