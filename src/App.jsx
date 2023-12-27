import { useState } from 'react'
import JoinQuiz from './components/JoinQuiz'
import Name from './components/Name'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Question from './components/Question';
import Leaderboard from './components/Leaderboard';


function App() {
  const [count, setCount] = useState(0)

  return (

    <Routes>
      <Route path="/" element={<JoinQuiz />} />
      <Route path="/name" element={<Name />} />
      <Route path="/question" element={<Question />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
    </Routes>

  )
}

export default App
