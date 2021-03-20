import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AuthorizeService } from './authorize.service';
import { Authorize } from './entities/authorize.entity';

@Controller()
export class AuthorizeController {

  /* CRUD End Points for Authorize Created By Override */


  constructor(private service: AuthorizeService) { }
  /* POST Authorize End Point */

  @MessagePattern('Authorize/add')
  async saveAuthorize(req: Authorize): Promise<Authorize> {
    return this.service.save(req)
  }


  /* GET All Authorizes End Point */

  @MessagePattern('Authorize/getAll')
  getAllAuthorizes(): Promise<Authorize[]> {
    return this.service.findAll();
  }


  /* GET One Authorize End Point */

  @MessagePattern('Authorize/getById')
  findOne(id: string): Promise<Authorize> {
    return this.service.findOne(id);
  }


  /* PUT  Authorize End Point */

  @MessagePattern('Authorize/update')
  updateAuthorize(req: { id: string, body: Authorize }): Promise<any> {
    return this.service.update(req.id, req.body);
  }


  /* Delete  Authorize End Point */

  @MessagePattern('Authorize/delete')
  deleteAuthorize(id: string): Promise<any> {
    return this.service.remove(id)
  }

  /* End of Authorize Controller Class 
   
   */
}