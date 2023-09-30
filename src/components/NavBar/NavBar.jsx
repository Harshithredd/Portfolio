import Link from 'next/link';
import React from 'react'
import { Logo } from '../Logo';
import { useRouter } from 'next/router';
import { EmailIcon, GithubIcon, LinkedInIcon, TwitterIcon } from '../Icons/Icons';
import { motion } from 'framer-motion';

const Customlink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group  `}>
      {title}
      <span className={`h-[1px] bg-dark inline-block absolute -left-0 bottom-0 
       group-hover:w-full transition-[width] duration-300 ease-in
       ${router.asPath === href ? 'w-full' : 'w-0'} `}
      />
    </Link>
  )
}

const NavBar = () => {
  return (
    <header className='flex w-full justify-between px-32 py-8 font-medium'>
      <nav>
        <Customlink href='/' title='Home' className='mr-4' />
        <Customlink href='/about' title='About' className='mx-4' />
        <Customlink href='/projects' title='Projects' className='mx-4' />
        <Customlink href='/articles' title='Articles' className='ml-4' />
      </nav>
      <div className='absolute left-[50%] translate-x-[-50%] top-4'>
        <Logo />
      </div>

      <nav className='flex justify-center items-center'>
        <motion.a href='/' target='_blank'
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className='w-6 mx-3'
          >
          <LinkedInIcon/>
        </motion.a>
        <motion.a href='/' target='_blank'
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className='w-6 mx-3'
          >
          <GithubIcon/>
        </motion.a>
        <motion.a href='/' target='_blank'
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className='w-6 mx-3'
          >
          <TwitterIcon/>
        </motion.a>
        <motion.a href='/' target='_blank'
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className='w-6 mx-3'
          >
          <EmailIcon/>
        </motion.a>
      </nav>
    </header>
  )
}

export default NavBar;