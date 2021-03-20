import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { User } from '../../model.dto';
import { APIURLS } from '../../../shared/Api-urls';
@Injectable()
export class UserService {


    constructor(
        @Inject('AUTH_SERVICE') private client: ClientProxy,
    ) {

    }

    async onApplicationBootstrap() {
        await this.client.connect();
    }

    // findAll Users Created By Override 
    async findAll() {
        return await this.client.send<any>(APIURLS.Auth.User.getAll, []).toPromise();

    }
    async save(req: User): Promise<User | PromiseLike<User>> {
        return await this.client.send<User>(APIURLS.Auth.User.Add, req).toPromise()
    }


    // findOne User Created By Override 
    async findOne(id: string): Promise<User> {
        return await this.client.send<User>(APIURLS.Auth.User.getById, id).toPromise()
    }



    // update User Created By Override 
    async update(id: string, req: User): Promise<User> {
        return await this.client.send<User>(APIURLS.Auth.User.update, { id: id, body: req }).toPromise()

    }



    // remove User Created By Override 
    async remove(id: string): Promise<any> {
        return await this.client.send<User>(APIURLS.Auth.User.Delete, id).toPromise()
    }

    // end of User sevice
}
