import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Navigation: React.FC = () => {
    return (
        <>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <div>Logo</div>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">
                        SHOP
                    </Link>
                </div>
                <Outlet />
            </div>
        </>
    );
};

export default Navigation;
