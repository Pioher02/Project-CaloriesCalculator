import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseURL } from 'helpers/constants';

axios.defaults.baseURL = baseURL;
axios.defaults.withCredentials = true;

//Obtiene productos permitidos
export const getProductsAllows = createAsyncThunk(
  'products/fetchProductsAllows',
  async (bloodType, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/allowed-foods/${bloodType}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//Guarda productos consumidos
export const keepConsumeProducts = createAsyncThunk(
  'diary/consumeProducts',
  async (credentials, { rejectWithValue }) => {
    const token = credentials.token;
    const consumeProducts = credentials.dataForDispatch;

    try {
      const result = await axios.post('/users/current', consumeProducts, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return result.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//Obtiene productos consumidos
export const getConsumes = createAsyncThunk(
  'diary/dayinfo',
  async (credentials, { rejectWithValue }) => {
    const token = credentials.token;
    const dateConsume = credentials.registerDate;

    try {
      const result = await axios.get(`/diary/${dateConsume}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return result.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//Borra productos consumidos
export const deleteConsume = createAsyncThunk(
  'products/removeItem',
  async (credentials, { rejectWithValue }) => {
    const token = credentials.token;
    const date = credentials.registerDate;
    const consumeInfo = { index: credentials.index };
    console.log(consumeInfo);

    try {
      const result = await axios.put(`/diary/${date}`, consumeInfo, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return result.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
