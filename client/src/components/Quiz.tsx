
import React, { useState } from 'react';

interface Question {
  text: string;
  choices: string[];
  correctAnswer: string;
}

interface QuizProps {
  onShowLeaderboard: () => void;
}

const Quiz: React.FC<QuizProps> = ({ onShowLeaderboard }) => {
  const [questions] = useState<Question[]>([
    {
      text: 'What is the capital of France?',
      choices: ['Paris', 'Berlin', 'London'],
      correctAnswer: 'Paris',
    },
    {
      text: 'What is the largest planet in our solar system?',
      choices: ['Earth', 'Jupiter', 'Mars'],
      correctAnswer: 'Jupiter',
    },
    // Add more questions as needed
  ]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<string[]>(new Array(questions.length).fill(''));

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handleAnswer = (answer: string) => {
    setUserAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[currentQuestionIndex] = answer;
      return newAnswers;
    });
  };

  const handleSubmitQuiz = () => {
    // Submit userAnswers to the server (backend integration needed)
    onShowLeaderboard();
  };

  return (
    <div className="Quiz bg-gray-200 p-8 rounded-md h-screen w-screen flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold mb-8">{questions[currentQuestionIndex].text}</h2>
      <ul className="list-disc pl-4 mb-8">
        {questions[currentQuestionIndex].choices.map((choice, index) => (
          <li key={index} className="cursor-pointer flex items-center mb-4">
            <input
              type="checkbox"
              checked={userAnswers[currentQuestionIndex] === choice}
              onChange={() => handleAnswer(choice)}
              className="mr-2"
            />
            <span onClick={() => handleAnswer(choice)} className="hover:underline">
              {choice}
            </span>
          </li>
        ))}
      </ul>
      <button
        className="bg-blue-500 text-white px-6 py-3 rounded-md mb-4"
        onClick={handleNextQuestion}
        disabled={currentQuestionIndex === questions.length - 1}
      >
        Next Question
      </button>
      {currentQuestionIndex === questions.length - 1 && (
        <button className="bg-green-500 text-white px-6 py-3 rounded-md" onClick={handleSubmitQuiz}>
          Submit Quiz
        </button>
      )}
    </div>
  );
};

export default Quiz;

