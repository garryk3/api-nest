import { PlugsService } from './plugs.service';
import { Controller, Get, Post, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { Result } from '../types/interfaces';

@Controller('plugs')
@UseGuards(AuthGuard())
export class PlugsController {
    constructor(private readonly plugsService: PlugsService) {}

    @Get('/')
    getAllDevicesStatuse(): Promise<Result> {
        return this.plugsService.getAllDevicesStatuse();
    }

    @Post(':idx/:type')
    toogleDevice(@Param('idx') idx: string, @Param('type') type: string): Promise<Result> {
        return this.plugsService.toogleDevice(idx, type);
    }

    @Post('switch-all-off')
    switchAllOff(): Promise<Result> {
        return this.plugsService.switchAllOff();
    }
}
