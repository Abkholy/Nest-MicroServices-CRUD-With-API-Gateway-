
import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthGuard } from '@nestjs/passport';
import { jwtConstants } from './constants';

@Injectable()
export class AuthEndPointGuard extends AuthGuard('authEndPoint') implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return this.validateRequest(request);
  }
  validateRequest(req: Request): boolean {

    let token
    let authHeader = req.headers['authorization'] as string;
    if (authHeader) {
      token = authHeader.substr(7);
    }
    else
      throw new UnauthorizedException('You Are Can Not Login Auth Token is Required');
    if (!authHeader.startsWith('Bearer')) {
      throw new UnauthorizedException('You Are Can Not Login Must a Bearer Token');
    } else if (token != jwtConstants.authToken) {
      throw new UnauthorizedException('You Are Can Not Login Auth is Invalid');
    } else {
      return true;
    }
  }
}
