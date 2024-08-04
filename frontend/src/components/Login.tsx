export const Login = () => {
  return (
    <div className="flex flex-col text-center items-center">
      <h1 className="text-2xl font-semibold mb-5 text-slate-600">
        100x Quiz
      </h1>
      <p className="text-gray-500 mb-5">To host quizzes, please sign in with Google.</p>
      <button
        className="bg-purple-600 text-white w-64 py-2 rounded-lg shadow-xl hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-800 focus:ring-opacity-50 mb-8"
        onClick={() => window.open("http://localhost:5173/api/auth/google", "_self")}
      >
        Login With Google
      </button>
    </div>
  );
}
