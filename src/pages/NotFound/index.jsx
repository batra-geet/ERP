import { useNavigate } from 'react-router-dom'
import { Button, Typography } from '@mui/material'

export const NotFound = () => {
  const navigate = useNavigate()

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 dark:bg-slate-950 p-6 text-center">
      <div className="max-w-md bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-10 rounded-2xl shadow-xl">
        <h1 className="text-8xl font-black text-indigo-600 dark:text-indigo-450 mb-2">404</h1>
        <Typography variant="h5" className="font-bold text-slate-800 dark:text-white mb-4">
          Page Not Found
        </Typography>
        <p className="text-slate-500 dark:text-slate-400 mb-8 text-sm">
          The page you are looking for might have been removed, had its name changed, or is
          temporarily unavailable.
        </p>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/')}
          className="w-full py-2.5 font-semibold text-sm rounded-xl"
        >
          Return to Dashboard
        </Button>
      </div>
    </div>
  )
}

export default NotFound
