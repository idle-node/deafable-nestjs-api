import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTracksegmentDto } from './dto/create-tracksegment.dto';
import { UpdateTracksegmentDto } from './dto/update-tracksegment.dto';

@Injectable()
export class TracksegmentService {
  constructor(private prisma: PrismaService) {}

  async create(
    createTracksegmentDto: CreateTracksegmentDto,
  ) {
    const tracksegment =
      await this.prisma.trackSegment.create({
        data: {
          ...createTracksegmentDto,
        },
      });
    return tracksegment;
  }

  findAll() {
    return `This action returns all tracksegment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tracksegment`;
  }

  update(
    id: number,
    updateTracksegmentDto: UpdateTracksegmentDto,
  ) {
    return `This action updates a #${id} tracksegment`;
  }

  remove(id: number) {
    return `This action removes a #${id} tracksegment`;
  }
}
