import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { Country } from './entities/country.entity';

@Injectable()
export class CountryService {
  
  
  // CRUD Entity for Country Created By Override 
  constructor(@InjectRepository(Country) private readonly repo: Repository<Country>) 
    { 
   }
  
   
  
  // findAll Countrys Created By Override 
  async findAll() :Promise<Country[]> {
   return await this.repo.find(); }
  
   
  
  // findOne Country Created By Override 
   findOne(id: string) :Promise<Country> {
   return this.repo.findOne(id); }
  
   
  
  // update Country Created By Override 
   async update(id: string, req: Country) :Promise<Country> {
   const existCountry = await this.repo.findOne(id);
  this.repo.merge(existCountry,req);
  return await this.repo.save(existCountry) ; }
  
   
  
  // remove Country Created By Override 
   async remove(id: string) :Promise<any> {
   return await this.repo.delete(id); }
  
   
  
  // save Country Created By Override 
   async save(req: Country) :Promise<Country> {
   return await this.repo.save(req)  }
  
   
  
  // end of Country sevice
}
