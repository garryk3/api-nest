import { Controller, Get, Post, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { SystemService } from './system.service';
import { Result } from '../types/interfaces';

@Controller('system')
@UseGuards(AuthGuard())
export class SystemController {
    constructor(private readonly systemService: SystemService) {}

    @Get('version')
    getVersion(): Promise<Result> {
        return this.systemService.getVersion();
    }

    @Post('log/:time?/:level?')
    getLog(@Param('time') time: string, @Param('level') level: string): Promise<Result> {
        return this.systemService.getLog(time, level);
    }

    @Get('reboot')
    reboot(): Promise<Result> {
        return this.systemService.reboot();
    }
}
