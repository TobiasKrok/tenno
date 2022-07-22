import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import '../../styles/components/checkout-item/checkout-item.scss';
import { AddedProduct } from '../../types/products';

const CheckoutItem: React.FC<{ product: AddedProduct }> = ({ product }) => {
    const { name, price, quantity, imageUrl } = product;
    const { addProduct, removeProduct } = useContext(CartContext);

    return (
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt={name} />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => removeProduct(product)}>
                    &#10094;
                </div>
                <span className="value">{quantity}</span>

                <div className="arrow" onClick={() => addProduct(product)}>
                    &#10095;
                </div>
            </span>
            <span className="price">{price}</span>
            <span className="remove-button" onClick={() => removeProduct(product, true)}>
                &#10005;
            </span>
        </div>
    );
};

export default CheckoutItem;
