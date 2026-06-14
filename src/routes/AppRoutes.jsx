import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { CircularProgress } from '@mui/material'
import PublicRoute from './PublicRoute'
import ProtectedRoute from './ProtectedRoute'
import MainLayout from '@/layouts/MainLayout'
import AuthLayout from '@/layouts/AuthLayout'

// Lazy loaded pages
const LandingPage = lazy(() => import('@/pages/LandingPage'))
const Login = lazy(() => import('@/pages/Login'))
const Dashboard = lazy(() => import('@/pages/Dashboard'))
const Profile = lazy(() => import('@/pages/Profile'))
const Settings = lazy(() => import('@/pages/Settings'))
const NotFound = lazy(() => import('@/pages/NotFound'))

// Lazy loaded layouts
const PublicLayout = lazy(() => import('@/layouts/PublicLayout'))

const Loader = () => (
  <div className="flex h-screen items-center justify-center bg-slate-50 dark:bg-slate-900">
    <CircularProgress />
  </div>
)

export const AppRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {/* Public Landing Page */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<LandingPage />} />
        </Route>

        {/* Public Routes with AuthLayout */}
        <Route
          element={
            <PublicRoute>
              <AuthLayout />
            </PublicRoute>
          }
        >
          <Route path="/login" element={<Login />} />
        </Route>

        {/* Protected Routes with MainLayout */}
        <Route
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Route>

        {/* 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  )
}

export default AppRoutes
