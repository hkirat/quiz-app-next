import { useState } from 'react';
import { Nav } from '.';

export function Root() {
  return (
    <div className="h-screen">
      <Nav />
      <main className="flex flex-col h-full w-full justify-center items-center">
        <h1 className="text-5xl">
          <span className="underline decoration-wavy decoration-cyan-400">
            Live
          </span>{' '}
          <span className="underline decoration-slice decoration-fuchsia-600">
            Quizz
          </span>{' '}
          <span className="underline decoration-clone decoration-green-500">
            App
          </span>
        </h1>
        <QuizJoinCodeForm />
      </main>
    </div>
  );
}

function QuizJoinCodeForm() {
  const [code, setCode] = useState('');

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    // Ur logic for submit
    console.log(code);
  };

  return (
    <form
      className="pt-20 flex flex-col items-center gap-5"
      onSubmit={handleSubmit}
    >
      <label htmlFor="code" className="text-center font-semibold text-2xl">
        Enter the quiz code to join
      </label>
      <input
        type="text"
        value={code}
        className="bg-gray-50 border border-black w-full rounded-md focus:outline-none h-10 p-1"
        onChange={(e) => {
          setCode(e.currentTarget.value);
        }}
      />
      <button
        type="submit"
        className="w-fit bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleSubmit}
      >
        JOIN
      </button>
    </form>
  );
}
