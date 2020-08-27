import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './users.model';
import { JwtAuthGuard } from 'src/auth/jwt.auth.guard';
import { hasRoles } from 'src/auth/roles.decorator';
import { RolesGuard } from 'src/auth/roles.guard';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) { }

    @Get()
    @UseGuards(JwtAuthGuard, RolesGuard)
    @hasRoles('Admin')
    async getAllUsers() {
        return await this.userService.getAllUsers();
    }

    @Post()
    async createUser(@Body() user:Users) {
        return await this.userService.createUser(user);
    }

}
