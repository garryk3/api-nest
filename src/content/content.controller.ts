import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { Result } from '../types/interfaces';
import { ContentService } from './content.service';

@Controller('content')
@UseGuards(AuthGuard())
export class ContentController {
    constructor(private readonly contentService: ContentService) {}

    @Get('getWaterHeaterInfo')
    getWaterHeaterInfo(): object[] {
        return this.contentService.getWaterHeaterInfo();
    }
}
