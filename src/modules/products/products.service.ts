import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
    getAllProducts(): any {
        return {
            products: [{
                id: 1,
                name: 'Casio Watch',
                category: 'watch',
                brand: 'Casio',
                url: 97
            }, {
                id: 1,
                name: 'Reebook Shoes',
                category: 'shoes',
                brand: 'Reebok',
                url: 97
            }]
        }
    }
}
