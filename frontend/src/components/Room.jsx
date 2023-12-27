import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Room = ({ onJoin }) => {
  const [roomCode, setRoomCode] = useState("");

  const handleInputChange = (e) => {
    setRoomCode(e.target.value);
  };

  const handleJoinClick = () => {
    onJoin(roomCode);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-96 text-center">
        <h1 className="text-3xl font-semibold text-gray-800 mb-3">Enter the code to join</h1>
        <h3 className="text-sm text-gray-500">{`It's on the screen in front of you`}</h3>
        <input
          type="text"
          placeholder="1234 5678"
          value={roomCode}
          onChange={handleInputChange}
          maxLength={8}
          className="w-full px-4 py-2 mt-8 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
        />
        <button
          onClick={handleJoinClick}
          className="mx-auto mt-4 px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none"
        >
          Join
        </button>
      </div>
      
    </div>
  );
};

export default Room;
