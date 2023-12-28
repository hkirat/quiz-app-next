import React from 'react';
import { useState } from 'react';
import WinnerModal from './WinnerModal';
const Leaderboard = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const leaderboardData = [
    { name: 'Vishal', points: 10, emoji: '🐳' },
    { name: 'Harkirat', points: 9, emoji: '🐔' },
    { name: 'Shubham', points: 7, emoji: '🐨' },
    { name: 'Andrew Tate', points: 2, emoji:  '🐼' },
    { name: 'Goggins', points: 4, emoji: '🦚' },
    { name: 'Baki', points: 1, emoji: '🐫' },
    { name: 'Pluto', points: 9, emoji: '🦜' },
    { name: 'Mark', points: 1, emoji: '🐸' },
    { name: 'Satyendra', points: 2, emoji: '🦥' },
    { name: 'Arjun', points: 4, emoji: '🦄' },
    // Add more users with emojis as needed
  ];
  leaderboardData.sort((a, b) => b.points - a.points);

  const handleStripClick = (user) => {
    setSelectedUser(user);
  };

  const handleCloseModal = () => {
    setSelectedUser(null);
  };
  const getRandomColor = () => {
    const generateRandomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    let color = generateRandomColor();
  
    // Keep generating a new color until it's not white
    while (color === '#ffffff') {
      color = generateRandomColor();
    }
  
    return color;
  };
  
  return (
    <div className='h-screen bg-pink-200 flex flex-col items-center justify-center'>
      <div className='pl-6 rounded-xl   bg-white '>
      <h1 className='font-semibold text-center text-2xl'>Leaderboard</h1>

<div className='w-2/3 flex flex-col items-center mt-8'>
  {leaderboardData.map((user, index) => (
    <div
      key={index}
      className={`flex w-full items-center cursor-pointer justify-between mb-3  ${
        (index + 1) % 10 === 0 ? 'mb-8' : ''
      }`}
      onClick={() => handleStripClick(user)}
    >
      <div className='flex items-center'>
        <div className='bg-blue-500 h-8 w-8 flex items-center justify-center rounded-full text-white mr-4'>
          {index + 1}
        </div>
       
      </div>

      {/* Horizontal strip representing points */}
      <div className='flex items-center w-full '>
        <div
           style={{ width: `${user.points * 100}px` , backgroundColor: getRandomColor(), }}
          className={`h-4  rounded `}
        ></div>
          {/* Add emojis on the right side */}
      <div className='flex h-2 rounded  w-4 items-center space-x-2'>
        {/* Display the emoji from the user object */}
        <span role='img' aria-label='Emoji'>
          {user.emoji}
        </span>
      </div>
      </div>

    
    </div>
  ))}
</div>
    <WinnerModal user={selectedUser} onClose={handleCloseModal} />

      </div>
          </div>
  );
};

export default Leaderboard;
