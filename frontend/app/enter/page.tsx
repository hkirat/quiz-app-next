"use client";
import Link from "next/link";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import logo from "../logo.png";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";

function page() {
  const [code, setCode] = useState<string>("");
  const [close, setClose] = useState<boolean>(false);

  function handleOnClick() {
    //TODO: feel free to change the function
    toast.success(`Code: ${code}`);
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <Toaster />
      <div className="flex items-center flex-col gap-5">
        <div className="flex items-center -ml-2 gap-3">
          <Image src={logo} width={30} height={30} alt="logo" />
          {/* TODO: Change the title  */}
          <h1 className="font-semibold text-2xl"> Mentimeter</h1>
        </div>
        <h1 className="font-medium tracking-normal text-2xl">
          Enter the code to join
        </h1>
        <p className="text-sm text-gray-500">
          It's on the screen in front of you
        </p>
        <input
          type="text"
          name="quiz-code"
          id="quiz-code"
          placeholder="1234 5678"
          onChange={(e) => setCode(e.target.value)}
          className="p-3 border-2 border-blue-600 outline-none focus:ring-2 focus:ring-blue-400 rounded-lg"
        />
        <button
          className="rounded-3xl bg-gray-800 text-white hover:bg-white border border-black hover:text-black p-3 w-20 hover:font-semibold duration-200 ease-out"
          onClick={handleOnClick}
        >
          Join
        </button>
        {!close && (
          <div className="bg-[#040b2d] text-gray-300 font-light text-sm p-5 max-w-[300px] text-center rounded-lg">
            <div
              className="float-right cursor-pointer"
              onClick={() => {
                setClose(true);
              }}
            >
              <RxCross2 />
            </div>
            <h1 className="mt-2 font-medium">
              We use cookies to provide this service and improve your
              experiences.
            </h1>
            <Link href={"/"} className="underline">
              Learn More
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default page;
