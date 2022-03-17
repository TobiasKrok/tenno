import React from 'react';
import '../../styles/components/category-item/category-item.scss';
import { Catergory } from '../../types/Directory';

const CategoryItem: React.FC<Omit<Catergory, 'id'>> = ({ title, imageUrl }) => {
    return (
        <div className="category-container">
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
