import { ENV } from '@/config/env'
import { handleApiError } from './errorHandler'
import { store } from '@/store'
import { logout, updateTokens } from '@/store/slices/authSlice'

const DEFAULT_TIMEOUT = 10000 // 10s

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

async function request(path, options = {}) {
  const {
    method = 'GET',
    headers = {},
    body = null,
    timeout = DEFAULT_TIMEOUT,
    retries = 2,
    retryDelay = 1000,
    skipAuth = false,
  } = options

  const state = store.getState()
  const token = state.auth?.accessToken

  const controller = new AbortController()
  const id = setTimeout(() => controller.abort(), timeout)

  const config = {
    method,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      ...headers,
    },
    signal: controller.signal,
  }

  if (token && !skipAuth) {
    config.headers['Authorization'] = `Bearer ${token}`
  }

  if (body) {
    config.body = typeof body === 'string' ? body : JSON.stringify(body)
  }

  const url = `${ENV.API_URL}${path}`

  try {
    let response = await fetch(url, config)
    clearTimeout(id)

    if (response.status === 401 && !skipAuth) {
      const refreshed = await attemptTokenRefresh()
      if (refreshed) {
        const newAccessToken = store.getState().auth?.accessToken
        config.headers['Authorization'] = `Bearer ${newAccessToken}`

        const retryController = new AbortController()
        const retryId = setTimeout(() => retryController.abort(), timeout)
        config.signal = retryController.signal

        response = await fetch(url, config)
        clearTimeout(retryId)
      } else {
        store.dispatch(logout())
        throw new Error('Your session has expired. Please log in again.')
      }
    }

    if (!response.ok) {
      const errorMsg = handleApiError(response)
      let errorBody = {}
      try {
        errorBody = await response.json()
      } catch {
        // Ignore JSON parsing errors for non-JSON responses
      }
      throw new Error(errorBody.message || errorMsg)
    }

    const contentType = response.headers.get('content-type')
    if (contentType && contentType.includes('application/json')) {
      return await response.json()
    }
    return await response.text()
  } catch (error) {
    clearTimeout(id)

    if (error.name === 'AbortError') {
      throw new Error(`Request timeout: Exceeded ${timeout}ms`)
    }

    if (retries > 0 && error.message !== 'Your session has expired. Please log in again.') {
      console.warn(`Request failed. Retrying... (${retries} retries left). Error: ${error.message}`)
      await wait(retryDelay)
      return request(path, { ...options, retries: retries - 1 })
    }

    throw error
  }
}

async function attemptTokenRefresh() {
  const state = store.getState()
  const refreshToken = state.auth?.refreshToken

  if (!refreshToken) return false

  try {
    const response = await fetch(`${ENV.API_URL}/auth/refresh`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ refreshToken }),
    })

    if (response.ok) {
      const data = await response.json()
      store.dispatch(
        updateTokens({
          accessToken: data.accessToken,
          refreshToken: data.refreshToken || refreshToken,
        })
      )
      return true
    }
  } catch (e) {
    console.error('Token refresh failed:', e)
  }

  return false
}

export const api = {
  get: (path, options) => request(path, { ...options, method: 'GET' }),
  post: (path, body, options) => request(path, { ...options, method: 'POST', body }),
  put: (path, body, options) => request(path, { ...options, method: 'PUT', body }),
  delete: (path, options) => request(path, { ...options, method: 'DELETE' }),
}
