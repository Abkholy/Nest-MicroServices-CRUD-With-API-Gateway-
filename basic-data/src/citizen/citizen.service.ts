import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCitizenDto } from './dto/create-citizen.dto';
import { UpdateCitizenDto } from './dto/update-citizen.dto';
import { Citizen } from './entities/citizen.entity';

@Injectable()
export class CitizenService {
  
  
  // CRUD Entity for Citizen Created By Override 
  constructor(@InjectRepository(Citizen) private readonly repo: Repository<Citizen>) 
    { 
   }
  
   
  
  // findAll Citizens Created By Override 
  async findAll() :Promise<Citizen[]> {
   return await this.repo.find(); }
  
   
  
  // findOne Citizen Created By Override 
   findOne(id: string) :Promise<Citizen> {
   return this.repo.findOne(id); }
  
   
  
  // update Citizen Created By Override 
   async update(id: string, req: Citizen) :Promise<Citizen> {
   const existCitizen = await this.repo.findOne(id);
  this.repo.merge(existCitizen,req);
  return await this.repo.save(existCitizen) ; }
  
   
  
  // remove Citizen Created By Override 
   async remove(id: string) :Promise<any> {
   return await this.repo.delete(id); }
  
   
  
  // save Citizen Created By Override 
   async save(req: Citizen) :Promise<Citizen> {
   return await this.repo.save(req)  }
  
   
  
  // end of Citizen sevice
}
