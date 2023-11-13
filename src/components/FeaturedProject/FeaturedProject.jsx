import Link from "next/link";
import React from "react";
import { GithubIcon } from "../Icons/Icons";
import Image from "next/image";
import { motion } from "framer-motion";

const FeaturedProject = ({
  type,
  title,
  summary,
  img,
  link,
  github,
  direction,
}) => {
  return (
    <motion.article
      className="w-full flex items-center justify-between rounded-3xl
        border border-solid border-dark bg-light dark:bg-dark 
        dark:border-light dark:shadow-[15px_15px_0px_0px_rgb(245,245,245)]
        md:dark:shadow-[8px_8px_0px_0px_rgb(245,245,245)]
        lg:dark:shadow-[12px_12px_0px_0px_rgb(245,245,245)]
        p-12 shadow-[14px_14px_0px_0px] 
        md:shadow-[8px_8px_0px_0px]
        lg:shadow-[12px_12px_0px_0px]
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
      initial={{ x: direction,}}
      whileInView={{ x: 0, }}
      transition={{ duration: 1, type: "spring" }}
    >
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto"
          priority
          sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw"
        />
      </Link>
      <div
        className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full
      lg:pl-0 lg:pt-6"
      >
        <span
          className="text-primary dark:text-primaryDark font-medium text-xl
        xs:text-base"
        >
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2
            className="my-2 w-full text-left text-4xl font-bold dark:text-light 
          xs:text-sm"
          >
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10  md:w-6">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg square bg-dark text-light p-2 px-6 text-lg border border-transparent
            font-semibold sm:px-4 sm:text-base hover:text-dark hover:bg-light hover:border-dark
            dark:bg-light dark:hover:bg-dark dark:text-dark dark:hover:text-light dark:hover:border-light"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

export default FeaturedProject;
