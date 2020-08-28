import { Controller, Get, Post, Body, HttpStatus, HttpCode, HttpException, Param, UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Products} from 'src/models/products.model';
import { Roles } from 'src/auth/roles.decorator';
import { JwtAuthGuard } from 'src/auth/jwt.auth.guard';

@Controller('products')
// @UseGuards(JwtAuthGuard)
export class ProductsController {
    constructor(private readonly productService: ProductsService) { }

    @Get()
    async getAllProducts() {
        try {
            return await this.productService.getAllProducts();
        } catch (ex) {
            throw new HttpException({
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                error: ex,
            }, HttpStatus.SERVICE_UNAVAILABLE);
        }
    }

    @Post()
    @Roles('Admin')
    async createProduct(@Body() product: Products) {
        try {
            return await this.productService.createProduct(product);
        } catch (ex) {
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: "invlid data entered",
            }, HttpStatus.FORBIDDEN);
        }
    }

    @Get(':id')
    async findOne(@Param('id') params:number) {
        return await this.productService.getProductById(params);
    }

}
