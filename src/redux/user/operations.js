import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Встановлюємо базову URL для всіх запитів
axios.defaults.baseURL = 'https://waterapp-hfy2.onrender.com/';

// Update user profile
export const updateUser = createAsyncThunk(
  '/user/userId',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.put('/user/userId', userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

// Update avatar
export const updateAvatar = createAsyncThunk(
  'user/updateAvatar',
  async (avatarUrl, { rejectWithValue }) => {
    try {
      const response = await axios.patch('/user/userId', { avatar: avatarUrl });
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);
