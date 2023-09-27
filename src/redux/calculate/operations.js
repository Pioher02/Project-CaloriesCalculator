import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseURL } from 'helpers/constants';

axios.defaults.baseURL = baseURL;

//Guarda en la base de datos la información de la calculadora (usado)
export const calculation = createAsyncThunk(
  'calculate/calories',
  async (credentials, { rejectWithValue }) => {
    const token = credentials.token;
    const userInfo = credentials.dataForDispatch;

    try {
      const data = await axios.post('/users/current/:id', userInfo, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const refreshCalories = createAsyncThunk(
  'calculate/refreshCalories',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/calculate/calories');
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
