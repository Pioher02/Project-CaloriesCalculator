import { deleteContact } from './operations';
import { createSlice } from '@reduxjs/toolkit';

const diaryInitialState = {
  consume: [],
};

export const diarySlice = createSlice ({
  name: 'diary',
  initialState: diaryInitialState,
  reducers: {},
  extraReducers: {

    //es un ejemplo
    [deleteContact.pending](state) {
      state.isLoading = true;
    },
  },
});

export const diaryReducer = diarySlice.reducer;
