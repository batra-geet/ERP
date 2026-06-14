import { useSelector, Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { Toaster } from 'react-hot-toast'
import { getTheme } from '@/styles/theme'
import { selectThemeMode } from '@/store/slices/userSlice'
import AppRoutes from '@/routes/AppRoutes'
import ErrorBoundary from '@/components/common/ErrorBoundary'
import { store, persistor } from '@/store'

const AppContent = () => {
  const themeMode = useSelector(selectThemeMode)
  const theme = getTheme(themeMode)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Toaster
        position="top-right"
        toastOptions={{
          className:
            'dark:bg-slate-900 dark:text-slate-100 dark:border dark:border-slate-800 rounded-xl',
          duration: 3000,
        }}
      />
      <ErrorBoundary>
        <AppRoutes />
      </ErrorBoundary>
    </ThemeProvider>
  )
}

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  )
}

export default App
