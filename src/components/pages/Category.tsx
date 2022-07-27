import React, { useContext, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { CategoriesContext } from '../../contexts/CategoriesContext';
import '../../styles/components/category-page/category-page.scss';
import { capitalize } from '../../utils/helpers';
import ProductCard from '../molecules/ProductCard';

const Category: React.FC = () => {
    const { category } = useParams();
    const { categories } = useContext(CategoriesContext);
    const products = useMemo(() => category && categories[capitalize(category)], [categories, category]);
    return (
        <>
            <h2 className="category-title">{category && capitalize(category)}</h2>
            <div className="category-container">
                {products && products.map((product) => <ProductCard key={product.id} product={product} />)}
            </div>
        </>
    );
};

export default Category;
