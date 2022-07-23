import { Injectable } from '@nestjs/common';
import * as argon from 'argon2';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthService } from '../auth/auth.service';
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
    const user = await this.prisma.user.findFirst(
      {
        where: {
          id: userId,
        },
      },
    );
    const newHash = await argon.hash(
      dto.password,
    );
    user.hash = newHash;
    const updatedUser =
      await this.prisma.user.update({
        where: {
          id: userId,
        },
        data: {
          ...user,
        },
      });
    delete updatedUser.hash;

    return (
      'reset password with ' +
      JSON.stringify(updatedUser)
    );
  }
}
