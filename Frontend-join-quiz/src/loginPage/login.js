import React, { useState } from 'react';

const Login = () => {
  const [joinCode, setJoinCode] = useState('');

  const handleJoinCodeChange = (event) => {
    setJoinCode(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    
    console.log('Join Code:', joinCode);

    // Clear the input field after submission 
    setJoinCode('');
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-20 shadow-md rounded-md">
        <div className= "flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" role="img" preserveAspectRatio="xMidYMid meet" width="32" height="32" aria-label="Mentimeter Logo" viewBox="0 0 803.87 676.39"><g fill="#000000"><polygon fill="#FFB9D0" points="67.06 663 532.44 663 201.01 0 67.06 0 67.06 663"></polygon><polygon fill="#196CFF" points="602.86 0 602.86 133.95 468.91 133.95 468.91 267.9 334.96 267.9 334.96 663 736.81 663 736.81 0 602.86 0"></polygon><path fill="#FF80AB" d="M67.06,267.9V663H468.85C465.23,444.16,286.73,267.9,67.06,267.9Z"></path><path fill="#FF403D" d="M67.06,468.82V662.9h200.8C264.25,555.11,175.74,468.82,67.06,468.82Z"></path><rect y="662.97" width="803.87" height="13.41"></rect></g></svg>
        <h2 className="text-2xl font-bold-mono text-center-600 mb-4 ml-3">Mentimeter</h2>
        </div>

        <div className="text-center text-sm text-gray-400 mb-4">
          It's on the screen in front of you
        </div>

        <form className="text-center" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="code" className="block text-md font-medium text-gray-600">
              Enter the code to join
            </label>
            <input
              type="text"
              id="code"
              name="code"
              value={joinCode}
              onChange={handleJoinCodeChange}
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter code"
            />
          </div>
          <button
            type="submit"
            className="w-1/2 bg-zinc-800 text-white p-2 rounded-full hover:bg-zinc-600"
          >
            Join
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
