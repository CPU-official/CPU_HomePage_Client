import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import GlobalStyles from './styles/GlobalStyle.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App /> 
      <GlobalStyles />
    </BrowserRouter>
  </React.StrictMode>
);