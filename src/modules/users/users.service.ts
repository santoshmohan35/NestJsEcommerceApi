import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Users } from './users.model';
import { UserLoginDto } from 'src/models/userLogin.model';
import { hash, compare } from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) { }

    async createUser(user: Users) {
        const hashPassword = await hash(user.password, 10);
        const data = await this.prisma.user.create({
            data: {
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email,
                password: hashPassword,
                mobile: user.mobile
            }
        });
        return data;
    }

    async comparePassword(plainPassword, hashPassword) {
        const result = await compare(plainPassword, hashPassword);
        return result;
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
        const comparePassword = await this.comparePassword(user.password, result.password);
        if (!comparePassword) {
            throw new HttpException('Invalid Password', HttpStatus.UNAUTHORIZED);
        } else {
            return result;
        }
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
