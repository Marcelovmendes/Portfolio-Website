import React from 'react'

type Props = {}

const BackgroundCircles = (props: Props) => {
    return (
        <div className='justify-center items-center'>
            <div className='absolute border border-[#333333] rounded-full h-[100px] w-[100px] sm:h-[150px] sm:w-[150px] md:h-[200px] md:w-[200px] lg:h-[200px] lg:w-[200px] animate-ping' />
            <div className='border border-[#333333] rounded-full h-[250px] w-[250px] sm:h-[350px] sm:w-[350px] md:h-[450px] md:w-[450px] lg:h-[500px] lg:w-[500px] absolute' />
            <div className='border border-[#333333] rounded-full h-[350px] w-[350px] sm:h-[450px] sm:w-[450px] md:h-[550px] md:w-[550px] lg:h-[650px] lg:w-[650px] absolute' />
            <div className='rounded-full border border-[#46c346] opacity-20 h-[350px] w-[350px] sm:h-[450px] sm:w-[450px] md:h-[550px] md:w-[550px] lg:h-[650px] lg:w-[650px] absolute animate-pulse' />
        </div>
    )
}

export default BackgroundCircles