import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { APIURLS } from '../../shared/Api-urls';
import { AuthorizationType } from '../model.dto';

@Injectable()
export class AuthorizationTypeService {


    // CRUD Entity for AuthorizationType Created By Override 
    constructor(@Inject('TRANSACTION_SERVICE') private client: ClientProxy,) {
    }



    async onApplicationBootstrap() {

        await this.client.connect();

    }
    // findAll AuthorizationTypes Created By Override 
    async findAll(): Promise<AuthorizationType[]> {
        return await this.client.send<any>(APIURLS.Transaction.AuthorizationType.getAll, []).toPromise()
    }



    // findOne AuthorizationType Created By Override 
    async findOne(id: string): Promise<AuthorizationType> {
        return await this.client.send<AuthorizationType>(APIURLS.Transaction.AuthorizationType.getById, id).toPromise()
    }



    // update AuthorizationType Created By Override 
    async update(id: string, req: AuthorizationType): Promise<AuthorizationType> {
        return await this.client.send<AuthorizationType>(APIURLS.Transaction.AuthorizationType.update, { id: id, body: req }).toPromise()
    }



    // remove AuthorizationType Created By Override 
    async remove(id: string): Promise<any> {
        return await this.client.send<AuthorizationType>(APIURLS.Transaction.AuthorizationType.Delete, id).toPromise()
    }



    // save AuthorizationType Created By Override 
    async save(req: AuthorizationType): Promise<AuthorizationType> {
        return await this.client.send<AuthorizationType>(APIURLS.Transaction.AuthorizationType.Add, req).toPromise()
    }



    // end of AuthorizationType sevice
}
