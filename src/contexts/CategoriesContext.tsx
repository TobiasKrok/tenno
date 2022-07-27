import React, { createContext, PropsWithChildren, useState, useEffect } from 'react';
import { getCategoriesAndDocuments } from '../utils/firebase';

import { ProductCategory } from '../types/categories';

export const CategoriesContext = createContext<{ categories: ProductCategory }>({ categories: {} });

export const CategoriesProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [categories, setCategories] = useState<ProductCategory>({});

    useEffect(() => {
        (async () => {
            const categories = await getCategoriesAndDocuments();
            setCategories(categories);
        })();
    }, []);

    return <CategoriesContext.Provider value={{ categories }}>{children}</CategoriesContext.Provider>;
};
