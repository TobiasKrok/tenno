import React from 'react';
import { Product } from '../../types/products';
import Button from '../atoms/Button';
import '../../styles/components/product-card/product-card.scss';
type ProductCardProps = {
    product: Product;
};
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className="product-card-container">
            <img src={product.imageUrl} alt={product.name} />
            <div className="footer">
                <span className="name">{product.name}</span>
                <span className="price">{product.price}</span>
            </div>
            <Button class="inverted">Add to cart</Button>
        </div>
    );
};

export default ProductCard;
