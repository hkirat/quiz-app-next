import { Socket } from "socket.io";
import { QuizManager } from "./QuizManager";
const ADMIN_PASSWORD = "ADMIN_PASSWORD";

export class UserManager {
    private users: {
        roomId: string;
        socket: Socket;
    }[];
    private quizManager;

    constructor() {
        this.users = [];
        this.quizManager = new QuizManager
    }

    addUser(roomId: string, socket: Socket) {
        this.users.push({
            socket, roomId
        })
        this.createHandlers(roomId, socket);
    }

    private createHandlers(roomId: string, socket: Socket) {
        socket.on("join", (data) => {
            const userId = this.quizManager.addUser(data.roomId, data.name)
            socket.emit("init", {
                userId,
                state: this.quizManager.getCurrentState(roomId)
            });
        });

        socket.on("join_admin", (data) => {
            const userId = this.quizManager.addUser(data.roomId, data.name)
            if (data.password !== ADMIN_PASSWORD) {
                return;
            }
        
            socket.emit("adminInit", {
                userId,
                state: this.quizManager.getCurrentState(roomId)
            });

            socket.on("createQuiz", data => {
                this.quizManager.addQuiz(data.roomId);
            })
        
            socket.on("createProblem", data => {
                this.quizManager.addProblem(data.roomId, data.problem);
            });

            socket.on("next", data => {
                this.quizManager.next(data.roomId);
            });
        });

        socket.on("submit", (data) => {
            const userId = data.userId;
            const problemId = data.problemId;
            const submission = data.submission;
            const roomId = data.submission;
            if (submission != 0 || submission != 1 || submission != 2 || submission != 3 ) {
                console.error("issue while getting input " + submission )
                return;
            }
            this.quizManager.submit(userId, roomId, problemId, submission)
        });
    }


}