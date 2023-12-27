import { useState } from 'react';

/**
 Simple View with title and answers - $25
    title : string
    choices: strings[]
    image?: string
 */

export function Quiz({quizData, socket, userId, problemId, roomId}: {
    quizData: {
        title: string;
        options: string[];
    },
    socket: any;
    roomId: string;
    userId: string;
    problemId: string;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [submission , setSubmission] = useState(0);

  return (
    <div className="h-screen">
      <div className="flex w-full justify-center">
        <div className="">
            <SingleQuiz
                choices={quizData.options.map(x => x.title)}
                title={quizData.title}
                imageURL={""}
                setSelected={setSubmission}
            />
          <div className="flex justify-between w-full mt-4 text-white">
            <button
              className="py-3 px-10 bg-indigo-600 rounded-lg mx-8"
              disabled={submitted}
              onClick={() => {
                setSubmitted(true);
                socket.emit("submit", {
                    userId,
                    problemId,
                    submission: Number(submission),
                    roomId,
                })
              }}
            >
              Submit
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

type SingleQuizProps = {
  title: string;
  choices: string[];
  imageURL?: string;
  setSelected: any;
};
function SingleQuiz({
  title,
  choices,
  imageURL,
  setSelected
}: SingleQuizProps) {
  return (
    <article>
      <h4 className="mt-10 text-xl">
        Question 
      </h4>
      <div className="mt-4 text-2x">{title}</div>
      {imageURL && <img src={imageURL} alt="" />}
      {choices.length &&
        choices.map((choice, index) => {
          return (
            <div
              key={index}
              className="flex items-center w-full py-4 pl-5 m-2 ml-0 space-x-2 border-2 cursor-pointer border-white/10 rounded-xl bg-white/5"
            >
              <input
                type="radio"
                name="option"
                value={choice}
                className="w-6 h-6 bg-black"
                onClick={() => {
                    setSelected(index)
                }}
              />
              <p className="ml-6 ">{choice}</p>
            </div>
          );
        })}
      <div className="flex flex-col items-start w-full"></div>
    </article>
  );
}