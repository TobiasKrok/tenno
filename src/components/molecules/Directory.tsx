import React from 'react';
import '../../styles/components/directory/directory.scss';
import { Catergory } from '../../types/Directory';
import CategoryItem from '../atoms/CategoryItem';

type DirectoryProps = {
    categories: Array<Catergory>;
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
