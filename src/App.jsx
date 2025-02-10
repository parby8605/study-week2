import { useState } from 'react'
import './App.css'
import { useAppDispatch, useAppSelector } from './app/hook'
import { change, modify } from './features/theme/slice'
import { store } from './app/store'
import { ReduxProvider } from './providers/ReduxProvider'

function ThemeText() {
  const themeColor = useAppSelector((state) => state.theme.color)
  console.log('theme color : ', themeColor)
  console.log('Theme text rendered!')
  return (
    <>
      {}
      <div style={{ color: themeColor }}>여기 색이 바뀌어야함</div>
    </>
  )
}

function ThemeDescription() {
  const themeDesc = useAppSelector((state) => state.theme.desc)
  console.log("Theme'Description' Rerendered !")
  return <div>{themeDesc}</div>
}

function ChangeButton() {
  const dispatch = useAppDispatch()
  console.log('Display Rerendered !')
  return <button onClick={() => dispatch(change())}>변경 버튼</button>
}

function ModifyButton({ color, desc }) {
  const dispatch = useAppDispatch()
  return (
    <button onClick={() => dispatch(modify({ color, desc }))}>
      <span style={{ color }}>테마 변경</span>
    </button>
  )
}

function App() {
  return (
    <ReduxProvider>
      <div>
        <h2>Theme Change</h2>
        <ThemeText />
        <ThemeDescription />
        <ChangeButton />
        <ModifyButton color='red' desc='red theme'></ModifyButton>
        <ModifyButton color='green' desc='green theme'></ModifyButton>
      </div>
    </ReduxProvider>
  )
}

export default App
