import { createTheme } from '@mui/material/styles'

export const getTheme = (mode) => {
  const isDark = mode === 'dark'

  return createTheme({
    palette: {
      mode,
      primary: {
        main: isDark ? '#93c5fd' : '#2563eb',
        light: isDark ? '#bfdbfe' : '#3b82f6',
        dark: isDark ? '#60a5fa' : '#1d4ed8',
      },
      secondary: {
        main: isDark ? '#c084fc' : '#7c3aed',
        light: isDark ? '#e9d5ff' : '#8b5cf6',
        dark: isDark ? '#a855f7' : '#6d28d9',
      },
      background: {
        default: isDark ? '#0f172a' : '#f8fafc',
        paper: isDark ? '#1e293b' : '#ffffff',
      },
      text: {
        primary: isDark ? '#f8fafc' : '#0f172a',
        secondary: isDark ? '#cbd5e1' : '#475569',
      },
    },
    typography: {
      fontFamily: '"Outfit", "Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      h1: { fontSize: '2.5rem', fontWeight: 700 },
      h2: { fontSize: '2rem', fontWeight: 700 },
      h3: { fontSize: '1.75rem', fontWeight: 600 },
      h4: { fontSize: '1.5rem', fontWeight: 600 },
      h5: { fontSize: '1.25rem', fontWeight: 600 },
      h6: { fontSize: '1rem', fontWeight: 600 },
      body1: { fontSize: '1rem', lineHeight: 1.5 },
      body2: { fontSize: '0.875rem', lineHeight: 1.43 },
      button: { textTransform: 'none', fontWeight: 500 },
    },
    shape: {
      borderRadius: 12,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: '10px',
            padding: '8px 16px',
            boxShadow: 'none',
            transition: 'all 0.2s ease-in-out',
            '&:hover': {
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
              transform: 'translateY(-1px)',
            },
          },
          containedPrimary: {
            background: isDark
              ? 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)'
              : 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
            color: '#ffffff',
          },
        },
      },
      MuiTextField: {
        defaultProps: {
          variant: 'outlined',
          size: 'small',
        },
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-root': {
              borderRadius: '10px',
              backgroundColor: isDark ? '#1e293b' : '#ffffff',
              transition: 'border-color 0.2s',
              '& fieldset': {
                borderColor: isDark ? '#334155' : '#cbd5e1',
              },
              '&:hover fieldset': {
                borderColor: isDark ? '#475569' : '#94a3b8',
              },
              '&.Mui-focused fieldset': {
                borderColor: isDark ? '#93c5fd' : '#2563eb',
              },
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: '16px',
            boxShadow: isDark
              ? '0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -4px rgba(0, 0, 0, 0.5)'
              : '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -4px rgba(0, 0, 0, 0.05)',
            border: isDark ? '1px solid #334155' : '1px solid #e2e8f0',
          },
        },
      },
    },
  })
}
