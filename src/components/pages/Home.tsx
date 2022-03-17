import React from 'react';

import '../../styles/components/home/homepage.styles.scss';
import Directory from '../molecules/Directory';

const Home: React.FC = () => {
    return (
        <div className="homepage">
            <Directory></Directory>
        </div>
    );
};

export default Home;
