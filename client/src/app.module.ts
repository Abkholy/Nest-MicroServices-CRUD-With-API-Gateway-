import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { PugAdapter } from '@nestjs-modules/mailer/dist/adapters/pug.adapter';
import { CountryModule } from './country/country.module';
import { CityModule } from './city/city.module';
import { DistrictModule } from './district/district.module';
import { CitizenModule } from './citizen/citizen.module';
import { AuthorizationTypeModule } from './authorization-type/authorization-type.module';
import { AuthorizationFormModule } from './authorization-form/authorization-form.module';
import { AuthorizeModule } from './authorize/authorize.module';
import { AuthorizeApprovalModule } from './authorize-approval/authorize-approval.module';

const  routesModules = [
  UserModule,
  AuthModule,
  CountryModule,
  CityModule,
  DistrictModule,
  CitizenModule,
    AuthorizationFormModule,
    AuthorizeModule,
    AuthorizeApprovalModule
]
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal:true
    }),
    
    MailerModule.forRootAsync({
      useFactory: () => ({
        transport: 'smtps://beautydozapp@gmail.com:B123123b@smtp.gmail.com',
        defaults: {
          from: '"Modern Academy" <beautydozapp@gmail.com>',
        },
        template: {
          dir: __dirname + '/templates',
          adapter: new PugAdapter(),
          options: {
            strict: true,
          },
        },
      }),
    }),
    ...routesModules,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
