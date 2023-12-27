import { useState } from 'react';
import { Nav } from '.';

export function Join() {
  const [input, setInput] = useState('');

  return (
    <div className="h-screen">
      <Nav />
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-5xl underline decoration-slice py-5">Quiz App</h1>

        {/* Some Image */}
        <img
          className="rounded-full"
          src={'https://picsum.photos/200'}
          alt="some photo"
        />
        <form
          className="flex flex-col gap-2 justify-center mt-5"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <label htmlFor="name" className="text-xl">
            Enter your name
          </label>
          <input
            type="text"
            id="name"
            className="bg-gray-100 h-10"
            value={input}
            onChange={(e) => {
              setInput(e.currentTarget.value);
            }}
          />
          <button className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            Join Quiz
          </button>
        </form>
      </div>
    </div>
  );
}
