import { BadRequestException, Injectable } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository, Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
 
 
 
 // CRUD Entity for User Created By Override 
 constructor()  { 
  }
 

public get repo() : Repository<User> {
  return getRepository(User);
}

  
 
 // findAll Users Created By Override 
 async findAll() {
  return await this.repo.find(); 
  
}
 
findByEmail(email: string): User | PromiseLike<User> {
  return this.repo.findOneOrFail({email:email});
}

 
 // findOne User Created By Override 
  findOne(id: string) :Promise<User> {
  return this.repo.findOne(id); }
 
  
 
 // update User Created By Override 
  async update(id: string, req: User) :Promise<User> {
  const existUser = await this.repo.findOne(id);
 this.repo.merge(existUser,req);
 return await this.repo.save(existUser) ;
 }
 
 async register(registration: User): Promise<User | PromiseLike<User>> {
  let existsUser = await this.repo.findOne({ where: [{ email: registration.email }, { mobile: registration.mobile }] })
  if (existsUser != null) {
      throw new RpcException('user already exists')
  } else {
    return await this.repo.save(registration);
  }
}
 

  async login(emailorMobile: string): Promise<User | PromiseLike<User>> {
  let existsUser = await this.repo.findOne({ where: [{ email: emailorMobile }, { mobile: emailorMobile }] })
  if (!existsUser) {
      throw new RpcException('User Not Found')
  } else {

      return existsUser;
  }
}

 // remove User Created By Override 
  async remove(id: string) :Promise<any> {
  return await this.repo.delete(id); }
 
  
 
 // save User Created By Override 
  async save(req: User) :Promise<User> {
  return await this.repo.save(req)  }
 
  
 
 // end of User sevice
}
