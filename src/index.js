import React from 'react';
import { createRoot } from 'react-dom/client'; // Importa createRoot desde 'react-dom/client'
import App from './components/App';
import './index.css';

const rootElement = document.getElementById('root');
const reactRoot = createRoot(rootElement); // Crea un root react con createRoot
reactRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

