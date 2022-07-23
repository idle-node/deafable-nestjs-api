import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  EditUserDto,
  ResetPasswordDto,
} from './dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  async editUser(
    userId: number,
    dto: EditUserDto,
  ) {
    const user = await this.prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        ...dto,
      },
    });

    delete user.hash;
    return user;
  }

  async resetPassword(
    userId: number,
    dto: ResetPasswordDto,
  ) {
    // async resetPassword(dto: ResetPasswordDto) {
    // const newPassword = this.signToken(
    //   dto.password,
    // );
    return 'reset password with ' + userId;
  }
}
