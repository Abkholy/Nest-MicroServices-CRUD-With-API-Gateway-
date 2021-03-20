import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CitizenService } from './citizen.service';
import { Citizen } from './entities/citizen.entity';


@Controller()
export class CitizenController { 

/* CRUD End Points for Citizen Created By Override */


constructor(private service:  CitizenService) 
 { }
/* POST Citizen End Point */

 @MessagePattern('Citizen/add') 
 async saveCitizen(req: Citizen) :Promise<Citizen> {
return this.service.save(req) 
 } 
 
 
/* GET All Citizens End Point */

  @MessagePattern('Citizen/getAll')  
 getAllCitizens() :Promise<Citizen[]> {
return this.service.findAll(); 
 } 
 

/* GET One Citizen End Point */

 @MessagePattern('Citizen/getById')  
 findOne( id: string) :Promise<Citizen> {
return this.service.findOne(id); 
 } 
  
 @MessagePattern('Citizen/getBySSN')  
 getBySSN( ssn: string) :Promise<Citizen> {
return this.service.getBySSN(ssn); 
 } 
  
 
/* PUT  Citizen End Point */

 @MessagePattern('Citizen/update')  
 updateCitizen(req: { id: string, body: Citizen })   :Promise<any>{
  return this.service.update(req.id, req.body);
 } 
 

/* Delete  Citizen End Point */

 @MessagePattern('Citizen/delete')  
 deleteCitizen(id: string) :Promise<any>{
return this.service.remove(id) 
 } 
 
/* End of Citizen Controller Class 
 
 */
}