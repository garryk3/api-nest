import { LightService } from './light.service';
import { Controller, Get, Post, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { Result } from './../types/interfaces';

@Controller('light')
@UseGuards(AuthGuard())
export class LightController {
    constructor(private readonly lightService: LightService) {}

    @Get('/')
    getAllDevicesStatuse(): Promise<Result> {
        return this.lightService.getAllDevicesStatuse();
    }

    @Post(':idx/:type')
    toogleDevice(@Param('idx') idx: string, @Param('type') type: string): Promise<Result> {
        return this.lightService.toogleDevice(idx, type);
    }

    @Post('switch-all-off')
    switchAllOff(): Promise<Result> {
        return this.lightService.switchAllOff();
    }
}
