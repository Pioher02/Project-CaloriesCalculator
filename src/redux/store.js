import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from 'redux/auth/slice';
import { calculateReducer } from 'redux/calculate/slice';
import { productListReducer } from 'redux/products/slice';
import { dateReducer } from 'redux/date/slice';
import { diaryReducer } from 'redux/diary/slice';
import foodReducer from './auth/foodReducer';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    calculate: calculateReducer,
    productList: productListReducer,
    date: dateReducer,
    diary: diaryReducer,
    food: foodReducer, // Agrega el reducer de alimentos con la clave 'food'
  },
});