const SignUp = () => {
  return (
    <div className="bg-blue-100 h-screen flex flex-col items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Mentimeter</h1>
        </div>
        <div className="mb-6">
          <input
            className="border-2 border-gray-300 rounded-full py-2 px-4 mb-2 w-64 text-center"
            placeholder="Enter your name"
            type="text"
          />
        </div>
        <button className="bg-black text-white rounded-full py-2 px-8 mb-6">
          Join quiz
        </button>
      </div>
    </div>
  );
};

export default SignUp;
