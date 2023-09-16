import { createSlice } from '@reduxjs/toolkit';
import { registration, login, logOut, refreshUser } from './operations';

const authInitialState = {
  user: { name: null, email: null },
  token: null,
  error: null,
  isLoggedIn: false,
  isLoading: false,
  isRefreshing: true, //se cambia
  formError: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    setFormError(state, { payload }) {
      state.formError = payload;
    },
    clearFormError(state) {
      state.formError = null;
    },
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(registration.pending, state => {
        state.isLoading = true;
      })
      .addCase(registration.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(registration.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(login.pending, state => {
        state.isLoading = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user = {
          name: null,
          email: null,
          data: null,
          calorie: null,
          notRecommendedProduct: null,
        };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isRefreshing = false;
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { clearError, clearFormError, setFormError } = authSlice.actions;
export const authReducer = authSlice.reducer;
