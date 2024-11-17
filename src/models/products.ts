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