import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import '../../styles/components/cart-dropdown/cart-dropdown.scss';
import Button from '../atoms/Button';
import CartItem from './CartItem';

const CartDropdown: React.FC = () => {
    const { cart } = useContext(CartContext);
    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {cart.map((item) => (
                    <CartItem product={item} key={item.id} />
                ))}
            </div>
            <Button>Go to checkout</Button>
        </div>
    );
};

export default CartDropdown;
