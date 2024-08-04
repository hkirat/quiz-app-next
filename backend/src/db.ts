import { PrismaClient } from '@prisma/client'

import { Problem, Participants } from './types';
import { QuizState } from './types';

export const prisma = new PrismaClient();

export async function createUser(email: string) {
    const name = email.substring(0, email.indexOf("@"));
    return await prisma.user.create({
        data: {
            name: name,
            email: email
        }
    })
}

export async function getUserByEmail(email: string) {
    const user = await prisma.user.findFirst({
        where: {
            email: email,
        }
    })
    return user;
}

export async function getOrCreateUser(email: string) {
    let user = await getUserByEmail(email);
    if (!user) {
        user = await createUser(email);
    }
    return user;
}

export async function getUserById(id: number) {
    return await prisma.user.findFirst({
        where:{
            id: id
        }
    })
} 

export async function getUserQuizes(id: number) {
    return await prisma.quiz.findMany({
        where: {
            userId: id
        },
        orderBy: {
            id: "desc"
        },
        select: {
            id: true,
            currentProblem: true,
            state: true
        }
    })
}

export async function createQuiz(userId: number) {
    return await prisma.quiz.create({
        data: {
            userId: userId
        }
    });
}

export async function getQuiz(quizId: number) {
    return await prisma.quiz.findFirst({
        where: {
            id: quizId
        },
        include: {
            problems: {
                include: {
                    options: true
                },
                orderBy: {
                    id: "asc"
                }
            },
        }
    })
} 

export async function addQuizParticipants(participants: Participants) {
    return await prisma.participant.create({
        data: {
            name: participants.name,
            points: 0,
            quizId: participants.quizId,
        },
    })
}

export async function updateCurrentProblem(quizId: number) {
    return await prisma.quiz.update({
        where: {
            id: quizId
        },
        data: {
            currentProblem: {
                increment: 1
            }
        },
    })
}

export async function updateQuizState(quizId: number, state: QuizState) {
    return await prisma.quiz.update({
        where: {
            id: quizId
        },
        data: {
            state: state
        }
    })
}

export async function getCurrentProblem(quizId: number) {
    const problems = await getQuizProblems(quizId);
    if (!problems) {
        return
    }
    return problems[problems[0].quiz.currentProblem];
}

export async function updateProblemTime(problemId: number) {
    return await prisma.problem.update({
        where: {
            id: problemId,
        },
        data: {
            startTime: new Date().getTime()
        }
    })
}

export async function createProblem(quizId: number, problemData:Problem) {
    const options = []

    for (const item of problemData.options) {
        options.push({title:item.title})
    }

    const problem = await prisma.problem.create({
        data: {
            title: problemData.title,
            description: problemData.description,
            correctOption: problemData.correctOption,
            quizId: quizId,
            startTime: 0.0, 
            options: {
                create: options
            }
        },
        include: {
            options: true
        }
    });
    return problem;
}

export async function getQuizProblems(quizId: number) {
    return await prisma.problem.findMany({
        where: {
            quizId: quizId
        },
        include: {
            options: true,
            quiz: true
        }
    })
} 

export async function getDbProblem(problemId: number) {
    return await prisma.problem.findFirst({
        where: {
            id: problemId
        },
        include: {
            options: true
        }
    })
}


export async function updateUserPoints(quizId: number, participantId: number, points: number) {
    return await prisma.participant.update({
        where: {
            id: participantId,
            quizId: quizId
        },
        data: {
            points: {
                increment: points
            }
        }
    })
}

export async function getLeaderboard(quizId: number) {
    return await prisma.participant.findMany({
        where: {
            quizId: quizId
        },
        orderBy: {
            points: 'desc'
        },
        take: 10
    })
}