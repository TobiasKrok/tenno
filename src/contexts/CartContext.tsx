import React, { createContext, PropsWithChildren, useEffect, useState } from 'react';
import { AddedProduct, Product } from '../types/products';

type CartState = {
    cart: AddedProduct[];
    totalCount: number;
    totalPrice: number;
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
    addProduct: (product: Product) => void;
    removeProduct: (product: AddedProduct, removeAll?: boolean) => void;
};
export const CartContext = createContext<CartState>({
    visible: false,
    totalCount: 0,
    totalPrice: 0,
    cart: [],
    setVisible: () => null,
    addProduct: () => null,
    removeProduct: () => null,
});

export const CartProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [visible, setVisible] = useState(false);
    const [cart, setCart] = useState<AddedProduct[]>([]);
    const [totalCount, setTotalCount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => setTotalPrice(cart.reduce((acc, cur) => acc + cur.price * cur.quantity, 0)), [cart]);
    useEffect(() => setTotalCount(cart.reduce((acc, cur) => acc + cur.quantity, 0)), [cart]);

    const addProduct = (product: Product) => {
        const item = cart.find((item) => item.id === product.id);

        if (!item) {
            setCart((c) => [...c, { ...product, quantity: 1 }]);
        } else {
            setCart((c) => c.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)));
        }
    };

    const removeProduct = (product: AddedProduct, removeAll = false) => {
        const item = cart.find((item) => item.id === product.id);
        if (item) {
            if (removeAll) {
                setCart((c) => c.filter((item) => item.id !== product.id));
            } else {
                if (item.quantity > 1) {
                    setCart((c) =>
                        c.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item)),
                    );
                } else {
                    setCart((c) => c.filter((item) => item.id !== product.id));
                }
            }
        }
    };

    return (
        <CartContext.Provider value={{ visible, totalPrice, cart, totalCount, removeProduct, setVisible, addProduct }}>
            {children}
        </CartContext.Provider>
    );
};
