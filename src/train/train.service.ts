import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTrainDto } from './dto/create-train.dto';
import { UpdateTrainDto } from './dto/update-train.dto';

@Injectable()
export class TrainService {
  constructor(private prisma: PrismaService) {}

  async create(createTrainDto: CreateTrainDto) {
    const train = await this.prisma.train.create({
      data: {
        ...createTrainDto,
      },
    });
    return train;
  }

  findAll() {
    return `This action returns all train`;
  }

  findOne(id: number) {
    return `This action returns a #${id} train`;
  }

  update(
    id: number,
    updateTrainDto: UpdateTrainDto,
  ) {
    return `This action updates a #${id} train`;
  }

  remove(id: number) {
    return `This action removes a #${id} train`;
  }
}
