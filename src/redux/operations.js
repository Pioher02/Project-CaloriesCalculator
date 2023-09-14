import { createAsyncThunk } from '@reduxjs/toolkit';

//es un ejemplo

const BASE_URL = 'https://connections-api.herokuapp.com/';

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (text, thunkAPI) => {
      try {
        await fetch(`${BASE_URL}contacts/${text.id}`, {
          method: 'DELETE',
          headers: {
            'content-type': 'application/json',
            Authorization: text.token,
          },
        });
        return text.id;
      } catch (e) {
        thunkAPI.rejectWithValue(e.message);
      }
    }
  );