import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'sonner'
import { HelmetProvider } from 'react-helmet-async';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterApp } from './router/index';
import { MeProviderContext } from './context/me.provider.context'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Toaster />
      <MeProviderContext>
        <RouterApp />
      </MeProviderContext>
    </HelmetProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
