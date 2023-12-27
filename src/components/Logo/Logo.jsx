import React from "react";
import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";
import { motion } from "framer-motion";
import logoIcon from '../../../public/logoBg.png'
const Logo = () => {


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
              sizes="(max-width: 768px) 2rem,
            (max-width: 1200px) 2rem,
            2rem"
            />
        </motion.h4>
      </ScrollLink>
    </div>
  );
};

export default Logo;
