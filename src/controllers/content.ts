import { Get, Controller } from '@nestjs/common';
import { AppService } from '../services/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('getWaterHeaterInfo')
  getHello(): string {
    return this.appService.getHello();
  }
}
