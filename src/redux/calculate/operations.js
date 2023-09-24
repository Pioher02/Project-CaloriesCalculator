import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:3001/api';

//Guarda en la base de datos la información de la calculadora
export const calculation = createAsyncThunk(
  'calculate/calories',
  async (credentials, { rejectWithValue }) => {
    const token = credentials.token;
    const userInfo = credentials.dataForDispatch;

    try {
      const data = await axios.put('/users/current/:id', userInfo, {
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
