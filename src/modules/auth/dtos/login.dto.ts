import { IsString } from 'class-validator';

export default class LoginDto {
  @IsString()
  urlCode: string;
}
