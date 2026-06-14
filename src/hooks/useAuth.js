import { useSelector, useDispatch } from 'react-redux'
import {
  loginThunk,
  logout,
  clearAuthError,
  selectCurrentUser,
  selectIsAuthenticated,
  selectAuthLoading,
  selectAuthError,
} from '@/store/slices/authSlice'

export const useAuth = () => {
  const dispatch = useDispatch()
  const user = useSelector(selectCurrentUser)
  const isAuthenticated = useSelector(selectIsAuthenticated)
  const loading = useSelector(selectAuthLoading)
  const error = useSelector(selectAuthError)

  const login = async (credentials) => {
    return dispatch(loginThunk(credentials)).unwrap()
  }

  const logoutUser = () => {
    dispatch(logout())
  }

  const clearError = () => {
    dispatch(clearAuthError())
  }

  return {
    user,
    isAuthenticated,
    loading,
    error,
    login,
    logout: logoutUser,
    clearError,
  }
}
