export const parseError = (error) => {
  if (error && error.message === 'Failed to fetch') {
    return 'Network error: Please check your internet connection.'
  }
  return error?.message || 'An unexpected error occurred. Please try again.'
}

export const handleApiError = (response) => {
  const status = response.status
  switch (status) {
    case 400:
      return 'Bad Request: The server could not understand the request.'
    case 401:
      return 'Unauthorized: Your session has expired or credentials are invalid.'
    case 403:
      return 'Forbidden: You do not have permission to access this resource.'
    case 404:
      return 'Not Found: The requested resource could not be found.'
    case 500:
      return 'Internal Server Error: Something went wrong on the server.'
    case 503:
      return 'Service Unavailable: The server is temporarily unable to handle the request.'
    default:
      return `Error: Unexpected status code ${status}`
  }
}
