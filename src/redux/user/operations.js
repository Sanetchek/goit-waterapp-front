import {
  createAsyncThunk
} from '@reduxjs/toolkit';
import axios from 'axios';

// Fetch user by ID
export const getUser = createAsyncThunk(
  'user/getUser',
  async (userId, thunkAPI) => {
    try {
      const response = await axios.get(`/user/${userId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

// Update user profile
export const updateUser = createAsyncThunk(
  'user/updateUser',
  async ({
    userId,
    userData
  }, thunkAPI) => {
    try {
      const response = await axios.put(`/user/${userId}`, userData);
      return response.data;
    } catch (error) {
      console.error('Update user error:', error);
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

// Update avatar
export const updateAvatar = createAsyncThunk(
  'user/updateAvatar',
  async ({
    userId,
    avatarFile
  }, thunkAPI) => {
    try {
      const formData = new FormData();
      formData.append('avatar', avatarFile);

      const response = await axios.patch(`/user/${userId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);
