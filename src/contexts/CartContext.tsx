import React, { createContext, PropsWithChildren, useState } from 'react';
import { Product } from '../types/products';

type CartState = {
    cart: Product[];
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
    setCart: React.Dispatch<React.SetStateAction<Product[]>>;
};
export const CartContext = createContext<CartState>({
    visible: false,
    cart: [],
    setVisible: () => null,
    setCart: () => null,
});

export const CartProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [visible, setVisible] = useState(false);
    const [cart, setCart] = useState<Product[]>([]);

    return <CartContext.Provider value={{ visible, setVisible, cart, setCart }}>{children}</CartContext.Provider>;
};
