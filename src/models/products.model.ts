import { ApiProperty } from '@nestjs/swagger';
export class Products {
    
    id: number;
    @ApiProperty()
    name: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    price: number;

    @ApiProperty()
    imageUrl: string;
    
    @ApiProperty()
    productBrandId: number;

    @ApiProperty()
    productTypeId: number;
}

export class ProductsToReturn {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    productBrandId: number;
    productBrandName: string;
    productTypeId: number;
    productTypeName: string;
}

export class ProductType {
    id: number;
    name: string;
    Product: Products[];
}

export class ProductBrand{
    id: number;
    name: string;
    Product: Products[];
}

export class PaginationData{
    totalItems: number;
    currentItems: number;
    slNo: number;
    data: Products[];
    pageNo: number;
}