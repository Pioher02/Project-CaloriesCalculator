export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectUser = state => state.auth.user;

export const selectUserName = state => state.auth.user.name;

// Selector para obtener el token de autenticación
export const selectToken = state => state.auth.token;

// Crea un selector para obtener los alimentos no permitidos del estado de Redux
export const selectNotAllowedFoods = (state) => state.food; 
