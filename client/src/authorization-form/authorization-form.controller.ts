import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AuthorizationForm } from '../model.dto';
import { AuthorizationFormService } from './authorization-form.service';


@ApiTags('AuthorizationForm')
@Controller('AuthorizationForm')
export class AuthorizationFormController {

  /* CRUD End Points for AuthorizationForm Created By Override */


  constructor(private service: AuthorizationFormService) { }
  /* POST AuthorizationForm End Point */
  @UseGuards(JwtAuthGuard)
  @Post()
  async saveAuthorizationForm(@Body() req: AuthorizationForm): Promise<AuthorizationForm> {
    return this.service.save(req)
  }


  /* GET All AuthorizationForms End Point */
  @UseGuards(JwtAuthGuard)
  @Get('/all')
  getAllAuthorizationForms(): Promise<AuthorizationForm[]> {
    return this.service.findAll();
  }


  /* GET One AuthorizationForm End Point */
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string): Promise<AuthorizationForm> {
    return this.service.findOne(id);
  }


  /* PUT  AuthorizationForm End Point */
  @UseGuards(JwtAuthGuard)
  @Put(':id')
  updateAuthorizationForm(@Param('id') id: string, @Body() req: AuthorizationForm): Promise<any> {
    return this.service.update(id, req);
  }


  /* Delete  AuthorizationForm End Point */
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  deleteAuthorizationForm(@Param('id') id: string): Promise<any> {
    return this.service.remove(id)
  }

  /* End of AuthorizationForm Controller Class 
   
   */
}