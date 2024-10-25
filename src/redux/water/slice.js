import {
  createSlice
} from '@reduxjs/toolkit';
import {
  addWaterVolume,
  fetchWaterVolumes,
  fetchTodayWaterConsumption,
  fetchMonthlyWaterConsumption,
  updateWaterVolume,
  deleteWaterVolume,
  updateDailyWaterNorm,
} from './operations';
import {
  logout
} from '../auth/operations';

const waterSlice = createSlice({
  name: 'water',
  initialState: {
    volumes: [],
    today: {},
    dailyNorm: null,
    todayConsumption: null, // New state to store today's consumption
    monthlyConsumption: null, // New state to store monthly consumption
    isLoading: false,
    error: null,
    addWaterModalOpen: false, // Modal for adding water
    editWaterModalOpen: false, // Modal for editing water
    currentWaterVolume: null, // Volume of water currently being edited
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
    updateWaterNotes(state, action) {
      const { id, notes } = action.payload;
      const volume = state.volumes.find(volume => volume.id === id || volume._id === id);
      if (volume) {
        volume.notes = notes; // Update the notes for the specific volume
      }
    },
    addWaterNote(state, action) {
      const { note } = action.payload;
      state.today.notes.push(note); // Add a new note to today's notes
    },
    deleteWaterNote(state, action) {
      const { noteId } = action.payload;
      state.today.notes = state.today.notes.filter(note => note.id !== noteId); // Remove the note by ID
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
      .addCase(fetchTodayWaterConsumption.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchTodayWaterConsumption.fulfilled, (state, action) => {
        state.today = action.payload.data;
        state.todayConsumption = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchTodayWaterConsumption.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchMonthlyWaterConsumption.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchMonthlyWaterConsumption.fulfilled, (state, action) => {
        state.monthlyConsumption = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchMonthlyWaterConsumption.rejected, (state, action) => {
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
      })
      .addCase(logout.fulfilled, state => {
        state.volumes = [];
        state.dailyNorm = null;
        state.todayConsumption = null;
        state.monthlyConsumption = null;
        state.isLoading = false;
        state.error = null;
        state.addWaterModalOpen = false;
        state.editWaterModalOpen = false;
        state.currentWaterVolume = null;
      });
  },
});

export const {
  openAddWaterModal,
  closeAddWaterModal,
  openEditWaterModal,
  closeEditWaterModal,
  addWaterNote,
  deleteWaterNote,
} = waterSlice.actions;

export const waterReducer = waterSlice.reducer;
