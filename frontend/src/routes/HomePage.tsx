import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <div className="flex flex-col text-center">
      <h1 className="text-2xl font-semibold mb-5 text-slate-600">100x Quiz</h1>
      <Link
        className="bg-purple-600 text-white w-64 py-2 rounded-lg shadow-xl hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-800 focus:ring-opacity-50 mb-8"
        to="/join"
      >
        Join A Quiz
      </Link>
      <Link
        className="bg-purple-600 text-white w-64 py-2 rounded-lg shadow-xl hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-800 focus:ring-opacity-50"
        to="/create"
      >
        Host A Quiz
      </Link>
    </div>
  );
}
