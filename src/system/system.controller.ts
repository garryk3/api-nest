import { Controller, Get, Post, Param } from '@nestjs/common';

import { SystemService } from './system.service';
import { Result } from '../types/interfaces';

@Controller('system')
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
