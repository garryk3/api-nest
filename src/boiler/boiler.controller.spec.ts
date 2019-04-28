import { Test, TestingModule } from '@nestjs/testing';
import { BoilerController } from './boiler.controller';

describe('Boiler Controller', () => {
  let controller: BoilerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BoilerController],
    }).compile();

    controller = module.get<BoilerController>(BoilerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
