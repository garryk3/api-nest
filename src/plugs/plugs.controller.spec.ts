import { Test, TestingModule } from '@nestjs/testing';
import { PlugsController } from './plugs.controller';

describe('Plugs Controller', () => {
  let controller: PlugsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlugsController],
    }).compile();

    controller = module.get<PlugsController>(PlugsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
