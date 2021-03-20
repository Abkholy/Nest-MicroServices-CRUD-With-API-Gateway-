import { Module } from '@nestjs/common';
import { AuthorizationFormService } from './authorization-form.service';
import { AuthorizationFormController } from './authorization-form.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorizationForm } from './entities/authorization-form.entity';

@Module({
  imports:[TypeOrmModule.forFeature([AuthorizationForm])],
  controllers: [AuthorizationFormController],
  providers: [AuthorizationFormService]
})
export class AuthorizationFormModule {}
