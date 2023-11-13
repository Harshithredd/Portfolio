import React from 'react'
import {motion} from 'framer-motion'
const TransitionEffectVertical = () => {
  return (
   <>
    <motion.div className='fixed left-0 right-0 bottom-full w-screen h-screen
    z-30 bg-primary dark:bg-primaryDark'
    initial={{y:"100%", height:"100%"}}
    animate={{y:'0%', height:'0%'}}
    transition={{duration:0.4, ease:"easeInOut"}}
    exit={{y:['0%','100%'], height:['0%','100%']}}

    />
     <motion.div className='fixed left-0 right-0 bottom-full w-screen h-screen
    z-20 bg-light'
    initial={{y:"100%", height:"100%"}}
    animate={{y:'0%', height:'0%'}}
    transition={{duration:0.4, ease:"easeInOut", delay:0.15}}
    />
     <motion.div className='fixed left-0 right-0 bottom-full w-screen h-screen
    z-10 bg-dark'
    initial={{y:"100%", height:"100%"}}
    animate={{y:'0%', height:'0%'}}
    transition={{duration:0.4, ease:"easeInOut", delay:0.3}}
    />
   </>
  )
}

export default TransitionEffectVertical;