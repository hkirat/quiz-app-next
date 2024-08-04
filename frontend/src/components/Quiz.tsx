import { useState } from "react";
import { Socket } from "socket.io-client";

export function Quiz({
  quizData,
  socket,
  userId,
}: {
  quizData: {
    quizId: string;
    problemId: string;
    title: string;
    description?: string;
    options: { id: number; title: string }[];
  };
  socket: Socket;
  userId: string;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [submission, setSubmission] = useState(0);

  console.log(userId);

  function handleSubmission(optionNo: number) {
    setSubmission(optionNo);
  }

  console.log(quizData);
  return (
    <div className="bg-gray-150 rounded-lg text-slate-600 shadow-md px-12 py-6">
      <div className="min-w-64 max-w-80">
        <>
          <SingleQuiz
            choices={quizData.options}
            title={quizData.title}
            description={quizData.description || ""}
            selected={submission}
            imageURL={""}
            setSelected={handleSubmission}
          />
          {userId !== quizData.quizId ? (
            <button
              className="mt-4 bg-purple-600 w-full text-white py-2 rounded-lg shadow-xl hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-800 focus:ring-opacity-50"
              disabled={submitted || !userId}
              onClick={() => {
                if (userId == quizData.quizId) {
                  return;
                }
                setSubmitted(true);
                socket.emit("submit", {
                  userId: userId,
                  problemId: quizData.problemId,
                  selected: submission,
                });
              }}
            >
              Submit
            </button>
          ) : null}
        </>
      </div>
    </div>
  );
}

type SingleQuizProps = {
  title: string;
  description: string;
  choices: { id: number; title: string }[];
  selected: number;
  imageURL?: string;
  setSelected: (optionNo: number) => void;
};
function SingleQuiz({
  title,
  description,
  choices,
  selected,
  imageURL,
  setSelected,
}: SingleQuizProps) {
  return (
    <article className="w-full space-y-5">
      <h2 className="my-4 text-2xl lg:text-4xl font-bold">{title}</h2>
      <p className="text-slate-600">{description}</p>
      {imageURL && <img src={imageURL} alt="" />}
      {choices.length &&
        choices.map((x, index) => {
          return (
            <div
              key={x.id}
              className={`mb-2 p-4 lg:p-6 rounded-lg lg:rounded-md text-black 
                ${
                  selected === index
                    ? "bg-purple-300 focus:outline-none"
                    : "hover:outline-purple-300 border hover:border"
                }
                transition duration-200 ease-in-out flex items-center w-full mt-4 cursor-pointer`}
              onClick={() => {
                setSelected(index);
              }}
            >
              <p>{x.title}</p>
            </div>
          );
        })}
    </article>
  );
}
