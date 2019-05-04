import { Controller, Get, Post, UseGuards, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('login')
    async login(@Body('name') name: string, @Body('password') password: string) {
        return this.authService.login({ name, password });
    }
}
