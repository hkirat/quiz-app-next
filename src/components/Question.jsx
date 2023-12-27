import React from 'react'
import { GiAnimalSkull } from 'react-icons/gi'
import { FaRegChartBar } from "react-icons/fa";

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
    return (
        <div className='w-screen h-screen flex flex-col items-center'>
            <span className='text-3xl flex items-center font-bold mt-20'><FaRegChartBar className='text-blue-400' /> 100xDevsMeter</span>
            <div className='w-[150px] bg-orange-500 h-[150px] font-medium rounded-full mt-10 p-5 relative'><GiAnimalSkull className=' text-9xl absolute top-4 left-4' /></div>
            {
                demoQuestions.map((question, index) => {
                    return (
                        <span className='text-gray-300'>Question {index} of 3</span>
                    )
                })
            }
        </div>
    )
}

export default Question