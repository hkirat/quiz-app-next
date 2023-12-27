import React, { useState } from 'react';
import './Leaderboard.css';

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([
    { name: 'Player 1', score: 200, imageUrl: "https://source.unsplash.com/random/200x200?sig=1" },
    { name: 'Player 2', score: 150, imageUrl: "https://source.unsplash.com/random/200x200?sig=2" },
    { name: 'Player 3', score: 123, imageUrl: "https://source.unsplash.com/random/200x200?sig=3" },
  ]);
  const sortedLeaderboard = [...leaderboardData].sort((a, b) => b.score - a.score);
  const getRandomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

  return (
    <div className="leaderboard-container">
      <h4 id='title'>Leaderboard</h4>
      <div className="leaderboard">
        {sortedLeaderboard.map((player, index) => (
         <div> 
          <div key={index} className="leaderboard-item">
          <div className="score">{player.score} p</div>
            <div className="bar" style={{width: `${player.score * 2}px`, backgroundColor: getRandomColor() }} />
            <div className="user-image">
                <img src={player.imageUrl} alt="User" />
              </div>
            <div className="info">
              <span className="name">{player.name}</span>
            </div>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
