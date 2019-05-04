import { Controller, Get, Post, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { BoilerService } from './boiler.service';
import { Result } from './../types/interfaces';

@Controller('boiler')
@UseGuards(AuthGuard())
export class BoilerController {
    constructor(private readonly boilerService: BoilerService) {}

    @Get('/')
    getStatus(): Promise<Result> {
        return this.boilerService.getStatus();
    }

    @Post('/:type')
    toggleDevice(@Param('type') type: string): Promise<Result> {
        return this.boilerService.toggleDevice(type);
    }
}
