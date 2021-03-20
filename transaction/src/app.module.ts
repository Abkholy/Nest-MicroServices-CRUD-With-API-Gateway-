import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorizationTypeModule } from './authorization-type/authorization-type.module';
import { AuthorizationFormModule } from './authorization-form/authorization-form.module';
import { AuthorizeModule } from './authorize/authorize.module';
import { AuthorizeApprovalModule } from './authorize-approval/authorize-approval.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

const transactionModules = [
  AuthorizationTypeModule, AuthorizationFormModule, AuthorizeModule, AuthorizeApprovalModule
  
  ]
  @Module({
    imports: [
      ...transactionModules,
      ConfigModule.forRoot({
        envFilePath: '.env',
      }),
      TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database:process.env.DATABASE_NAME,
        entities: ["dist/**/*.entity{.ts,.js}"],
        synchronize: true,
        autoLoadEntities: true,
        multipleStatements: true,
        logging: false,
        logger: "advanced-console"
      }),
    ]
  })
  export class AppModule {}
  