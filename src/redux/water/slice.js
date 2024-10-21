import { createSlice } from '@reduxjs/toolkit';
import {
  addWaterVolume,
  fetchWaterVolumes,
  updateWaterVolume,
  deleteWaterVolume,
  updateDailyWaterNorm,
} from './operations';

const waterSlice = createSlice({
  name: 'water',
  initialState: {
    volumes: [],
    dailyNorm: null,
    isLoading: false,
    error: null,
    addWaterModalOpen: false, // Для модального вікна додавання води
    editWaterModalOpen: false, // Для модального вікна редагування води
    currentWaterVolume: null, // об'ем води який редагується
  },
  reducers: {
    openAddWaterModal(state) {
      state.addWaterModalOpen = true;
    },
    closeAddWaterModal(state) {
      state.addWaterModalOpen = false;
    },
    openEditWaterModal(state, action) {
      state.editWaterModalOpen = true;
      state.currentWaterVolume = action.payload;
    },
    closeEditWaterModal(state) {
      state.editWaterModalOpen = false;
      state.currentWaterVolume = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchWaterVolumes.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchWaterVolumes.fulfilled, (state, action) => {
        state.volumes = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchWaterVolumes.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addWaterVolume.fulfilled, (state, action) => {
        state.volumes.push(action.payload);
      })
      .addCase(updateWaterVolume.fulfilled, (state, action) => {
        const index = state.volumes.findIndex(
          volume =>
            volume.id === action.payload.id || volume._id === action.payload._id
        );
        if (index !== -1) {
          state.volumes[index] = action.payload;
        }
      })
      .addCase(deleteWaterVolume.fulfilled, (state, action) => {
        state.volumes = state.volumes.filter(
          volume =>
            volume.id !== action.payload && volume._id !== action.payload
        );
      })
      .addCase(updateDailyWaterNorm.fulfilled, (state, action) => {
        state.dailyNorm = action.payload.dailyNorm;
      });
  },
});

export const {
  openAddWaterModal,
  closeAddWaterModal,
  openEditWaterModal,
  closeEditWaterModal,
} = waterSlice.actions;

export const waterReducer = waterSlice.reducer;
