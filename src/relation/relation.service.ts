import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRelationDto } from './dto/create-relation.dto';
import { UpdateRelationDto } from './dto/update-relation.dto';
import rboojakk from '../../prisma/json/routes-boojakk.json';
import { count } from 'console';
import { Tracksegment } from '../tracksegment/entities/tracksegment.entity';
import { relative } from 'path';
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

  async findRoutes(
    sourceStationCode: string,
    destinationStationCode: string,
  ) {
    let countStation = 0;
    let startStation = 0;
    const queryTrackSegment = [];
    const queryRelation = [];

    for (const [key, value] of Object.entries(
      rboojakk[0],
    )) {
      startStation =
        Object.keys(rboojakk[0]).indexOf(
          sourceStationCode,
        ) - 2;
      countStation =
        Object.keys(rboojakk[0]).indexOf(
          destinationStationCode,
        ) - 2;
      // countStation - 2 because rboojakk contain noka and name
    }

    console.log('hmm');

    console.log({
      startStation,
      countStation,
    });

    for (
      let i = startStation;
      i < countStation + 1;
      i++
    ) {
      console.log(
        'total transit should be here ' + i,
      );

      queryTrackSegment.push({
        sourceId: Object.keys(rboojakk[0])[i + 2],
        destinationId: Object.keys(rboojakk[0])[
          i + 3
        ],
      });
    }

    const trackSegment =
      await this.prisma.trackSegment.findMany({
        where: {
          OR: queryTrackSegment,
        },
        include: {
          relation: true,
        },
      });

    for (
      let i = 0;
      i < trackSegment.length;
      i++
    ) {
      queryRelation.push({
        trackSegmentId: trackSegment[i].id,
      });
    }

    const relations =
      await this.prisma.relation.findMany({
        where: {
          OR: queryRelation,
        },
        include: {
          trackSegment: true,
        },
      });
    return trackSegment;
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
