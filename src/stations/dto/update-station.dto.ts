// import { PartialType } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
} from 'class-validator';
import { CreateStationDto } from './create-station.dto';

export class UpdateStationDto {
  @ApiProperty({
    example: 'Rogojampi',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'RGJ',
  })
  @IsString()
  @IsNotEmpty()
  code: string;
}
