import { useState } from 'react';
import { Nav } from '.';
import { quizData } from '../mocks/quiz-mock';

/**
 Simple View with title and answers - $25
    title : string
    choices: strings[]
    image?: string
 */

export function Quiz() {
  const [current, setCurrent] = useState(0);

  return (
    <div className="h-screen">
      <Nav />
      <div className="flex w-full justify-center">
        <div className="max-w-sm">
          {quizData.map((quiz, index) => {
            if (index !== current) return;
            return (
              <SingleQuiz
                current={index}
                choices={quiz.choices}
                title={quiz.title}
                imageURL={quiz.imageURL}
                noOfQuestions={quizData.length}
              />
            );
          })}
          <div className="flex justify-between w-full mt-4 text-white">
            <button
              className="w-[49%] py-3 bg-indigo-600 rounded-lg"
              onClick={() => setCurrent((curr) => Math.max(curr - 1, 0))}
            >
              Previous
            </button>
            <button
              className="w-[49%] py-3 bg-indigo-600 rounded-lg"
              onClick={() =>
                setCurrent((curr) => Math.min(curr + 1, quizData.length - 1))
              }
            >
              Next
            </button>
          </div>
          <h1 className="text-3xl">
            This `previous` & `Next` be changed by admin too
          </h1>
        </div>
      </div>
    </div>
  );
}

type SingleQuizProps = {
  current: number;
  title: string;
  choices: string[];
  imageURL?: string;
  noOfQuestions: number;
};
function SingleQuiz({
  current,
  title,
  choices,
  imageURL,
  noOfQuestions,
}: SingleQuizProps) {
  return (
    <article>
      <h4 className="mt-10 text-xl">
        Question {current + 1} of {noOfQuestions}
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
              />
              <p className="ml-6 ">{choice}</p>
            </div>
          );
        })}
      <div className="flex flex-col items-start w-full"></div>
    </article>
  );
}
