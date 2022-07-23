import {
  Body,
  Controller,
  Get,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiTags,
} from '@nestjs/swagger';
import { User } from '@prisma/client';
import { GetUser } from 'src/auth/decorator/get-user.decorator';
import { JwtGuard } from 'src/auth/guard';
import {
  EditUserDto,
  ResetPasswordDto,
} from './dto';
import { UserService } from './user.service';

@ApiTags('users')
@UseGuards(JwtGuard)
@ApiBearerAuth()
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('me')
  getMe(@GetUser() user: User) {
    return user;
  }

  @Patch()
  editUser(
    @GetUser('id') userId: number,
    @Body() dto: EditUserDto,
  ) {
    return this.userService.editUser(userId, dto);
  }

  // TODO, confuse how to make this and forget password
  @Post('resetpassword')
  resetpassword(
    @GetUser('id') userId: number,
    @Body() dto: ResetPasswordDto,
  ) {
    return this.userService.resetPassword(
      userId,
      dto,
    );
  }
}
