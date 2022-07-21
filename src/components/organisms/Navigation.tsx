import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { CartContext } from '../../contexts/CartContext';
import { UserContext } from '../../contexts/UserContext';
import '../../styles/components/navigation/navigation.scss';
import { signOutUser } from '../../utils/firebase';
import CartIcon from '../atoms/CartIcon';
import CartDropdown from '../molecules/CartDropdown';
const Navigation: React.FC = () => {
    const { currentUser } = useContext(UserContext);
    const { visible } = useContext(CartContext);

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
                    {currentUser ? (
                        <span className="nav-link" onClick={signOutUser}>
                            SIGN OUT
                        </span>
                    ) : (
                        <Link className="nav-link" to="/login">
                            LOGIN
                        </Link>
                    )}
                    <CartIcon />
                </div>
                {visible && <CartDropdown />}
            </div>
            <Outlet />
        </>
    );
};

export default Navigation;
