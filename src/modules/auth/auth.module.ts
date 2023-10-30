import { Module } from '@nestjs/common';
import AuthController from 'src/modules/auth/auth.controller';
import AuthService from 'src/modules/auth/auth.service';
import PrismaModule from 'src/modules/prisma/prisma.module';

@Module({
  providers: [AuthService],
  imports: [PrismaModule],
  controllers: [AuthController],
  exports: [AuthService],
})
export default class AuthModule {}
