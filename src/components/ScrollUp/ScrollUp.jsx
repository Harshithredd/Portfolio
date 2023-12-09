import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import style from "./ScrollUp.module.scss";

const navVariants = {
  show: {
    opacity: 1,
  },
  hide: {
    opacity: 0,
  },
};

const ScrollUp = ({ offset, direction }) => {
  const [showUp, setShowUp] = useState(false);

  const handleScroll = () => {
    const currenttScrollPos = window.scrollY;
    if (currenttScrollPos > 400) {
      setShowUp(true);
    } else {
      setShowUp(false);
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
      animate={showUp ? "show" : "hide"}
      variants={navVariants}
      id="scrollUp"
    >
      <Link
        className={`flex 
            z-20  cursor-pointer flex-col transition-all`}
        to={"Home-section"}
        spy={true}
        offset={offset}
        duration={500}
        smooth={true}
      >
        <span
          className={`absolute !-translate-x-1/2 left-1/2 w-8 h-16 md:border-[0.15rem] 
        border-[0.2rem] border-dark/20 inline-block rounded-full cursor-pointer
        dark:border-light/20
        ${style.scrollButtonUp} dark:before:border-light/20 dark:after:border-light/20`}
        ></span>
      </Link>
    </motion.div>
  );
};

export default ScrollUp;
