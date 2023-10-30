import { Body, Controller, Get, HttpException, Patch } from '@nestjs/common';
import { Invitee } from '@prisma/client';
import { ReqUser } from 'src/modules/auth/req-user.decorator';
import DeadlineService from 'src/modules/deadline/deadline.service';
import PatchMeDto from 'src/modules/invitee/dtos/patch-me.dto';
import InviteeService from 'src/modules/invitee/invitee.service';

@Controller('/invitee')
export default class InviteeController {
  constructor(private inviteeService: InviteeService, private deadlineService: DeadlineService) {}

  @Get('/me')
  async getMe(@ReqUser() user: Invitee) {
    return user;
  }

  @Get('/stats')
  async getStats(@ReqUser() user: Invitee) {
    return {
      confirmedCount: await this.inviteeService.getConfirmedCount(),
    };
  }

  @Patch('/me')
  async patchMe(@ReqUser() user: Invitee, @Body() body: PatchMeDto) {
    if (this.deadlineService.isPast()) {
      throw new HttpException('Nu se pot modifica preferințele după deadline (te joci cu API-ul?)', 422);
    }
    return await this.inviteeService.patchMe(user.id, body);
  }
}
