import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Authorize } from './entities/authorize.entity';

@Injectable()
export class AuthorizeService {


  // CRUD Entity for Authorize Created By Override 
  constructor(@InjectRepository(Authorize) private readonly repo: Repository<Authorize>) {
  }



  // findAll Authorizes Created By Override 
  async findAll(): Promise<Authorize[]> {
    return await this.repo.find();
  }



  // findOne Authorize Created By Override 
  findOne(id: string): Promise<Authorize> {
    return this.repo.findOne(id);
  }



  // update Authorize Created By Override 
  async update(id: string, req: Authorize): Promise<Authorize> {
    const existAuthorize = await this.repo.findOne(id);
    this.repo.merge(existAuthorize, req);
    return await this.repo.save(existAuthorize);
  }



  // remove Authorize Created By Override 
  async remove(id: string): Promise<any> {
    return await this.repo.delete(id);
  }



  // save Authorize Created By Override 
  async save(req: Authorize): Promise<Authorize> {
    return await this.repo.save(req)
  }



  // end of Authorize sevice
}
