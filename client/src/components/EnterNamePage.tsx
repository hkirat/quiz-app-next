
import React from 'react';

interface EnterNamePageProps {
  onJoinQuiz: () => void;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
}

const EnterNamePage: React.FC<EnterNamePageProps> = ({ onJoinQuiz, setUsername }) => {
  const handleJoinQuiz = () => {
    // You can perform validation on the entered name if needed
    onJoinQuiz();
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-3xl font-bold mb-4">Enter Your Name</h2>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={(e) => setUsername(e.target.value)}
        className="mb-4 p-2 border border-gray-300 rounded-md"
      />
      <button
        onClick={handleJoinQuiz}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 cursor-pointer"
      >
        Join Quiz
      </button>
    </div>
  );
};

export default EnterNamePage;
