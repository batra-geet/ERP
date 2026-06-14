import { api } from './client'
import { ENDPOINTS } from './endpoints'

// Reusable mock data
const MOCK_USERS = [
  {
    id: 1,
    name: 'Jane Doe',
    email: 'admin@example.com',
    role: 'Administrator',
    status: 'Active',
    joined: '2024-01-15',
  },
  {
    id: 2,
    name: 'Alex Smith',
    email: 'alex.smith@example.com',
    role: 'Developer',
    status: 'Active',
    joined: '2024-02-10',
  },
  {
    id: 3,
    name: 'Michael Brown',
    email: 'michael.b@example.com',
    role: 'Manager',
    status: 'Inactive',
    joined: '2023-11-01',
  },
  {
    id: 4,
    name: 'Emily Davis',
    email: 'emily.d@example.com',
    role: 'Designer',
    status: 'Active',
    joined: '2024-03-22',
  },
  {
    id: 5,
    name: 'David Wilson',
    email: 'david.w@example.com',
    role: 'Developer',
    status: 'Active',
    joined: '2024-05-01',
  },
  {
    id: 6,
    name: 'Sarah Miller',
    email: 'sarah.m@example.com',
    role: 'HR Manager',
    status: 'Inactive',
    joined: '2023-08-14',
  },
]

export const authApiService = {
  login: async (credentials) => {
    // In production, we'd call the real endpoint:
    // return await api.post(ENDPOINTS.AUTH.LOGIN, credentials, { skipAuth: true })

    // For demo/boilerplate purposes, we check credentials and return mock values
    await new Promise((resolve) => setTimeout(resolve, 800))
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
    }
    throw new Error('Invalid email or password. Hint: admin@example.com / password')
  },

  logout: async () => {
    // return await api.post(ENDPOINTS.AUTH.LOGOUT)
    return { success: true }
  },

  getCurrentUser: async () => {
    return await api.get(ENDPOINTS.AUTH.ME)
  },
}

export const userApiService = {
  getUsers: async (page = 1, limit = 5, search = '') => {
    // In production, call:
    // return await api.get(`${ENDPOINTS.USERS.LIST}?page=${page}&limit=${limit}&search=${search}`)

    // Boilerplate simulated latency and mock data
    await new Promise((resolve) => setTimeout(resolve, 600))

    let filtered = [...MOCK_USERS]
    if (search) {
      filtered = filtered.filter(
        (u) =>
          u.name.toLowerCase().includes(search.toLowerCase()) ||
          u.email.toLowerCase().includes(search.toLowerCase()) ||
          u.role.toLowerCase().includes(search.toLowerCase())
      )
    }

    const total = filtered.length
    const start = (page - 1) * limit
    const end = start + limit
    const items = filtered.slice(start, end)

    return {
      items,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    }
  },

  getUserById: async (id) => {
    return await api.get(ENDPOINTS.USERS.DETAIL(id))
  },

  updateUser: async (id, data) => {
    await new Promise((resolve) => setTimeout(resolve, 500))
    return { id, ...data, success: true }
  },

  deleteUser: async (id) => {
    await new Promise((resolve) => setTimeout(resolve, 500))
    return { id, success: true }
  },
}
