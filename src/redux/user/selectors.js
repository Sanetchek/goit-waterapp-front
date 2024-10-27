import {
  createSelector
} from "@reduxjs/toolkit";

export const selectUser = state => state.user;

export const selectLoading = state => state.user.loading;

export const selectError = state => state.user.error;

export const selectVisibleUser = createSelector(
  [selectUser],
  (user) => {
    return user;
  }
);
