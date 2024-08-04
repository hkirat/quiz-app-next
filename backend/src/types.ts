export enum QuizState {
    NOT_STARTED = "NOT_STARTED",
    LEADERBOARD ="LEADERBOARD",
    QUESTION = "QUESTION",
    END="END"
}

export type Option = {
    title: string
};

export type Submission = {
    answer: number,
    participantId: number
};

export type Problem = {
    title: string,
    description: string | null,
    correctOption: number,
    options: Option[],
};

export type Quiz = {
    state: QuizState,
    currentProblem: number,
    problems?: Problem[],
    participants: Participants,
}

export type Participants = {
    name: string,
    points: number,
    quizId: number
}
