import { Module } from '@nestjs/common';
import { TracksegmentService } from './tracksegment.service';
import { TracksegmentController } from './tracksegment.controller';

@Module({
  controllers: [TracksegmentController],
  providers: [TracksegmentService],
})
export class TracksegmentModule {}
