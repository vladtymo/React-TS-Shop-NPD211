export interface ProductModel {
    id: number;
    title: string;
    price: number;
    discount: number;
    quantity: number;
    imageUrl?: string;
    categoryName?: string;
    description?: string;
}

export interface ProductFormField {
    title: string;
    price: number;
    discount: number;
    quantity: number;
    // imageUrl?: string;
    image?: File;
    categoryId: number;
    description?: string;
}

export interface CategoryOption {
    value: number;
    label: string;
}
export interface CategoryModel {
    id: number;
    name: string;
}