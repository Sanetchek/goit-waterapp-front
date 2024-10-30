export const selectIsAuthenticated = state => state.auth.isLoggedIn;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectToken = state => state.auth.token;

export const selectAuthError = state => state.auth?.error;
export const selectAuthLoading = state => state.auth?.loading;

export const selectUser = state => state.auth.user;

export const selectUserId = state => state.auth.user._id;
export const selectUserName = state => state.auth?.user?.name || '';
export const selectUserDailyNormWater = state => state.auth.user.dailyNormWater;
export const selectUserEmail = state => state.auth.user.email;
export const selectUserGender = state => state.auth.user.gender;
export const selectUserSportTime = state => state.auth.user.sportTime;
export const selectUserThemeColor = state => state.auth.user.themeColor;
export const selectUserWeight = state => state.auth.user.weight;
export const selectUserAvatar = state => state.auth?.user?.avatar || null;

export const selectPasswordReset = state => state.auth.resetPassword;
