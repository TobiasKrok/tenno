import React from 'react';
import './styles/index.scss';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { UserProvider } from './contexts/UserContext';
import { CategoriesProvider } from './contexts/CategoriesContext';
import { CartProvider } from './contexts/CartContext';

const container = document.getElementById('root');
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);
root.render(
    <React.StrictMode>
        <Router>
            <UserProvider>
                <CategoriesProvider>
                    <CartProvider>
                        <App />
                    </CartProvider>
                </CategoriesProvider>
            </UserProvider>
        </Router>
    </React.StrictMode>,
);
