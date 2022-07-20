import React from 'react';
import '../../styles/components/cart-dropdown/cart-dropdown.scss';
import Button from '../atoms/Button';

const CartDropdown: React.FC = () => {
    return (
        <div className="cart-dropdown-container">
            <div className="cart-items"> </div>
            <Button>Go to checkout</Button>
        </div>
    );
};

export default CartDropdown;
