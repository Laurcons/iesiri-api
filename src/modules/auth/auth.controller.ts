import { Body, Controller, Post } from '@nestjs/common';
import AuthService from 'src/modules/auth/auth.service';
import LoginDto from 'src/modules/auth/dtos/login.dto';
import IsPublic from 'src/modules/auth/is-public.decorator';

@Controller('/auth')
export default class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  @IsPublic()
  async login(@Body() body: LoginDto) {
    return await this.authService.authWithCode(body.urlCode);
  }
}
