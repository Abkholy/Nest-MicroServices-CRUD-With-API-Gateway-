import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthorizationForm } from './entities/authorization-form.entity';

@Injectable()
export class AuthorizationFormService {


  // CRUD Entity for AuthorizationForm Created By Override 
  constructor(@InjectRepository(AuthorizationForm) private readonly repo: Repository<AuthorizationForm>) {
  }



  // findAll AuthorizationForms Created By Override 
  async findAll(): Promise<AuthorizationForm[]> {
    return await this.repo.find();
  }



  // findOne AuthorizationForm Created By Override 
  findOne(id: string): Promise<AuthorizationForm> {
    return this.repo.findOne(id);
  }



  // update AuthorizationForm Created By Override 
  async update(id: string, req: AuthorizationForm): Promise<AuthorizationForm> {
    const existAuthorizationForm = await this.repo.findOne(id);
    this.repo.merge(existAuthorizationForm, req);
    return await this.repo.save(existAuthorizationForm);
  }



  // remove AuthorizationForm Created By Override 
  async remove(id: string): Promise<any> {
    return await this.repo.delete(id);
  }



  // save AuthorizationForm Created By Override 
  async save(req: AuthorizationForm): Promise<AuthorizationForm> {
    return await this.repo.save(req)
  }



  // end of AuthorizationForm sevice
}
