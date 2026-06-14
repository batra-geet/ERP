import { authApiService } from '@/api/apiService'

export const authService = {
  login: (credentials) => authApiService.login(credentials),
  logout: () => authApiService.logout(),
  getCurrentUser: () => authApiService.getCurrentUser(),
}
