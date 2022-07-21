import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  @ApiResponse({
    description:
      'access_token can be used using Bearer in Authorization header',
  })
  signup(@Body() dto: AuthDto) {
    return this.authService.signup(dto);
  }

  @Post('signin')
  @ApiResponse({
    description:
      'access_token can be used using Bearer in Authorization header',
  })
  @HttpCode(HttpStatus.OK)
  signin(@Body() dto: AuthDto) {
    return this.authService.signin(dto);
  }
}
