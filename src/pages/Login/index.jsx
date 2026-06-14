import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, CardContent, Button, Typography, CircularProgress, Alert } from '@mui/material'
import { useAuth } from '@/hooks/useAuth'
import { isEmail, isRequired } from '@/utils/validators'
import FormInput from '@/components/forms/FormInput'
import toast from 'react-hot-toast'

export const Login = () => {
  const navigate = useNavigate()
  const { login, loading, error, clearError } = useAuth()

  const [formData, setFormData] = useState({ email: 'admin@example.com', password: 'password' })
  const [formErrors, setFormErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setFormErrors((prev) => ({ ...prev, [name]: '' }))
    if (error) clearError()
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const errors = {}
    if (!isRequired(formData.email)) {
      errors.email = 'Email is required'
    } else if (!isEmail(formData.email)) {
      errors.email = 'Please enter a valid email address'
    }

    if (!isRequired(formData.password)) {
      errors.password = 'Password is required'
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      return
    }

    try {
      await login(formData)
      toast.success('Login successful! Welcome back.')
      navigate('/dashboard')
    } catch (err) {
      toast.error(err.message || 'Login failed')
    }
  }

  return (
    <Card className="shadow-2xl border border-slate-200/50 dark:border-slate-800 bg-white dark:bg-slate-900">
      <CardContent className="p-8">
        <div className="text-center mb-8">
          <div className="inline-flex w-12 h-12 rounded-xl bg-indigo-600 items-center justify-center text-white font-extrabold text-xl shadow-lg shadow-indigo-200 dark:shadow-none mb-3">
            E
          </div>
          <Typography variant="h5" className="font-extrabold text-slate-900 dark:text-white">
            Welcome Back
          </Typography>
          <Typography variant="body2" className="text-slate-500 dark:text-slate-400 mt-1">
            Log in to manage your enterprise panel
          </Typography>
        </div>

        {error && (
          <Alert severity="error" className="mb-6 rounded-xl text-xs">
            {error}
          </Alert>
        )}

        <form onSubmit={handleSubmit} noValidate>
          <FormInput
            label="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={formErrors.email}
            placeholder="admin@example.com"
            autoComplete="email"
            required
          />

          <FormInput
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            error={formErrors.password}
            placeholder="••••••••"
            autoComplete="current-password"
            required
          />

          <div className="flex items-center justify-between mt-2 mb-6">
            <label className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 cursor-pointer">
              <input
                type="checkbox"
                className="rounded text-indigo-600 focus:ring-indigo-500 dark:bg-slate-800 dark:border-slate-700"
              />
              Remember me
            </label>
            <a href="#" className="text-xs text-indigo-600 dark:text-indigo-400 hover:underline">
              Forgot password?
            </a>
          </div>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={loading}
            className="py-2.5 text-sm font-semibold rounded-xl"
          >
            {loading ? <CircularProgress size={20} color="inherit" /> : 'Sign In'}
          </Button>
        </form>

        <div className="text-center mt-6 text-xs text-slate-500 dark:text-slate-400">
          Demo Creds:{' '}
          <span className="font-semibold text-slate-700 dark:text-slate-300">
            admin@example.com / password
          </span>
        </div>
      </CardContent>
    </Card>
  )
}

export default Login
