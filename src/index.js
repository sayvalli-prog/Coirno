import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // src içinde olduğu için yol bu şekilde olmalı

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);