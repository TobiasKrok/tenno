import React, { useMemo } from 'react';
import { Outlet } from 'react-router-dom';

import '../../styles/components/home/homepage.styles.scss';
import { Catergory } from '../../types/Directory';
import SectionData from '../../utils/DirectoryData';
import Directory from '../molecules/Directory';

const Home: React.FC = () => {
    const categories: Array<Catergory> = useMemo(() => SectionData, [SectionData]);

    return (
        <>
            <Outlet />
            <Directory categories={categories} />
        </>
    );
};

export default Home;
