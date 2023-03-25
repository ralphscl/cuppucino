import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// Component
import App from './App';
// Fonts
import './fonts/Kanit-Regular.ttf';
import './fonts/Kanit-Bold.ttf';
// CSS
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
