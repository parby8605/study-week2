import { createSlice } from '@reduxjs/toolkit'

export const THEME = {
  DEFAULT: 'system',
  DARK: 'dark',
  LIGHT: 'light',
}

const themeSlice = createSlice({
  name: 'theme',
  initialState: { theme: localStorage.getItem('theme') ?? THEME.DEFAULT },
  reducers: {
    change: (previousState, { payload, type }) => {
      previousState.theme = payload
    },
  },
})

export const { change } = themeSlice.actions

export default themeSlice.reducer
