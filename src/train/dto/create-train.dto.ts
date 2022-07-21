import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class CreateTrainDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  noka: string;
}
