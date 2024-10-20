import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

axios.defaults.baseURL = 'https://waterapp-hfy2.onrender.com/';

const setAuthHead = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const register = createAsyncThunk(
  'auth/register',
  async (newUser, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', newUser);

      setAuthHead(response.data.token);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signin = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  try {
    const response = await axios.post('/auth/login', user);

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
    const response = await axios.post('/users/logout');

    setAuthHead('');

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const reduxState = thunkAPI.getState();
    const token = reduxState.auth.token;

    setAuthHead(token);

    try {
      const response = await axios.get('/users/current');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, thunkAPI) => {
      const reduxState = thunkAPI.getState();
      return reduxState.auth.token !== null;
    },
  }
);
