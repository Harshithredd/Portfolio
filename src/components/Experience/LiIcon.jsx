import React from "react";
import { motion, useScroll } from "framer-motion";
const LiIcon = ({ reference }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["start end", "center center"],
  });
  return (
    <figure className="absolute stroke-dark left-0 dark:stroke-light">
      <motion.svg className={'-rotate-90'} width="75" height="75" viewBox="0 0 100 100">
        <circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-primary dark:stroke-primaryDark stroke-1 fill-none "
        />
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-1 fill-light dark:fill-dark stroke-[5px]"
          style={{ pathLength: scrollYProgress }}
        />
        <circle cx="75" cy="50" r="10" 
        className="stroke-1 fill-primary dark:fill-primaryDark animate-pulse" />
      </motion.svg>
    </figure>
  );
};

export default LiIcon;
