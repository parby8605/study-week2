import { configureStore } from '@reduxjs/toolkit'
import themeReducer, { THEME } from '@/features/theme/slice'

const changeTheme = (store) => (next) => (action) => {
  if (!action.type.startsWith('theme/')) {
    return next(action)
  }
  next(action)
  const theme = action.payload
  const themeMedia = window.matchMedia('(prefers-color-scheme: dark)')
  console.log(themeMedia)
  if (theme === THEME.DEFAULT) {
    themeMedia.matches
      ? document.body.classList.add('dark')
      : document.body.classList.remove('dark')
    localStorage.setItem('theme', THEME.DEFAULT)
  }
  if (theme === THEME.DARK) {
    document.body.classList.add('dark')
    localStorage.setItem('theme', THEME.DARK)
  }
  if (theme === THEME.LIGHT) {
    document.body.classList.remove('dark')
    localStorage.setItem('theme', THEME.LIGHT)
  }
}

// 2. 전역 Store 설정 (configureStore) <- Reducer(Reducer + InitialState) + Middleware
export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(changeTheme),
})
