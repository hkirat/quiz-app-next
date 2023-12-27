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
            correct: 0
        },
        {
            question: 'How is the price of 100xDevs',
            choices: ['too high', 'high', 'will use pirated'],
            correct: 2
        },
        {
            question: 'How to tackle all this learning at same time?',
            choices: ['dont know', 'kirat already tought you', 'I am aalsi'],
            correct: 0
        }
    ]

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [showQuestion, setShowQuestion] = useState(false);
    const [selectedChoice, setSelectedChoice] = useState(null);


    const [searchParams] = useSearchParams();
    const name = searchParams.get('name');

    useEffect(() => {
        if (showQuestion) {
            const intervalId = setInterval(() => {
                setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
            }, 5000); // Delay of 5 seconds

            // Cleanup function to clear the interval when the component unmounts
            return () => clearInterval(intervalId);
        }
    }, [showQuestion]);
    const handleChange = (event) => {
        setSelectedChoice(event.target.value);
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
                            <span>{demoQuestions[currentQuestionIndex].question}</span><br />
                            {
                                demoQuestions[currentQuestionIndex].choices.map((choice) => (
                                    <label key={choice} className='mt-3'>
                                        <input
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
        </div >
    )
}

export default Question