import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAuthorizeApprovalDto } from './dto/create-authorize-approval.dto';
import { UpdateAuthorizeApprovalDto } from './dto/update-authorize-approval.dto';
import { AuthorizeApproval } from './entities/authorize-approval.entity';

@Injectable()
export class AuthorizeApprovalService {


  // CRUD Entity for AuthorizeApproval Created By Override 
  constructor(@InjectRepository(AuthorizeApproval) private readonly repo: Repository<AuthorizeApproval>) {
  }



  // findAll AuthorizeApprovals Created By Override 
  async findAll(): Promise<AuthorizeApproval[]> {
    return await this.repo.find();
  }



  // findOne AuthorizeApproval Created By Override 
  findOne(id: string): Promise<AuthorizeApproval> {
    return this.repo.findOne(id);
  }



  // update AuthorizeApproval Created By Override 
  async update(id: string, req: AuthorizeApproval): Promise<AuthorizeApproval> {
    const existAuthorizeApproval = await this.repo.findOne(id);
    this.repo.merge(existAuthorizeApproval, req);
    return await this.repo.save(existAuthorizeApproval);
  }



  // remove AuthorizeApproval Created By Override 
  async remove(id: string): Promise<any> {
    return await this.repo.delete(id);
  }



  // save AuthorizeApproval Created By Override 
  async save(req: AuthorizeApproval): Promise<AuthorizeApproval> {
    return await this.repo.save(req)
  }



  // end of AuthorizeApproval sevice
}
