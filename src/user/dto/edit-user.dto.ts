import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsOptional,
  IsString,
} from 'class-validator';

export class EditUserDto {
  // User not allowed to change email
  // @ApiProperty({
  //   required: false,
  // })
  // @IsEmail()
  // @IsOptional()
  // email?: string;

  @ApiProperty({
    required: false,
    example: 'Joko',
  })
  @IsString()
  @IsOptional()
  firstName?: string;

  @ApiProperty({
    required: false,
    example: 'Anwar',
  })
  @IsString()
  @IsOptional()
  lastName?: string;
}
