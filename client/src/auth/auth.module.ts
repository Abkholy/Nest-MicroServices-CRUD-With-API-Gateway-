import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';

@Module({
  imports:[
    PassportModule.register({ defaultStrategy:'jwt', session: true }),
    JwtModule.register({
        secret: jwtConstants.secret,
        signOptions: { expiresIn: '1y'  },
    }),
    ClientsModule.register([
      { name: 'AUTH_SERVICE', transport: Transport.TCP, options: {
          host: '127.0.0.1',
          port: 8877,
        } },
    ]),
  ],
  controllers: [AuthController],
  providers: [AuthService,LocalStrategy,JwtStrategy]
})
export class AuthModule {}
