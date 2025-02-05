import { configureStore } from '@reduxjs/toolkit'
import themeReducer from '@/features/theme/slice'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
})
