import { useEffect, useState } from "react";

import { io } from "socket.io-client";
import { Socket } from "socket.io-client/debug";
import { CreateProblem } from "./CreateProblem";
import { QuizControls } from "./QuizControls";
import QInput from "./Common/QInput";
import QButton from "./Common/QButton";

export const Admin = () => {
    const [socket, setSocket] = useState<null | any>(null);
    const [quizId, setQuizId] = useState("");
    const [roomId, setRoomId] = useState("");

    useEffect(() => {
        const socket = io("https://sum-server.100xdevs.com");
        setSocket(socket)

        socket.on("connect", () => {
            console.log(socket.id);
            socket.emit("joinAdmin", {
                password: "ADMIN_PASSWORD"
            })
        });
        
    }, []);

    if (!quizId) {
        return <div className='w-full h-full flex flex-col items-center justify-center'>
            <div className='mt-20 mb-10 text-xl font-semibold'>100x Devs</div>
            <div className='flex flex-col items-center gap-3'>
                <QInput type="text" styleClass="w-[200px]" onChange={(e) => {
                    setRoomId(e.target.value)
                }} />
                <br />
                <QButton text="Create room" onClick={() => {
                    socket.emit("createQuiz", {
                        roomId
                    });
                    setQuizId(roomId);
                }} />
            </div>
        </div>
    }
    return <div> 
        <CreateProblem roomId={quizId} socket={socket} />
        <QuizControls socket={socket} roomId={roomId} />
    </div>
}