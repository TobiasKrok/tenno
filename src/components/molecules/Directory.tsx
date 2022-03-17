import React, { useState } from 'react';
import '../../styles/components/directory/directory.scss';
import { Section } from '../../types/Directory';
import SectionData from '../../utils/DirectoryData';
import MenuItem from '../atoms/MenuItem';

const Directory: React.FC = () => {
    const [sections, setSections] = useState<Array<Section>>(SectionData); // useState not really needed here

    return (
        <div className="directory-menu">
            {sections.map((section) => (
                <MenuItem
                    key={section.id}
                    title={section.title}
                    imageUrl={section.imageUrl}
                    linkUrl={section.linkUrl}
                    size={section.size}
                />
            ))}
        </div>
    );
};

export default Directory;
