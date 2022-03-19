import React from 'react';

import './styles/App.css';
import Home from './components/pages/Home';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/molecules/Navigation';
import Login from './components/pages/Login';
function App() {
    return (
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path="login" element={<Login />} />
            </Route>
        </Routes>
    );
}

export default App;
