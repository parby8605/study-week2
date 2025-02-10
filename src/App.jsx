import { createContext, useContext, useEffect, useState } from 'react'
import './App.css'
import { useAppDispatch, useAppSelector } from './app/hook'
import { change, THEME } from './features/theme/slice'
import { ReduxProvider } from './providers/ReduxProvider'

function ThemeSelect() {
  const theme = useAppSelector((state) => state['theme'].theme)
  const dispatch = useAppDispatch()
  return (
    <select value={theme} onChange={(e) => dispatch(change(e.target.value))}>
      {Object.values(THEME).map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  )
}

function App() {
  // const dispatch = useAppDispatch()

  // useEffect(() => {
  //   const savedTheme = localStorage.getItem('theme') || THEME.DEFAULT
  //   dispatch(change(savedTheme))

  //   const themeMedia = window.matchMedia('(prefers-color-scheme: dark)')
  //   const applyTheme = (theme) => {
  //     if (theme === THEME.DARK) {
  //       document.body.classList.add('dark')
  //     } else if (theme === THEME.LIGHT) {
  //       document.body.classList.remove('dark')
  //     } else if (theme === THEME.DEFAULT) {
  //       themeMedia.matches
  //         ? document.body.classList.add('dark')
  //         : document.body.classList.remove('dark')
  //     }
  //   }

  //   applyTheme(savedTheme)

  //   const handleThemeChange = (e) => {
  //     if (savedTheme === THEME.DEFAULT) {
  //       e.matches ? document.body.classList.add('dark') : document.body.classList.remove('dark')
  //     }
  //   }

  //   themeMedia.addEventListener('change', handleThemeChange)
  //   return () => {
  //     themeMedia.removeEventListener('change', handleThemeChange)
  //   }
  // }, [dispatch])

  return (
    <ReduxProvider>
      <h1>Theme</h1>
      <ThemeSelect />
    </ReduxProvider>
  )
}

export default App
