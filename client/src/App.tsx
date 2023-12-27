import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Leaderboard from "./pages/leaderboard";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
