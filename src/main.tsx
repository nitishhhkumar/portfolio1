import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { CssBaseline } from '@mui/material';

// Set initial theme
document.documentElement.setAttribute('data-theme', 'dark');

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>,
);
