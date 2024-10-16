import { createSlice } from "@reduxjs/toolkit"
import {
  register,
  login,
  logout,
  refreshUser
} from "./operations"

const slice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isRefreshing = true
        state.isLoggedIn = false
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user
        state.token = action.payload.token
        state.isLoggedIn = true
        state.isRefreshing = false
      })
      .addCase(register.rejected, (state) => {
        state.isRefreshing = false
        state.error = true
      })
      .addCase(login.pending, (state) => {
        state.isRefreshing = true
        state.isLoggedIn = false
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user
        state.token = action.payload.token
        state.isLoggedIn = true
        state.isRefreshing = false
      })
      .addCase(login.rejected, (state) => {
        state.isRefreshing = false
        state.error = true
      })
      .addCase(logout.pending, (state) => {
        state.isRefreshing = true
        state.isLoggedIn = false
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.user = []
        state.token = null
        state.isLoggedIn = false
        state.isRefreshing = false
      })
      .addCase(logout.rejected, (state) => {
        state.isRefreshing = false
        state.error = true
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true
        state.isLoggedIn = false
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload
        state.isLoggedIn = true
        state.isRefreshing = false
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false
      })
  }
})

export default slice.reducer;