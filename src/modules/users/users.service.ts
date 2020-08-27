import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Users } from './users.model';
import { Observable } from 'rxjs';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) { }
    createUser(user: Users) {
        const data = this.prisma.user.create({
            data: {
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email,
                password: user.password,
                mobile: user.mobile
            }
        });
        return data;
    }
    async getAllUsers() {
    return await this.prisma.user.findMany({
            select : {
                email: true,
                firstname: true,
                lastname: true,
                id: true,
                mobile: true
            }
        });
    }

    getUser(email: string) {
        return this.prisma.user.findOne({
            where : {
                email: email,
            }
        })
    }
 
}
