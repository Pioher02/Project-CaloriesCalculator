import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from '../reducers/authReducer'; // Importa el reductor de autenticación

// Configuración de persistencia para el estado de autenticación
const authPersistConfig = {
  key: 'auth', // Clave de almacenamiento en el almacenamiento local
  storage, // Tipo de almacenamiento (por defecto, almacenamiento local)
  whitelist: ['user', 'token', 'isLoggedIn'], // Lista de campos a persistir en el almacenamiento local
};

// Aplicar la configuración de persistencia al reductor de autenticación
const persistedReducer = persistReducer(authPersistConfig, authReducer);

// Configurar y crear la tienda Redux
export const store = configureStore({
  reducer: persistedReducer, // Utiliza el reductor con la configuración de persistencia
  middleware: getDefaultMiddleware({
    serializableCheck: {
      // Configuración para manejar las acciones de redux-persist
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

// Crear un persistor para la tienda Redux
export const persistor = persistStore(store);


