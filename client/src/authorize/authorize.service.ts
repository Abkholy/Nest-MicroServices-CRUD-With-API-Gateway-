import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { APIURLS } from '../../shared/Api-urls';
import { Authorize } from '../authorize-model';

@Injectable()
export class AuthorizeService {
    
    
    // CRUD Entity for Authorize Created By Override 
    constructor(@Inject('TRANSACTION_SERVICE') private client: ClientProxy,) 
      { 
     }
    
     
    
     async onApplicationBootstrap() {
    
    await this.client.connect();
    
    }
    // findAll Authorizes Created By Override 
    async findAll() :Promise<Authorize[]> {
     return await this.client.send<any>(APIURLS.Transaction.Authorize.getAll, []).toPromise() }
    
     
    
    // findOne Authorize Created By Override 
     async findOne(id: string) :Promise<Authorize> {
     return  await this.client.send<Authorize>(APIURLS.Transaction.Authorize.getById, id).toPromise() }
    
     
    
    // update Authorize Created By Override 
     async update(id: string, req: Authorize) :Promise<Authorize> {
     return await this.client.send<Authorize>(APIURLS.Transaction.Authorize.update, { id: id, body: req }).toPromise() }
    
     
    
    // remove Authorize Created By Override 
     async remove(id: string) :Promise<any> {
     return await this.client.send<Authorize>(APIURLS.Transaction.Authorize.Delete, id).toPromise() }
    
     
    
    // save Authorize Created By Override 
     async save(req: Authorize) :Promise<Authorize> {
      return await this.client.send<Authorize>(APIURLS.Transaction.Authorize.Add, req).toPromise()  }
    
     
    
    // end of Authorize sevice
}
