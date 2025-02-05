import { createSlice } from '@reduxjs/toolkit'

const themeSlice = createSlice({
  name: 'theme',

  initialState: { color: 'black', desc: 'black theme' },

  reducers: {
    change: (prev) => {
      if (prev.color === 'black') {
        prev.color = 'white'
        prev.desc = 'white theme'
      } else {
        prev.color = 'black'
        prev.desc = 'black theme'
      }
    },
    modify: (prev, { payload }) => {
      prev.color = payload.color
      prev.desc = payload.desc
    },
  },
})

export const { change, modify } = themeSlice.actions

export default themeSlice.reducer
