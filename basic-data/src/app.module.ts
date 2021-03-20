import { Module } from '@nestjs/common';
import { CountryModule } from './country/country.module';
import { CityModule } from './city/city.module';
import { DistrictModule } from './district/district.module';
import { CitizenModule } from './citizen/citizen.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';


const basicDataModules = [
  CountryModule, CityModule, DistrictModule, CitizenModule
  
  ]
  @Module({
    imports: [
      ...basicDataModules,
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
