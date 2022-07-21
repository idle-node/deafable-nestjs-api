import {
  Test,
  TestingModule,
} from '@nestjs/testing';
import { TracksegmentController } from './tracksegment.controller';
import { TracksegmentService } from './tracksegment.service';

describe('TracksegmentController', () => {
  let controller: TracksegmentController;

  beforeEach(async () => {
    const module: TestingModule =
      await Test.createTestingModule({
        controllers: [TracksegmentController],
        providers: [TracksegmentService],
      }).compile();

    controller =
      module.get<TracksegmentController>(
        TracksegmentController,
      );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
