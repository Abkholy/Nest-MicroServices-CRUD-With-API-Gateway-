import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AuthorizeApprovalService } from './authorize-approval.service';
import { CreateAuthorizeApprovalDto } from './dto/create-authorize-approval.dto';
import { UpdateAuthorizeApprovalDto } from './dto/update-authorize-approval.dto';
import { AuthorizeApproval } from './entities/authorize-approval.entity';


@Controller()
export class AuthorizeApprovalController {

  /* CRUD End Points for AuthorizeApproval Created By Override */


  constructor(private service: AuthorizeApprovalService) { }
  /* POST AuthorizeApproval End Point */

  @MessagePattern('AuthorizeApproval/add')
  async saveAuthorizeApproval(req: AuthorizeApproval): Promise<AuthorizeApproval> {
    return this.service.save(req)
  }


  /* GET All AuthorizeApprovals End Point */

  @MessagePattern('AuthorizeApproval/getAll')
  getAllAuthorizeApprovals(): Promise<AuthorizeApproval[]> {
    return this.service.findAll();
  }


  /* GET One AuthorizeApproval End Point */

  @MessagePattern('AuthorizeApproval/getById')
  findOne(id: string): Promise<AuthorizeApproval> {
    return this.service.findOne(id);
  }


  /* PUT  AuthorizeApproval End Point */

  @MessagePattern('AuthorizeApproval/update')
  updateAuthorizeApproval(req: { id: string, body: AuthorizeApproval }): Promise<any> {
    return this.service.update(req.id, req.body);
  }


  /* Delete  AuthorizeApproval End Point */

  @MessagePattern('AuthorizeApproval/delete')
  deleteAuthorizeApproval(id: string): Promise<any> {
    return this.service.remove(id)
  }

  /* End of AuthorizeApproval Controller Class 
   
   */
}