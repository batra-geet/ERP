import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  profile: null,
  preferences: {
    theme: 'light',
    notifications: true,
  },
  loading: false,
  error: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setProfile: (state, action) => {
      state.profile = action.payload
    },
    toggleTheme: (state) => {
      state.preferences.theme = state.preferences.theme === 'light' ? 'dark' : 'light'
    },
    setNotifications: (state, action) => {
      state.preferences.notifications = action.payload
    },
    clearUserState: (state) => {
      state.profile = null
      state.loading = false
      state.error = null
    },
  },
})

export const { setProfile, toggleTheme, setNotifications, clearUserState } = userSlice.actions

// Selectors
export const selectUserProfile = (state) => state.user.profile
export const selectThemeMode = (state) => state.user.preferences.theme
export const selectNotificationsEnabled = (state) => state.user.preferences.notifications

export default userSlice.reducer
