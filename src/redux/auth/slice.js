import {
  createSlice
} from '@reduxjs/toolkit';
import {
  signup,
  signin,
  logout,
  refreshUser
} from './operations';

const slice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: null,
      email: null,
      gender: null,
      weight: null,
      sportTime: null,
      dailyNormWater: null,
      themeColor: null,
      avatar: null,
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
        state.user = {
          name: null,
          email: null,
          gender: null,
          weight: null,
          sportTime: null,
          dailyNormWater: null,
          themeColor: null,
          avatar: null,
        };
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
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      });
  },
});

export default slice.reducer;
