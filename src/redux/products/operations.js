import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001/api';
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
      console.log(result);
      return result.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchsideBarInfo = createAsyncThunk(
  'diary/dayinfo',
  async (_, { rejectWithValue }) => {
    try {
      const result = await axios.get('/diary/dayinfo');
      return result.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);



export const removeDiaryListItem = createAsyncThunk(
  'products/removeItem',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/diary/${id}`);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addDiaryListItem = createAsyncThunk(
  'products/addItem',
  async (product, { rejectWithValue }) => {
    try {
      const result = await axios.post(`/diary/${product.date}`, { ...product });
      return result.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
