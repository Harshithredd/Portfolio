"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { opacity, slideUp } from "./anim";

const words = [
  "Hello",
  "नमस्ते",
  "Ciao",
  "హలో",
  "Olà",
  "வணக்கம்",
  "Bonjour",
  "ನಮಸ್ಕಾರ",
];

export default function Intro() {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    if (index == words.length - 1) return;
    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index == 0 ? 1000 : 150
    );
  }, [index]);

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="h-[100vh] w-[100vw] flex justify-center items-center fixed z-[99] bg-black  "
    >
      {dimension.width > 0 && (
        <>
          <motion.p
            variants={opacity}
            initial="initial"
            animate="enter"
            className="flex text-white text-4xl md:text-2xl items-center absolute z-40"
          >
            <span className="block w-3 h-3 md:w-2 md:h-2 bg-white rounded-full mr-3 "></span>
            {words[index]}
          </motion.p>
        </>
      )}
    </motion.div>
  );
}
