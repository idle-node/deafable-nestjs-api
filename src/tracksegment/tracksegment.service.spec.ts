import {
  Test,
  TestingModule,
} from '@nestjs/testing';
import { TracksegmentService } from './tracksegment.service';

describe('TracksegmentService', () => {
  let service: TracksegmentService;

  beforeEach(async () => {
    const module: TestingModule =
      await Test.createTestingModule({
        providers: [TracksegmentService],
      }).compile();

    service = module.get<TracksegmentService>(
      TracksegmentService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
