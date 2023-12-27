import { useState } from "react";

function App() {
  const [code, setCode] = useState("");

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div>
        <img src="../public/quiz-app-logo.png" className="w-16 h-16" alt="" />
      </div>
      <div className="">
        <h1 className="text-center font-bold text-2xl py-2">
          Enter the code to join
        </h1>
        <p className="text-gray-500 text-sm text-center">
          It's on the screen in front of you.
        </p>
      </div>

      <div className="flex flex-col items-center">
        <input
          type="text"
          className="border border-blue-400 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 my-8
          text-gray-400"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <button className="bg-slate-900 rounded-2xl w-24 text-white p-2">
          Join
        </button>
      </div>
    </div>
  );
}

export default App;
