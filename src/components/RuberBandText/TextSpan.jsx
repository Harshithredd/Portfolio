import React, { useState } from "react";
import { useAnimationControls, motion, color } from "framer-motion";

const TextSpan = ({ children, className, shadow}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const controls = useAnimationControls();

  const rubber = () => {
    controls.start({
      transform: [
        "scale3d(1, 1, 1)",
        "scale3d(.4, .55, 1)",
        "scale3d(.75, 1.25, 1)",
        "scale3d(1.25, .85, 1)",
        "scale3d(.9, 1.05, 1)",
        "scale3d(1, 1, 1)",
      ],
      transition: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9],
    });
    setIsPlaying(true);
  };
//dark:[text-shadow:_4px_4px_0px_rgb(182_62_150/_100%)] [text-shadow:_4px_4px_0px_rgb(88_230_217/_100%)]
  return (
    <motion.h2
      className={`${className} inline-block text-dark font-bold dark:text-light ${shadow}
       hover:!text-primary dark:hover:!text-primaryDark `}
      animate={controls}
      onMouseOver={() => {
        if (!isPlaying) {
          rubber();
        }
      }}
      onAnimationComplete={() => {
        setIsPlaying(false);
      }}
    >
      {children}
    </motion.h2>
  );
};

export default TextSpan;
