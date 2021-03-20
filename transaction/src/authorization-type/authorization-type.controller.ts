import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AuthorizationTypeService } from './authorization-type.service';
import { AuthorizationType } from './entities/authorization-type.entity';

@Controller()
export class AuthorizationTypeController { 

/* CRUD End Points for AuthorizationType Created By Override */


constructor(private service:  AuthorizationTypeService) 
 { }
/* POST AuthorizationType End Point */

 @MessagePattern('AuthorizationType/add') 
 async saveAuthorizationType(req: AuthorizationType) :Promise<AuthorizationType> {
return this.service.save(req) 
 } 
 
 
/* GET All AuthorizationTypes End Point */

  @MessagePattern('AuthorizationType/getAll')  
 getAllAuthorizationTypes() :Promise<AuthorizationType[]> {
return this.service.findAll(); 
 } 
 

/* GET One AuthorizationType End Point */

 @MessagePattern('AuthorizationType/getById')  
 findOne( id: string) :Promise<AuthorizationType> {
return this.service.findOne(id); 
 } 
  
 
/* PUT  AuthorizationType End Point */

 @MessagePattern('AuthorizationType/update')  
 updateAuthorizationType(req: { id: string, body: AuthorizationType })   :Promise<any>{
  return this.service.update(req.id, req.body);
 } 
 

/* Delete  AuthorizationType End Point */

 @MessagePattern('AuthorizationType/delete')  
 deleteAuthorizationType(id: string) :Promise<any>{
return this.service.remove(id) 
 } 
 
/* End of AuthorizationType Controller Class 
 
 */
}