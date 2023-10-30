import { Module } from "@nestjs/common";
import DeadlineController from "src/modules/deadline/deadline.controller";
import DeadlineService from "src/modules/deadline/deadline.service";

@Module({
  controllers: [DeadlineController],
  providers: [DeadlineService],
  exports: [DeadlineService],
})
export default class DeadlineModule {}