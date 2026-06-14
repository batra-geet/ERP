import { userApiService } from '@/api/apiService'

export const userService = {
  getUsers: (page, limit, search) => userApiService.getUsers(page, limit, search),
  getUserById: (id) => userApiService.getUserById(id),
  updateUser: (id, data) => userApiService.updateUser(id, data),
  deleteUser: (id) => userApiService.deleteUser(id),
}
