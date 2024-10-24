import { createSlice } from '@reduxjs/toolkit';
import {
  signup,
  signin,
  logout,
  refreshUser,
  forgotPassword,
} from './operations';

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
      .addCase(signup.pending, state => {
        state.isRefreshing = true;
        state.isLoggedIn = false;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(signup.rejected, state => {
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
      })
      .addCase(forgotPassword.pending, state => {
        state.isRefreshing = true;
        state.isLoggedIn = false;
        state.loading = true;
        state.error = false;
      })
      .addCase(forgotPassword.fulfilled, state => {
        state.loading = false;
        state.isRefreshing = false;
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.loading = false;
        state.isRefreshing = false;
        state.error = action.payload;
      });
  },
});

export default slice.reducer;
