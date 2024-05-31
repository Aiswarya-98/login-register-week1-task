import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
  <GoogleOAuthProvider clientId='994508678009-e0235rb936ogqdmr3m8pg4661dmlkhf4.apps.googleusercontent.com'
 >

    <BrowserRouter>
    <App />
    </BrowserRouter>

    </GoogleOAuthProvider>
   
  </React.StrictMode>
);


