// Selector para obtener el estado de inicio de sesión
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

// Selector para obtener la información del usuario
export const selectUser = (state) => state.auth.user;

// Selector para obtener el token de autenticación
export const selectToken = (state) => state.auth.token;
