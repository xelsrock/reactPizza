import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';
import FullPizza from './pages/FullPizza';
import NotFound from './pages/NotFound';
import MainLayout from './layouts/MainLayout';

import './scss/app.scss';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout/>}>
        <Route path="" element={<Home />} exact="true" />
        <Route path="cart" element={<Cart />} exact="true" />
        <Route path="pizza/:id" element={<FullPizza />} exact="true" />
        <Route path="*" element={<NotFound />} exact="true" />
      </Route>
    </Routes>
  );
}

export default App;
