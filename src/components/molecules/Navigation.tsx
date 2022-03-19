import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import '../../styles/components/navigation/navigation.scss';
const Navigation: React.FC = () => {
    return (
        <>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <Logo className="logo" />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">
                        SHOP
                    </Link>
                    <Link className="nav-link" to="/login">
                        LOGIN
                    </Link>
                </div>
            </div>
            <Outlet />
        </>
    );
};

export default Navigation;
