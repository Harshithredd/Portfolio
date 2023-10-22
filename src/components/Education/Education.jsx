import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from '../Experience/LiIcon';

const Details = ({ type, time, place, info }) => {
  const ref =useRef(null);
  return (
    <li  ref={ref} className="my-8 first:mt-8 last:mb-4 w-[66%] mx-auto flex flex-col items-center justify-between">
      
      <LiIcon reference = {ref}/>
      <motion.div
      initial={{y:50}}
      whileInView={{y:0}}
      transition={{duration : 0.5 , type:'spring'}}
      >
        <h3 className="capitalize font-bold text-2xl dark:text-light">
          {type}
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75">
          {time} | {place}
        </span>
        <p className="font-medium w-full dark:text-light">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <>
      <div className="my-64">
        <h2 className="font-bold text-8xl mb-32 w-full text-center dark:text-light">
          Education
        </h2>
        <div className="w=[75%] mx-auto relative">
          <motion.div
            className="absolute mt-8 left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light"
            ref={ref}
            style={{ scaleY: scrollYProgress }}
          />

          <ul className="w-full flex flex-col items-start justify-between ml-4">
            <Details
              type="Bachelor Of Science In Computer Science"
              time="2016-2020"
              place="Massachusetts Institute Of Technology (MIT)"
              info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
              Intelligence."
            />
           <Details
              type="Bachelor Of Science In Computer Science"
              time="2016-2020"
              place="Massachusetts Institute Of Technology (MIT)"
              info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
              Intelligence."
            />
            <Details
              type="Bachelor Of Science In Computer Science"
              time="2016-2020"
              place="Massachusetts Institute Of Technology (MIT)"
              info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
              Intelligence."
            />
          </ul>
        </div>
      </div>
    </>
  );
};

export default Education;
