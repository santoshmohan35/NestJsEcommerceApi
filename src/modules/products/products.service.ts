import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ProductsService {
    constructor(private prisma: PrismaService){}
    getAllProducts() {
        return this.prisma.product.findMany();
    }
}
