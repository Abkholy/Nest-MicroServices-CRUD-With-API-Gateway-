import { Module } from '@nestjs/common';
import { DistrictService } from './district.service';
import { DistrictController } from './district.controller';
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
  controllers: [DistrictController],
  providers: [DistrictService]
})
export class DistrictModule {}
