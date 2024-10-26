import axios from 'axios';
import {
  createAsyncThunk
} from '@reduxjs/toolkit';
import {
  toast
} from 'react-hot-toast';

// Fetch all water volumes
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

// Fetch today's water consumption
export const fetchTodayWaterConsumption = createAsyncThunk(
  'water/fetchTodayConsumption',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/water/today');
      return response.data;
    } catch (error) {
      toast.error('Failed to fetch today\'s water consumption.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Fetch monthly water consumption by year and month
export const fetchMonthlyWaterConsumption = createAsyncThunk(
  'water/fetchMonthlyConsumption',
  async ({
    year,
    month
  }, thunkAPI) => {
    try {
      const response = await axios.get(`/water/month/${year}/${month}`);
      return response.data;
    } catch (error) {
      toast.error('Failed to fetch monthly water consumption.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Add water volume
export const addWaterVolume = createAsyncThunk(
  'water/addVolume',
  async (volumeData, thunkAPI) => {
    try {
      const response = await axios.post('/water', volumeData);
      toast.success('Water volume added successfully.');
      return response.data;
    } catch (error) {
      console.error('Error adding water volume:', error.response.data);
      toast.error('Failed to add water volume.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Update water volume by ID
export const updateWaterVolume = createAsyncThunk(
  'water/updateVolume',
  async ({
    id,
    updatedData
  }, thunkAPI) => {
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

// Delete water volume by ID
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

// Update daily water norm
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
