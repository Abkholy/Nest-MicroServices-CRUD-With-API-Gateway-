import { Module } from '@nestjs/common';
import { AuthorizationTypeService } from './authorization-type.service';
import { AuthorizationTypeController } from './authorization-type.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'TRANSACTION_SERVICE', transport: Transport.TCP, options: {
          host: '127.0.0.1',
          port: 8879,
        }
      },
    ]),
  ],
  controllers: [AuthorizationTypeController],
  providers: [AuthorizationTypeService]
})
export class AuthorizationTypeModule { }
