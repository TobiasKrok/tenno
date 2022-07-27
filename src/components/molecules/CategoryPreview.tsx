import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/category-preview/category-preview.scss';
import { Product } from '../../types/products';
import { capitalize } from '../../utils/helpers';
import ProductCard from './ProductCard';

type CategoryPreviewProps = {
    products: Product[];
    title: string;
};
const CategoryPreview: React.FC<CategoryPreviewProps> = ({ title, products }) => {
    return (
        <div className="category-preview-container">
            <h2>
                <Link to={title.toLowerCase()} className="title">
                    {title}
                </Link>
            </h2>
            <div className="preview">
                {products
                    .filter((_, index) => index < 4)
                    .map((product) => (
                        <ProductCard product={product} key={product.id} />
                    ))}
            </div>
        </div>
    );
};

export default CategoryPreview;
