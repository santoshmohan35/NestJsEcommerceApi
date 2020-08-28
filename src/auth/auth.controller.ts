import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { UsersService } from 'src/modules/users/users.service';
import { UserLoginDto } from 'src/models/userLogin.model';
import { AuthService } from './auth.service';
import { Users } from 'src/modules/users/users.model';
import { JwtAuthGuard } from './jwt.auth.guard';
import { ApiOkResponse } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
    constructor(private userService: UsersService, private authService: AuthService) { }

    @Get()
    @UseGuards(JwtAuthGuard)
    @ApiOkResponse({description:'JWT is working'})
    tempAuth() {
        return { auth: 'works' }
    }

    @Post('login')
    async login(@Body() loginDto: UserLoginDto) {
        const user = await this.userService.getUser(loginDto);
        const payload = {
            username: user.email,
        }
        const token = await this.authService.signPayload(payload);
        return { user, token }
    }

    @Post('register')
    async register(@Body() user: Users) {
        const result = await this.userService.createUser(user);
        const payload = {
            username: result.email
        }
        const token = await this.authService.signPayload(payload);
        return {result, token};
    }
}
