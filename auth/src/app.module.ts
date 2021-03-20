import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ConfigModule } from '@nestjs/config/dist/config.module';
import { UserModule } from './Modules/user/user.module';

const authModules = [
UserModule

]
@Module({
  imports: [
    ...authModules,
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
