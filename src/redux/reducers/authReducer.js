import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from '../actions/authActions'; //Accopmes de autenticación

// Definir el estado inicial del slice de autenticación
const initialState = {
  user: { name: null, email: null },
  token: null,
  isloggedin: false,
  isRefreshing: false,
};

// Crear un slice de Redux para el estado de autenticación
const authSlice = createSlice({
  name: 'auth', // Nombre del slice
  initialState, // Estado inicial
  reducers: {}, // Reductores sincrónicos (ninguno en este caso)
  extraReducers: (builder) => {
    builder
      // Reductor para la acción de registro completada con éxito
      .addCase(register.fulfilled, (state, action) => {
        // Actualizar el estado con los datos del usuario y el token
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isloggedin = true;
      })
      // Reductor para la acción de inicio de sesión completada con éxito
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isloggedin = true;
      })
      // Reductor para la acción de cierre de sesión completada con éxito
      .addCase(logOut.fulfilled, (state, action) => {
        // Restablecer el estado de usuario, token e indicador de inicio de sesión
        state.user = { name: null, email: null };
        state.token = null;
        state.isloggedin = false;
      })
      // Reductor para la acción de actualización de usuario en curso
      .addCase(refreshUser.pending, (state) => {
        // Establecer el indicador de actualización en verdadero
        state.isRefreshing = true;
      })
      // Reductor para la acción de actualización de usuario completada con éxito
      .addCase(refreshUser.fulfilled, (state, action) => {
        // Actualizar el estado con los nuevos datos del usuario, indicar que el usuario está conectado y restablecer el indicador de actualización
        state.user = action.payload;
        state.isloggedin = true;
        state.isRefreshing = false;
      })
      // Reductor para la acción de actualización de usuario rechazada o fallida
      .addCase(refreshUser.rejected, (state) => {
        // Restablecer el indicador de actualización en falso
        state.isRefreshing = false;
      });
  },
});

// Exportar el reductor generado por createSlice
export const authReducer = authSlice.reducer;

// Exportar el reductor por defecto para su uso en la configuración de Redux
export default authReducer;
