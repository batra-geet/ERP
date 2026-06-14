import { useEffect, useState, useCallback } from 'react'
import {
  Typography,
  Card,
  CardContent,
  Button,
  TextField,
  InputAdornment,
  IconButton,
  Tooltip,
} from '@mui/material'
import {
  People as PeopleIcon,
  CheckCircle as ActiveIcon,
  Search as SearchIcon,
  Delete as DeleteIcon,
  Refresh as RefreshIcon,
  Star as StarIcon,
} from '@mui/icons-material'
import { useApi } from '@/hooks/useApi'
import { usePagination } from '@/hooks/usePagination'
import { useDebounce } from '@/hooks/useDebounce'
import { userService } from '@/services/userService'
import ReusableTable from '@/components/ui/ReusableTable'
import ReusableModal from '@/components/ui/ReusableModal'
import toast from 'react-hot-toast'

export const Dashboard = () => {
  const [search, setSearch] = useState('')
  const debouncedSearch = useDebounce(search, 500)

  const { page, limit, total, setTotal, onPageChange, onLimitChange } = usePagination(1, 5)

  const { data, loading, execute: fetchUsers } = useApi(userService.getUsers)
  const { execute: deleteUserApi, loading: deleting } = useApi(userService.deleteUser)

  const [deleteModalOpen, setDeleteModalOpen] = useState(false)
  const [selectedUser, setSelectedUser] = useState(null)

  const loadData = useCallback(() => {
    fetchUsers(page, limit, debouncedSearch)
      .then((res) => {
        if (res) setTotal(res.total)
      })
      .catch((err) => toast.error(err.message))
  }, [fetchUsers, page, limit, debouncedSearch, setTotal])

  useEffect(() => {
    loadData()
  }, [loadData])

  const handleDeleteClick = (user) => {
    setSelectedUser(user)
    setDeleteModalOpen(true)
  }

  const handleDeleteConfirm = async () => {
    try {
      await deleteUserApi(selectedUser.id)
      toast.success(`Successfully deleted user ${selectedUser.name}`)
      setDeleteModalOpen(false)
      setSelectedUser(null)
      loadData()
    } catch (err) {
      toast.error(err.message || 'Failed to delete user')
    }
  }

  const columns = [
    { field: 'id', headerName: 'ID' },
    {
      field: 'name',
      headerName: 'User Name',
      renderCell: (row) => (
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-slate-800 flex items-center justify-center font-bold text-indigo-600 text-xs">
            {row.name.charAt(0)}
          </div>
          <span className="font-semibold text-slate-850 dark:text-slate-100">{row.name}</span>
        </div>
      ),
    },
    { field: 'email', headerName: 'Email Address' },
    { field: 'role', headerName: 'Designation / Role' },
    {
      field: 'status',
      headerName: 'Status',
      renderCell: (row) => {
        const isActive = row.status === 'Active'
        return (
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
              isActive
                ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/20 dark:text-emerald-400'
                : 'bg-rose-50 text-rose-600 dark:bg-rose-950/20 dark:text-rose-400'
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-emerald-500' : 'bg-rose-500'}`}
            />
            {row.status}
          </span>
        )
      },
    },
    { field: 'joined', headerName: 'Joined Date' },
    {
      field: 'actions',
      headerName: 'Actions',
      align: 'right',
      renderCell: (row) => (
        <Tooltip title="Delete User">
          <IconButton onClick={() => handleDeleteClick(row)} color="error" size="small">
            <DeleteIcon className="w-4 h-4" />
          </IconButton>
        </Tooltip>
      ),
    },
  ]

  const stats = [
    {
      title: 'Total Employees',
      value: total,
      icon: <PeopleIcon className="w-6 h-6 text-indigo-600 dark:text-indigo-450" />,
      change: '+4% this month',
      bgClass: 'bg-indigo-50 dark:bg-indigo-950/25',
    },
    {
      title: 'Active Accounts',
      value: data?.items?.filter((u) => u.status === 'Active').length || 0,
      icon: <ActiveIcon className="w-6 h-6 text-emerald-600 dark:text-emerald-450" />,
      change: 'Steady state',
      bgClass: 'bg-emerald-50 dark:bg-emerald-950/25',
    },
    {
      title: 'Total Teams',
      value: '4 Teams',
      icon: <StarIcon className="w-6 h-6 text-amber-500 dark:text-amber-450" />,
      change: 'Cross-functional',
      bgClass: 'bg-amber-50 dark:bg-amber-950/25',
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 dark:text-white font-sans">
            Corporate Overview
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Real-time metrics and employee management matrix
          </p>
        </div>
        <Button
          variant="outlined"
          startIcon={<RefreshIcon />}
          onClick={loadData}
          disabled={loading}
        >
          Sync Data
        </Button>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, idx) => (
          <Card
            key={idx}
            className="shadow-sm border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900"
          >
            <CardContent className="p-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                    {stat.title}
                  </p>
                  <h3 className="text-3xl font-extrabold text-slate-800 dark:text-white mt-2 font-sans">
                    {stat.value}
                  </h3>
                </div>
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.bgClass}`}
                >
                  {stat.icon}
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  {stat.change}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Table Section */}
      <Card className="shadow-sm border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4 mb-6">
            <Typography variant="h6" className="font-bold text-slate-800 dark:text-slate-200">
              Employee Directory
            </Typography>
            <div className="flex gap-4">
              <TextField
                placeholder="Search staff, designation..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                size="small"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon className="text-slate-400 w-4 h-4" />
                    </InputAdornment>
                  ),
                }}
                className="w-full md:w-64"
              />
            </div>
          </div>

          <ReusableTable
            columns={columns}
            rows={data?.items || []}
            loading={loading}
            totalRows={total}
            page={page}
            limit={limit}
            onPageChange={onPageChange}
            onLimitChange={onLimitChange}
          />
        </CardContent>
      </Card>

      <ReusableModal
        open={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={handleDeleteConfirm}
        title="Confirm Deletion"
        confirmText="Remove Employee"
        confirmColor="error"
        loading={deleting}
      >
        <Typography variant="body2" className="text-slate-650 dark:text-slate-350">
          Are you sure you want to remove{' '}
          <span className="font-semibold text-slate-800 dark:text-slate-200">
            {selectedUser?.name}
          </span>{' '}
          from the employee index? This action is permanent.
        </Typography>
      </ReusableModal>
    </div>
  )
}

export default Dashboard
