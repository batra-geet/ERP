export const isEmail = (email) => {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  return re.test(String(email).toLowerCase())
}

export const isRequired = (value) => {
  if (value === undefined || value === null) return false
  if (typeof value === 'string' && value.trim() === '') return false
  return true
}

export const validatePassword = (password) => {
  if (!password) return 'Password is required'
  if (password.length < 6) return 'Password must be at least 6 characters'
  return null
}
