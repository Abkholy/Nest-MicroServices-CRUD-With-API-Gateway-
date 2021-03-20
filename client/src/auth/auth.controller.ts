import { Body, Controller, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiTags, ApiHeader, ApiResponse } from '@nestjs/swagger';
import { User } from '../model.dto';
import { AuthService } from './auth.service';
import { AuthDTO } from './authDTO';
import { AuthEndPointGuard } from './authendpoint.guard';
import { JwtAuthGuard } from './jwt-auth.guard';
import { refreshToken } from './refreshTokenDTO';


@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @ApiHeader({ name: 'authrization', description: 'Login Access Token' })
    @UseGuards(AuthEndPointGuard)
    @Post('/login')
    async login(@Body() body: AuthDTO) {
        return this.authService.login(body);
    }


    @UseGuards(AuthEndPointGuard)
    @Post('/register')
    async register(@Body() user: User) {
        return this.authService.register(user)
    }


}
