
import React from 'react';

interface EnterCodePageProps {
  onEnterCode: () => void;
  setQuizCode: React.Dispatch<React.SetStateAction<string>>;
}

const EnterCodePage: React.FC<EnterCodePageProps> = ({ onEnterCode, setQuizCode }) => {
  const handleEnterCode = () => {
    // You can perform validation on the entered code if needed
    onEnterCode();
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-3xl font-bold mb-4">Enter Quiz Code</h2>
      <input
        type="text"
        placeholder="Enter quiz code"
        onChange={(e) => setQuizCode(e.target.value)}
        className="mb-4 p-2 border border-gray-300 rounded-md"
      />
      <button
        onClick={handleEnterCode}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 cursor-pointer"
      >
        Enter Quiz
      </button>
    </div>
  );
};

export default EnterCodePage;

