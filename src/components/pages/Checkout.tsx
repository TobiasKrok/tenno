import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

import '../../styles/components/checkout/checkout.scss';
import CheckoutItem from '../molecules/CheckoutItem';

const Checkout: React.FC = () => {
    const { cart, totalPrice } = useContext(CartContext);
    return (
        <div className="checkout-container">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {cart.map((item) => (
                <CheckoutItem product={item} key={item.id} />
            ))}
            <span className="total">${totalPrice}</span>
        </div>
    );
};

export default Checkout;
