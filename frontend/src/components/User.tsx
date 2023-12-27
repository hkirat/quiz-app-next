import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { CurrentQuestion } from "./CurrentQuestion";
import { LeaderBoard } from "./leaderboard/LeaderBoard";
import { Quiz } from "./Quiz";

export const User = () => {
    const [name, setName] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [code, setCode] = useState("");
    if (!submitted) {
        return <div>
            <div className="bg-gray-100 flex items-center justify-center h-screen">
                <div className="text-center">
                <div className="mb-8">
                    <h1 className="text-2xl font-semibold mb-2 text-slate-600">
                        Enter the code to join
                    </h1>
                    <p className="text-gray-600">It’s on the screen in front of you</p>
                </div>
                <div className="mb-8">
                    <input
                        className="text-center w-64 p-2 border-2 border-purple-600 rounded-lg shadow-sm focus:outline-none focus:border-purple-800"
                        placeholder="1234 5678"
                        style={{ fontSize: "1rem" }}
                        type="text"
                        onChange={(e) => {
                            setCode(e.target.value)
                        }}
                    />
                    <br /> <br />
                    <input
                        className="text-center w-64 p-2 border-2 border-purple-600 rounded-lg shadow-sm focus:outline-none focus:border-purple-800"
                        placeholder="Your name"
                        style={{ fontSize: "1rem" }}
                        type="text"
                        onChange={(e) => {
                            setName(e.target.value)
                        }}
                    />
                </div>
                <button
                    className="bg-purple-600 text-white w-64 py-2 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-800 focus:ring-opacity-50"
                    style={{ fontSize: "1rem" }}
                    onClick={() => {
                        setSubmitted(true);
                    }}
                >
                    Join
                </button>
                </div>
            </div>

        </div>
    }

    return <UserLoggedin code={code} name={name} />
}

export const UserLoggedin = ({name, code}) => {
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
        return <div>
            This quiz hasnt started yet
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

    return <div>
        <br/>
        Quiz has ended
        {currentState}
    </div>
}