import { Module } from '@nestjs/common';
import { AuthorizeService } from './authorize.service';
import { AuthorizeController } from './authorize.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Authorize } from './entities/authorize.entity';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [TypeOrmModule.forFeature([Authorize]),ClientsModule.register([
    {
      name: 'BASIC_DATA_SERVICE', transport: Transport.TCP, options: {
        host: '127.0.0.1',
        port: 8878,
      }
    },
  ]),],
  controllers: [AuthorizeController],
  providers: [AuthorizeService]
})
export class AuthorizeModule { }
