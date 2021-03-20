import { Module } from '@nestjs/common';
import { AuthorizeService } from './authorize.service';
import { AuthorizeController } from './authorize.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports:[
    ClientsModule.register([
      {
        name: 'TRANSACTION_SERVICE', transport: Transport.TCP, options: {
          host: '127.0.0.1',
          port: 8879,
        }
      },
    ]),
  ],
  controllers: [AuthorizeController],
  providers: [AuthorizeService]
})
export class AuthorizeModule {}
