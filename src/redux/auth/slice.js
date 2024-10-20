import { createSlice } from '@reduxjs/toolkit';
import { register, signin, logout, refreshUser } from './operations';

const slice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    loading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
        state.isRefreshing = true;
        state.isLoggedIn = false;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(register.rejected, state => {
        state.isRefreshing = false;
        state.error = true;
      })
      .addCase(signin.pending, state => {
        state.isRefreshing = true;
        state.isLoggedIn = false;
        state.loading = true;
        state.error = false;
      })
      .addCase(signin.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(signin.rejected, state => {
        state.loading = false;
        state.isRefreshing = false;
        state.error = true;
      })
      .addCase(logout.pending, state => {
        state.isRefreshing = true;
        state.isLoggedIn = false;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.user = [];
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
      })
      .addCase(logout.rejected, state => {
        state.isRefreshing = false;
        state.error = true;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      });
  },
});

export default slice.reducer;
