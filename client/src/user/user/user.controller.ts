import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { User } from '../../model.dto';
import { UserService } from './user.service';

@ApiTags('User')
@Controller('User')
export class UserController { 

/* CRUD End Points for User Created By Override */


constructor(private service:  UserService) 
 { }
/* POST User End Point */
 
@UseGuards(JwtAuthGuard)
 @Post() 
 async saveUser(@Body() req: User) :Promise<User> {
return this.service.save(req) 
 } 
 
 
/* GET All Users End Point */
 
@UseGuards(JwtAuthGuard)
 @Get('/all') 
 getAllUsers() :Promise<User[]> {
return this.service.findAll(); 
 } 
 

// /* GET One User End Point */
 
@UseGuards(JwtAuthGuard)
 @Get(':id') 
 findOne(@Param('id') id: string) :Promise<User> {
return this.service.findOne(id); 
 } 
  
 
// /* PUT  User End Point */
 
@UseGuards(JwtAuthGuard)
 @Put(':id') 
 updateUser(@Param('id') id: string, @Body() req: User)  :Promise<any>{
 return this.service.update(id, req);
 } 
 

// /* Delete  User End Point */
 
@UseGuards(JwtAuthGuard)
 @Delete(':id') 
 deleteUser(@Param('id') id: string) :Promise<any>{
return this.service.remove(id) 
 } 
 
/* End of User Controller Class 
 
 */
}