import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateStationDto } from './dto/create-station.dto';
import { UpdateStationDto } from './dto/update-station.dto';

@Injectable()
export class StationsService {
  constructor(private prisma: PrismaService) {}

  async create(
    createStationDto: CreateStationDto,
  ) {
    const station =
      await this.prisma.station.create({
        data: {
          ...createStationDto,
        },
      });
    return station;
  }

  async findAll() {
    const stations =
      await this.prisma.station.findMany();
    return stations;
  }

  async findOne(id: number) {
    const station =
      await this.prisma.station.findFirst({
        where: {
          id,
        },
      });
    return station;
  }

  async update(
    id: number,
    updateStationDto: UpdateStationDto,
  ) {
    const station =
      await this.prisma.station.findUnique({
        where: {
          id,
        },
      });

    // TODO later, check if user have permission to update station

    return this.prisma.station.update({
      where: {
        id,
      },
      data: {
        ...updateStationDto,
      },
    });
  }

  remove(id: number) {
    return `This action removes a #${id} station`;
  }
}
