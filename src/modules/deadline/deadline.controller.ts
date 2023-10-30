import { Controller, Get } from "@nestjs/common";
import DeadlineService from "src/modules/deadline/deadline.service";

@Controller('deadline')
export default class DeadlineController {
  constructor(private deadlineService: DeadlineService) {}

  @Get('/')
  get() {
    return {
      deadline: this.deadlineService.get().toDate(),
    };
  }
}