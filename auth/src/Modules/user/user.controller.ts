import { Body, Controller, Param } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { from } from 'rxjs';
import { User } from './entities/user.entity';
import { UserService } from './user.service';


@Controller()
export class UserController {

  /* CRUD End Points for User Created By Override */
  constructor(private service: UserService) { }
  /* POST User End Point */
  @MessagePattern('User/add')
  async saveUser(req: User): Promise<User> {
    return this.service.save(req)
  }

  @MessagePattern('User/register')
  async register(req: User): Promise<User> {
    return this.service.register(req)
  }
  @MessagePattern('User/findByEmail')
  async findByEmail(email: string): Promise<User> {
    return this.service.findByEmail(email)
  }


  @MessagePattern('User/login')
  async login(emailorMobile: string): Promise<User> {
    return this.service.login(emailorMobile)
  }



  /* GET All Users End Point */
  @MessagePattern('User/getAll')
  async getAllUsers() {
    return await this.service?.findAll();
  }


  /* GET One User End Point */
  @MessagePattern('User/getById')
  findOne(id: string): Promise<User> {
    return this.service.findOne(id);
  }


  /* PUT  User End Point */
  @MessagePattern('User/update')
  updateUser(req: { id: string, body: User }): Promise<any> {
    return this.service.update(req.id, req.body);
  }


  /* Delete  User End Point */
  @MessagePattern('User/delete')
  deleteUser(id: string): Promise<any> {
    return this.service.remove(id)
  }

  /* End of User Controller Class 
   
   */
}