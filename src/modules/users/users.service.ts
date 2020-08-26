import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) { }
    createUser(firstname: string, email: string, lastname: string) {
        const user = this.prisma.user.create({
            data: {
                email: email,
                firstname: firstname,
                lastname: lastname
            }
        });
        return user;
    }
    getAllUsers(): any {
        return this.prisma.user.findMany();
    }
}
