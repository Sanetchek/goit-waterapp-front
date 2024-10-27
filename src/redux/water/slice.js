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
        const notes = [...state.today.notes]; // Make a copy of current notes
        notes.push(action.payload.data);

        // Recalculate totalAmount from updated notes array
        const totalAmount = notes.reduce((sum, note) => sum + note.amount, 0);
        const dailyNorm = action.payload.data.dailyNorm || state.today.dailyNorm; // Use existing dailyNorm if not provided in payload

        // Calculate percentage only if dailyNorm is a valid number
        const percentage = dailyNorm ? ((totalAmount / dailyNorm) * 100) : null;

        // Update state with recalculated values
        state.today = {
          percentage: percentage !== undefined ? percentage : state.today.percentage,
          totalAmount: totalAmount || state.today.totalAmount,
          dailyNorm: dailyNorm || state.today.dailyNorm,
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
        const updatedNote = action.payload.data;
        const {
          _id,
          dailyNorm
        } = updatedNote;

        // Check if note with the same _id already exists
        const noteIndex = state.today.notes.findIndex(note => note._id === _id);

        if (noteIndex !== -1) {
          // Update the existing note if found
          state.today.notes[noteIndex] = updatedNote;
        } else {
          // Otherwise, add the new note
          state.today.notes.push(updatedNote);
        }

        // Recalculate totalAmount from updated notes
        const totalAmount = state.today.notes.reduce((sum, note) => sum + note.amount, 0);

        // Recalculate percentage based on updated totalAmount and dailyNorm
        const percentage = dailyNorm ? ((totalAmount / dailyNorm) * 100).toFixed(2) : null;

        // Update the today state with recalculated values
        state.today = {
          ...state.today, // Preserve existing properties in today
          percentage: percentage !== undefined ? percentage : null,
          totalAmount: totalAmount || null,
          dailyNorm: dailyNorm || null,
          notes: [...state.today.notes], // Ensure a new array reference for notes
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

        const notes = [...state.today.notes];

        // Recalculate totalAmount from updated notes array
        const totalAmount = notes.reduce((sum, note) => sum + note.amount, 0);
        const dailyNorm = action.payload.data.dailyNormWater || state.today.dailyNorm; // Use existing dailyNorm if not provided in payload

        // Calculate percentage only if dailyNorm is a valid number
        const percentage = dailyNorm ? ((totalAmount / dailyNorm) * 100) : null;

        // Update state with recalculated values
        state.today = {
          percentage: percentage !== undefined ? percentage : state.today.percentage,
          totalAmount: totalAmount || state.today.totalAmount,
          dailyNorm: dailyNorm || state.today.dailyNorm,
          notes,
        };
        state.isLoading = false;
      })
      .addCase(updateDailyWaterNorm.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(logout.fulfilled, state => {
        state.volumes = [];
        state.today = {};
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
