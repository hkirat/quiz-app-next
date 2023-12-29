import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { User } from './components/User'
import Admin from './pages/admin/index'
import Join from './pages/Join';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="admin" element={<Admin />} />
        <Route path="user" element={<User />} />
        <Route path="join" element={<Join />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
