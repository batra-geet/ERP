import { combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import authReducer from './slices/authSlice'
import userReducer from './slices/userSlice'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'user'],
}

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
})

export default persistReducer(persistConfig, rootReducer)
