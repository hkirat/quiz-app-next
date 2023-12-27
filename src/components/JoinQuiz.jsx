import React, { useState } from 'react'
import { FaRegChartBar } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
function JoinQuiz() {
  const [showCookie, setShowCookie] = useState(true)
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center'>
      <span className='text-3xl flex items-center font-bold mt-20'><FaRegChartBar className='text-blue-400' /> 100xDevsMeter</span>
      <span className='text-3xl font-medium mt-10'>Enter the Code to join</span>
      <h3 className='text-lg text-[#888888] mt-3'>It's on the screen in front of you</h3>
      <input
        type="text"
        className="border-purple-700 border-2 w-[400px] bg-white text-base p-4 rounded-xl mt-3"
        placeholder='1234 5678'
      />
      <Link to="/name"><button className='rounded-full w-20 h-[40px] text-white font-semibold flex justify-center items-center mt-10 bg-[#2c2c2f]'>Join</button></Link>
      {
        showCookie ?
          <div className='w-72 h-40 bg-[#101735] rounded-lg mt-8 relative text-white text-center p-8'>
            We use cookies to provide<br />
            this service and improve<br />
            your experience.<br />
            Learn more<br />
            <IoCloseOutline onClick={() => { setShowCookie(false) }} className='absolute text-2xl top-3 right-3 cursor-pointer ' />
          </div> : null
      }
      <div className='mt-auto flex flex-col items-center'>
        <span>Create your own Menti at <a href="mentimeter.com" className='font underline-offset-1'>mentimeter.com</a></span>
        <span className='font-bold mt-5 mb-3'>Terms</span>
      </div>
    </div>
  )
}

export default JoinQuiz