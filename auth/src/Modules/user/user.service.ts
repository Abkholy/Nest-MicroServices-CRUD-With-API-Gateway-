import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository, Repository } from 'typeorm';
import { Citizen } from '../../models';
import { User, UserType } from './entities/user.entity';

@Injectable()
export class UserService {
 
 
 
 // CRUD Entity for User Created By Override 
 constructor(@Inject('BASIC_DATA_SERVICE') private client: ClientProxy)  { 
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

  async onApplicationBootstrap() {
    await this.client.connect();
}
  
 
 // update User Created By Override 
  async update(id: string, req: User) :Promise<User> {
  const existUser = await this.repo.findOne(id);
 this.repo.merge(existUser,req);
 return await this.repo.save(existUser) ;
 }
 
 async register(registration: User): Promise<User | PromiseLike<User>> {
  let existsUser = await this.repo.findOne({ where: [{ email: registration.email }, { mobile: registration.mobile },{ssn: registration.ssn}] })
  if (existsUser != null) {
      throw new RpcException('user already exists')
  } else {

    
    if (registration.userType === 'citizen'){
      let citizen =  await this.client.send<Citizen>('Citizen/getBySSN', registration.ssn).toPromise()
      
      if (! citizen )
      throw new RpcException('Please use a correct SSN')

      else {
        if (citizen.motherName.toLowerCase() !== registration.motherName.toLowerCase()){
          throw new RpcException('Incorrect Data')

        }

        if (citizen.mobile !== registration.mobile){
          throw new RpcException('Incorrect Data')
        }

      }
    }
      
    

    
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
