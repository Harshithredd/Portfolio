import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import style from './ScrollDown.module.scss'


const navVariants = {
    show: {
      opacity: 1,
      y: 0,
    },
    hide: {
      opacity: 0,
      y: "-100%",
    },
  };

const ScrollDown = ({offset}) => {

  return (
      <Link
      className={` flex
      z-20  cursor-pointer flex-col`}
      to={"About-section"}
      spy={true}
      offset={offset}
      duration={500}
      smooth={true}>
        <span className={`absolute right10 !-translate-x-1/2 bottom-20 left-1/2 w-8 h-16 md:border-[0.15rem] 
        border-[0.2rem] border-dark/10 inline-block rounded-full 
        dark:border-light/20
        ${style.scrollButton} dark:before:border-light/20 dark:after:border-light/10`}></span>
      </Link>
  );
};

export default ScrollDown;
