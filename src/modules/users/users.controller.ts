import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) { }

    @Get()
    getAllUsers() {
        return this.userService.getAllUsers();
    }

    @Post()
    createUser(@Body('firstname') firstname: string, @Body('email') email: string, @Body('lastname') lastname: string) {
        return this.userService.createUser(firstname, email, lastname);
    }

}
