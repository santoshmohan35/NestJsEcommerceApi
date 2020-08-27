import { Controller, Post, UseGuards, Request, Body } from '@nestjs/common';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }
    // @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Body() req) {
        return this.authService.validateUser(req.user, req.password);
    }
}
