import { useEffect } from "react";

const { io } = require("socket.io-client");

export const Admin = () => {
    
    useEffect(() => {
        const socket = io("http://localhost:3000");

        socket.on("connect", () => {
            console.log(socket.id);
            socket.emit("joinAdmin", {
                password: "ADMIN_PASSWORD"
            })
          });
    }, []);

    return <div>    
        hi from admin
    </div>
}