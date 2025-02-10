import { configureStore } from '@reduxjs/toolkit'
import themeReducer, { change, THEME } from '@/features/theme/slice'

const changeTheme = (store) => (next) => (action) => {
  if (!action.type.startsWith('theme/')) {
    return next(action)
  }
  next(action)
  const theme = action.payload
  const themeMedia = window.matchMedia('(prefers-color-scheme: dark)')
  console.log(themeMedia)
  const applyTheme = (theme) => {
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

  applyTheme(theme)
}

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(changeTheme),
})

//스토어 생성 후 초기 테마 설정정
const savedTheme = localStorage.getItem('theme') || THEME.DEFAULT
store.dispatch(change(savedTheme))
