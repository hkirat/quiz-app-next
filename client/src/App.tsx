// App.tsx
import React, { useState } from 'react';
import Quiz from './components/Quiz';
import Leaderboard from './components/Leaderboard';
import EnterNamePage from './components/EnterNamePage';
import EnterCodePage from './components/EnterCodePage';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const [view, setView] = useState<string>('enterName'); // 'enterName', 'enterCode', 'quiz', 'leaderboard'
  const [username, setUsername] = useState<string>(''); // Store the entered username
  const [quizCode, setQuizCode] = useState<string>(''); // Store the entered quiz code

  const handleJoinQuiz = () => {
    setView('enterCode');
  };

  const handleEnterCode = () => {
    setView('quiz');
  };

  const handleShowLeaderboard = () => {
    setView('leaderboard');
  };

  const handleGoBack = () => {
    setView('enterName');
  };

  return (
    <div className="App">
      {view === 'enterName' && <EnterNamePage onJoinQuiz={handleJoinQuiz} setUsername={setUsername} />}
      {view === 'enterCode' && <EnterCodePage onEnterCode={handleEnterCode} setQuizCode={setQuizCode} />}
      {view === 'quiz' && <Quiz onShowLeaderboard={handleShowLeaderboard} />}
      {view === 'leaderboard' && (
        <Leaderboard onGoBack={handleGoBack} winners={/* Pass your winners data here */ []} />
      )}
    </div>
  );
};

export default App;


