import React from 'react';
import '../../styles/components/directory/directory.scss';
import { Category } from '../../types/categories';
import CategoryItem from '../molecules/CategoryItem';

type DirectoryProps = {
    categories: Array<Category>;
};
const Directory: React.FC<DirectoryProps> = ({ categories }) => {
    return (
        <div className="directory-container">
            {categories.map((category) => (
                <CategoryItem key={category.id} title={category.title} imageUrl={category.imageUrl} />
            ))}
        </div>
    );
};

export default Directory;
