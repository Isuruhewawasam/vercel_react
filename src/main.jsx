import React from 'react';
import ReactDOM from 'react-dom/client'; // මේ import එක අනිවාර්යයි
import App from './App';
import './index.css';
import { HelmetProvider } from 'react-helmet-async';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);