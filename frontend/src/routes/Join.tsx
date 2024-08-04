import { useEffect, useState, ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

type FormData = {
  name: string;
  quizId: string;
};

export const JoinQuiz = () => {
  const [formData, setFormData] = useState<FormData>({ name: "", quizId: "" });
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (submitted) {
      navigate("/play", {
        state: { quizId: formData.quizId, name: formData.name, isAdmin: false },
      });
    }
  }, [submitted, navigate, formData]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  if (submitted) {
    return null;
  }

  return (
    <div className="text-center">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold mb-2 text-slate-600">
          Enter the quizId to join
        </h1>
        <p className="text-gray-600">It’s on the screen in front of you</p>
      </div>
      <div className="mb-8">
        <input
          className="text-center w-64 p-2 border-2 border-purple-600 rounded-lg shadow-sm focus:outline-none focus:border-purple-800"
          placeholder="1234 5678"
          style={{ fontSize: "1rem" }}
          type="text"
          name="quizId"
          onChange={handleInputChange}
        />
        <br /> <br />
        <input
          className="text-center w-64 p-2 border-2 border-purple-600 rounded-lg shadow-sm focus:outline-none focus:border-purple-800"
          placeholder="Your name"
          style={{ fontSize: "1rem" }}
          type="text"
          name="name"
          onChange={handleInputChange}
        />
      </div>
      <div className="flex flex-col">
        <button
          className="bg-purple-600 text-white w-64 py-2 rounded-lg shadow-xl hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-800 focus:ring-opacity-50"
          style={{ fontSize: "1rem" }}
          onClick={handleSubmit}
        >
          Join
        </button>
        <Link
          to="/"
          className="mt-5 bg-purple-600 text-white w-64 py-2 rounded-lg shadow-xl hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-800 focus:ring-opacity-50"
        >
          Go Back
        </Link>
      </div>
    </div>
  );
};