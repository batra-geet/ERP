import { useState } from 'react'
import { Outlet, useNavigate, useLocation, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Breadcrumbs as MuiBreadcrumbs,
  Tooltip,
} from '@mui/material'
import {
  Menu as MenuIcon,
  Dashboard as DashboardIcon,
  Person as PersonIcon,
  Settings as SettingsIcon,
  Brightness4 as DarkModeIcon,
  Brightness7 as LightModeIcon,
  ExitToApp as LogoutIcon,
  NavigateNext as NavigateNextIcon,
} from '@mui/icons-material'
import { selectCurrentUser, logout } from '@/store/slices/authSlice'
import { selectThemeMode, toggleTheme } from '@/store/slices/userSlice'

export const MainLayout = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation()

  const user = useSelector(selectCurrentUser)
  const themeMode = useSelector(selectThemeMode)

  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [anchorEl, setAnchorEl] = useState(null)

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget)
  const handleMenuClose = () => setAnchorEl(null)

  const handleLogout = () => {
    handleMenuClose()
    dispatch(logout())
    navigate('/login')
  }

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen)

  const pathnames = location.pathname.split('/').filter((x) => x)

  const menuItems = [
    { text: 'Dashboard', path: '/dashboard', icon: <DashboardIcon className="w-5 h-5" /> },
    { text: 'Profile', path: '/profile', icon: <PersonIcon className="w-5 h-5" /> },
    { text: 'Settings', path: '/settings', icon: <SettingsIcon className="w-5 h-5" /> },
  ]

  return (
    <div
      className={`min-h-screen flex ${themeMode === 'dark' ? 'dark bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`}
    >
      {/* Sidebar */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-20 flex flex-col bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 transition-all duration-300 ${sidebarOpen ? 'w-64' : 'w-20'}`}
      >
        <div className="flex h-16 items-center justify-between px-6 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-indigo-200 dark:shadow-none">
              E
            </div>
            {sidebarOpen && (
              <span className="font-bold text-lg tracking-wider text-slate-800 dark:text-slate-100">
                ENTERPRISE
              </span>
            )}
          </div>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path
            return (
              <Link
                key={item.text}
                to={item.path}
                className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 group ${
                  isActive
                    ? 'bg-indigo-50 text-indigo-600 dark:bg-slate-800 dark:text-indigo-400 font-medium'
                    : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-slate-800 dark:hover:text-slate-100'
                }`}
              >
                <div
                  className={`transition-transform duration-200 ${isActive ? '' : 'group-hover:scale-110'}`}
                >
                  {item.icon}
                </div>
                {sidebarOpen && <span>{item.text}</span>}
              </Link>
            )
          })}
        </nav>

        {sidebarOpen && (
          <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/20">
            <div className="flex items-center gap-3">
              <Avatar
                src={user?.avatar}
                alt={user?.name}
                className="w-10 h-10 border border-slate-200 dark:border-slate-700"
              />
              <div className="overflow-hidden">
                <p className="font-medium text-sm text-slate-800 dark:text-slate-200 truncate">
                  {user?.name}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 truncate">{user?.role}</p>
              </div>
            </div>
          </div>
        )}
      </aside>

      {/* Main Content Space */}
      <div
        className={`flex-1 flex flex-col min-h-screen transition-all duration-300 ${sidebarOpen ? 'pl-64' : 'pl-20'}`}
      >
        {/* Header */}
        <header className="h-16 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 sticky top-0 z-10 px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <IconButton
              onClick={toggleSidebar}
              color="inherit"
              className="hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <MenuIcon />
            </IconButton>

            {/* Breadcrumbs */}
            <MuiBreadcrumbs
              separator={<NavigateNextIcon fontSize="small" className="text-slate-400" />}
              aria-label="breadcrumb"
            >
              <Link
                to="/dashboard"
                className="text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 text-sm font-medium transition-colors"
              >
                Home
              </Link>
              {pathnames.map((value, index) => {
                const last = index === pathnames.length - 1
                const to = `/${pathnames.slice(0, index + 1).join('/')}`
                const label = value.charAt(0).toUpperCase() + value.slice(1)

                return last ? (
                  <span
                    key={to}
                    className="text-slate-800 dark:text-slate-200 text-sm font-semibold"
                  >
                    {label}
                  </span>
                ) : (
                  <Link
                    key={to}
                    to={to}
                    className="text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 text-sm font-medium transition-colors"
                  >
                    {label}
                  </Link>
                )
              })}
            </MuiBreadcrumbs>
          </div>

          <div className="flex items-center gap-3">
            {/* Light/Dark Toggle */}
            <Tooltip title={themeMode === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}>
              <IconButton onClick={() => dispatch(toggleTheme())} color="inherit">
                {themeMode === 'dark' ? (
                  <LightModeIcon className="text-amber-400" />
                ) : (
                  <DarkModeIcon className="text-indigo-600" />
                )}
              </IconButton>
            </Tooltip>

            {/* Profile Dropdown */}
            <IconButton
              onClick={handleMenuOpen}
              className="p-0 border border-slate-200 dark:border-slate-700 hover:opacity-90"
            >
              <Avatar src={user?.avatar} alt={user?.name} className="w-9 h-9" />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              keepMounted
              PaperProps={{
                elevation: 3,
                style: {
                  width: '200px',
                  borderRadius: '12px',
                  marginTop: '8px',
                },
              }}
            >
              <div className="px-4 py-2 border-b border-slate-100 dark:border-slate-800">
                <p className="font-semibold text-sm text-slate-800 dark:text-slate-200">
                  {user?.name}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">{user?.email}</p>
              </div>
              <MenuItem
                onClick={() => {
                  handleMenuClose()
                  navigate('/profile')
                }}
                className="gap-3 text-sm py-2"
              >
                <PersonIcon fontSize="small" className="text-slate-400" />
                Profile
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleMenuClose()
                  navigate('/settings')
                }}
                className="gap-3 text-sm py-2"
              >
                <SettingsIcon fontSize="small" className="text-slate-400" />
                Settings
              </MenuItem>
              <MenuItem
                onClick={handleLogout}
                className="gap-3 text-sm py-2 text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/20"
              >
                <LogoutIcon fontSize="small" className="text-rose-500" />
                Logout
              </MenuItem>
            </Menu>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 p-6 lg:p-8">
          <Outlet />
        </main>

        {/* Footer */}
        <footer className="py-4 border-t border-slate-200 dark:border-slate-800 text-center text-xs text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900/40">
          &copy; {new Date().getFullYear()}{' '}
          {user?.role ? `${user.role} Dashboard` : 'React Enterprise Boilerplate'}. All rights
          reserved.
        </footer>
      </div>
    </div>
  )
}

export default MainLayout
