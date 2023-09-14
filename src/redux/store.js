import { configureStore } from '@reduxjs/toolkit';
import { diaryReducer } from './diary/slice';


export const store = configureStore({
  reducer: {
    diary: diaryReducer,
    
  },
});