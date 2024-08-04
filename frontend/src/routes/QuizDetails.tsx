import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { useIsLoggedIn } from "../hooks/useIsLoggedIn";
import { NavBar } from "../components/NavBar";
import { ProblemForm } from "../components/ProblemForm";
import { QuizControls } from "../components/QuizControls";
import { Login } from "../components/Login";

type QuizData = {
  id: number;
  state: string;
  problems: {
    id: number;
    title: string;
    description?: string;
    correctOption: number;
    options: { id: number; title: string }[];
  }[];
};

export const QuizDetails = () => {
  const [selectedProblem, setSelectedProblem] = useState<any>(null); // eslint-disable-line @typescript-eslint/no-explicit-any
  const { state } = useLocation();
  const isLoggedIn = useIsLoggedIn();

  const [quizData, setQuizData] = useState<QuizData | null>();

  useEffect(() => {
    if (!isLoggedIn) {
      return;
    }
    if (!state) {
      return;
    }
    fetch(`/api/admin/quiz?quizId=${state.quizId}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        if (!resp.ok) {
          throw new Error("Unable to fetch Quiz Details!");
        }
        return resp.json();
      })
      .then((data) => {
        setQuizData(data.data.quiz);
      })
      .catch((err) => {
        alert(err);
      });
  }, [state, isLoggedIn]);

  if (!isLoggedIn) {
    return <Login />;
  }

  if (!state) {
    return (
      <div className="text-center text-xl text-gray-400 font-semibold">
        Invalid quiz!
      </div>
    );
  }

  if (!quizData) {
    return;
  }

  return (
    <div className="self-start">
      <NavBar username={"Username"} />
      <div className="container mx-auto mt-5">
        <QuizControls quizId={state.quizId} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-1 rounded-lg shadow-md p-4 border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              Problems
            </h4>
            <button
              className="bg-purple-600 text-white w-full py-2 mb-2 rounded-lg shadow-xl hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-800 focus:ring-opacity-50"
              onClick={() => {
                setSelectedProblem({
                  quizId: state.quizId,
                  title: "",
                  description: "",
                  correctOption: 0,
                  options: [
                    { title: "" },
                    { title: "" },
                    { title: "" },
                    { title: "" },
                  ],
                });
              }}
            >
              Add Problem
            </button>
            {quizData.problems.map((problem) => (
              <div
                key={problem.id}
                className={`p-3 mb-3 ${
                  selectedProblem?.id === problem.id
                    ? "bg-purple-400"
                    : "bg-purple-200"
                } rounded-lg hover:bg-purple-300 transition duration-200 cursor-pointer shadow-sm`}
                onClick={() => setSelectedProblem(problem)}
              >
                <p className="text-sm font-medium text-gray-700">
                  {problem.title}
                </p>
              </div>
            ))}
          </div>

          <div className="col-span-1 md:col-span-2 rounded-lg shadow-md p-4 border border-gray-200">
            {selectedProblem !== null ? (
              <ProblemForm
                quizId={Number(state.quizId)}
                problemId={selectedProblem.id}
                title={selectedProblem.title}
                description={selectedProblem.description}
                answer={selectedProblem.correctOption}
                options={selectedProblem.options}
              />
            ) : (
              <div className="p-6 text-gray-700">
                <p>Select a problem from the list to view details.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
