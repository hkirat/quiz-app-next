import { Link, useNavigate } from "react-router-dom";
import { useIsLoggedIn } from "../hooks/useIsLoggedIn";
import { Login } from "../components/Login";

type RoomCreationResp = {
  data: {
    quizId: number;
  };
};

export const CreateQuiz = () => {
  const isLoggedIn = useIsLoggedIn();
  const navigate = useNavigate();

  const createQuiz = async () => {
    try {
      const response = await fetch("/api/admin/quiz", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const { data: { quizId } } = (await response.json()) as RoomCreationResp;
      navigate("/quiz", { state: { quizId: quizId } });
    } catch (error) {
      console.error("Failed to create quiz:", error);
      alert("Could not create room! Please try again later.");
    }
  };

  if (!isLoggedIn) {
    return <Login />;
  }

  return (
    <div className="text-center">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold mb-2 text-slate-600">
          Create New Room
        </h1>
        <p className="text-gray-600">
          Participants would be able to join using it
        </p>
      </div>
      <div className="flex flex-col">
        <button
          className="bg-purple-600 text-white py-2 rounded-lg shadow-xl hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-800 focus:ring-opacity-50"
          style={{ fontSize: "1rem" }}
          onClick={createQuiz}
          aria-label="Create Room"
        >
          Create Room
        </button>
        <Link
          to="/dashboard"
          className="mt-5 bg-purple-600 text-white py-2 rounded-lg shadow-xl hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-800 focus:ring-opacity-50"
        >
          Go Back
        </Link>
      </div>
    </div>
  );
};