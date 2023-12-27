import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { CurrentQuestion } from "./CurrentQuestion";
import QInput from "./Common/QInput";
import QButton from "./Common/QButton";
import { LeaderBoard } from "./leaderboard/LeaderBoard";
import { Quiz } from "./Quiz";

export const User = () => {
    const [name, setName] = useState<string>("");
    const [submitted, setSubmitted] = useState(false);
    const [code, setCode] = useState("");
    if (!submitted) {
        return <div className='w-full h-full flex flex-col items-center justify-center'>
                <div className='mt-20 mb-10 text-xl font-semibold'>100x Devs</div>
                <div className='flex flex-col items-center gap-3'>
                    <p className='text-3xl font-medium'>Enter your Name & Code</p>
                    <p className='text-sm text-slate-500 text-center'>
                        It's on screen in front of you
                    </p>
                </div>
                <QInput
                    type='number'
                    placeholder='Enter your Code'
                    styleClass='w-3/4 md:w-1/4 h-[40px] mt-8 mb-6'
                    onChange={(e) => {
                        setCode(e.target.value)
                    }}
                />
                <QInput
                    placeholder="Enter your name"
                    type="text"
                    styleClass='w-3/4 md:w-1/4 h-[40px] mb-10'
                    onChange={(e) => {
                        setName(e.target.value)
                    }}
                />
                <QButton text='Submit' variant='dark' onClick={() => {
                    setSubmitted(true);
                }}/>
            </div>
    }

    return <UserLoggedin code={code} name={name} />
}

export const UserLoggedin = ({name, code}:any) => {
    const [socket, setSocket] = useState<null | any>(null);
    const roomId = code;
    const [currentState, setCurrentState] = useState("not_started");
    const [currentQuestion, setCurrentQuestion] = useState<any>(null);
    const [leaderboard, setLeaderboard] = useState([]);
    const [userId, setUserId] = useState("");

    useEffect(() => {
        const socket = io("https://sum-server.100xdevs.com");
        setSocket(socket)

        socket.on("connect", () => {
            console.log(socket.id);
            socket.emit("join", {
                roomId,
                name
            })
        });
        
        socket.on("init", ({userId, state}) => {
            setUserId(userId);

            if (state.leaderboard) {
                setLeaderboard(state.leaderboard)
            }

            if (state.problem) {
                setCurrentQuestion(state.problem);
            }

            setCurrentState(state.type);
        });

        socket.on("leaderboard", (data) => {
            setCurrentState("leaderboard");
            setLeaderboard(data.leaderboard);
        });
        socket.on("problem", (data) => {
            setCurrentState("question");
            setCurrentQuestion(data.problem);
        })
    }, []);

    if (currentState === "not_started") {
        return <div className='w-full h-full flex flex-col items-center justify-center'>
            <span className='mt-10'> This quiz hasnt started yet </span>
        </div>
    }
    if (currentState === "question") {
        return <Quiz roomId={roomId} userId={userId} problemId={currentQuestion.id} quizData={{
            title: currentQuestion.description,
            options: currentQuestion.options
        }} socket={socket} />
    }

    if (currentState === "leaderboard") {
        return <LeaderBoard leaderboardData={leaderboard.map((x: any) => ({
            points: x.points,
            username: x.name,
            image: x.image
        }))} />
    }

    return <div className='w-full h-full flex flex-col items-center justify-center'>
        <span className='mt-10'>Quiz has ended</span>
        {currentState}
    </div>
}