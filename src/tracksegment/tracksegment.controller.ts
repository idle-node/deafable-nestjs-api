import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { TracksegmentService } from './tracksegment.service';
import { CreateTracksegmentDto } from './dto/create-tracksegment.dto';
import { UpdateTracksegmentDto } from './dto/update-tracksegment.dto';
import {
  ApiBearerAuth,
  ApiTags,
} from '@nestjs/swagger';
import { JwtGuard } from 'src/auth/guard';

@ApiTags('tracksegment')
@ApiBearerAuth()
@UseGuards(JwtGuard)
@Controller('tracksegment')
export class TracksegmentController {
  constructor(
    private readonly tracksegmentService: TracksegmentService,
  ) {}

  @Post()
  create(
    @Body()
    createTracksegmentDto: CreateTracksegmentDto,
  ) {
    return this.tracksegmentService.create(
      createTracksegmentDto,
    );
  }

  @Get()
  findAll() {
    return this.tracksegmentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tracksegmentService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body()
    updateTracksegmentDto: UpdateTracksegmentDto,
  ) {
    return this.tracksegmentService.update(
      +id,
      updateTracksegmentDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tracksegmentService.remove(+id);
  }
}
