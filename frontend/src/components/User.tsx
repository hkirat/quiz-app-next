import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { CurrentQuestion } from "./CurrentQuestion";
import { LeaderBoard } from "./Leaderboard";
import QInput from "./Common/QInput";
import QButton from "./Common/QButton";

export const User = () => {
    const [name, setName] = useState<string>("");
    const [submitted, setSubmitted] = useState(false);
    if (!submitted) {
        return <div className='w-full h-full flex flex-col items-center justify-cente'>
                    <div className='mt-20 mb-10 text-xl font-semibold'>100x Devs</div>
                    <div className='flex flex-col items-center gap-3'>
                        <p className='text-3xl font-medium'>Enter your Name</p>
                        <p className='text-sm text-slate-500 text-center'>
                            Enter the name you want to be displayed on the leaderboard
                        </p>
                    </div>
                    <QInput
                        type='text'
                        placeholder='Enter your name'
                        styleClass='w-3/4 md:w-1/4 h-[40px] mt-8 mb-10'
                        onChange={(e) => {
                            setName(e.target.value)
                        }}
                    />
                    <QButton text='Submit' variant='dark' onClick={() => {
                        setSubmitted(true);
                    }}/>
                </div>
    }

    return <UserLoggedin name={name} />
}

export const UserLoggedin = ({name}: any) => {
    const searchParams = new URLSearchParams(document.location.search)
    const [socket, setSocket] = useState<null | any>(null);
    const roomId = searchParams.get("roomId");
    const [currentState, setCurrentState] = useState("not_started");
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [leaderboard, setLeaderboard] = useState([]);
    const [userId, setUserId] = useState("");

    useEffect(() => {
        const socket = io("http://localhost:3000");
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
        return <div>
            This quiz hasnt started yet
        </div>
    }
    if (currentState === "question") {
        return <CurrentQuestion question={currentQuestion} />
    }

    if (currentState === "leaderboard") {
        return <LeaderBoard leaderboard={leaderboard} />
    }

    return <div>
        <br/>
        Quiz has ended
        {currentState}
    </div>
}