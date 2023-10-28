import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

const MotionLink = motion(Link)
const Logo = () => {
    return (
        <div className='flex justify-center items-center'>
            <MotionLink
                href={'/'}
                className='w-16 h-16 bg-dark text-light items-center 
                justify-center flex rounded-xl border border-solid border-transparent dark:border-light'
                whileHover={{
                    backgroundColor: ["#121212", "rgba(131,58,180,1)", "rgba(253,29,29,1)", "rgba(252,176,69,1)", "rgba(131,58,180,1)", "#121212"],
                    transition: {
                        duration:1,
                        repeat: Infinity,
                    }
                }}

            >
                HGR
            </MotionLink>
        </div>
    )
}

export default Logo