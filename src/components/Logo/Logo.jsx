import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

const MotionLink = motion(Link)
const Logo = () => {
    return (
        <div className='flex justify-center items-center'>
            <MotionLink
                href={'/'}
                className='w-30 h-10 text-dark items-center dark:text-light
                justify-center flex'
                // whileHover={{
                //     color: ["#121212", "rgba(131,58,180,1)", "rgba(253,29,29,1)", "rgba(252,176,69,1)", "rgba(131,58,180,1)", "#121212"],
                //     transition: {
                //         duration:1,
                //         repeat: Infinity,
                //     }
                // }}
            >
                Harshith Gangi Reddy
            </MotionLink>
        </div>
    )
}

export default Logo