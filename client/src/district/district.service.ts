import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { APIURLS } from '../../shared/Api-urls';
import { District } from '../model.dto';

@Injectable()
export class DistrictService {
    
    
    // CRUD Entity for District Created By Override 
    constructor(@Inject('BASIC_DATA_SERVICE') private client: ClientProxy,) 
      { 
     }
    
     
    
     async onApplicationBootstrap() {
    
    await this.client.connect();
    
    }
    // findAll Districts Created By Override 
    async findAll() :Promise<District[]> {
     return await this.client.send<any>(APIURLS.BasicData.District.getAll, []).toPromise() }
    
     
    
    // findOne District Created By Override 
     async findOne(id: string) :Promise<District> {
     return  await this.client.send<District>(APIURLS.BasicData.District.getById, id).toPromise() }
    
     
    
    // update District Created By Override 
     async update(id: string, req: District) :Promise<District> {
     return await this.client.send<District>(APIURLS.BasicData.District.update, { id: id, body: req }).toPromise() }
    
     
    
    // remove District Created By Override 
     async remove(id: string) :Promise<any> {
     return await this.client.send<District>(APIURLS.BasicData.District.Delete, id).toPromise() }
    
     
    
    // save District Created By Override 
     async save(req: District) :Promise<District> {
      return await this.client.send<District>(APIURLS.BasicData.District.Add, req).toPromise()  }
    
     
    
    // end of District sevice
}
