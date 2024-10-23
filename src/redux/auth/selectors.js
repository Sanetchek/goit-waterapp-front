export const selectIsAuthenticated = state => state.auth.isLoggedIn;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectToken = state => state.auth.token;

export const selectAuthError = state => state.auth.error;
export const selectAuthLoading = state => state.auth.loading;

export const selectUser = (state) => state.auth.user.userInfo;

export const selectUserAvatar = (state) => state.auth.user.userInfo.avatar;
