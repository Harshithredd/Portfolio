import React from "react";
import { Layout } from "@/components/Layout";
import { AnimatedText } from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons/Icons";
import { RuberBandText } from "../RuberBandText";
import ScrollButton from "../ScrollButton/ScrollButton";

const Landing = () => {
  return (
    <>
      <div
        className="flex items-center text-dark w-full min-h-screen dark:text-light"
        id="Home-section"
      >
        <Layout className="xxs:!px-3">
          <div className="flex items-center justify-between w-full lg:flex-col">
            {/* <div className="w-1/2 md:w-full">
              <Image
                src={profilePic}
                alt="home-dev-image"
                className="w-full h-auto lg:hidden md:inline-block md:w-full"
                priority
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 100vw,
                100vw"
              />  
            </div> */}
            <div className=" flex flex-col items-start justify-start lg:w-full w-full overflow-hidden">
              <RuberBandText
                className=" !text-8xl xl:!text-7xl  lg:!text-6xl md:!text-6xl sm:!text-5xl xs:!text-5xl"
                sentence={"Hi,_I'm Harshith_Web Developer"}
              />
              {/* <RuberBandText
                className=" !text-8xl xl:!text-7xl  lg:!text-6xl md:!text-6xl sm:!text-5xl xs:!text-4xl"
                text={"I'm Harshith"}
              />
              <RuberBandText
                className=" !text-8xl xl:!text-7xl  lg:!text-6xl md:!text-6xl sm:!text-5xl xs:!text-4xl"
                text={"Web Developer"}
              /> */}
              {/* <p className="my-4 mx-0 mx-32 text-base font-medium md:text-sm sm:text-xs">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects, showcasing my expertise in React.js and
                web development.
              </p> */}
              <div className="flex items-center justify-start  mt-4 lg-mt-2 ">
                <Link
                  href="/HARSHITH_G_S_CV.pdf"
                  target="_blank"
                  className="bg-dark text-light rounded-lg text-lg p-2.5 px-6 hover:bg-light
                   hover:text-dark border-2 border-transparent hover:border-solid hover:border-black flex  
                   dark:bg-light  dark:text-dark hover:dark:bg-dark hover:dark:text-light
                   hover:dark:border-light
                   md:p-2 md:px-4 md:text-base"
                  download={true}
                >
                  Resume
                  <LinkArrow className={"!w-6 ml-1"} />
                </Link>
                <Link
                  href="mailto:harshithreddy86@gmail.com"
                  target="_blank"
                  className="ml-4 text-lg font-medium capitalize text-dark underline 
                   dark:text-light md:text-base "
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        {/* <ScrollDown offset={-50} direction='scrollDown'/> */}
      </div>
      <ScrollButton type={"down"}/>
      <ScrollButton type={"up"}/>
    </>
  );
};

export default Landing;
