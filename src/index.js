import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { App } from './components/App';
import { theme } from 'theme';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { Loader } from './components/Loader/Loader';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Loader />
        </Provider>
      </ThemeProvider>
    </BrowserRouter>

  </React.StrictMode>
);

// Una vez que la aplicación se ha cargado o inicializado, reemplaza el componente Loader por tu aplicación principal
setTimeout(() => {
  root.render(
    <React.StrictMode>
      <BrowserRouter basename="/">
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <App />
          </Provider>
        </ThemeProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
}, 1000);

