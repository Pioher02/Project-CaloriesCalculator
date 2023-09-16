import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from 'redux/auth/slice';
import { calculateReducer } from 'redux/calculate/slice';
import { productListReducer } from 'redux/products/slice';
import { dateReducer } from 'redux/date/slice';
import { diaryReducer } from 'redux/diary/slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    calculate: calculateReducer,
    productList: productListReducer,
    date: dateReducer,
    diary: diaryReducer,
  },
});

/*VALIDAR EL USO DE PERSIST PARA QUE NO SE CIERRE LA SESIÓN

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

 auth: persistReducer(authPersistConfig, authReducer),

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  //devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);*/
