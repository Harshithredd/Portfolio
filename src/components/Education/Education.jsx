import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "../Experience/LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-8 last:mb-4 w-[66%] mx-auto flex flex-col items-start justify-between
    md:w-[80%] text-left"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3
          className="capitalize font-bold text-2xl dark:text-light 
        sm:text-xl xs:text-lg"
        >
          {type}
        </h3>
        <span
          className="capitalize font-medium text-dark/75 dark:text-light/75 
        xs:text-sm"
        >
          {time} | {place}
        </span>
        <p className="font-medium w-full dark:text-light  md:text-sm">{info}</p>
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
        <h2
          className="font-bold text-8xl mb-32 w-full text-center dark:text-light
        lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:!mb-8"
        >
          Education
        </h2>
        <div className="w-[75%] mx-auto relative lg:w-[90%] md:w-full ">
          <motion.div
            className="absolute mt-8 left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
            md:w-[2px] md:left-[30px] xs:left-[20px]"
            ref={ref}
            style={{ scaleY: scrollYProgress }}
          />

          <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
            <Details
              type="Bachelor Of Engineering in Information Science"
              time="2016-2020"
              place="Acharya institute of technology"
              info="7.91 CGPA."
            />
            <Details
              type="Class XII"
              time="2014-2016"
              place=" Sahyadri PU College"
              info="90.5%"
            />
            <Details
              type="Class X"
              time="2013-2014"
              place="Jain International Residential School (JIRS)"
              info="8.60 CGPA"
            />
          </ul>
        </div>
      </div>
    </>
  );
};

export default Education;
