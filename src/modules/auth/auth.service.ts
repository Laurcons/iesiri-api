import { HttpException, Injectable } from '@nestjs/common';
import { Invitee } from '@prisma/client';
import { SignJWT, jwtVerify } from 'jose';
import { Config } from 'src/lib/config';
import PrismaService from 'src/modules/prisma/prisma.service';

@Injectable()
export default class AuthService {
  constructor(private prisma: PrismaService) {}

  async authWithCode(code: string) {
    const invitee = await this.prisma.invitee.findUnique({
      where: {
        urlCode: code,
      },
    });
    if (!invitee) throw new HttpException('Invalid code', 422);
    const token = await new SignJWT({ id: invitee.id })
      .setProtectedHeader({ alg: 'HS256' })
      .setExpirationTime('1h')
      .sign(Config.jwt.secret);
    return {
      invitee,
      token,
    };
  }

  async verifyToken(token: string) {
    const result = await jwtVerify(token, Config.jwt.secret);
    const id = result.payload.id as number;
    return await this.prisma.invitee.findUniqueOrThrow({ where: { id } });
  }
}
