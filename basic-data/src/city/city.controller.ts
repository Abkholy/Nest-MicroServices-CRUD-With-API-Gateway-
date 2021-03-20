import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CityService } from './city.service';

import { City } from './entities/city.entity';
@Controller()
export class CityController {

  /* CRUD End Points for City Created By Override */


  constructor(private service: CityService) { }
  /* POST City End Point */

  @MessagePattern('City/add')
  async saveCity(req: City): Promise<City> {
    return this.service.save(req)
  }


  /* GET All Citys End Point */

  @MessagePattern('City/getAll')
  getAllCitys(): Promise<City[]> {
    return this.service.findAll();
  }


  /* GET One City End Point */

  @MessagePattern('City/getById')
  findOne(id: string): Promise<City> {
    return this.service.findOne(id);
  }


  /* PUT  City End Point */

  @MessagePattern('City/update')
  updateCity(req: { id: string, body: City }): Promise<any> {
    return this.service.update(req.id, req.body);
  }


  /* Delete  City End Point */

  @MessagePattern('City/delete')
  deleteCity(id: string): Promise<any> {
    return this.service.remove(id)
  }

  /* End of City Controller Class 
   
   */
}