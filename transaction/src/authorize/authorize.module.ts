import { Module } from '@nestjs/common';
import { AuthorizeService } from './authorize.service';
import { AuthorizeController } from './authorize.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Authorize } from './entities/authorize.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Authorize])],
  controllers: [AuthorizeController],
  providers: [AuthorizeService]
})
export class AuthorizeModule { }
