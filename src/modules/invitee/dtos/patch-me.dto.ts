import { PresenceStatus } from '@prisma/client';
import { IsEnum, IsOptional, IsString } from 'class-validator';

export default class PatchMeDto {
  @IsEnum(PresenceStatus)
  @IsOptional()
  presenceStatus: PresenceStatus;

  @IsString()
  @IsOptional()
  pizzaPreference: string;

  @IsString()
  @IsOptional()
  favoriteSong: string;
}
