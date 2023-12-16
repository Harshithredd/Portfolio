import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import TextSpan from "./TextSpan";

const letterAnimations = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.1,
    },
  },
};

const RuberBandText = ({ sentence, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 1 });

  return (
    <motion.div
      initial={{ display: "hidden" }}
      animate={{ display: "block" }}
      transition={{delay:2}}
      className={`w-full mx-auto md:py-1 py-2 flex justify-center flex-col items-start  overflow-hidden `}
    >
      <motion.span
        className="block"
        ref={ref}
        initial={"hidden"}
        animate={isInView ? "show" : "hidden"}
        transition={{ staggerChildren: 0.1 }}
      >
        {sentence?.split("_").map((word, idx) => {
          return (
            <span key={`_${idx}_${word}`} className={"block"}>
              {word?.split("").map((letter, index) => {
                return (
                  <motion.span
                    className="inline-block"
                    key={`_${index}_${letter}`}
                    variants={letterAnimations}
                  >
                    <TextSpan
                      key={`${index}_${letter}`}
                      className={className}
                      shadow={`${
                        letter === "H"
                          ? `dark:[text-shadow:_5px_5px_0px_rgb(182_62_150/_100%)] dark:md:[text-shadow:_2px_2px_0px_rgb(182_62_150/_100%)]
                              [text-shadow:_5px_5px_0px_rgb(0_0_0/_30%)] md:[text-shadow:_2px_2px_0px_rgb(0_0_0/_30%)]
                              font-outline-2 md:font-outline-1 dark:font-outline-black-2 dark:md:font-outline-black-1 
                              hover:[text-shadow:_5px_5px_0px_rgb(88_230_217/_100%)] hover:md:[text-shadow:_2px_2px_0px_rgb(88_230_217/_100%)]`
                          : null
                      }`}
                    >
                      {letter === " " ? "\u00A0" : letter}
                    </TextSpan>
                  </motion.span>
                );
              })}
            </span>
          );
        })}
      </motion.span>
    </motion.div>
  );
};

export default RuberBandText;
