'use client'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'

type Props = {}

const Hero = (props: Props) => {
    const [text, count] = useTypewriter({
        words: ['Hello World', 'Welcome To My Website'],
        loop: true,
        delaySpeed: 2000,
    })
    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center overflow-hidden'>
            <BackgroundCircles />
            <span>
                {text}
                <Cursor cursorColor='green' />
            </span>
        </div>
    )
}

export default Hero