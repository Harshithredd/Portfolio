import Link from 'next/link';
import React from 'react'
import { GithubIcon } from '../Icons/Icons';
import Image from 'next/image';
import {motion} from 'framer-motion'

const Project = ({ type, title, img, link, github, direction }) => {
  return (
    <motion.article
      className="w-full flex flex-col items-center justify-center rounded-2xl
      border border-solid border-dark bg-light dark:text-light dark:bg-dark 
      dark:border-light p-6 relative
      shadow-[14px_14px_0px_0px] 
      dark:shadow-[15px_15px_0px_0px_rgb(245,245,245)]
      md:dark:shadow-[8px_8px_0px_0px_rgb(245,245,245)]
      lg:dark:shadow-[12px_12px_0px_0px_rgb(245,245,245)]
      md:shadow-[8px_8px_0px_0px]
      lg:shadow-[12px_12px_0px_0px]
      xs:p-4"
      initial={{x:direction}}
      whileInView={{x:0}}
      transition={{duration : 1 , type:'spring'}}
    >
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <Image
          priority
          sizes="(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw,
        50vw"
          src={img}
          alt={title}
          className="w-full h-auto"
        />
      </Link>

      <div
        className="w-full flex flex-col items-start justify-between lg:w-full
        lg:pl-0 lg:pt-6"
      >
        <span
          className="text-primary dark:text-primaryDark font-medium text-l mt-5
          xs:text-base"
        >
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-2xl font-bold dark:text-light
          xs:text-sm">
            {title}
          </h2>
        </Link>

        <div className="mt-2 flex items-center justify-between w-full">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline underline-offset-2 
            xs:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-10 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

export default Project;