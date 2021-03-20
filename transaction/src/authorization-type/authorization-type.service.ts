import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthorizationType } from './entities/authorization-type.entity';

@Injectable()
export class AuthorizationTypeService {


  // CRUD Entity for AuthorizationType Created By Override 
  constructor(@InjectRepository(AuthorizationType) private readonly repo: Repository<AuthorizationType>) {
  }



  // findAll AuthorizationTypes Created By Override 
  async findAll(): Promise<AuthorizationType[]> {
    return await this.repo.find();
  }



  // findOne AuthorizationType Created By Override 
  findOne(id: string): Promise<AuthorizationType> {
    return this.repo.findOne(id);
  }



  // update AuthorizationType Created By Override 
  async update(id: string, req: AuthorizationType): Promise<AuthorizationType> {
    const existAuthorizationType = await this.repo.findOne(id);
    this.repo.merge(existAuthorizationType, req);
    return await this.repo.save(existAuthorizationType);
  }



  // remove AuthorizationType Created By Override 
  async remove(id: string): Promise<any> {
    return await this.repo.delete(id);
  }



  // save AuthorizationType Created By Override 
  async save(req: AuthorizationType): Promise<AuthorizationType> {
    return await this.repo.save(req)
  }



  // end of AuthorizationType sevice
}
