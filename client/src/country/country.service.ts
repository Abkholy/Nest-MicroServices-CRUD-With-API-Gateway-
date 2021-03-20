import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { APIURLS } from '../../shared/Api-urls';
import { Country } from '../model.dto';

@Injectable()
export class CountryService {


    // CRUD Entity for Country Created By Override 
    constructor(@Inject('BASIC_DATA_SERVICE') private client: ClientProxy,) {
    }



    async onApplicationBootstrap() {

        await this.client.connect();

    }
    // findAll Countrys Created By Override 
    async findAll(): Promise<Country[]> {
        return await this.client.send<any>(APIURLS.BasicData.Country.getAll, []).toPromise()
    }



    // findOne Country Created By Override 
    async findOne(id: string): Promise<Country> {
        return await this.client.send<Country>(APIURLS.BasicData.Country.getById, id).toPromise()
    }



    // update Country Created By Override 
    async update(id: string, req: Country): Promise<Country> {
        return await this.client.send<Country>(APIURLS.BasicData.Country.update, { id: id, body: req }).toPromise()
    }



    // remove Country Created By Override 
    async remove(id: string): Promise<any> {
        return await this.client.send<Country>(APIURLS.BasicData.Country.Delete, id).toPromise()
    }



    // save Country Created By Override 
    async save(req: Country): Promise<Country> {
        return await this.client.send<Country>(APIURLS.BasicData.Country.Add, req).toPromise()
    }



    // end of Country sevice
}
