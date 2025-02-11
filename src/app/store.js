import userReducer from '@/features/users/slice'
import { configureStore } from '@reduxjs/toolkit'

const dispatchWithLog = (store) => (next) => (action) => {
  console.log('- 이전 State : ', store.getState())
  console.log('- Action : ', action)
  next(action)
  console.log('- 이후 State : ', store.getState())
}

export const store = configureStore({
  reducer: {
    users: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(dispatchWithLog),
})
