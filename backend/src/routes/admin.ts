import { Router, Request, Response, NextFunction } from "express";

import { createQuiz, getUserById, getUserQuizes, prisma } from "../db";
import { RequestUser } from "../../globals";
import { QuizState } from "@prisma/client";
import { startQuiz } from "../managers/UserManager";

export const adminRouter = Router();

// TODO: Inputs need to be validated using zod.

type OptionPayload = {
  title: string;
};

type ProblemPayload = {
  title: string;
  description: string | null;
  correctOption: number;
  options: OptionPayload[];
};

const adminMiddleWare = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // TODO: remove this before commiting, for testing only
  // req.user = (await getUserById(1)) as RequestUser;
  if (!req.user) {
    return res.status(401).json({ message: "Unauthorized access!" });
  }
  next();
};

adminRouter.get("/", adminMiddleWare, async (req: Request, res: Response) => {
  const quizes = await getUserQuizes(req.user!.id);
  return res.status(200).json({ data: quizes });
});

adminRouter.get(
  "/quiz",
  adminMiddleWare,
  async (req: Request, res: Response) => {
    try {
      const { quizId } = req.query;
      const quiz = await prisma.quiz.findFirst({
        where: {
          id: Number(quizId),
          userId: req.user!.id,
        },
        include: {
          problems: {
            include: {
              options: true,
            },
          },
          participants: {
            select: {
              name: true,
              points: true,
            },
          },
        },
      });
      return res
        .status(200)
        .json({ data: { quiz: quiz }, message: "Quiz Fetched successfully!" });
    } catch (err) {
      return res
        .status(500)
        .json({ message: "Server error: Unable to get quiz!", ErrMsg: err });
    }
  }
);

adminRouter.post(
  "/quiz",
  adminMiddleWare,
  async (req: Request, res: Response) => {
    try {
      const quiz = await createQuiz(req.user!.id);
      return res.status(201).json({
        data: { quizId: quiz.id, message: "Quiz successfully created!" },
      });
    } catch (err) {
      return res
        .status(500)
        .json({ message: "Server error: Unable to create quiz!", ErrMsg: err });
    }
  }
);

adminRouter.patch(
  "/quiz",
  adminMiddleWare,
  async (req: Request, res: Response) => {
    try {
      const { quizId, quizState, quizCurrentProblem } = req.body;
      const status = await prisma.quiz.update({
        where: {
          id: quizId,
          userId: req.user!.id,
        },
        data: {
          state: quizState,
          currentProblem: quizCurrentProblem,
        },
      });
      return res.status(200).json({
        data: { quizId: quizId },
        message: "Quiz successfully updated!",
      });
    } catch (err) {
      return res
        .status(500)
        .json({ message: "Server error: Unable to update quiz!", ErrMsg: err });
    }
  }
);

adminRouter.post(
  "/quiz/start",
  adminMiddleWare,
  async (req: Request, res: Response) => {
    try {
      const { quizId } = req.body;
      const quiz = await prisma.quiz.update({
        where: {
          id: Number(quizId),
          userId: req.user!.id,
          state: QuizState.NOT_STARTED,
        },
        data: {
          state: QuizState.QUESTION,
        },
      });
      await startQuiz(Number(quizId));
      return res
        .status(200)
        .json({ data: { quizId: quizId, message: "Quiz Started!" } });
    } catch (err) {
      return res.status(500).json({
        message: "server error! Could not start the quiz!",
        ErrMsg: err,
      });
    }
  }
);

adminRouter.get(
  "/problem",
  adminMiddleWare,
  async (req: Request, res: Response) => {
    try {
      const { problemId, includeOptions } = req.query;
      const problem = await prisma.problem.findFirst({
        where: {
          id: Number(problemId),
          quiz: {
            userId: req.user!.id,
          },
        },
        include: {
          options: includeOptions === "true",
        },
      });
      return res.status(200).json({ data: problem });
    } catch (err) {
      return res.status(500).json({
        message: "Server error: Unable to get problems!",
        ErrMsg: err,
      });
    }
  }
);

adminRouter.post("/problem/skip", async (req: Request, res: Response) => {
  try {
    const { quizId } = req.body;
    return res.status(200).json({ message: "To Be implemented!" });
  } catch (err) {
    return res.status(500).json({
      message: "Server error: Unable to skip the problem!",
      ErrMsg: err,
    });
  }
});

adminRouter.post(
  "/problem",
  adminMiddleWare,
  async (req: Request, res: Response) => {
    try {
      const { quizId, problemData } = req.body;
      const status = await prisma.problem.create({
        data: {
          title: problemData.title,
          description: problemData.description,
          correctOption: problemData.correctOption,
          quizId: quizId,
          startTime: 0.0,
          options: {
            create: problemData.options,
          },
        },
        include: {
          options: true,
        },
      });
      return res
        .status(200)
        .json({ message: "Questions successfully added to quiz!" });
    } catch (err) {
      return res.status(500).json({
        message: "Server error: Unable to add problems!",
        ErrMsg: err,
      });
    }
  }
);

adminRouter.patch(
  "/problem",
  adminMiddleWare,
  async (req: Request, res: Response) => {
    try {
      const { quizId, problemId, problemData } = req.body;

      const updateOptions = problemData.options.map(
        (option: { id: number; title: string }) => {
          return prisma.option.update({
            where: {
              id: option.id,
              problemId: problemId,
            },
            data: {
              title: option.title,
            },
            select: {
              id: true,
              title: true,
            },
          });
        }
      );

      const updateProblem = prisma.problem.update({
        where: {
          id: problemId,
          quizId: quizId,
          quiz: { userId: req.user!.id },
        },
        data: {
          title: problemData.title,
          description: problemData.description,
          correctOption: problemData.correctOption,
          startTime: 0,
        },
        select: {
          id: true,
          title: true,
          description: true,
          correctOption: true,
          startTime: true,
        },
      });

      const result = await prisma.$transaction([
        updateProblem,
        ...updateOptions,
      ]);
      return res.status(200).json({
        message: "Problem Updated",
        data: {
          problem: {
            ...result[0],
            options: [...result.slice(1, result.length - 1)],
          },
        },
      });
    } catch (err) {
      return res.status(500).json({
        message: "Server error: Unable to update problem!",
        ErrMsg: err,
      });
    }
  }
);
