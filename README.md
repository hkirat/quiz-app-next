### Build a simple quizzing app similar to menti meter

## Features

- Admin should be allowed to add questions (MCQ, single answer)
- Admin should be allowed to move to the next questions
- Admin should be allowed to show the leaderboard to everyone
- Users should be allowed to answer the questions
- Users just need to poll the server for the next question, no need for it to be realtime

## Bounties for frontend $$
 - Simple View with title and answers - $25
    title : string
    choices: strings[]
    image?: string
 - Leaderboard view - $25
    winners: {username: string, profilePicture?: string, points: number}[] => will be sorted
 - Join the course view - $10
 Stack - React components using tailwind