import { AnimatedText } from "@/components/AnimatedText";
import { Layout } from "@/components/Layout";
import Head from "next/head";
import React, { useEffect, useRef } from "react";
import profilePic from "../../public/images/profile/developer-pic-2.jpg";
import Image from "next/image";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        console.log("ref.current.textContent ==>", ref.current.textContent);
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);
  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>About Page</title>
        <meta name="description" content="about me" />
      </Head>
      <main>
        <Layout>
          <AnimatedText
            text="Passion Fuels Purpose! "
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:!mb-8 "
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
                Hi, I'm CodeBucks, a web developer and UI/UX designer with a
                passion for creating beautiful, functional, and user-centered
                digital experiences. With 4 years of experience in the field. I
                am always looking for new and innovative ways to bring my
                clients' visions to life.
              </p>
              <p className="font-medium my-4">
                I believe that design is about more than just making things look
                pretty – it's about solving problems and creating intuitive,
                enjoyable experiences for users.
              </p>
              <p className="font-medium ">
                Whether I'm working on a website, mobile app, or other digital
                product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>
            <div
              className="relative col-span-3 h-max rounded-2xl border-2 border-solid  
                 p-8 border-dark bg-light shadow-[18px_18px_0px_0px] dark:bg-dark
               dark:shadow-[18px_18px_0px_0px_rgb(245,245,245)] dark:border-light
               md:col-span-4 md:order-1"
            >
              <Image
                src={profilePic}
                alt="profile pic"
                className="w-full h-auto rounded-2xl "
                priority
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                30vw"
              />
            </div>
            <div
              className="col-span-2 flex flex-col items-end justify-around md:col-span-4
            md:order-3 md:flex-row"
            >
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span
                  className="inline-block text-7xl font-bold dark:text-light 
                md:text-6xl sm:text-5xl xs:text-4xl"
                >
                  <AnimatedNumbers value={5} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                xs:text-sm sm:text-base md:text-lg xl:text-center">
                  satisfied clients
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span
                  className="inline-block text-7xl font-bold dark:text-light  
                 md:text-6xl sm:text-5xl xs:text-4xl"
                >
                  <AnimatedNumbers value={10} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75  
                xs:text-sm sm:text-base md:text-lg xl:text-center">
                  projects completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span
                  className="inline-block text-7xl font-bold dark:text-light 
                 md:text-6xl sm:text-5xl xs:text-4xl"
                >
                  <AnimatedNumbers value={3} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                xs:text-sm sm:text-base md:text-lg xl:text-center">
                  Years of experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
