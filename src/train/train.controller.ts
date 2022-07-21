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
import { TrainService } from './train.service';
import { CreateTrainDto } from './dto/create-train.dto';
import { UpdateTrainDto } from './dto/update-train.dto';
import { JwtGuard } from 'src/auth/guard';
import {
  ApiBearerAuth,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('train')
@ApiBearerAuth()
@UseGuards(JwtGuard)
@Controller('train')
export class TrainController {
  constructor(
    private readonly trainService: TrainService,
  ) {}

  @Post()
  create(@Body() createTrainDto: CreateTrainDto) {
    return this.trainService.create(
      createTrainDto,
    );
  }

  @Get()
  findAll() {
    return this.trainService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.trainService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTrainDto: UpdateTrainDto,
  ) {
    return this.trainService.update(
      +id,
      updateTrainDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.trainService.remove(+id);
  }
}
