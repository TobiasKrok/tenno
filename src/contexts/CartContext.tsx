import React, { createContext, PropsWithChildren, useEffect, useState } from 'react';
import { AddedProduct, Product } from '../types/products';

type CartState = {
    cart: AddedProduct[];
    totalCount: number;
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
    addProduct: (product: Product) => void;
};
export const CartContext = createContext<CartState>({
    visible: false,
    totalCount: 0,
    cart: [],
    setVisible: () => null,
    addProduct: () => null,
});

export const CartProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [visible, setVisible] = useState(false);
    const [cart, setCart] = useState<AddedProduct[]>([]);
    const [totalCount, setTotalCount] = useState(0);

    useEffect(() => setTotalCount(cart.reduce((acc, cur) => acc + cur.quantity, 0)), [cart]);

    const addProduct = (product: Product) => {
        const item = cart.find((item) => item.id === product.id);

        if (!item) {
            setCart((c) => [...c, { ...product, quantity: 1 }]);
        } else {
            setCart((c) => c.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)));
        }
    };

    return (
        <CartContext.Provider value={{ visible, setVisible, cart, addProduct, totalCount }}>
            {children}
        </CartContext.Provider>
    );
};
