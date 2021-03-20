import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { APIURLS } from '../../shared/Api-urls';
import { AuthorizationForm } from '../model.dto';

@Injectable()
export class AuthorizationFormService {
    
    
    // CRUD Entity for AuthorizationForm Created By Override 
    constructor(@Inject('TRANSACTION_SERVICE') private client: ClientProxy,) 
      { 
     }
    
     
    
     async onApplicationBootstrap() {
    
    await this.client.connect();
    
    }
    // findAll AuthorizationForms Created By Override 
    async findAll() :Promise<AuthorizationForm[]> {
     return await this.client.send<any>(APIURLS.Transaction.AuthorizationForm.getAll, []).toPromise() }
    
     
    
    // findOne AuthorizationForm Created By Override 
     async findOne(id: string) :Promise<AuthorizationForm> {
     return  await this.client.send<AuthorizationForm>(APIURLS.Transaction.AuthorizationForm.getById, id).toPromise() }
    
     
    
    // update AuthorizationForm Created By Override 
     async update(id: string, req: AuthorizationForm) :Promise<AuthorizationForm> {
     return await this.client.send<AuthorizationForm>(APIURLS.Transaction.AuthorizationForm.update, { id: id, body: req }).toPromise() }
    
     
    
    // remove AuthorizationForm Created By Override 
     async remove(id: string) :Promise<any> {
     return await this.client.send<AuthorizationForm>(APIURLS.Transaction.AuthorizationForm.Delete, id).toPromise() }
    
     
    
    // save AuthorizationForm Created By Override 
     async save(req: AuthorizationForm) :Promise<AuthorizationForm> {
      return await this.client.send<AuthorizationForm>(APIURLS.Transaction.AuthorizationForm.Add, req).toPromise()  }
    
     
    
    // end of AuthorizationForm sevice
}
