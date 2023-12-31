import React from "react";
import { animate, motion } from "framer-motion";

const headingAnimation = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};
const AnimatedText = ({ text, className = "" }) => {
  return (
    <div
      className={`w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden`}
    >
      <motion.h1
        className={`inline-block text-dark font-bold w-full capitalize text-8xl
          ${className}  dark:text-light `}
        variants={headingAnimation}
        whileInView="animate"
        initial="initial"
        viewport={{once:true}}
      >
        {text.split(" ").map((word, index) => {
          return (
            <motion.span
              key={`${word}_${index}`}
              className="inline-block"
              variants={singleWord}
            >
              {word}&nbsp;
            </motion.span>
          );
        })}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
