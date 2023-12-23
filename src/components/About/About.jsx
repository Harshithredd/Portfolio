import React from "react";
import { AnimatedNumbers } from "../AnimatedNumbers";
import { Skills } from "../Skills";
import { Experience } from "../Experience";
import { Education } from "../Education";
import Image from "next/image";
import { AnimatedText } from "../AnimatedText";
import { Layout } from "../Layout";
import profilePicCover from "../../../public/images/profile/Profile_1.jpg";

const About = () => {
  return (
    <div id="About-section">
      <Layout className="md:!pt-0">
        <AnimatedText
          text="Passion Fuels Purpose!"
          className=" lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:!mb-8 "
        />
        <div className="grid w-full grid-cols-8 gap-16 mt-[5rem] sm:mt-3 md:mt-4 md:grid-cols-4 ">
          <div
            className="col-span-3 felx flex-col items-start justify-start dark:text-light
          md:col-span-4 md:order-2"
          >
            <h2
              className="mb-4 test-lg font-bold uppercase text-dark/75
          dark:text-lime-50"
            >
              Biography
            </h2>
            <p className="font-medium">
              Hi, I&apos;m Harshith G S, a web developer with a passion for creating
              beautiful, functional, and user-centered digital experiences. With
              2 years of experience in the field. I am always looking for new
              and innovative ways to bring my client&apos;s visions to life.
            </p>
            <p className="font-medium my-4">
              I believe that design is about more than just making things look
              pretty – it&apos;s about solving problems and creating intuitive,
              enjoyable experiences for users.
            </p>
            <p className="font-medium ">
              Whether I&apos;m working on a website or other digital product, I bring
              my commitment to design excellence and user-centered thinking to
              every project I work on. I look forward to the opportunity to
              bring my skills and passion to your next project.
            </p>
          </div>
          <div
            className="relative col-span-3 h-max rounded-2xl border-2 border-solid  
             p-8 border-dark bg-light dark:bg-dark
             dark:border-light
           md:col-span-4 md:order-1
           shadow-[18px_18px_0px_0px] 
           dark:shadow-[18px_18px_0px_0px_rgb(245,245,245)]
           md:dark:shadow-[10px_10px_0px_0px_rgb(245,245,245)]
           lg:dark:shadow-[15px_15px_0px_0px_rgb(245,245,245)]
           md:shadow-[10px_10px_0px_0px]
           lg:shadow-[15px_15px_0px_0px]"
          >
            <Image
              src={profilePicCover}
              alt="profile pic"
              className="w-full h-auto rounded-2xl "
              priority
              sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            30vw"
            />
          </div>
          <div
            className="col-span-2 flex flex-col items-end justify-between md:col-span-4
        md:order-3 md:flex-row"
          >
            <div className="flex flex-col items-end justify-center xl:items-center">
              <span
                className="inline-block text-7xl font-bold dark:text-light 
            md:text-6xl sm:text-5xl xs:text-4xl"
              >
                <AnimatedNumbers value={20} />+
              </span>
              <h2
                className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 
            xs:text-sm sm:text-base md:text-lg xl:text-center"
              >
                Verified Skills
              </h2>
            </div>
            <div className="flex flex-col items-end justify-center xl:items-center">
              <span
                className="inline-block text-7xl font-bold dark:text-light 
               md:text-6xl sm:text-5xl xs:text-4xl xl:text-center"
              >
                <AnimatedNumbers value={5} />+
              </span>
              <h2
                className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                  xs:text-sm sm:text-base md:text-lg xl:text-center"
              >
                projects
              </h2>
            </div>
            <div className="flex flex-col items-end justify-center xl:items-center">
              <span
                className="inline-block text-7xl font-bold dark:text-light 
             md:text-6xl sm:text-5xl xs:text-4xl"
              >
                <AnimatedNumbers value={2} />+
              </span>
              <h2
                className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 
            xs:text-sm sm:text-base md:text-lg xl:text-center"
              >
                Years of experience
              </h2>
            </div>
          </div>
        </div>
        <Skills />
        <Experience />
        <Education />
      </Layout>
    </div>
  );
};

export default About;
