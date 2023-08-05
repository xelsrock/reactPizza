import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './pages/Home';
import Cart from './pages/Cart'
import NotFound from './pages/NotFound'

import './scss/app.scss';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} exact="true" />
              <Route path="/cart" element={<Cart />} exact="true" />
              <Route path="*" element={<NotFound />} exact="true" />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
