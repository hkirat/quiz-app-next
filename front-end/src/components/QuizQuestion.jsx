// QuizQuestion.js

import React, { useState } from 'react';

const QuizQuestion = ({ question, options, correctOption }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const isCorrect = selectedOption === correctOption;

  return (
    <div className="bg-white p-6 rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-4">{question}</h2>
      <div>
        {options.map((option, index) => (
          <div
            key={index}
            className={`p-3 mb-2 cursor-pointer border ${
              selectedOption === option
                ? isCorrect
                  ? 'border-green-500 bg-green-200'
                  : 'border-red-500 bg-red-200'
                : 'border-gray-300'
            } rounded-md`}
            onClick={() => handleOptionSelect(option)}
          >
            {option}
          </div>
        ))}
      </div>
      {selectedOption && (
        <p className={isCorrect ? 'text-green-500' : 'text-red-500'}>
          {isCorrect ? 'Correct!' : 'Incorrect!'}
        </p>
      )}
    </div>
  );
};

export default QuizQuestion;
