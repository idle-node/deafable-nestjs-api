import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRelationDto } from './dto/create-relation.dto';
import { UpdateRelationDto } from './dto/update-relation.dto';

@Injectable()
export class RelationService {
  constructor(private prisma: PrismaService) {}

  async create(
    createRelationDto: CreateRelationDto,
  ) {
    const relation =
      await this.prisma.relation.create({
        data: {
          ...createRelationDto,
        },
      });
    return relation;
  }

  findAll() {
    return `This action returns all relation`;
  }

  async findOne(id: number) {
    const relation =
      await this.prisma.relation.findFirst({
        where: {
          id,
        },
      });

    const detailTrackSegment =
      this.prisma.trackSegment.findFirst({
        where: {
          id: relation.trackSegmentId,
        },
      });

    const detailRelation = {
      ...relation,
      sourceStationCode: (
        await detailTrackSegment
      ).sourceId,
      destinationStationCode: (
        await detailTrackSegment
      ).destinationId,
    };
    return detailRelation;
  }

  update(
    id: number,
    updateRelationDto: UpdateRelationDto,
  ) {
    return `This action updates a #${id} relation`;
  }

  remove(id: number) {
    return `This action removes a #${id} relation`;
  }
}
