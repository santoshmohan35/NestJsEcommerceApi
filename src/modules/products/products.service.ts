import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Products } from 'src/models/products.model';

@Injectable()
export class ProductsService {
    constructor(private prisma: PrismaService) { }
    getAllProducts() {
        return this.prisma.product.findMany({
            include:{productbrand: {select: {name: true}},producttype: {select: {name: true}}}
        });
    }

    createProduct(product: Products) {
        return this.prisma.product.create({
            data: {
                name: product.name,
                description: product.description,
                price: product.price,
                imageUrl: product.imageUrl,
                productbrand: {
                    connect: {id: product.productBrandId}
                },
                producttype: {
                    connect: {id: product.productTypeId}
                }
            }
        })
    }

    getProductById(id: number) {
        return this.prisma.product.findOne({
            where: {id: +id},
            include:{productbrand: {select: {name: true}},producttype: {select: {name: true}}}
        });
    }
}
