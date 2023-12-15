import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import {
  ArrowBoxDownIcon,
  ArrowBoxUpIcon,
} from "../Icons/Icons";

const upVariants = {
  show: {
    opacity: 1,
  },
  hide: {
    opacity: 0,
    display: "none",
  },
};

const ScrollButton = ({ offset, type }) => {
  const [show, setShow] = useState(true);
  const [showUp, setShowUp] = useState(false);

  const handleScroll = () => {
    const currenttScrollPos = window.scrollY;
    if (currenttScrollPos > 400) {
      setShow(false);
    } else {
      setShow(true);
    }

    if (currenttScrollPos > 2000) {
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
    <>
      {type === "down" ? (
        <motion.div
          id="scrollDown"
          animate={show ? "show" : "hide"}
          variants={upVariants}
          transition={{ type: "spring" }}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className={`absolute md:h-8 top-[90%]  right-[2%]  z-50`}
        >
          <Link
            className={`z-20  cursor-pointer `}
            to={"About-section"}
            spy={true}
            offset={-60}
            duration={500}
            smooth={true}
          >
            <ArrowBoxDownIcon/>
          </Link>
        </motion.div>
      ) : (
        <motion.div
          id="scrollDown"
          animate={showUp ? "show" : "hide"}
          variants={upVariants}
          transition={{ type: "spring" }}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className={`fixed md:h-8 bottom-[5%] right-[2%] z-40`}
        >
          <Link
            className={`z-20  cursor-pointer`}
            to={"Home-section"}
            spy={true}
            offset={-60}
            duration={500}
            smooth={true}
          >
            <ArrowBoxUpIcon />
          </Link>
        </motion.div>
      )}
    </>
  );
};

export default ScrollButton;
