import Link from "next/link";
import React, { useState } from "react";
import { Logo } from "../Logo";
import { useRouter } from "next/router";
import {
  EmailIcon,
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  SunIcon,
  TwitterIcon,
} from "../Icons/Icons";
import { motion } from "framer-motion";
import useThemeSwitch from "../hooks/useThemeSwitch";

const Customlink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group  `}>
      {title}
      <span
        className={`h-[1px] bg-dark inline-block absolute -left-0 bottom-0
       group-hover:w-full transition-[width] duration-300 ease-in
       dark:bg-light
       ${router.asPath === href ? "w-full" : "w-0"} `}
      />
    </Link>
  );
};

const CustomlinkMobile = ({
  href,
  title,
  handelHamburgerClick,
  className = "",
}) => {
  const router = useRouter();

  const handleIsOpen = () => {
    router.push(href);
    handelHamburgerClick();
  };
  return (
    <button
      href={href}
      className={`${className} relative group`}
      onClick={handleIsOpen}
    >
      {title}
      <span
        className={`h-[1px] bg-dark inline-block absolute -left-0 bottom-0
       group-hover:w-full transition-[width] duration-300 ease-in
       dark:bg-light
       ${router.asPath === href ? "w-full" : "w-0"} `}
      />
    </button>
  );
};

const NavBar = () => {
  const [mode, setMode] = useThemeSwitch();
  const [isOpen, setIsOpen] = useState(false);

  const handelHamburgerClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header
      className="flex w-full justify-between px-32 py-8 font-medium
    dark:text-light dark:bg-black relative z-10 lg:px-16 md:px-12 sm:px-8 lg:py-10
      "
    >
      <button
        className="flex-col justify-center items-center hidden lg:flex"
        onClick={handelHamburgerClick}
      >
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out  block h-0.5 w-6 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out  block h-0.5 w-6 rounded-sm m-0.5 
          ${isOpen ? "opacity-0" : "opacity-100"}`}
        ></span>
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out  block h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>
      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <Customlink href="/" title="Home" className="mr-4" />
          <Customlink href="/about" title="About" className="mx-4" />
          <Customlink href="/projects" title="Projects" className="mx-4" />
        </nav>
        <nav className="flex justify-center items-center">
          <motion.a
            href="/"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href="/"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="/"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <TwitterIcon />
          </motion.a>

          <button
            className={`ml-3 flex items-center justify-center rounded-full p-1
        ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </div>
      {isOpen ? (
        <motion.div
          className="min-w-[70vw] z-30 flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 
          -translate-y-1/2 bg-dark/90 dark:bg-light/75 backdrop-blur-md py-32 
          lg:py-12 dark:text-dark text-light"
          initial={{scale:0, opacity:0, x:"-50%", y :"-50%"}}
          animate={{scale:1, opacity:1 }}
        >
          <nav className="flex flex-col justify-center items-center text-center">
            <CustomlinkMobile
              href="/"
              title="Home"
              className="my-2"
              handelHamburgerClick={handelHamburgerClick}
            />
            <CustomlinkMobile
              href="/about"
              title="About"
              className="my-2"
              handelHamburgerClick={handelHamburgerClick}
            />
            <CustomlinkMobile
              href="/projects"
              title="Projects"
              className="my-2"
              handelHamburgerClick={handelHamburgerClick}
            />
          </nav>
          <nav className="flex justify-center items-center mt-2">
            <motion.a
              href="/"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 sm:mx-1 "
            >
              <LinkedInIcon />
            </motion.a>
            <motion.a
              href="/"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 sm:mx-1 "
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href="/"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 sm:mx-1 "
            >
              <TwitterIcon />
            </motion.a>

            <button
              className={`ml-3 flex items-center justify-center rounded-full p-1
        ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
            >
              {mode === "dark" ? (
                <SunIcon className={"fill-dark"} />
              ) : (
                <MoonIcon className={"fill-dark"} />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}
      <div className="absolute left-[50%] translate-x-[-50%] top-4">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
