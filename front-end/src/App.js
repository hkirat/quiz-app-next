import { useState } from "react";
import "./App.css";
import { options, questions } from "./quizConsts";
import QuizArea from "./screens/quizArea";

function App() {
  const [questionIdx, setQuestionIdx] = useState(0);

  return (
    <div className="App">
      <QuizArea
        question={questions[questionIdx]}
        options={options[questionIdx]}
      />
    </div>
  );
}

export default App;
