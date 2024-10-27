// redux/slice.js
import {
  createSlice
} from '@reduxjs/toolkit';
import {
  updateUser,
  updateAvatar,
  getUser
} from './operations';
import {
  logout
} from '../auth/operations';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      // Get user by ID
      .addCase(getUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Update user profile
      .addCase(updateUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        console.log(action.payload);
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Update avatar
      .addCase(updateAvatar.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateAvatar.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(updateAvatar.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(logout.fulfilled, state => {
        state.user = null;
        state.loading = false;
        state.error = null;
      });
  },
});

export default userSlice.reducer;
