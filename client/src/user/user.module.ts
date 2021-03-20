import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';

@Module({
  imports: [

    ClientsModule.register([
      {
        name: 'AUTH_SERVICE', transport: Transport.TCP, options: {
          host: '127.0.0.1',
          port: 8877,
        }
      },
    ]),
  ],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule { }
