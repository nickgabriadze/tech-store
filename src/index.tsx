import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import store from './store';
import ShoppingCart from './components/shoppingCart';
import CustomSpecsPage from './components/customSpecsPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
          <Route path={'/chosen-device-specs'} element={<CustomSpecsPage />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
