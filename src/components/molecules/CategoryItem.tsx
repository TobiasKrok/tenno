import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/components/category-item/category-item.scss';
import { Category } from '../../types/categories';

const CategoryItem: React.FC<Omit<Category, 'id'>> = ({ title, imageUrl }) => {
    const navigate = useNavigate();

    return (
        <div className="category-item-container" onClick={() => navigate('shop/' + title)}>
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
