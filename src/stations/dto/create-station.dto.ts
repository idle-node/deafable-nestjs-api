import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class CreateStationDto {
  @ApiProperty({
    example: 'glenmore',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'GLM',
  })
  @IsString()
  @IsNotEmpty()
  code: string;
}
