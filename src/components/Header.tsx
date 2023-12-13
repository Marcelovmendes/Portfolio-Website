'use client'
import React from 'react'
import { motion } from 'framer-motion';
import { SocialIcon } from 'react-social-icons'

type Props = {}

function Header({ }: Props) {
    return (
        <header className='sticky top-0 p-5 flex flex-start justify-between max-w-7xl mx-auto z-20 xl:items-center' >

            <motion.div
                initial={{ opacity: 0, x: -500, scale: 0.5 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 1.0 }}
                className='flex flex-row items-center'>
                <SocialIcon url='https://www.linkedin.com/in/marcelovmendes/' fgColor='gray' bgColor='transparent' />
                <SocialIcon url='https://github.com/Marcelovmendes' fgColor='gray' bgColor='transparent' />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 500, scale: 0.5 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 1.0 }}
                className='cursor-pointer text-gray-400'>
                <SocialIcon className='cursor-pointer' network='email' fgColor='gray' bgColor='transparent' />
                <p className='uppercase hidden md:inline-flex text-sm text-gray-400'> Get In Touch </p>
            </motion.div>
        </header>
    )
}

export default Header