export type Product = {
    name: string;
    price: number;
    imageUrl: string;
    id: number;
};

export type AddedProduct = Product & {
    quantity: number;
};
