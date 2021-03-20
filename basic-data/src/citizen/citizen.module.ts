import { Module } from '@nestjs/common';
import { CitizenService } from './citizen.service';
import { CitizenController } from './citizen.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Citizen } from './entities/citizen.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Citizen])],
  controllers: [CitizenController],
  providers: [CitizenService]
})
export class CitizenModule {}
