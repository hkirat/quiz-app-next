// App.js

import React from 'react';
import QuizQuestion from './components/QuizQuestion'; // Make sure to adjust the path

const App = () => {
  const questionData = {
    question: 'What is the capital of France?',
    options: ['Paris', 'Berlin', 'London'],
    correctOption: 'Paris'
  };

  return (
    <div className="flex justify-center items-center h-screen bg-blue-50">
      <div className="max-w-md">
        <h1 className="text-3xl font-bold mb-6">Simple Quiz App</h1>
        <QuizQuestion question={questionData.question} options={questionData.options} correctOption={questionData.correctOption}/>
      </div>
    </div>
  );
};

export default App;
