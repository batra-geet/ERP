import React from 'react'
import { Button } from '@mui/material'

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error', error, errorInfo)
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null })
    window.location.href = '/'
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 p-6 text-center dark:bg-slate-950">
          <div className="max-w-md bg-white p-8 rounded-2xl shadow-xl border border-slate-100 dark:bg-slate-900 dark:border-slate-800">
            <h1 className="text-3xl font-extrabold text-rose-500 mb-4">Something went wrong</h1>
            <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm">
              {this.state.error?.message ||
                'An unexpected error occurred. Please try reloading the application.'}
            </p>
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleReset}
              className="w-full"
            >
              Back to Home
            </Button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
