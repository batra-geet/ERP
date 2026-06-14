export const ENV = {
  API_URL: import.meta.env.VITE_API_URL || 'https://api.dev.example.com',
  APP_NAME: import.meta.env.VITE_APP_NAME || 'React Enterprise Boilerplate',
  ENV: import.meta.env.VITE_ENV || 'development',
  IS_DEV: import.meta.env.VITE_ENV === 'development',
  IS_PROD: import.meta.env.VITE_ENV === 'production',
}
