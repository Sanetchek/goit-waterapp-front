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
      .addCase(addWaterVolume.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addWaterVolume.fulfilled, (state, action) => {
        state.volumes.push(action.payload);
        const notes = state.today.notes;
        notes.push(action.payload.data);

        const totalAmount = notes.reduce((sum, note) => sum + note.amount, 0);
        const dailyNorm = action.payload.dailyNorm;

        // Check if totalAmount and dailyNorm are valid numbers
        const percentage = dailyNorm ? ((totalAmount / dailyNorm) * 100).toFixed(2) : null;

        // Set state with appropriate values
        state.today = {
          percentage: percentage !== undefined ? percentage : null,
          totalAmount: totalAmount || null,
          dailyNorm: dailyNorm || null,
          notes,
        };
        state.isLoading = false;
      })
      .addCase(addWaterVolume.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updateWaterVolume.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateWaterVolume.fulfilled, (state, action) => {
        const index = state.volumes.findIndex(
          volume =>
          volume.id === action.payload.id || volume._id === action.payload._id
        );
        if (index !== -1) {
          state.volumes[index] = action.payload;
        }

        const notes = state.today.notes;
        notes.push(action.payload.data);

        const totalAmount = notes.reduce((sum, note) => sum + note.amount, 0);
        const dailyNorm = action.payload.dailyNorm;

        // Check if totalAmount and dailyNorm are valid numbers
        const percentage = dailyNorm ? ((totalAmount / dailyNorm) * 100).toFixed(2) : null;

        // Set state with appropriate values
        state.today = {
          percentage: percentage !== undefined ? percentage : null,
          totalAmount: totalAmount || null,
          dailyNorm: dailyNorm || null,
          notes,
        };
        state.isLoading = false;
      })
      .addCase(updateWaterVolume.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteWaterVolume.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteWaterVolume.fulfilled, (state, action) => {
        // Filter out the deleted water volume from the volumes array
        state.volumes = state.volumes.filter(
          volume => volume.id !== action.payload && volume._id !== action.payload
        );

        // Find the ID of the note to delete from today's notes
        const noteIdToDelete = action.payload; // Assuming action.payload contains the note ID to delete

        // Remove the note from today's notes
        const updatedNotes = state.today.notes.filter(note => note._id !== noteIdToDelete);

        // Calculate the total amount from the updated notes
        const totalAmount = updatedNotes.reduce((sum, note) => sum + note.amount, 0);
        const dailyNorm = state.today.dailyNorm; // Ensure you're using the correct dailyNorm

        // Check if dailyNorm is valid and calculate percentage
        const percentage = dailyNorm ? ((totalAmount / dailyNorm) * 100).toFixed(2) : null;

        // Set state with appropriate values
        state.today = {
          percentage: percentage !== undefined ? percentage : null,
          totalAmount: totalAmount || null,
          dailyNorm: dailyNorm || null,
          notes: updatedNotes, // Update the notes to the filtered notes
        };

        state.isLoading = false;
      })
      .addCase(deleteWaterVolume.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updateDailyWaterNorm.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateDailyWaterNorm.fulfilled, (state, action) => {
        state.dailyNorm = action.payload.dailyNorm;
        state.isLoading = false;
      })
      .addCase(updateDailyWaterNorm.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
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
