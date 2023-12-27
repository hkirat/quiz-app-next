const Joinpage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
        <div className="flex mb-7 items-center justify-evenly" >
            <img className="rounded-full w-10 h-10 mr-1" src="https://pbs.twimg.com/profile_images/1599003507415166977/pRYwiTo3_400x400.jpg" alt="100x" />
            <h1 className="text-3xl font-light
            ">100xDevs</h1>
        </div>
        <h2 className="font-semibold text-2xl mb-2">Enter the Code to Join</h2>
        <p className="text-slate-600 mb-5">Its on the screen in front of you</p>
        <input type="text" placeholder="1234 5678" className="border-2 border-[#8b00d9] rounded-md p-2 shadow-md focus:border-[#8b00d9] focus:drop-shadow-md outline-none"/>
        <button className="bg-black text-white rounded-full font-bold px-6 py-1 pb-2 mt-7 shadow-sm hover:drop-shadow-lg">Join</button>
    </div>
  )
}

export default Joinpage;
