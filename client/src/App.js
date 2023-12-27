import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Leaderboard from "./pages/Leaderboard.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
