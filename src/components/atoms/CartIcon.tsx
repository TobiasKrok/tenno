import React from 'react';
import { ReactComponent as ShopIcon } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../contexts/CartContext';
import '../../styles/components/cart-icon/cart-icon.scss';

const CartIcon: React.FC = () => {
    const { visible, setVisible } = React.useContext(CartContext);
    console.log(visible);
    return (
        <div className="cart-icon-container" onClick={() => setVisible(!visible)}>
            <ShopIcon className="shopping-icon" />
            <span className="item-count">10</span>
        </div>
    );
};

export default CartIcon;
