import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// Async Thunks
export const loginThunk = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      if (credentials.email === 'admin@example.com' && credentials.password === 'password') {
        return {
          user: {
            id: '1',
            name: 'Jane Doe',
            email: 'admin@example.com',
            role: 'Administrator',
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
          },
          accessToken: 'mock-access-token-12345',
          refreshToken: 'mock-refresh-token-67890',
        }
      } else {
        return rejectWithValue('Invalid email or password')
      }
    } catch (error) {
      return rejectWithValue(error.message || 'An error occurred during login')
    }
  }
)

const initialState = {
  user: null,
  accessToken: null,
  refreshToken: null,
  isAuthenticated: false,
  loading: false,
  error: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null
      state.accessToken = null
      state.refreshToken = null
      state.isAuthenticated = false
      state.loading = false
      state.error = null
    },
    updateTokens: (state, action) => {
      state.accessToken = action.payload.accessToken
      state.refreshToken = action.payload.refreshToken
    },
    clearAuthError: (state) => {
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload.user
        state.accessToken = action.payload.accessToken
        state.refreshToken = action.payload.refreshToken
        state.isAuthenticated = true
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

export const { logout, updateTokens, clearAuthError } = authSlice.actions

// Selectors
export const selectAuth = (state) => state.auth
export const selectCurrentUser = (state) => state.auth.user
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated
export const selectAuthLoading = (state) => state.auth.loading
export const selectAuthError = (state) => state.auth.error

export default authSlice.reducer
