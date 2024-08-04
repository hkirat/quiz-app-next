import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HomePage } from "./routes/HomePage";
import { JoinQuiz } from "./routes/Join";
import { CreateQuiz } from "./routes/CreateQuiz";
import { DashBoard } from "./routes/Dashboard";
import { QuizDetails } from "./routes/QuizDetails";
import { PlayGround } from "./routes/PlayGround";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/join" element={<JoinQuiz />} />
        <Route path="/create" element={<CreateQuiz />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/quiz/" element={<QuizDetails />} />
        <Route path="/play" element={<PlayGround />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
