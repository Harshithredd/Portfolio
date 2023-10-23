import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref =useRef(null);
  return (
    <li  ref={ref} className="my-8 first:mt-8 last:mb-4 w-[66%] mx-auto flex flex-col 
    items-center justify-between md:w-[80%]">
      
      <LiIcon reference = {ref}/>
      <motion.div
      initial={{y:50}}
      whileInView={{y:0}}
      transition={{duration : 0.5 , type:'spring'}}
      >
        <h3 className="capitalize font-bold text-2xl dark:text-light
        sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize dark:text-primaryDark"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75
        xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full dark:text-light md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <>
      <div className="my-64">
        <h2 className="font-bold text-8xl mb-32 w-full text-center dark:text-light
       lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:!mb-8">
          Experience
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
              position="Software Engineer"
              company="Google"
              companyLink="@google"
              time="2022-Present"
              address="Mountain View, CA"
              work={`Worked on a team responsible for developing new features for Google's 
             search engine, including improving the accuracy and relevance of search results and 
             developing new tools for data analysis and visualization`}
            />
            <Details
              position="Software Engineer"
              company="Google"
              companyLink="@google"
              time="2022-Present"
              address="Mountain View, CA"
              work={`Worked on a team responsible for developing new features for Google's 
             search engine, including improving the accuracy and relevance of search results and 
             developing new tools for data analysis and visualization`}
            />
            <Details
              position="Software Engineer"
              company="Google"
              companyLink="@google"
              time="2022-Present"
              address="Mountain View, CA"
              work={`Worked on a team responsible for developing new features for Google's 
             search engine, including improving the accuracy and relevance of search results and 
             developing new tools for data analysis and visualization`}
            />
            <Details
              position="Software Engineer"
              company="Google"
              companyLink="@google"
              time="2022-Present"
              address="Mountain View, CA"
              work={`Worked on a team responsible for developing new features for Google's 
             search engine, including improving the accuracy and relevance of search results and 
             developing new tools for data analysis and visualization`}
            />
            <Details
              position="Software Engineer"
              company="Google"
              companyLink="@google"
              time="2022-Present"
              address="Mountain View, CA"
              work={`Worked on a team responsible for developing new features for Google's 
             search engine, including improving the accuracy and relevance of search results and 
             developing new tools for data analysis and visualization`}
            />
          </ul>
        </div>
      </div>
    </>
  );
};

export default Experience;
