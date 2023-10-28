import { AnimatedText } from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons/Icons";
import { Layout } from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import projectOneCover from "../../public/images/projects/crypto-screener-cover-image.jpg";
import TransitionEffect from "@/components/TransitionEffect/TransitionEffect";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between rounded-3xl
        border border-solid border-dark bg-light dark:bg-dark 
        dark:border-light dark:shadow-[15px_15px_0px_0px_rgb(245,245,245)]
        md:dark:shadow-[8px_8px_0px_0px_rgb(245,245,245)]
        lg:dark:shadow-[12px_12px_0px_0px_rgb(245,245,245)]
        p-12 shadow-[14px_14px_0px_0px] 
        md:shadow-[8px_8px_0px_0px]
        lg:shadow-[12px_12px_0px_0px]
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto"
          priority
          sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw"
        />
      </Link>
      <div
        className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full
      lg:pl-0 lg:pt-6"
      >
        <span
          className="text-primary dark:text-primaryDark font-medium text-xl
        xs:text-base"
        >
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2
            className="my-2 w-full text-left text-4xl font-bold dark:text-light 
          xs:text-sm"
          >
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10  md:w-6">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg square bg-dark text-light p-2 px-6 text-lg border border-transparent
            font-semibold sm:px-4 sm:text-base hover:text-dark hover:bg-light hover:border-dark
            dark:bg-light dark:hover:bg-dark dark:text-dark dark:hover:text-light dark:hover:border-light"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, img, link, github }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl
      border border-solid border-dark bg-light dark:text-light dark:bg-dark 
      dark:border-light p-6 relative
      shadow-[14px_14px_0px_0px] 
      dark:shadow-[15px_15px_0px_0px_rgb(245,245,245)]
      md:dark:shadow-[8px_8px_0px_0px_rgb(245,245,245)]
      lg:dark:shadow-[12px_12px_0px_0px_rgb(245,245,245)]
      md:shadow-[8px_8px_0px_0px]
      lg:shadow-[12px_12px_0px_0px]
      xs:p-4"
    >
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <Image
          priority
          sizes="(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw,
        50vw"
          src={img}
          alt={title}
          className="w-full h-auto"
        />
      </Link>

      <div
        className="w-full flex flex-col items-start justify-between lg:w-full
        lg:pl-0 lg:pt-6"
      >
        <span
          className="text-primary dark:text-primaryDark font-medium text-l mt-5
          xs:text-base"
        >
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-2xl font-bold dark:text-light
          xs:text-sm">
            {title}
          </h2>
        </Link>

        <div className="mt-2 flex items-center justify-between w-full">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline underline-offset-2 
            xs:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-10 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Projects Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect/>
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="m-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Crypto Screener Application"
                type="Featured Prjoect"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency."
                img={projectOneCover}
                link="/"
                github="/"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Crypto Screener Application"
                type="Featured Prjoect"
                img={projectOneCover}
                link="/"
                github="/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Crypto Screener Application"
                type="Featured Prjoect"
                img={projectOneCover}
                link="/"
                github="/"
              />
            </div>
            <div className="col-span-12">Featured Project</div>
            <div className="col-span-6">Project-3</div>
            <div className="col-span-6">Project-4</div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
