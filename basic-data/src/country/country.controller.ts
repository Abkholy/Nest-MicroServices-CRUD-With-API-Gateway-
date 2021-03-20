import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CountryService } from './country.service';
import { Country } from './entities/country.entity';

@Controller()
export class CountryController {

  /* CRUD End Points for Country Created By Override */


  constructor(private service: CountryService) { }
  /* POST Country End Point */

  @MessagePattern('Country/add')
  async saveCountry(req: Country): Promise<Country> {
    return this.service.save(req)
  }


  /* GET All Countrys End Point */

  @MessagePattern('Country/getAll')
  getAllCountrys(): Promise<Country[]> {
    return this.service.findAll();
  }


  /* GET One Country End Point */

  @MessagePattern('Country/getById')
  findOne(id: string): Promise<Country> {
    return this.service.findOne(id);
  }


  /* PUT  Country End Point */

  @MessagePattern('Country/update')
  updateCountry(req: { id: string, body: Country }): Promise<any> {
    return this.service.update(req.id, req.body);
  }


  /* Delete  Country End Point */

  @MessagePattern('Country/delete')
  deleteCountry(id: string): Promise<any> {
    return this.service.remove(id)
  }

  /* End of Country Controller Class 
   
   */
}