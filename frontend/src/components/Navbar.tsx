import React from 'react'
import { Button } from './ui/Button'

function Navbar() {
    return (
        <div className='flex items-center justify-between p-4 border-b border-gray-200 shrink-0'>
            <a href="/" className='text-xl font-extrabold text-primary'>100x Devs</a>

            <div className='flex items-center gap-4'>
                <Button variant={'ghost'}>Admin</Button>
                <Button variant={'gradient'}>Get started</Button>
            </div>

        </div>
    )
}

export default Navbar