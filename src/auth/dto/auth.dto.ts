import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class AuthDto {
  @ApiProperty({
    example: 'test@example.com',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: 'test12',
  })
  @IsString()
  @IsNotEmpty()
  password: string;
}
