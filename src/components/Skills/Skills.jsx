import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center 
       rounded-full font-semibold bg-dark dark:bg-light text-light 
       dark:text-dark py-3 px-6 absolute cursor-pointer
       lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3
       xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light
       "
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2
        className="font-bold text-8xl mt-64 sm:mt-32 lg:mt-48 w-full text-center dark:text-light
      mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:!mb-8 "
      >
        skills
      </h2>
      <div
        className="w-full h-screen relative flex items-center 
      justify-center rounded-full bg-circularLight dark:bg-circularDark
      lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg
      md:bg-circularLightMd md:dark:bg-circularDarkMd
      sm:bg-circularLightSm sm:dark:bg-circularDarkSm" 
      >
        <motion.div
          className="flex items-center justify-center 
          rounded-full font-semibold bg-dark text-light p-8 dark:bg-light dark:text-dark
          lg:p-6 md:p-4 xs:text-xs xs:p-2"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="HTML" x="-20vw" y="2vw" />
        <Skill name="CSS" x="-4vw" y="-8vw" />
        <Skill name="Javascript" x="18vw" y="6vw" />
        <Skill name="ReactJs" x="0vw" y="12vw" />
        <Skill name="NextJS" x="-18vw" y="-15vw" />
        <Skill name="NodeJS" x="15vw" y="-12vw" />
        <Skill name="Redux" x="29vw" y="-5vw" />
        <Skill name="Tailwind" x="0vw" y="-21vw" />
        <Skill name="Express" x="25vw" y="18vw" />
        <Skill name="MongoDB" x="-24vw" y="17vw" />
      </div>
    </>
  );
};

export default Skills;
