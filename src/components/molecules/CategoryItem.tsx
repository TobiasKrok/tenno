import React from 'react';
import '../../styles/components/category-item/category-item.scss';
import { Category } from '../../types/categories';

const CategoryItem: React.FC<Omit<Category, 'id'>> = ({ title, imageUrl }) => {
    return (
        <div className="category-item-container">
            <div
                className="background-image"
                style={{
                    backgroundImage: `url(${imageUrl})`,
                }}
            />
            <div className="category-body-container">
                <h2>{title.toLocaleUpperCase()}</h2>
                <p>Show now</p>
            </div>
        </div>
    );
};

export default CategoryItem;
