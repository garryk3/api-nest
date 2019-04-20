import { Get, Controller } from '@nestjs/common';
import { ContentService } from './service';

@Controller()
export class AppController {
  constructor(private readonly contentService: ContentService) {}

  @Get()
  getHello(): string {
    return this.contentService.getHello();
  }
}
