import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Country } from '../model.dto';
import { CountryService } from './country.service';

@ApiTags('Country')
@Controller('Country')
export class CountryController { 

/* CRUD End Points for Country Created By Override */


constructor(private service:  CountryService) 
 { }
/* POST Country End Point */
@UseGuards(JwtAuthGuard) 
 @Post() 
 async saveCountry(@Body() req: Country) :Promise<Country> {
return this.service.save(req) 
 } 
 
 
/* GET All Countrys End Point */
@UseGuards(JwtAuthGuard) 
 @Get('/all') 
 getAllCountrys() :Promise<Country[]> {
return this.service.findAll(); 
 } 
 

/* GET One Country End Point */
@UseGuards(JwtAuthGuard) 
 @Get(':id') 
 findOne(@Param('id') id: string) :Promise<Country> {
return this.service.findOne(id); 
 } 
  
 
/* PUT  Country End Point */
@UseGuards(JwtAuthGuard) 
 @Put(':id') 
 updateCountry(@Param('id') id: string, @Body() req: Country)  :Promise<any>{
 return this.service.update(id, req);
 } 
 

/* Delete  Country End Point */
@UseGuards(JwtAuthGuard) 
 @Delete(':id') 
 deleteCountry(@Param('id') id: string) :Promise<any>{
return this.service.remove(id) 
 } 
 
/* End of Country Controller Class 
 
 */
}