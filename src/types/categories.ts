import { Product } from './products';

export type Category = {
    title: string;
    imageUrl: string;
    id: number;
};

export type ProductCategory = Record<string, Product[]>;
