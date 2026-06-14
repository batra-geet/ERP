import dayjs from 'dayjs'

export const formatDate = (date, format = 'MMM DD, YYYY') => {
  if (!date) return ''
  return dayjs(date).format(format)
}

export const formatCurrency = (amount, currency = 'USD', locale = 'en-US') => {
  if (amount === undefined || amount === null) return ''
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(amount)
}

export const debounce = (func, wait) => {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

export const parseError = (error) => {
  if (typeof error === 'string') return error
  return error?.message || 'Something went wrong. Please try again.'
}
