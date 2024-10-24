import axios from 'axios';
import {
  createAsyncThunk
} from '@reduxjs/toolkit';
import {
  toast
} from 'react-hot-toast';

axios.defaults.baseURL = 'https://waterapp-hfy2.onrender.com/';

const setAuthHead = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const signup = createAsyncThunk(
  'auth/register',
  async (newUser, thunkAPI) => {
    try {
      const response = await axios.post('auth/register', newUser);
      setAuthHead(response.data.token);
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Registration failed. Please try again.';
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const signin = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  try {
    const response = await axios.post('auth/login', user);
    setAuthHead(response.data.token);
    return response.data;
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || 'Login failed, try again.';
    toast.error(errorMessage);
    return thunkAPI.rejectWithValue(errorMessage);
  }
});

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const response = await axios.post('auth/logout');
    setAuthHead(null); // Use null to clear the auth header
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || 'Logout failed';
    return thunkAPI.rejectWithValue(errorMessage);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const reduxState = thunkAPI.getState();
    const token = reduxState.auth.token;

    if (!token) {
      return thunkAPI.rejectWithValue('No valid token');
    }

    setAuthHead(token);

    try {
      const response = await axios.get('auth/refresh');
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Token refresh failed';
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);
