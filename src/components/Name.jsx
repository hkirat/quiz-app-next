import React, { useState } from 'react'
import { FaRegChartBar } from "react-icons/fa";
import { GiAnimalSkull } from "react-icons/gi";
import { Link } from 'react-router-dom';
function Name() {
    const [goatName, setGoatName] = useState('');

    const handleChange = (event) => {
        setGoatName(event.target.value);
    };

    return (
        <div className='w-screen h-screen flex flex-col items-center'>
            <span className='text-3xl flex items-center font-bold mt-20'><FaRegChartBar className='text-blue-400' /> 100xDevsMeter</span>
            <div className='w-[150px] bg-orange-500 h-[150px] font-medium rounded-full mt-10 p-5 relative'><GiAnimalSkull className=' text-9xl absolute top-4 left-4' /></div>
            <span className='mt-3 '>Enter Your Name</span>
            <input
                type="text"
                className="border-purple-700 border-2 w-[600px] bg-slate-300 text-base p-4 rounded-xl mt-3"
                placeholder='Vote Goat'
                value={goatName} // Display the current goat name
                onChange={handleChange} // Capture input changes
            />
            <Link to={`/question?${new URLSearchParams({ name: goatName })}`} o="/question"><button className='rounded-full w-28 h-[40px] text-white font-semibold flex justify-center items-center mt-10 bg-[#2c2c2f]'>Join Quiz</button></Link>
            <div className='mt-auto flex flex-col items-center'>
                <span>Create your own Menti at <a href="mentimeter.com" className='font underline-offset-1'>mentimeter.com</a></span>
                <span className='font-bold mt-5 mb-3'>Terms</span>
            </div>
        </div >
    )
}

export default Name