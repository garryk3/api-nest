import { Controller, Get } from '@nestjs/common';

import { SystemService } from './system.service';
import { Result } from '../types/interfaces';

@Controller('system')
export class SystemController {
    constructor(private readonly systemService: SystemService) {}

    @Get('version')
    getVersion(): Promise<Result> {
        return this.systemService.getVersion();
    }
}
