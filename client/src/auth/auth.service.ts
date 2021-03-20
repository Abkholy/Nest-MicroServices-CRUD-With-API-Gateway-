import { Inject, Injectable, InternalServerErrorException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ClientProxy } from '@nestjs/microservices';
import { User } from '../model.dto';
import { AuthDTO } from './authDTO';
import { MailerService } from '@nestjs-modules/mailer';
import { jwtConstants } from './constants';
import { APIURLS } from '../../shared/Api-urls';

var CryptoJS = require("crypto-js");

@Injectable()
export class AuthService {

    

    constructor(
        @Inject('AUTH_SERVICE') private client: ClientProxy,
        private jwtService: JwtService,
        private readonly mailerService: MailerService
    ) {}

    async onApplicationBootstrap() {
        await this.client.connect();
    }

  async validateUser(email: string, password: string) {
    const user =  await this.client.send<User>(APIURLS.Auth.User.register,email).toPromise()

    var bytes = CryptoJS.AES.decrypt(user.password, jwtConstants.secret);
    var storedDecryptedPassword = bytes.toString(CryptoJS.enc.Utf8);

    if (user && user.password === storedDecryptedPassword) {
        const { password, ...result } = user;
        return result;
        }
    else 
    return false;
  }


  async register(registration: User) {
    let createdUser: User;
    try {
      var ciphertext = CryptoJS.AES.encrypt(registration.password, jwtConstants.secret).toString();
      registration.password = ciphertext

      createdUser =await this.client.send<User>(APIURLS.Auth.User.register,registration).toPromise()
    } catch (error) {
    console.log(error);
            
      throw new InternalServerErrorException(error.message, error.code);
    }
    const payload = { email: createdUser.email, userType: createdUser.userType, id: createdUser.id };
    return { token: this.jwtService.sign(payload), user: createdUser };
}

    async login(user: AuthDTO) {
    let userStored =  await this.client.send<User>(APIURLS.Auth.User.login,user.email).toPromise()

    if (!userStored)
      throw new NotFoundException('User Not Found')

    if (!userStored.isActive)
      throw new UnauthorizedException('Please Verify Your Account')

    var bytes = CryptoJS.AES.decrypt(userStored.password, jwtConstants.secret);
    var storedDecryptedPassword = bytes.toString(CryptoJS.enc.Utf8);

    if (user.password !== storedDecryptedPassword) {
      throw new UnauthorizedException('invalid password')
    }
    // var bytes  = );


    const payload = { email: user.email, userType: userStored.userType, id: userStored.id };
    return { token: this.jwtService.sign(payload), user: userStored };
    
}
}
