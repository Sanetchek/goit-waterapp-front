import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

axios.defaults.baseURL = 'http://localhost:5050/';

// Отримання усіх записів води
export const fetchWaterVolumes = createAsyncThunk(
  'water/fetchVolumes',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/water');
      return response.data;
    } catch (error) {
      toast.error('Failed to fetch water volumes.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Додавання води
export const addWaterVolume = createAsyncThunk(
  'water/addVolume',
  async (volumeData, thunkAPI) => {
    try {
      const response = await axios.post('/water', volumeData);
      toast.success('Water volume added successfully.');
      return response.data;
    } catch (error) {
      toast.error('Failed to add water volume.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// оновлення запису випитої води по айді
export const updateWaterVolume = createAsyncThunk(
  'water/updateVolume',
  async ({ id, updatedData }, thunkAPI) => {
    try {
      const response = await axios.patch(`/water/${id}`, updatedData);
      toast.success('Water volume updated successfully.');
      return response.data;
    } catch (error) {
      toast.error('Failed to update water volume.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// видалення запису про споживання води по айді
export const deleteWaterVolume = createAsyncThunk(
  'water/deleteVolume',
  async (id, thunkAPI) => {
    try {
      await axios.delete(`/water/${id}`);
      toast.success('Water volume deleted successfully.');
      return id;
    } catch (error) {
      toast.error('Failed to delete water volume.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// оновлення норми води  (dailyNorm)
export const updateDailyWaterNorm = createAsyncThunk(
  'water/updateDailyNorm',
  async (dailyNormData, thunkAPI) => {
    try {
      const response = await axios.patch('/water/rate', dailyNormData);
      toast.success('Daily water norm updated successfully.');
      return response.data;
    } catch (error) {
      toast.error('Failed to update daily water norm.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
