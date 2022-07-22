import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { RelationService } from './relation.service';
import { CreateRelationDto } from './dto/create-relation.dto';
import { UpdateRelationDto } from './dto/update-relation.dto';
import {
  ApiBearerAuth,
  ApiTags,
} from '@nestjs/swagger';
import { JwtGuard } from '../auth/guard';

@ApiTags('relation')
@ApiBearerAuth()
@UseGuards(JwtGuard)
@Controller('relation')
export class RelationController {
  constructor(
    private readonly relationService: RelationService,
  ) {}

  @Post()
  create(
    @Body() createRelationDto: CreateRelationDto,
  ) {
    return this.relationService.create(
      createRelationDto,
    );
  }

  @Get()
  findAll(
    @Query('sourceStationCode')
    sourceStationCode: string,
    @Query('destinationStationCode')
    destinationStationCode: string,
  ) {
    return this.relationService.findAll(
      sourceStationCode,
      destinationStationCode,
    );
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.relationService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateRelationDto: UpdateRelationDto,
  ) {
    return this.relationService.update(
      +id,
      updateRelationDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.relationService.remove(+id);
  }
}
