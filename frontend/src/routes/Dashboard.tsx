import { useEffect, useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { useIsLoggedIn } from "../hooks/useIsLoggedIn";
import { NavBar } from "../components/NavBar";
import { Login } from "../components/Login";

type Option = {
  id: number;
  title: string;
};

enum QuizState {
  "NOT_STARTED",
  "LEADERBOARD",
  "END",
  "PROBLEM",
}

type Problem = {
  id: number;
  title: string;
  description?: string | null;
  options: Option[];
};

type Quiz = {
  id: number;
  state: QuizState;
  currentProblem: number;
  problems: Problem[];
};

export const DashBoard = () => {
  const [quizes, setQuizzes] = useState([]);
  const isLoggedIn = useIsLoggedIn();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await fetch("/api/admin/", {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const { data } = await response.json();
        setQuizzes(data || []);
      } catch (error) {
        console.error("Error fetching quizzes:", error);
        alert("Could not fetch quizzes! Please try again later.");
      }
    };

    fetchQuizzes();
  }, []);

  if (!isLoggedIn) {
    return <Login />;
  }

  return (
    <div className="self-start text-slate-700">
      <NavBar username={"Username"} />
      <div className="lg:max-w-screen-lg md:min-w-[500px] max-w-screen-sm mx-auto mt-5">
        {quizes.length > 0 ? (
          quizes.map((quiz: Quiz) => (
            <div
              key={quiz.id}
              onClick={() => {
                navigate(`/quiz`, { state: { quizId: String(quiz.id) } });
              }}
              className="shadow-lg rounded-xl p-6 w-full mb-6 hover:shadow-2xl transition-shadow duration-300 relative"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="text-2xl font-bold text-purple-600">
                  {quiz.id}
                </span>
                <div className="flex space-x-2">
                  <button className="text-gray-600 hover:text-indigo-500 transition-colors duration-200">
                    <FaEdit className="w-5 h-5" />
                  </button>
                  <button className="text-gray-600 hover:text-red-500 transition-colors duration-200">
                    <FaTrash className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="text-base text-gray-800 mb-2">
                <span className="font-semibold">State:</span> {quiz.state}
              </div>
              <div className="text-base text-gray-800">
                <span className="font-semibold">Problems Done:</span>{" "}
                {quiz.currentProblem}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-xl text-gray-400 font-semibold">
            No Quizzes Available!
          </div>
        )}
      </div>
    </div>
  );
};
