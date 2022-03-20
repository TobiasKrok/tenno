import React, { useMemo } from 'react';
import { Outlet } from 'react-router-dom';

import '../../styles/components/home/homepage.styles.scss';
import { Category } from '../../types/Directory';
import SectionData from '../../utils/directory';
import Directory from '../molecules/Directory';

const Home: React.FC = () => {
    const categories: Array<Category> = useMemo(() => SectionData, [SectionData]);

    return (
        <>
            <Outlet />
            <Directory categories={categories} />
        </>
    );
};

export default Home;
