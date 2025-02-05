import { useState } from 'react'
import './App.css'

function PostWithComment() {
  const [inputComment, setInputComment] = useState('')
  const [comments, setComments] = useState([])

  // 댓글 추가 함수
  function addComment(comments, newComment) {
    if (newComment.trim() === '') {
      console.log('댓글을 입력해주세요')
      return comments
    }
    return [...comments, newComment]
  }

  // 버튼 클릭 또는 Enter 키 입력 시 댓글 추가
  const handleAddComment = () => {
    setComments((prevComments) => addComment(prevComments, inputComment))
    setInputComment('')
  }

  // Enter 키 입력 처리
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddComment()
    }
  }

  return (
    <div>
      <ul>
        {comments.map((c, index) => (
          <li key={index}>{c}</li>
        ))}
      </ul>
      <input
        type='text'
        value={inputComment}
        onChange={(e) => setInputComment(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder='댓글을 입력하세요...'
      />
      <button onClick={handleAddComment}>등록</button>
    </div>
  )
}

function App() {
  const dolarRate = 1445
  const [inputKRW, setInputKRW] = useState(0)
  const [month, setMonth] = useState(1)
  //달러 변환
  function converKRWtoUSD(krw, dolarRate) {
    return (krw / dolarRate).toFixed(2)
  }

  //1일과 마지막날 반환 함수
  function getStartAndLast(month) {
    //유효하지 않은 달을 입력한 경우 연산 x
    if (month < 0 || month > 12) return
    const year = new Date().getFullYear() // 현재 연도 가져오기
    const startDate = new Date(year, month - 1, 1)
    const endDate = new Date(year, month, 0)
    return { start: startDate.getDate(), end: endDate.getDate() }
  }
  return (
    <>
      <PostWithComment />
      <div>
        <div>달러 계산기</div>
        <div>
          <label>원화 입력</label>
          <input
            value={inputKRW}
            type='number'
            onChange={(e) => setInputKRW(e.target.value)}
          ></input>
          <div>{converKRWtoUSD(inputKRW, dolarRate)}$</div>
        </div>
      </div>
      <div>날짜 반환기</div>
      <div>
        <label>달 입력</label>
        <input value={month} type='number' onChange={(e) => setMonth(e.target.value)}></input>
      </div>
      <div>
        {month}월의 시작 날짜는 {getStartAndLast(month).start}일, {getStartAndLast(month).end}일
        입니다
      </div>
    </>
  )
}

export default App
