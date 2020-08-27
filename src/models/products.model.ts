export class Products {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    productBrandId: number;
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