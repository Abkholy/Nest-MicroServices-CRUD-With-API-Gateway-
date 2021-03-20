import { Module } from '@nestjs/common';
import { AuthorizationTypeService } from './authorization-type.service';
import { AuthorizationTypeController } from './authorization-type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorizationType } from './entities/authorization-type.entity';

@Module({
  imports:[TypeOrmModule.forFeature([AuthorizationType])],
  controllers: [AuthorizationTypeController],
  providers: [AuthorizationTypeService]
})
export class AuthorizationTypeModule {}
