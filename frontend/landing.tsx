const Landing = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold mb-2">
            Enter the code to join
          </h1>
          <p className="text-gray-600">It’s on the screen in front of you</p>
        </div>
        <div className="mb-8">
          <input
            className="text-center w-64 p-2 border-2 border-purple-600 rounded-lg shadow-sm focus:outline-none focus:border-purple-800"
            placeholder="1234 5678"
            style={{ fontSize: "1rem" }}
            type="text"
          />
        </div>
        <button
          className="bg-purple-600 text-white w-64 py-2 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-800 focus:ring-opacity-50"
          style={{ fontSize: "1rem" }}
        >
          Join
        </button>
      </div>
    </div>
  );
};

export default Landing;
