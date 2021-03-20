import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { DistrictService } from './district.service';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';
import { District } from './entities/district.entity';

@Controller()
export class DistrictController { 

/* CRUD End Points for District Created By Override */


constructor(private service:  DistrictService) 
 { }
/* POST District End Point */

 @MessagePattern('District/add') 
 async saveDistrict(req: District) :Promise<District> {
return this.service.save(req) 
 } 
 
 
/* GET All Districts End Point */

  @MessagePattern('District/getAll')  
 getAllDistricts() :Promise<District[]> {
return this.service.findAll(); 
 } 
 

/* GET One District End Point */

 @MessagePattern('District/getById')  
 findOne( id: string) :Promise<District> {
return this.service.findOne(id); 
 } 
  
 
/* PUT  District End Point */

 @MessagePattern('District/update')  
 updateDistrict(req: { id: string, body: District })   :Promise<any>{
  return this.service.update(req.id, req.body);
 } 
 

/* Delete  District End Point */

 @MessagePattern('District/delete')  
 deleteDistrict(id: string) :Promise<any>{
return this.service.remove(id) 
 } 
 
/* End of District Controller Class 
 
 */
}