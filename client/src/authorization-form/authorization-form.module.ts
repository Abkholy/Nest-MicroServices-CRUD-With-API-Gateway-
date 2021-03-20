import { Module } from '@nestjs/common';
import { AuthorizationFormService } from './authorization-form.service';
import { AuthorizationFormController } from './authorization-form.controller';
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
  controllers: [AuthorizationFormController],
  providers: [AuthorizationFormService]
})
export class AuthorizationFormModule {}
