import { Controller, Get, Post, UseGuards, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { AuthService } from './auth.service';
import { JwtPayload } from './../types/interfaces';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('token')
    async createToken(@Body('name') name: string, @Body('password') password: string): Promise<object> {
        return await this.authService.createToken({ name, password });
    }

    @Get('data')
    @UseGuards(AuthGuard())
    findAll() {
        // this route is restricted by AuthGuard
        // JWT strategy
    }
}
