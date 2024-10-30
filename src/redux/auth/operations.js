import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

axios.defaults.baseURL = 'https://waterapp-hfy2.onrender.com/';
axios.defaults.withCredentials = true;

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
      const errorMessage =
        error.response?.data?.message ||
        'Registration failed. Please try again.';
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
    const response = await axios.post('auth/refresh');
    setAuthHead(response.data.token);
    return response.data;
  },
  {
    condition: (_, thunkAPI) => {
      const reduxState = thunkAPI.getState();
      return reduxState.auth.token !== null;
    },
  }
);

export const forgotPassword = createAsyncThunk(
  'auth/send-reset-email',
  async (user, thunkAPI) => {
    try {
      const response = await axios.post('auth/send-reset-email', {
        email: user.email,
      });
      setAuthHead(response.data.token);
      toast.success('Reset password email was successfully sent.');
      return response.data;
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || 'Reset password failed, try again.';
      toast.error(errorMessage);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const resetPassword = createAsyncThunk(
  'auth/reset-pwd',
  async ({ password, token }, thunkAPI) => {
    try {
      const response = await axios.post('auth/reset-pwd', { password, token });
      setAuthHead(response.data.token);
      toast.success('Password has been successfully reset.');
      return response.data;
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || 'Reset password failed, try again.';
      toast.error(errorMessage);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);
