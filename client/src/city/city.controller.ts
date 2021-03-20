import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { City } from '../model.dto';
import { CityService } from './city.service';

@ApiTags('City')
@Controller('City')
export class CityController { 

/* CRUD End Points for City Created By Override */


constructor(private service:  CityService) 
 { }
/* POST City End Point */
@UseGuards(JwtAuthGuard) 
 @Post() 
 async saveCity(@Body() req: City) :Promise<City> {
return this.service.save(req) 
 } 
 
 
/* GET All Citys End Point */
@UseGuards(JwtAuthGuard) 
 @Get('/all') 
 getAllCitys() :Promise<City[]> {
return this.service.findAll(); 
 } 
 

/* GET One City End Point */
@UseGuards(JwtAuthGuard) 
 @Get(':id') 
 findOne(@Param('id') id: string) :Promise<City> {
return this.service.findOne(id); 
 } 
  
 
/* PUT  City End Point */
@UseGuards(JwtAuthGuard) 
 @Put(':id') 
 updateCity(@Param('id') id: string, @Body() req: City)  :Promise<any>{
 return this.service.update(id, req);
 } 
 

/* Delete  City End Point */
@UseGuards(JwtAuthGuard) 
 @Delete(':id') 
 deleteCity(@Param('id') id: string) :Promise<any>{
return this.service.remove(id) 
 } 
 
/* End of City Controller Class 
 
 */
}