import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AnimatedText } from "../AnimatedText";

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
      viewport={{once:true}}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
   const [isMobile, setIsMobile] = useState(false);

   const handleResize = ()=>{
    if(window.innerWidth < 1024){
      setIsMobile(true);
    }else{
      setIsMobile(false)
    }
  }

   useEffect(()=>{  
      window.addEventListener("resize",  window.addEventListener("resize", handleResize));

      return () => window.removeEventListener("resize",  window.addEventListener("resize", handleResize));
   });

  return (
    <>
      <AnimatedText
        className="font-bold text-8xl mt-64 sm:mt-28 lg:mt-48 w-full text-center dark:text-light
      md:mb-16 lg:mb-36 xl:mb-32 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:!mb-8 "
        text={'Skills'}
      />
      <div
        className="w-full h-screen relative flex items-center 
      justify-center rounded-full bg-circularLight dark:bg-circularDark
      lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] 
      lg:bg-circularLightLg lg:dark:bg-circularDarkLg
      md:bg-circularLightMd md:dark:bg-circularDarkMd
      sm:bg-circularLightSm sm:dark:bg-circularDarkSm md:mt-0 mt-32"
      >
        <motion.div
          className="flex items-center justify-center 
          rounded-full font-semibold bg-dark text-light p-8 dark:bg-light dark:text-dark
          lg:p-6 md:p-4 xs:text-xs xs:p-2"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="HTML" x="-15vw" y="2vw" />
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="Javascript" x="20vw" y="2vw" />
        <Skill name="ReactJs" x="0vw" y="12vw" />
        <Skill name="NextJS" x="-18vw" y="-15vw" />
        <Skill name="NodeJS" x="15vw" y="-12vw" />
        <Skill name="Redux" x="29vw" y="-5vw" />
        <Skill name="MongoDB" x="-27vw" y="15vw" />
        <Skill name="ExpressJS" x={`${ isMobile ? '26vw' : '32vw'}`} y={`${ isMobile ? '20vw' : '5vw'}`} />
        <Skill name="Java" x="16vw" y="13vw" />
        <Skill name="Selenium" x="33vw" y="-19vw" />
        <Skill name="TestNG" x="-37vw" y="8vw" />
        <Skill name="Jest" x="-28vw" y="-21vw" />
        <Skill name="GraphQl" x="-27vw" y="-4vw" />
        <Skill name="Git" x={`${ isMobile ? '5vw' : '6vw'}`} y={`${ isMobile ? '-19vw' : '-17vw'}`} />
        <Skill name="TailwindCSS" x={`${ isMobile ? '-20vw' : '-15vw'}`} y={`${ isMobile ? '-33vw' : '-26vw'}`} />
        <Skill name="Bootstrap" x="0vw" y="25vw" />
        <Skill name="Framer-motion" x={`${ isMobile ? '10vw' : '13vw'}`} y={`${ isMobile ? '-29vw' : '-24vw'}`} />
        <Skill name="Material-UI"  x={`${ isMobile ? '-21vw' : '-20vw'}`} y={`${ isMobile ? '32vw' : '22vw'}`} />
        <Skill name="Jenkins"  x={`${ isMobile ? '10vw' : '12vw'}`} y={`${ isMobile ? '33vw' : '22vw'}`}/>
        <Skill name="Docker" x={`${ isMobile ? '30vw' : '31vw'}`} y={`${ isMobile ? '29vw' : '18vw'}`}/>
      </div>
    </>
  );
};

export default Skills;
