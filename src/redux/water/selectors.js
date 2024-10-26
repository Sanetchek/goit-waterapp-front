import { createSelector } from "@reduxjs/toolkit";

export const selectWaterVolumes = state => state.water.volumes;

export const selectIsLoading = state => state.water.isLoading;

export const selectError = state => state.water.error;

export const selectDailyNorm = state => state.water.dailyNorm;

export const selectTodaysWaterNotes = state => state.water.today.notes;

export const selectTodaysWaterPercentage = state => state.water.today.percentage;

export const selectTodaysWaterAmount = state => state.water.today.totalAmount;

export const selectVisibleWaterNotes = createSelector(
  [selectTodaysWaterNotes],
  (notes) => {
    return notes.slice().sort((a, b) => new Date(a.date) - new Date(b.date));
  }
);

