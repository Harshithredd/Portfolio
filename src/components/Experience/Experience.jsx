import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
import { AnimatedText } from "../AnimatedText";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-8 last:mb-4 w-[66%] mx-auto flex flex-col 
     justify-between md:w-[80%]"
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
          {position}{" "}
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize dark:text-primaryDark"
          >
            @{company}
          </a>
        </h3>
        <span
          className="capitalize font-medium text-dark/75 dark:text-light/75
        xs:text-sm"
        >
          {time} | {address}
        </span>
        {work.split(".").map((task, index) => (
          <p
            key={index}
            className="font-medium w-full dark:text-light md:text-sm"
          >
            &#8226; {task}
          </p>
        ))}
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
      <div className="my-64 lg:!my-40" id="Experience-section">
        <AnimatedText
          className="font-bold text-8xl mb-32 w-full text-center dark:text-light
       lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:!mb-8"
          text="Experience"
        />
        <div className="w-[75%] mx-auto relative lg:w-[90%] md:w-full ">
          <motion.div
            className="absolute mt-8 left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
             md:w-[2px] md:left-[30px] xs:left-[20px]"
            ref={ref}
            style={{ scaleY: scrollYProgress }}
          />

          <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
            <Details
              position="Senior Software Engineer"
              company="Nielsen Media"
              companyLink="https://nielsen.com/"
              time="Apr 2024- Present"
              address="Bangalore"
              work={`
               Maintained and scaled a shared micro-frontend platform (IFL) supporting 100+ applications, implemented multi-React
              version support, developed user-access-based loading screens, resolved critical widget rendering and screen load issues,
              and optimized script loading to prevent duplicate DOM injections, reducing base load by 1 second.
              Led integration of Heap analytics in IFL framework to enable analytics across all microfrontend applications, adding
              browser APIs and custom browser interfaces to manage analytics per app.
              Architected and Implemented Nielsen Creative and Encoding Platform with queue-based, resumable/parallel AWS S3
              uploads, exponential backoff retries, byte-range downloads, error handling, and CI/CD pipelines via GitLab.
              Designed and developed the frontend of Media Portal dashboard: consolidated client product access, app discovery, user
              impersonation, and a workspace with file sharing and URL-based links
              Modernized Nielsen’s Components Design System by delivering key reusable React 18 components, increasing developer
              efficiency and UI consistency across projects.
              Contributed and maintained a self-service admin app within the Media Application Framework (MAF), building key
              screens for app details, screen lists, entry points, products, analytics panels, and a app list with search and filter features.
              Led a team of 3 engineers, planning sprints and mentoring junior members, while resolving complex UI issues
              `}
            />
            <Details
              position="Assosiate Technology-1"
              company="Publicis Re:sources"
              companyLink="https://www.publicisresources.com/"
              time="Mar 2023- Apr 2024"
              address="Bangalore"
              work={`
                 Contributed to successfully develop the Front end of the alumni package application within the designated time frame
                and onboard an agency onto it.
                Significantly enhanced the performance of the alumni package Initial load time by 40%.
                Implemented caching using Redis cache, and using a CDN to serve static assets closer to users, reducing latency.
                Leveraged dynamic imports of Next.js, react lazy loading, and lazySizes library, reducing the initial bundle size.
                Implemented user-friendly feed section enabling post, edit, and deleting feed items, with reactions and comments section.
                Collaborated closely with the design team in creating and developing Alumni Admin pages to send invites to alumni.
                Contributed to Marcel-Component-Library repository to create re-usable components
              `}
            />
            <Details
              position=" Systems Engineer"
              company="Infosys"
              companyLink="http://www.infosys.com/"
              time=" Feb 2021– Nov 2022"
              address="Bangalore"
              work={` 
              As part of Software Quality Management - Automation Production Verification (SQM-APV) Team, Involved in Devel-
              opment, Execution and Maintenance of Automation Test Scripts.
              Built and maintained React Dashboard to view, trigger amd schedule test script jobs on Production applications.
              Developed Automation Scripts of functional testing for a Financial services company using TestNG and Selenium.
              Created and enhanced numerous test scripts to handle changes in the objects, in the tested application’s GUI, and in
              the PROD environment using Selenium WebDriver and increased script stability by 15 %.
              Analyzed the Business Requirements Document, put ideas into Test Plan and prepared Test Cases for new functionalities.
              Developed REST APIs, database schema for Bank Application.
               `}
            />
            <Details
              position=" Systems Engineer Trainee"
              company="Infosys"
              companyLink="http://www.infosys.com/"
              time=" Nov 2020– Jan 2021"
              address="Mysore"
              work={` Developed REST APIs, database schema for InEssence Bank Application and written automation scripts for unit testing
              using TestNG and Selenium`}
            />
          </ul>
        </div>
      </div>
    </>
  );
};

export default Experience;
