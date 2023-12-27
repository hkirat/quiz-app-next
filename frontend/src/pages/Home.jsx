import { useState } from "react";
const Home = () => {
  const [inputValue, SetInputValue] = useState("");
  function handleChange(e) {
    SetInputValue(e.target.value);
  }

  function handleJoinClick() {
    //Logic to Join the Quiz
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="border-black border-2 mx-2  w-96 h-96 rounded-lg flex flex-col items-center justify-center">
        <div className="my-4 font-bold text-3xl">QUIZZER</div>
        <div className="my-4 text-2xl text-slate-500">
          Enter the Code to join
        </div>
        <div className="my-4">
          <input
            placeholder="1234 5678"
            className="p-2 rounded-lg bg-[#e2e8f0] outline-none text-xl"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div
          onClick={handleJoinClick()}
          className="my-4 cursor-pointer px-4 py-1 text-2xl bg-[#18181b] text-white rounded-2xl"
        >
          Join
        </div>
      </div>
    </div>
  );
};

export default Home;
