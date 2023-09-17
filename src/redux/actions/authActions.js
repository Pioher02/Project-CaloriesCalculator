import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

// Configuración de la URL base para las solicitudes Axios
axios.defaults.baseURL = 'http://localhost:3000/api';

// Función para configurar el encabezado de autorización con el token
const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Función para eliminar el encabezado de autorización
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

// Crear una acción asincrónica de registro utilizando createAsyncThunk
export const register = createAsyncThunk(
  'auth/register', // Etiqueta única para identificar esta acción
  async (credentials, thunkAPI) => {
    try {
      // Realizar una solicitud POST para registrar al usuario
      const response = await axios.post('/users/register', credentials);
      // Configurar el encabezado de autorización con el token de respuesta
      setAuthHeader(response.data.token);
      // Mostrar una notificación de éxito
      toast.success('¡Registro exitoso! Redirigiendo...');
      // Devolver los datos de respuesta
      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 409) {
        // El usuario ya existe, muestra una notificación
        toast.error('El usuario ya existe. Por favor, inicia sesión o usa otro correo electrónico.');
      } else {
        // Mostrar un mensaje de error genérico
        toast.error(`${error.message}`);
      }
      // Rechazar la acción con el valor del error
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Crear una acción asincrónica de inicio de sesión utilizando createAsyncThunk
export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      // Realizar una solicitud POST para iniciar sesión
      const response = await axios.post('/users/login', credentials);
      // Configurar el encabezado de autorización con el token de respuesta
      setAuthHeader(response.data.token);
      // Mostrar una notificación de éxito
      toast.success('¡Bienvenido de nuevo!');
      // Devolver los datos de respuesta
      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 401) {
        // Credenciales incorrectas, muestra una notificación
        toast.error('Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.');
      } else {
        // Mostrar un mensaje de error genérico
        toast.error(`${error.message}`);
      }
      // Rechazar la acción con el valor del error
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      // Realizar una solicitud POST para cerrar sesión en el backend
      await axios.post('/api/users/logout'); // Asegúrate de que la ruta sea la correcta
      // Eliminar el encabezado de autorización
      clearAuthHeader();
      // Devolver un objeto vacío (no se necesita response.data aquí)
      return {};
    } catch (error) {
      // Mostrar un mensaje de error genérico
      toast.error(`${error.message}`);
      // Rechazar la acción con el valor del error
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Crear una acción asincrónica para actualizar los datos del usuario utilizando createAsyncThunk
export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    // Obtener el estado actual
    const state = thunkAPI.getState();
    // Obtener el token almacenado en el estado
    const persistedToken = state.auth.token;

    // Verificar si hay un token almacenado
    if (!persistedToken) {
      // Si no hay token, rechazar la acción con un mensaje de error
      return thunkAPI.rejectWithValue('No se pudo obtener el usuario');
    }

    // Configurar el encabezado de autorización con el token almacenado
    setAuthHeader(persistedToken);

    try {
      // Realizar una solicitud GET para actualizar los datos del usuario
      const res = await axios.get('/auth/refresh');
      // Devolver los datos de respuesta (res.data en lugar de response.data)
      return res.data;
    } catch (error) {
      // Rechazar la acción con el valor del error
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
