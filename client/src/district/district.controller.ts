import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { District } from '../model.dto';
import { DistrictService } from './district.service';


@ApiTags('District')
@Controller('District')
export class DistrictController {

  /* CRUD End Points for District Created By Override */


  constructor(private service: DistrictService) { }
  /* POST District End Point */
  @UseGuards(JwtAuthGuard)
  @Post()
  async saveDistrict(@Body() req: District): Promise<District> {
    return this.service.save(req)
  }


  /* GET All Districts End Point */
  @UseGuards(JwtAuthGuard)
  @Get('/all')
  getAllDistricts(): Promise<District[]> {
    return this.service.findAll();
  }


  /* GET One District End Point */
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string): Promise<District> {
    return this.service.findOne(id);
  }


  /* PUT  District End Point */
  @UseGuards(JwtAuthGuard)
  @Put(':id')
  updateDistrict(@Param('id') id: string, @Body() req: District): Promise<any> {
    return this.service.update(id, req);
  }


  /* Delete  District End Point */
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  deleteDistrict(@Param('id') id: string): Promise<any> {
    return this.service.remove(id)
  }

  /* End of District Controller Class 
   
   */
}