import React from 'react';
import { Route, Routes } from 'react-router-dom';
import '../../styles/components/shop/shop.scss';
import Category from './Category';
import CategoriesPreviews from './CategoryPreviews';
const Shop: React.FC = () => {
    return (
        <Routes>
            <Route index element={<CategoriesPreviews />} />
            <Route path=":category" element={<Category />} />
        </Routes>
    );
};

export default Shop;
