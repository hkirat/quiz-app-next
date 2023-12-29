import React from 'react'
import Navbar from '../components/Navbar'
import { Input } from '../components/ui/Input'
import { Label } from '../components/ui/Label'
import { Button } from '../components/ui/Button'

function Join() {
    return (
        <div className='flex flex-col h-screen text-gray-600 bg-white'>
            <Navbar />

            {/* main content */}
            <div className='flex items-center justify-center h-full font-medium border'>
                <div className='space-y-10 max-w-80'>
                    <div className='space-y-2 text-center'>
                        <h1 className='text-2xl font-bold text-gray-800'>Join Quiz</h1>
                        <p className='font-medium text-gray-400'>Welcome back! Please enter your details.</p>
                    </div>

                    {/* form -- can be replaced by <form> */}
                    <div className='space-y-4'>
                        {/* room code */}
                        <div className='space-y-1'>
                            <Label>Room code</Label>
                            <Input
                                placeholder='EX123X'
                            />
                        </div>
                        <div className='space-y-1'>
                            <Label>Name</Label>
                            <Input
                                placeholder='John Doe'
                            />
                        </div>

                        <div className='pt-4 space-y-4 font-medium text-center'>
                            {/* join room button */}
                            <Button variant={'gradient'} className='w-full'>Join room</Button>
                            <p className='text-xs text-gray-400'>
                                Need help?
                                &nbsp;{/* non-breaking space */}
                                <a href="/" className='underline text-primary'>click here</a>
                            </p>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default Join