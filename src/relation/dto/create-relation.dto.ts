import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateRelationDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  time: string;

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  nokaId: string;

  @IsNotEmpty()
  @ApiProperty()
  @IsNumber()
  trackSegmentId: number;

  //   @IsNotEmpty()
  //   @ApiProperty()
  //   @IsString()
  //   sourceId: number;

  //   @IsNotEmpty()
  //   @ApiProperty()
  //   @IsString()
  //   destinationId: number;
}
