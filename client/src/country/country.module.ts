import { Module } from '@nestjs/common';
import { CountryService } from './country.service';
import { CountryController } from './country.controller';
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
  controllers: [CountryController],
  providers: [CountryService]
})
export class CountryModule {}
