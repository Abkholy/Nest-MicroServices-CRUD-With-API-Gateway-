import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { City } from './entities/city.entity';

@Injectable()
export class CityService {
  
  
  // CRUD Entity for City Created By Override 
  constructor(@InjectRepository(City) private readonly repo: Repository<City>) 
    { 
   }
  
   
  
  // findAll Citys Created By Override 
  async findAll() :Promise<City[]> {
   return await this.repo.find(); }
  
   
  
  // findOne City Created By Override 
   findOne(id: string) :Promise<City> {
   return this.repo.findOne(id); }
  
   
  
  // update City Created By Override 
   async update(id: string, req: City) :Promise<City> {
   const existCity = await this.repo.findOne(id);
  this.repo.merge(existCity,req);
  return await this.repo.save(existCity) ; }
  
   
  
  // remove City Created By Override 
   async remove(id: string) :Promise<any> {
   return await this.repo.delete(id); }
  
   
  
  // save City Created By Override 
   async save(req: City) :Promise<City> {
   return await this.repo.save(req)  }
  
   
  
  // end of City sevice
}
