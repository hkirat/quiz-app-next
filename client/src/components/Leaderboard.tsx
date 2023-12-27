
import React from 'react';

interface LeaderboardProps {
  winners: { username: string; profilePicture?: string; points: number }[];
  onGoBack: () => void;
}

const Leaderboard: React.FC<LeaderboardProps> = ({ winners, onGoBack }) => {
  // Sort winners by points in descending order
  const sortedWinners = [...winners].sort((a, b) => b.points - a.points);

  return (
    <div className="Leaderboard bg-gray-200 p-12 rounded-md h-screen w-screen flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold mb-8">Leaderboard</h2>
      <ul className="list-disc pl-6 mb-8">
        {sortedWinners.map((winner, index) => (
          <li key={index} className="text-xl flex items-center mb-4">
            {winner.profilePicture && (
              <img
                src={winner.profilePicture}
                alt={`${winner.username}'s profile`}
                className="w-10 h-10 rounded-full mr-4"
              />
            )}
            <span>{winner.username} - {winner.points} points</span>
          </li>
        ))}
      </ul>
      <button
        onClick={onGoBack}
        className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 cursor-pointer"
      >
        Go Back
      </button>
    </div>
  );
};

export default Leaderboard;

