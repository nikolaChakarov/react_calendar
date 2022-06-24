import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { GlobalProvider } from './context/GlobalProvider';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </BrowserRouter>
);