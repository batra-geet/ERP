import { useState, useCallback } from 'react'

export const usePagination = (initialPage = 1, initialLimit = 5) => {
  const [page, setPage] = useState(initialPage)
  const [limit, setLimit] = useState(initialLimit)
  const [total, setTotal] = useState(0)

  const handlePageChange = useCallback((_, newPage) => {
    // MUI pagination is 1-indexed, handlePageChange handles (event, page)
    setPage(newPage)
  }, [])

  const handleLimitChange = useCallback((event) => {
    setLimit(parseInt(event.target.value, 10))
    setPage(1)
  }, [])

  const totalPages = Math.ceil(total / limit)

  return {
    page,
    limit,
    total,
    totalPages,
    setTotal,
    onPageChange: handlePageChange,
    onLimitChange: handleLimitChange,
  }
}
