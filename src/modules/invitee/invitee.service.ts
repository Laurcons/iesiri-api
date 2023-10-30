import { Injectable } from '@nestjs/common';
import { PresenceStatus } from '@prisma/client';
import PatchMeDto from 'src/modules/invitee/dtos/patch-me.dto';
import PrismaService from 'src/modules/prisma/prisma.service';

@Injectable()
export default class InviteeService {
  constructor(private prisma: PrismaService) {}

  async patchMe(id: number, data: PatchMeDto) {
    return await this.prisma.invitee.update({
      where: { id },
      data,
    });
  }

  async getConfirmedCount() {
    return await this.prisma.invitee.count({
      where: {
        presenceStatus: PresenceStatus.confirmed,
      },
    });
  }
}
