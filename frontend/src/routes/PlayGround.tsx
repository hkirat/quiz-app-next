import { useLocation } from "react-router-dom";

import { Quiz } from "../components/Quiz";
import { QuizControls } from "../components/QuizControls";
import { io, Socket } from "socket.io-client";
import { useEffect, useRef, useState } from "react";
import {
  LeaderBoard,
  LeaderBoardData,
} from "../components/leaderboard/LeaderBoard";

type Question = {
  id: string;
  title: string;
  description: string;
  options: { id: number; title: string }[];
};

export const PlayGround = () => {
  const { state } = useLocation();

  const socket = useRef<Socket | null>(null);
  const [currentState, setCurrentState] = useState<string>("NOT_STARTED");
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [leaderboard, setLeaderboard] = useState<LeaderBoardData[]>([]);
  const [userId, setUserId] = useState<string>("");

  useEffect(() => {
    const ws = socket.current;
    if (!ws) {
      const socketCon = io("http://127.0.0.1:3001/");
      console.log("setting socket...");
      socket.current = socketCon;
    } else if (state.isAdmin && !userId) {
      console.log("emitiing QUiZ_join");
      setUserId(state!.quizId);
      ws.emit("QUIZ_JOIN", {
        quizId: state!.quizId,
      });
      console.log("emiting INIT State");
      ws.emit("INIT_STATE", {
        quizId: state!.quizId,
      });
    } else if (!userId) {
      ws.emit("QUIZ_JOIN", {
        quizId: state!.quizId,
        userName: state!.name,
      });

      ws.on("INIT_USER", async ({ userId }: { userId: string }) => {
        setUserId(userId);
        ws.emit("INIT_STATE", {
          quizId: state!.quizId,
        });
      });
    } else {
      ws.on("INIT_STATE", ({ stateData }) => {
        setCurrentState(stateData.state);
        switch (stateData.state) {
          case "QUESTION":
            setCurrentQuestion(stateData.problem);
            break;
          case "LEADERBOARD":
            setCurrentQuestion(stateData.data);
            break;
          default:
        }
      });

      ws.on("PROBLEM", ({ state, problem }) => {
        setCurrentState(state);
        setCurrentQuestion(problem);
      });
      ws.on("LEADERBOARD", ({ state, data }) => {
        setCurrentState(state);
        setLeaderboard(data);
      });
      ws.on("QUIZ_END", () => {
        setCurrentState("QUIZ_END");
      });
      console.log("running else");
    }

    return () => {
      if (!ws || currentState !== "QUIZ_END") {
        return;
      }
      ws.close();
    };
  }, [state, socket, userId, currentState]);

  console.log(state!.quizId)
  if (!state) {
    return <h1 className="text-slate-600">Please Join A valid Quiz!</h1>;
  }

  if (currentState === "NOT_STARTED") {
    if (!state.isAdmin) {
      return <div className="text-slate-600">This quiz hasnt started yet</div>;
    }
  }

  if (currentState === "LEADERBOARD") {
    return <LeaderBoard leaderboardData={leaderboard} />;
  }

  if (currentState === "QUIZ_END") {
    return <div className="text-slate-600">Quiz has ended</div>;
  }

  if (!currentQuestion) {
    return <div className="text-slate-600 font-medium">Please wait before Quiz Starts..</div>
  }

  return (
    <div>
      <Quiz
        socket={socket.current!}
        userId={userId}
        quizData={{
          quizId: state!.quizId,
          problemId: currentQuestion!.id,
          title: currentQuestion!.title,
          description: currentQuestion!.description,
          options: currentQuestion!.options,
        }}
      />{" "}
      {state && state.isAdmin ? <QuizControls quizId={state.quizId} /> : null}
    </div>
  );
};
