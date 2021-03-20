import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { APIURLS } from '../../shared/Api-urls';
import { City } from '../model.dto';

@Injectable()
export class CityService {
    
    
    // CRUD Entity for City Created By Override 
    constructor(@Inject('BASIC_DATA_SERVICE') private client: ClientProxy,) 
      { 
     }
    
     
    
     async onApplicationBootstrap() {
    
    await this.client.connect();
    
    }
    // findAll Citys Created By Override 
    async findAll() :Promise<City[]> {
     return await this.client.send<any>(APIURLS.BasicData.City.getAll, []).toPromise() }
    
     
    
    // findOne City Created By Override 
     async findOne(id: string) :Promise<City> {
     return  await this.client.send<City>(APIURLS.BasicData.City.getById, id).toPromise() }
    
     
    
    // update City Created By Override 
     async update(id: string, req: City) :Promise<City> {
     return await this.client.send<City>(APIURLS.BasicData.City.update, { id: id, body: req }).toPromise() }
    
     
    
    // remove City Created By Override 
     async remove(id: string) :Promise<any> {
     return await this.client.send<City>(APIURLS.BasicData.City.Delete, id).toPromise() }
    
     
    
    // save City Created By Override 
     async save(req: City) :Promise<City> {
      return await this.client.send<City>(APIURLS.BasicData.City.Add, req).toPromise()  }
    
     
    
    // end of City sevice
}
