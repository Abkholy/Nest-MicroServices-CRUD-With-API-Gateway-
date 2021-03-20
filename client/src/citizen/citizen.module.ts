import { Module } from '@nestjs/common';
import { CitizenService } from './citizen.service';
import { CitizenController } from './citizen.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports:[
    ClientsModule.register([
      {
        name: 'BASIC_DATA_SERVICE', transport: Transport.TCP, options: {
          host: '127.0.0.1',
          port: 8878,
        }
      },
    ]),
  ],
  controllers: [CitizenController],
  providers: [CitizenService]
})
export class CitizenModule {}
