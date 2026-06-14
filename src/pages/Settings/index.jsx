import { useSelector, useDispatch } from 'react-redux'
import { Card, CardContent, Switch, Typography } from '@mui/material'
import {
  selectThemeMode,
  toggleTheme,
  selectNotificationsEnabled,
  setNotifications,
} from '@/store/slices/userSlice'
import toast from 'react-hot-toast'

export const Settings = () => {
  const dispatch = useDispatch()
  const themeMode = useSelector(selectThemeMode)
  const notificationsEnabled = useSelector(selectNotificationsEnabled)

  const handleThemeToggle = () => {
    dispatch(toggleTheme())
    toast.success(`Theme switched to ${themeMode === 'light' ? 'Dark' : 'Light'} Mode`)
  }

  const handleNotificationsToggle = (e) => {
    dispatch(setNotifications(e.target.checked))
    toast.success(`Notifications ${e.target.checked ? 'Enabled' : 'Disabled'}`)
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-800 dark:text-white font-sans">
          System Settings
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm">
          Configure your workplace preferences and system options
        </p>
      </div>

      <Card className="shadow-sm border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900">
        <CardContent className="p-8 space-y-6">
          <Typography
            variant="h6"
            className="font-bold text-slate-800 dark:text-slate-200 border-b border-slate-100 dark:border-slate-800 pb-3"
          >
            Appearance & UI
          </Typography>

          <div className="flex justify-between items-center">
            <div>
              <p className="font-semibold text-slate-700 dark:text-slate-300 text-sm">
                Dark Theme Mode
              </p>
              <p className="text-xs text-slate-500">
                Toggle dark styling across the enterprise portal
              </p>
            </div>
            <Switch checked={themeMode === 'dark'} onChange={handleThemeToggle} color="primary" />
          </div>

          <Typography
            variant="h6"
            className="font-bold text-slate-800 dark:text-slate-200 border-b border-slate-100 dark:border-slate-800 pb-3 pt-4"
          >
            Security & Alerts
          </Typography>

          <div className="flex justify-between items-center">
            <div>
              <p className="font-semibold text-slate-700 dark:text-slate-300 text-sm">
                Email Alerts
              </p>
              <p className="text-xs text-slate-500">
                Receive system alerts and monthly staff briefings
              </p>
            </div>
            <Switch
              checked={notificationsEnabled}
              onChange={handleNotificationsToggle}
              color="primary"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Settings
