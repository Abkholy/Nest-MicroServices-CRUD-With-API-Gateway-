import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Citizen } from '../model.dto';
import { CitizenService } from './citizen.service';

@ApiTags('Citizen')
@Controller('Citizen')
export class CitizenController {

  /* CRUD End Points for Citizen Created By Override */


  constructor(private service: CitizenService) { }
  /* POST Citizen End Point */
  @UseGuards(JwtAuthGuard)
  @Post()
  async saveCitizen(@Body() req: Citizen): Promise<Citizen> {
    return this.service.save(req)
  }


  /* GET All Citizens End Point */
  @UseGuards(JwtAuthGuard)
  @Get('/all')
  getAllCitizens(): Promise<Citizen[]> {
    return this.service.findAll();
  }


  /* GET One Citizen End Point */
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Citizen> {
    return this.service.findOne(id);
  }


  /* PUT  Citizen End Point */
  @UseGuards(JwtAuthGuard)
  @Put(':id')
  updateCitizen(@Param('id') id: string, @Body() req: Citizen): Promise<any> {
    return this.service.update(id, req);
  }


  /* Delete  Citizen End Point */
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  deleteCitizen(@Param('id') id: string): Promise<any> {
    return this.service.remove(id)
  }

  /* End of Citizen Controller Class 
   
   */
}