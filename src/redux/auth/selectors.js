export const selectIsLoggedIn = state => state.auth.isLoggedin; //usado

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectUser = state => state.auth.user;

export const selectUserName = state => state.auth.user.username;

export const selectUserBloodType = state => state.auth.user.bloodType;

// Selector para obtener el token de autenticación
export const selectToken = state => state.auth.token; //usado

// Crea un selector para obtener los alimentos no permitidos del estado de Redux usado
export const selectNotAllowedFoods = state => state.food; 
