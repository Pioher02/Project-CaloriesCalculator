import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './app';
import './index.css';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function RootWrapper() {
  const [isAppInitialized, setAppInitialized] = useState(false);

  useEffect(() => {
    // Simula la inicialización de la aplicación
    // Puedes realizar otras tareas de inicialización aquí, si es necesario
    setTimeout(() => {
      setAppInitialized(true);
    }, 1000); // Cambia el tiempo de espera según tus necesidades
  }, []);

  return (
    <React.StrictMode>
      {isAppInitialized && (
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
          <ToastContainer /> {/* Componente de notificaciones Toast */}
            <App />
          </PersistGate>
        </Provider>
      )}
    </React.StrictMode>
  );
}

const root = createRoot(document.getElementById('root'));

// Renderiza el componente RootWrapper dentro de la raíz de la aplicación
root.render(<RootWrapper />);
