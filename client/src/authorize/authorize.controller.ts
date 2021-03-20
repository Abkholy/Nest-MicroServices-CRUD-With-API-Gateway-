import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Authorize } from '../authorize-model';
import { AuthorizeService } from './authorize.service';

@ApiTags('Authorize')
@Controller('Authorize')
export class AuthorizeController {

  /* CRUD End Points for Authorize Created By Override */


  constructor(private service: AuthorizeService) { }
  /* POST Authorize End Point */
  @UseGuards(JwtAuthGuard)
  @Post()
  async saveAuthorize(@Body() req: Authorize): Promise<Authorize> {
    return this.service.save(req)
  }


  /* GET All Authorizes End Point */
  @UseGuards(JwtAuthGuard)
  @Get('/all')
  getAllAuthorizes(): Promise<Authorize[]> {
    return this.service.findAll();
  }


  /* GET One Authorize End Point */
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Authorize> {
    return this.service.findOne(id);
  }


  /* PUT  Authorize End Point */
  @UseGuards(JwtAuthGuard)
  @Put(':id')
  updateAuthorize(@Param('id') id: string, @Body() req: Authorize): Promise<any> {
    return this.service.update(id, req);
  }


  /* Delete  Authorize End Point */
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  deleteAuthorize(@Param('id') id: string): Promise<any> {
    return this.service.remove(id)
  }

  /* End of Authorize Controller Class 
   
   */
}