import { createSlice } from '@reduxjs/toolkit';
import {
  signup,
  signin,
  logout,
  refreshUser,
  forgotPassword,
  resetPassword,
} from './operations';

const slice = createSlice({
  name: 'auth',
  initialState: {
    user: {},
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    loading: false,
    error: null,
    resetPassword: false,
  },
  extraReducers: builder => {
    builder
      .addCase(signup.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(signup.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = action.payload || 'Signup failed';
      })
      .addCase(signin.pending, state => {
        state.isRefreshing = true;
        state.loading = true;
        state.error = null;
      })
      .addCase(signin.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.resetPassword = false;
      })
      .addCase(signin.rejected, (state, action) => {
        state.loading = false;
        state.isRefreshing = false;
        state.error = action.payload || 'Signin failed';
      })
      .addCase(logout.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.user = {};
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
      })
      .addCase(logout.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = action.payload || 'Logout failed';
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.user = {};
        state.token = null;
        state.isLoggedIn = false;
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
      })
      .addCase(resetPassword.pending, state => {
        state.isRefreshing = true;
        state.isLoggedIn = false;
        state.loading = true;
        state.error = false;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.isRefreshing = false;
        state.resetPassword = true;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.loading = false;
        state.isRefreshing = false;
        state.error = action.payload;
        state.resetPassword = false;
      });
  },
});

export default slice.reducer;
