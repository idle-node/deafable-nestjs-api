import { PartialType } from '@nestjs/swagger';
import { CreateTracksegmentDto } from './create-tracksegment.dto';

export class UpdateTracksegmentDto extends PartialType(CreateTracksegmentDto) {}
