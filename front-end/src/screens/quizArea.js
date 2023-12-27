import { useEffect, useState } from "react";

const QuizArea = ({ question, options }) => {
  const [loading, setLoading] = useState(true);
  const [loadingSecond, setLoadingSecond] = useState(3);
  const [selectedOption, setSelectedOption] = useState(null);
  const [timenow, setTimenow] = useState(0);
  const [timeTaken, setTimeTaken] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setLoading(false);
      setTimenow(new Date().getTime());
    }, 4000);
    const timer2 = setInterval(() => {
      setLoadingSecond((prevSecond) => prevSecond - 1);
    }, 1000);

    return () => {
      clearTimeout(timer1);
      clearInterval(timer2);
    };
  }, []);
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 ">
      <div className="p-5" style={{ width: "500px" }}>
        <div className="flex items-center justify-center mb-10">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3261/3261259.png"
            alt="logo"
            className="w-10 h-10 mr-2"
          />
          <div className="text-2xl font-bold">Quizzy McQuizface</div>
        </div>
        <div
          className="p-5 rounded-md"
          style={{ minHeight: "320px", maxHe2ght: "320px" }}
        >
          {loading ? (
            <div className="flex justify-center items-center w-100 mb-8">
              <div className="p-5" style={{ width: "500px" }}>
                <div className="flex justify-center items-center h-full">
                  <div className="text-5xl font-bold">{loadingSecond}</div>
                </div>
              </div>
            </div>
          ) : selectedOption === null ? (
            <div>
              <div className="text-2xl mb-8">{question}</div>
              <div className="flex flex-col">
                {options.map((option, index) => (
                  // border radius 50% and border color
                  <div
                    key={index}
                    className="flex items-center mb-2 p-4 border border-gray-300 rounded-2xl cursor-pointer hover:bg-blue-300 font-semibold"
                    onClick={() => {
                      setSelectedOption(index);
                      console.log(new Date().getTime());
                      console.log(timenow);
                      var time = (new Date().getTime() - timenow) / 1000;
                      setTimeTaken(time);
                    }}
                  >
                    {option}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center w-100 mb-8">
              {/* dummy image 100x100 */}
              <img
                src="https://www.just-style.com/wp-content/uploads/sites/27/2023/07/Quiz.jpg"
                alt="dummy"
                className="rounded-full mb-5 w-20 h-20"
              />
              <div className="text-xl font-semibold">Let's see how you did</div>
              {/* time taken to complete */}
              <div className="font-semibold">
                Time taken: {timeTaken} seconds
              </div>
            </div>
          )}
        </div>
        <div className="flex justify-center mt-10">
          {/*  Like */}
          <img
            src="https://cdn-icons-png.flaticon.com/512/889/889140.png"
            className="w-10 h-10 mr-2 cursor-pointer"
            alt="like"
          />
        </div>
        {/* all rights reserved */}
        <div className="text-center mt-10 text-gray-500">
          All rights reserved &copy; Quizzy McQuizface
        </div>
      </div>
    </div>
  );
};

export default QuizArea;
