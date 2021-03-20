import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';
import { District } from './entities/district.entity';

@Injectable()
export class DistrictService {
 
  
  
  // CRUD Entity for District Created By Override 
  constructor(@InjectRepository(District) private readonly repo: Repository<District>) 
    { 
   }
  
   
  
  // findAll Districts Created By Override 
  async findAll() :Promise<District[]> {
   return await this.repo.find(); }
  
   
  
  // findOne District Created By Override 
   findOne(id: string) :Promise<District> {
   return this.repo.findOne(id); }
  
   
  
  // update District Created By Override 
   async update(id: string, req: District) :Promise<District> {
   const existDistrict = await this.repo.findOne(id);
  this.repo.merge(existDistrict,req);
  return await this.repo.save(existDistrict) ; }
  
   
  
  // remove District Created By Override 
   async remove(id: string) :Promise<any> {
   return await this.repo.delete(id); }
  
   
  
  // save District Created By Override 
   async save(req: District) :Promise<District> {
   return await this.repo.save(req)  }
  
   
  
  // end of District sevice
}
