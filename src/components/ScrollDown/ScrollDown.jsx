import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import style from "./ScrollDown.module.scss";

const navVariants = {
  show: {
    opacity: 1,
  },
  hide: {
    opacity: 0,
  },
};

const ScrollDown = ({ offset, direction }) => {
  const [show, setShow] = useState(true);

  const handleScroll = () => {
    const currenttScrollPos = window.scrollY;
    if (currenttScrollPos > 400) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <motion.div
      id="scrollDown"
      animate={show ? "show" : "hide"}
      variants={navVariants}
    >
      <Link
        className={`flex
            z-20  cursor-pointer flex-col transition-all`}
        to={"About-section"}
        spy={true}
        offset={offset}
        duration={500}
        smooth={true}
      >
        <span
          className={`absolute !-translate-x-1/2 bottom-20 left-1/2 w-8 h-16 md:border-[0.15rem] 
            border-[0.2rem] border-dark/20 inline-block rounded-full 
            dark:border-light/20
            ${style.scrollButton} dark:before:border-light/20 dark:after:border-light/20
            hover:border-primary/50 dark:hover:border-primaryDark/50
            hover:after:border-primary/50 dark:after:hover:border-primaryDark/50`}
        ></span>
      </Link>
    </motion.div>
  );
};

export default ScrollDown;
