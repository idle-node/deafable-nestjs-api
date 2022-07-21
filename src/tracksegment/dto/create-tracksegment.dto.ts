import { ApiProperty } from '@nestjs/swagger';
import { Station } from '@prisma/client';
import {
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class CreateTracksegmentDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  destinationId: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  sourceId: string;
}
