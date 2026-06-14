import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  Skeleton,
  Typography,
} from '@mui/material'

export const ReusableTable = ({
  columns,
  rows = [],
  loading = false,
  totalRows = 0,
  page = 1,
  limit = 5,
  onPageChange,
  onLimitChange,
}) => {
  return (
    <TableContainer
      component={Paper}
      className="border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden rounded-xl bg-white dark:bg-slate-900"
    >
      <Table sx={{ minWidth: 650 }} aria-label="custom table">
        <TableHead className="bg-slate-50 dark:bg-slate-800/50">
          <TableRow>
            {columns.map((col) => (
              <TableCell
                key={col.field}
                className="font-semibold text-slate-600 dark:text-slate-300 py-4"
                align={col.align || 'left'}
              >
                {col.headerName}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {loading ? (
            Array.from({ length: limit }).map((_, rowIndex) => (
              <TableRow key={rowIndex}>
                {columns.map((col, colIndex) => (
                  <TableCell key={colIndex} className="py-4">
                    <Skeleton variant="text" width="80%" height={24} />
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : rows.length === 0 ? (
            <TableRow>
              <TableCell colSpan={columns.length} align="center" className="py-10">
                <Typography variant="body2" className="text-slate-400">
                  No data found
                </Typography>
              </TableCell>
            </TableRow>
          ) : (
            rows.map((row, rowIndex) => (
              <TableRow
                key={row.id || rowIndex}
                className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors"
              >
                {columns.map((col) => (
                  <TableCell
                    key={col.field}
                    align={col.align || 'left'}
                    className="py-3.5 text-slate-700 dark:text-slate-300"
                  >
                    {col.renderCell ? col.renderCell(row) : row[col.field]}
                  </TableCell>
                ))}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>

      {onPageChange && (
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={totalRows}
          rowsPerPage={limit}
          page={page - 1}
          onPageChange={(e, newPage) => onPageChange(e, newPage + 1)}
          onRowsPerPageChange={onLimitChange}
          className="border-t border-slate-100 dark:border-slate-800 text-slate-500"
        />
      )}
    </TableContainer>
  )
}

export default ReusableTable
