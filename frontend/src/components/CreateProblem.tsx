import { useState } from "react"
import QInput from "./Common/QInput";
import QButton from "./Common/QButton";

export const CreateProblem = ({socket, roomId}: {socket: any; roomId: string;}) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [answer, setAnswer] = useState(0);
    const [options, setOptions] = useState([{
        id: 0,
        title: ""
    },{
        id: 1,
        title: ""
    },{
        id: 2,
        title: ""
    },{
        id: 3,
        title: ""
    }])

    return <div className='w-[80vw] mx-auto h-full flex flex-col items-center justify-center my-10'>
        Create problem Title <QInput type="text" onChange={(e) => {
            setTitle(e.target.value)
        }} />
        <br /><br />
        Description <QInput type="text" onChange={(e) => {
            setDescription(e.target.value)
        }}/>
        <br />
        
        {[0, 1, 2, 3].map(optionId => <div className="w-full flex gap-4 space-y-2 items-center justify-between"> 
            <input type="radio" checked={optionId === answer} onChange={() => {
                setAnswer(optionId)
            }} />
            <p>Option {optionId}</p>
            <QInput type="text" styleClass="max-w-[80%]" onChange={(e) => {
                setOptions(options => options.map(x => {
                    if (x.id === optionId) {
                        return {
                            ...x,
                            title: e.target.value
                        }
                    }
                    return x;
                }))
            }} />
        <br />
        </div>)}
 
        <QButton text="Add problem" styleClass='rounded-lg mt-10' onClick={() => {
            socket.emit("createProblem", {
                roomId,
                problem: {
                    title,
                    description,
                    options,
                    answer,
                }
            });
        }} />
        
    </div>
}