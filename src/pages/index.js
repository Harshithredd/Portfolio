import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { Layout } from "@/components/Layout";
import profilePic from "../../public/images/profile/developer-pic-1.png";
import { AnimatedText } from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons/Icons";
import { HireMe } from "@/components/HireMe";
export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio Harshith</title>
        <meta name="description" content="Generated by Harshith" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex item-center text-dark w-full min-h-screen">
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full">
            <div>
              <Image
                src={profilePic}
                alt="home-dev-image"
                className="w-full h-auto"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center">
              <AnimatedText
                className="!text-left !text-6xl"
                text={"Turning Vision Into Reality With Code And Design"}
              />
              <p className="my-4 text-base font">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>
              <div className="flex items-center self-start mt-2">
                <Link
                  href="/dummy.pdf"
                  target="_blank"
                  className="bg-dark text-light rounded-lg text-lg p-2.5 px-6 hover:bg-light hover:text-dark border-2 border-transparent hover:border-solid border-black flex "
                  download={true}
                >
                  Resume
                  <LinkArrow className={"!w-6 ml-1"} />
                </Link>
                <Link
                  href="mailto:harshithreddy86@gmail.com"
                  target="_blank"
                  className="ml-4 text-lg font-medium capitalize text-dark underline"
                >
                  Contact
                </Link>
              </div>
            </div>
            <HireMe />
          </div>
        </Layout>
      </main>
    </>
  );
}
