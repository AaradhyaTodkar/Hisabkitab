import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

const container = document.getElementById('root');
const rootElement = createRoot(container);

rootElement.render(
  <StrictMode>
    <App />
  </StrictMode>
);
