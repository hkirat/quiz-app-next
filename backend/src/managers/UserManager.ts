import { Socket } from "socket.io";
import {
  getQuiz,
  updateQuizState,
  addQuizParticipants,
  getLeaderboard,
  updateProblemTime,
  updateUserPoints,
  updateCurrentProblem,
  getDbProblem,
} from "../db";

import { QuizState } from "../types";
import { IoManager } from "./IoManager";

const TIMER = 1000 * 1 * 10;

async function getProblem(quiz: any) {
  try {
    if (quiz.currentProblem >= quiz.problems.length) {
      updateQuizState(quiz.id, QuizState.END);
      IoManager.getIo().to(String(quiz.id)).emit("QUIZ_END", {});
      return;
    }
    updateQuizState(quiz.id, QuizState.QUESTION);
    IoManager.getIo().to(String(quiz.id)).emit("PROBLEM", {
      state: QuizState.QUESTION,
      problem: quiz.problems[quiz.currentProblem],
    });
    await updateProblemTime(quiz.problems[quiz.currentProblem].id);
    setTimeout(async () => {
      await getLeaderboardData(quiz);
    }, TIMER);
  } catch (error) {
    console.error("Error in getProblem:", error);
  }
}

export async function startQuiz(quizId: number) {
  try {
    const quiz = await getQuiz(quizId);
    if (!quiz) {
      return new Error("Invalid QUiz id");
    }
    setTimeout(async () => {
      await getProblem(quiz);
    }, 5 * 1000);
  } catch (error) {
    console.error("Error in startQuiz:", error);
  }
}

async function getLeaderboardData(quiz: any) {
  try {
    await updateCurrentProblem(quiz.id);
    quiz.currentProblem++;
    await updateQuizState(quiz.id, QuizState.LEADERBOARD);
    const data = await getLeaderboard(quiz.id);
    IoManager.getIo().to(String(quiz.id)).emit("LEADERBOARD", {
      state: QuizState.LEADERBOARD,
      data: data,
    });
    setTimeout(async () => {
      await getProblem(quiz);
    }, TIMER);
  } catch (error) {
    console.error("Error in getLeaderboardData:", error);
  }
}

async function getStateData(quizId: number) {
  try {
    const quiz = await getQuiz(quizId);
    if (!quiz) {
      throw new Error("Not a valid quiz");
    }
    if (quiz.state === QuizState.NOT_STARTED) {
      return {
        state: quiz.state,
        msg: "Quiz yet to be started!",
      };
    } else if (quiz.state === QuizState.END) {
      return {
        state: "QUIZ_END",
        msg: "Quiz Has Ended!",
      };
    } else if (quiz.state === QuizState.QUESTION) {
      const problem = quiz.problems[quiz.currentProblem];
      return {
        state: quiz.state,
        problem: problem,
      };
    } else {
      const data = await getLeaderboard(quiz.id);
      return {
        state: quiz.state,
        data: data,
      };
    }
  } catch (error) {
    console.error("Error in getStateData:", error);
  }
}

export class UserManager {
  addUser(socket: Socket) {
    this.createHandlers(socket);
  }

  private createHandlers(socket: Socket) {
    socket.on(
      "USER_JOIN",
      async ({ quizId, userName }: { quizId: string; userName: string }) => {
        if (!socket.rooms.has(socket.id)) {
          socket.join(quizId);
        }
        const participant = await addQuizParticipants({
          name: userName,
          quizId: Number(quizId),
          points: 0,
        });
        IoManager.getIo().to(quizId).emit("INIT_USER", {
          userId: participant.id,
        });
      }
    );

    socket.on(
      "QUIZ_JOIN",
      async ({ quizId, userName }: { quizId: string; userName?: string }) => {
        console.log(`${socket.id}:${userName} joining the quiz! ${quizId}`);
        socket.join(quizId);

        if (!userName) {
          console.log("Admin joined...");
          return;
        }

        const participant = await addQuizParticipants({
          name: userName,
          quizId: Number(quizId),
          points: 0,
        });
        IoManager.getIo().local.emit("INIT_USER", {
          userId: participant.id,
        });
      }
    );

    socket.on("INIT_STATE", async ({ quizId }: { quizId: string }) => {
      try {
        const stateData = await getStateData(Number(quizId));
        IoManager.getIo().to(quizId).emit("INIT_STATE", {
          stateData: stateData,
        });
      } catch (err) {
        console.log(err);
      }
    });

    socket.on(
      "submit",
      async ({
        userId,
        problemId,
        selected,
      }: {
        userId: string;
        problemId: string;
        selected: number;
      }) => {
        const problem = await getDbProblem(Number(problemId));
        if (problem && problem.correctOption === selected) {
          const points = Math.max(
            Math.floor(
              1000 -
                (500 * (new Date().getTime() - problem.startTime)) / (20 * 1000)
            ),
            0
          );
          await updateUserPoints(problem.quizId, Number(userId), points);
        }
      }
    );
  }
}
