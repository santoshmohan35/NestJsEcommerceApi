import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Users } from './users.model';
import { Observable } from 'rxjs';
import { UserLoginDto } from 'src/models/userLogin.model';

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
            select: {
                email: true,
                firstname: true,
                lastname: true,
                id: true,
                mobile: true
            },
        });
    }

    async getUser(user: UserLoginDto) {
        const result = await this.prisma.user.findOne({
            where: {
                email: user.username
            }
        });
        if (!result) {
            throw new HttpException('No such user found', HttpStatus.BAD_REQUEST);
        }
        if( result.password !== user.password) {
            throw new HttpException('Invalid Password', HttpStatus.UNAUTHORIZED);
        } else {
            return result;
        }
        // const result = await this.prisma.$queryRaw`SELECT * FROM user where email = ${user.username} && password = ${user.password}`;
    }

    async findByPayload(payload: any) {
        const username = payload.username;
        return await this.prisma.user.findOne({
            where: {
                email: username
            }
        });
    }

}
