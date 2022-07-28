import React, { createContext, PropsWithChildren, useEffect, useReducer, useState } from 'react';
import { AddedProduct, Product } from '../types/products';

type CartState = {
    cart: AddedProduct[];
    totalCount: number;
    totalPrice: number;
    visible: boolean;
};
export const CartContext = createContext<
    CartState & {
        addProduct: (product: Product) => void;
        removeProduct: (product: AddedProduct, removeAll: boolean) => void;
        setVisible: (visible: boolean) => void;
    }
>({
    visible: false,
    totalCount: 0,
    totalPrice: 0,
    cart: [],
    setVisible: () => null,
    addProduct: () => null,
    removeProduct: () => null,
});

const CART_ACTION_TYPES = {
    SET_CART_ITEMS: 'SET_CART_ITEMS',
    SET_VISIBLE: 'SET_VISIBLE',
};

const cartReducer = (state: CartState, action: { type: string; payload: CartState | boolean }): CartState => {
    const { type, payload } = action;

    switch (type) {
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                ...(payload as CartState),
            };
        case CART_ACTION_TYPES.SET_VISIBLE:
            return {
                ...state,
                visible: payload as boolean,
            };
        default:
            throw new Error(`Unhandled action type: ${type} in cartReducer`);
    }
};

export const CartProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [{ cart, totalCount, totalPrice, visible }, dispatch] = useReducer(cartReducer, {
        cart: [],
        totalCount: 0,
        totalPrice: 0,
        visible: false,
    });

    const addProduct = (product: Product) => {
        const item = cart.find((item) => item.id === product.id);
        let newCart: AddedProduct[];

        if (!item) {
            newCart = [...cart, { ...product, quantity: 1 }];
        } else {
            newCart = cart.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
        }
        updateCartItemsReducer(newCart);
    };

    const removeProduct = (product: AddedProduct, removeAll = false) => {
        const item = cart.find((item) => item.id === product.id);
        let newCart: AddedProduct[];
        if (item) {
            if (removeAll) {
                newCart = cart.filter((item) => item.id !== product.id);
            } else {
                if (item.quantity > 1) {
                    newCart = cart.map((item) =>
                        item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item,
                    );
                } else {
                    newCart = cart.filter((item) => item.id !== product.id);
                }
            }
            updateCartItemsReducer(newCart);
        }
    };
    const updateCartItemsReducer = (newCart: AddedProduct[]) => {
        const newTotal = cart.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);
        const newTotalCount = cart.reduce((acc, cur) => acc + cur.quantity, 0);

        dispatch({
            type: CART_ACTION_TYPES.SET_CART_ITEMS,
            payload: { cart: newCart, totalCount: newTotalCount, totalPrice: newTotal, visible: visible },
        });
    };

    const setVisible = (isVisible: boolean) => {
        dispatch({ type: CART_ACTION_TYPES.SET_VISIBLE, payload: isVisible });
    };

    return (
        <CartContext.Provider value={{ visible, totalPrice, cart, totalCount, removeProduct, setVisible, addProduct }}>
            {children}
        </CartContext.Provider>
    );
};
