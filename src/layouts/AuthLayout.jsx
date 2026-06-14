import { Outlet } from 'react-router-dom'

export const AuthLayout = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-50 via-slate-100 to-blue-50 p-4 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="w-full max-w-md">
        <Outlet />
      </div>
    </div>
  )
}

export default AuthLayout
