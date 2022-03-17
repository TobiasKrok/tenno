import React from 'react';
import '../../styles/components/menu-item/menu-item.scss';
import { Section } from '../../types/Directory';

const MenuItem: React.FC<Omit<Section, 'id'>> = ({ title, imageUrl, linkUrl, size }) => {
    return (
        <div className={`${size} menu-item`}>
            <div
                className="background-image"
                style={{
                    backgroundImage: `url(${imageUrl})`,
                }}
            />
            <div className="content">
                <h1 className="title">{title.toLocaleUpperCase()}</h1>
                <span className="subtitle">SHOW NOW</span>
            </div>
        </div>
    );
};

export default MenuItem;
