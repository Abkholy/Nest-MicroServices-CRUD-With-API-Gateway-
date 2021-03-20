import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { APIURLS } from '../../shared/Api-urls';
import { Citizen } from '../model.dto';

@Injectable()
export class CitizenService {
    
    
    // CRUD Entity for Citizen Created By Override 
    constructor(@Inject('BASIC_DATA_SERVICE') private client: ClientProxy,) 
      { 
     }
    
     
    
     async onApplicationBootstrap() {
    
    await this.client.connect();
    
    }
    // findAll Citizens Created By Override 
    async findAll() :Promise<Citizen[]> {
     return await this.client.send<any>(APIURLS.BasicData.Citizen.getAll, []).toPromise() }
    
     
    
    // findOne Citizen Created By Override 
     async findOne(id: string) :Promise<Citizen> {
     return  await this.client.send<Citizen>(APIURLS.BasicData.Citizen.getById, id).toPromise() }
    
     
    
    // update Citizen Created By Override 
     async update(id: string, req: Citizen) :Promise<Citizen> {
     return await this.client.send<Citizen>(APIURLS.BasicData.Citizen.update, { id: id, body: req }).toPromise() }
    
     
    
    // remove Citizen Created By Override 
     async remove(id: string) :Promise<any> {
     return await this.client.send<Citizen>(APIURLS.BasicData.Citizen.Delete, id).toPromise() }
    
     
    
    // save Citizen Created By Override 
     async save(req: Citizen) :Promise<Citizen> {
      return await this.client.send<Citizen>(APIURLS.BasicData.Citizen.Add, req).toPromise()  }
    
     
    
    // end of Citizen sevice
}
