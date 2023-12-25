import React from "react";
import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";
import { motion } from "framer-motion";
import logoIcon from '../../../public/logoBg.ico'
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
        href={"Home-section"}
      >
        <motion.h4
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="font-bold"
        >
          <Image
              src={logoIcon}
              alt="Logo"
              aria-label="LOGO"
              className="w-full h-auto rounded-2xl "
              priority
              sizes="(max-width: 768px) 1.5rem,
            (max-width: 1200px) 1.5rem,
            1.5rem"
            />
          {/* <span
            className={`hover:text-primary dark:hover:text-primaryDark`}
          >
            H
          </span>
          arshith Gangi Reddy */}
        </motion.h4>
      </ScrollLink>
    </div>
  );
};

export default Logo;
