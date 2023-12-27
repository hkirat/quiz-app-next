import QButton from "./Common/QButton"

export const QuizControls = ({socket, roomId}: {socket: any, roomId: string}) => {
    return <div className='w-[80vw] mx-auto h-full gap-4 flex items-center justify-center my-20'>
        Quiz controls
        <QButton text="Next problem" variant="dark" onClick={() => {
            socket.emit("next", {
                roomId
            })
        }} />
    </div>
}