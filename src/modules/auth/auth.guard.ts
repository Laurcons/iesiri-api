import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import AuthService from 'src/modules/auth/auth.service';
import { IS_PUBLIC } from 'src/modules/auth/is-public.decorator';

@Injectable()
export default class AuthGuard implements CanActivate {
  constructor(private authService: AuthService) {}
  private reflector = new Reflector();

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.get<boolean>(
      IS_PUBLIC,
      context.getHandler(),
    );
    if (isPublic) return true;

    const req = context.switchToHttp().getRequest<Request>();

    const authHeader = req.headers['authorization'];
    const token = authHeader.split(' ').pop();

    if (!token) return false;

    const user = await this.authService.verifyToken(token);

    if (!user) return false;

    (req as any).user = user;
    return true;
  }
}
