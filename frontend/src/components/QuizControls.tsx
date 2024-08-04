import { useLocation, useNavigate } from "react-router-dom";

export const QuizControls = ({ quizId }: { quizId: number }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const startQuiz = async () => {
    const response = await fetch("/api/admin/quiz/start", {
      method: "POST",
      headers: {
        Accept: "appication/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        quizId: quizId,
      }),
    });
    if (!response.ok) {
      console.log("failed to start the quiz!");
      alert("Please try again later!")
    }
    navigate("/play", { state: { quizId: quizId, isAdmin: true } });
  };

  // const skipProblem = async () => {
  //   const response = await fetch("/api/admin/problem/skip", {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       quizId: quizId,
  //     }),
  //   });
  //   if (!response.ok) {
  //     console.log("failed to start the quiz!");
  //   }
  // };

  return (
    <div className="rounded-lg shadow-md p-3 mb-3 text-slate-700 flex justify-between">
      <div className="flex flex-row justify-evenly">
        <p className="self-center text-sm mr-2">RoomId</p>
        <div className="p-2 outline-purple-300 focus-within:outline rounded-md border">
          {quizId}
        </div>
      </div>

      {pathname === "/quiz" ? (
        <button
          className="bg-purple-600 text-white self-center w-28 h-12 rounded-lg shadow-xl hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-800 focus:ring-opacity-50"
          onClick={async (e) => {
            e.preventDefault();
            await startQuiz();
          }}
        >
          Start Quiz
        </button>
      ) : (
        <>
          <button
            className="text-sm bg-purple-600 text-white self-center w-28 h-12 rounded-lg shadow-xl hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-800 focus:ring-opacity-50"
            onClick={async (e) => {
              e.preventDefault();
            }}
          >
            Next Problem
          </button>
          <button
            className="text-sm bg-purple-600 text-white self-center w-28 h-12 rounded-lg shadow-xl hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-800 focus:ring-opacity-50"
            onClick={async (e) => {
              e.preventDefault();
            }}
          >
            Show Leaderboard
          </button>
        </>
      )}
    </div>
  );
};
