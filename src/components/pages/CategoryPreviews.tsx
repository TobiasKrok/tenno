import React, { useContext } from 'react';
import { CategoriesContext } from '../../contexts/CategoriesContext';
import CategoryPreview from '../molecules/CategoryPreview';

const CategoriesPreviews: React.FC = () => {
    const { categories } = useContext(CategoriesContext);
    return (
        <>
            {Object.keys(categories).map((title) => (
                <CategoryPreview key={title} title={title} products={categories[title]} />
            ))}
        </>
    );
};

export default CategoriesPreviews;
