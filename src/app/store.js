import { configureStore } from '@reduxjs/toolkit'
import themeReducer from '@/features/theme/slice'

const dispatchWithLog = (store) => (next) => (action) => {
  console.log('- 이전 State : ', store.getState())
  console.log('- Action : ', action)
  next(action)
  console.log('- 이후 State : ', store.getState())
}

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(dispatchWithLog),
})
