import React from 'react'

type Props = {}

const BackgroundCircles = (props: Props) => {
    return (
        <div className='reltive flex justify-center items-center'>
            <div className='absolute border boder-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping' />
            <div className='border border-[#333333] rounded-full h-[500px] w-[500px] mt-52 absolute' />
            <div className='border border-[#333333] rounded-full h-[650px] w-[650px] mt-52 absolute' />
            <div className='rounded-full border border-[#46c346] opacity-20 h-[650px] w-[650px] absolute mt-52 animate-pulse' />
        </div>

    )
}

export default BackgroundCircles