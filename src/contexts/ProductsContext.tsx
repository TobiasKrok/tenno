import React, { createContext, PropsWithChildren, useState, useEffect } from 'react';
import SHOP_DATA from '../shop-data.json';

import { Product } from '../types/products';

export const ProductsContext = createContext<{ products: Product[] }>({ products: SHOP_DATA });

export const ProductsProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [products, setProducts] = useState<Product[]>(SHOP_DATA);

    useEffect(() => {
        setProducts(SHOP_DATA);
    }, []);

    return <ProductsContext.Provider value={{ products }}>{children}</ProductsContext.Provider>;
};
