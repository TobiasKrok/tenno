import { Product } from './products';

// verified firestore document structures
export type VerifiedDocument = CategoryDocument;

export type CategoryDocument = {
    title: string;
    items: Product[];
};
