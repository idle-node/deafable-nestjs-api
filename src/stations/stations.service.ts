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

  findAll() {
    return `This action returns all stations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} station`;
  }

  update(
    id: number,
    updateStationDto: UpdateStationDto,
  ) {
    return `This action updates a #${id} station`;
  }

  remove(id: number) {
    return `This action removes a #${id} station`;
  }
}
