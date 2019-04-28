import { ContentService } from './content.service';
import { Controller, Get } from '@nestjs/common';

import { Result } from '../types/interfaces';

@Controller('content')
export class ContentController {
    constructor(private readonly contentService: ContentService) {}

    @Get('getWaterHeaterInfo')
    getWaterHeaterInfo(): object[] {
        return this.contentService.getWaterHeaterInfo();
    }
}
