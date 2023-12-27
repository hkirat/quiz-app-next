import { useState } from "react";

// eslint-disable-next-line react/prop-types
const EnterName = ({ onJoin }) => {
  const [avatar, setAvatar] = useState(""); 
  const [name, setName] = useState(""); 



  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleJoinClick = () => {
    onJoin({avatar, name });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-96 text-center">
     
        {avatar && (
          <div className="mt-2">
            <img
              src={avatar}
              alt="Avatar"
              className="w-32 h-32 rounded-full mx-auto"
            />
          </div>
        )}
        {!avatar && (
          <label className="w-full px-4 py-2 mt-4 border border-gray-300 rounded-md cursor-pointer focus:outline-none focus:border-gray-500">
            Upload Photo
            <input
              type="file"
              accept="image/*"
              onChange={handleAvatarChange}
              className="hidden"
            />
          </label>
        )}
        <h3 className="text-black text-left mt-10">Enter your name</h3>
        <input
          type="text"
          value={name}
          placeholder="Bob the builder"
          onChange={handleNameChange}
          className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
        />
        <button
          onClick={handleJoinClick}
          className="mx-auto mt-4 px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none"
        >
          Join Quiz
        </button>
      </div>
    </div>
  );
};

export default EnterName;
