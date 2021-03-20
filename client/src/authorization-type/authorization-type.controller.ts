import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AuthorizationType } from '../model.dto';
import { AuthorizationTypeService } from './authorization-type.service';

@ApiTags('AuthorizationType')
@Controller('AuthorizationType')
export class AuthorizationTypeController {

  /* CRUD End Points for AuthorizationType Created By Override */


  constructor(private service: AuthorizationTypeService) { }
  /* POST AuthorizationType End Point */
  @UseGuards(JwtAuthGuard)
  @Post()
  async saveAuthorizationType(@Body() req: AuthorizationType): Promise<AuthorizationType> {
    return this.service.save(req)
  }


  /* GET All AuthorizationTypes End Point */
  @UseGuards(JwtAuthGuard)
  @Get('/all')
  getAllAuthorizationTypes(): Promise<AuthorizationType[]> {
    return this.service.findAll();
  }


  /* GET One AuthorizationType End Point */
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string): Promise<AuthorizationType> {
    return this.service.findOne(id);
  }


  /* PUT  AuthorizationType End Point */
  @UseGuards(JwtAuthGuard)
  @Put(':id')
  updateAuthorizationType(@Param('id') id: string, @Body() req: AuthorizationType): Promise<any> {
    return this.service.update(id, req);
  }


  /* Delete  AuthorizationType End Point */
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  deleteAuthorizationType(@Param('id') id: string): Promise<any> {
    return this.service.remove(id)
  }

  /* End of AuthorizationType Controller Class 
   
   */
}