import { Injectable } from "@nestjs/common";
import dayjs from "dayjs";

@Injectable()
export default class DeadlineService {
  deadline = dayjs('2023-06-25T23:59:00+03:00');
  // deadline = dayjs('2022-01-01');
  constructor() {}

  get() {
    return this.deadline;
  }

  isPast() {
    return dayjs().isAfter(this.deadline);
  }
}