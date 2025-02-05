import { useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState('')

  // 유효성 검사 함수
  function validate(e) {
    const inputValue = e.target.value
    if (!Number.isNaN(Number(inputValue)) || inputValue === '') {
      setValue(inputValue)
    }
  }

  return (
    <div>
      <input id='input' type='text' value={value} onChange={validate} />
      <p>입력값: {value}</p>
    </div>
  )
}

export default App
