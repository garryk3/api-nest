import { Test, TestingModule } from '@nestjs/testing';
import { PlugsService } from './plugs.service';

describe('PlugsService', () => {
  let service: PlugsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlugsService],
    }).compile();

    service = module.get<PlugsService>(PlugsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
