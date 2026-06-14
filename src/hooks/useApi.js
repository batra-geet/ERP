import { useState, useCallback } from 'react'
import { parseError } from '@/api/errorHandler'

export const useApi = (apiFunc) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const execute = useCallback(
    async (...args) => {
      setLoading(true)
      setError(null)
      try {
        const result = await apiFunc(...args)
        setData(result)
        return result
      } catch (err) {
        const parsed = parseError(err)
        setError(parsed)
        throw new Error(parsed)
      } finally {
        setLoading(false)
      }
    },
    [apiFunc]
  )

  const reset = useCallback(() => {
    setData(null)
    setLoading(false)
    setError(null)
  }, [])

  return {
    data,
    loading,
    error,
    execute,
    reset,
  }
}
