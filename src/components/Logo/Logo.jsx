import React from "react";
import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";
import { motion } from "framer-motion";

const Logo = () => {
  // const colors = ["red", "green", "blue", "orange"]; // Add more colors as needed
  // const textVariants = {
  //   initial: { color: colors },
  //   hover: {
  //     color: "black",
  //     transition: {
  //       duration: 0.3,
  //       repeat: Infinity,
  //       repeatType: "mirror",
  //     },
  //   },
  // };

  return (
    <div className="flex justify-center items-center">
      <ScrollLink
        to="Home-section"
        spy={true}
        offset={0}
        duration={500}
        smooth={true}
        className="w-30 h-10 text-dark items-center dark:text-light
                justify-center flex cursor-pointer"
      >
        <motion.h4
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="font-bold"
        >
          <span
            className={`hover:text-primary dark:hover:text-primaryDark`}
          >
            H
          </span>
          arshith Gangi Reddy
        </motion.h4>
      </ScrollLink>
    </div>
  );
};

export default Logo;
