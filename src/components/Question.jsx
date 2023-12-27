import React, { useState, useEffect } from 'react'
import { GiAnimalSkull } from 'react-icons/gi'
import { FaRegChartBar } from "react-icons/fa";
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Question() {
    const demoQuestions = [
        {
            question: 'What is sum of 1 and 2',
            choices: ['3', '2', '1'],
            correct: 0,
            image: false
        },
        {
            question: 'How is the price of 100xDevs',
            choices: ['too high', 'high', 'will use pirated'],
            correct: 2,
            image: false,
        },
        {
            question: 'How to tackle all this learning at same time?',
            choices: ['dont know', 'kirat already tought you', 'I am aalsi'],
            correct: 0,
            image: 'https://plus.unsplash.com/premium_photo-1669324357471-e33e71e3f3d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
    ]

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [showQuestion, setShowQuestion] = useState(false);
    const [selectedChoice, setSelectedChoice] = useState(null);
    const [totalScore, setTotalScore] = useState(0)
    const [renderAfterEffect, setRenderAfterEffect] = useState(false);
    const [searchParams] = useSearchParams();
    const name = searchParams.get('name');

    useEffect(() => {
        if (showQuestion) {
            const intervalId = setInterval(() => {
                setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
            }, 5000); // Delay of 5 seconds


            // Set the timeout to trigger rendering after 15 seconds
            setTimeout(() => {
                setRenderAfterEffect(true);
            }, 15000);

            return () => {
                clearInterval(intervalId);
                // Clear the timeout (optional for cleanup)
                clearTimeout();
            };
        }
    }, [showQuestion]);
    const handleChange = (event) => {
        setSelectedChoice(event.target.value);
        console.log(event.target.value)
        if (event.target.value === demoQuestions[currentQuestionIndex].choices[demoQuestions[currentQuestionIndex].correct])
            setTotalScore(totalScore + 1)
        console.log(totalScore)
    };
    return (
        <div className='w-screen h-screen flex flex-col items-center'>
            <span className='text-3xl flex items-center font-bold mt-20'><FaRegChartBar className='text-blue-400' /> 100xDevsMeter</span>
            <div className='w-[150px] bg-orange-500 h-[150px] font-medium rounded-full mt-10 p-5 relative'><GiAnimalSkull className=' text-9xl absolute top-4 left-4' /></div>

            {!showQuestion ?

                <>
                    <span className='text-gray-600 mt-5 '>
                        Question {currentQuestionIndex + 1} of 3
                    </span>
                    <span className='text-2xl text-black mt-3'>Get Ready to play {name}!</span>
                    <span className='text-sm mt-4 '>Answer fast to get more points</span>
                    <button className='rounded-full w-20 h-[40px] text-white font-semibold flex justify-center items-center mt-10 bg-[#2c2c2f]' onClick={() => setShowQuestion(true)}>Next</button>
                </> :


                (

                    currentQuestionIndex < demoQuestions.length && (
                        <div className='mt-3 text-2xl'>
                            <span className='text-xs text-gray-400'>wait for 5 seconds!</span><br />
                            {console.log(demoQuestions[currentQuestionIndex].image)}
                            {demoQuestions[currentQuestionIndex].image &&
                                <img src={demoQuestions[currentQuestionIndex].image} alt="" className='w-[300px]' />
                            }
                            <span>{demoQuestions[currentQuestionIndex].question}</span><br />
                            {
                                demoQuestions[currentQuestionIndex].choices.map((choice) => (
                                    <label key={choice} className='mt-3 w-[200px] border-blue-300 h-[40px]'>
                                        < input
                                            type="radio"
                                            name="choice"
                                            value={choice}
                                            id={choice}
                                            checked={selectedChoice === choice}
                                            onChange={handleChange}

                                        />

                                        {choice}
                                        <br />
                                    </label>
                                ))
                            }
                        </div>
                    )

                )
            }
            {
                renderAfterEffect && (
                    <>
                        <span className='text-xl mt-4'>{name} your total Score is {totalScore}</span>
                        <Link to="/leaderboard"><button className='rounded-full w-40 h-[40px] text-white font-semibold flex justify-center items-center mt-10 bg-[#2c2c2f]'>See Leaderboard</button></Link>
                    </>
                )
            }
        </div >
    )
}

export default Question