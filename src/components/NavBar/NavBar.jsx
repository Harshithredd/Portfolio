import React, { useEffect, useState } from "react";
import { Logo } from "../Logo";
import { useRouter } from "next/router";
import { Link as ScrollLink } from "react-scroll";
import {
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  SunIcon,
  TwitterIcon,
} from "../Icons/Icons";
import { motion } from "framer-motion";
import useThemeSwitch from "../hooks/useThemeSwitch";

const Customlink = ({ href, title, offset, className = "" }) => {
  const router = useRouter();
  return (
    <ScrollLink
      to={href}
      spy={true}
      offset={offset}
      duration={500}
      smooth={true}
      // href={href}
      className={`${className} relative group cursor-pointer `}
    >
      {title}
      <span
        className={`h-[1px] bg-dark inline-block absolute -left-0 bottom-0
       group-hover:w-full transition-[width] duration-300 ease-in
       dark:bg-light
       ${router.asPath === href ? "w-full" : "w-0"} `}
      />
    </ScrollLink>
  );
};

const CustomlinkMobile = ({
  href,
  title,
  handelHamburgerClick,
  offset,
  className = "",
}) => {
  const router = useRouter();

  const handleIsOpen = () => {
    // router.push(href);
    handelHamburgerClick();
  };
  return (
    <ScrollLink
      to={href}
      spy={true}
      offset={offset}
      duration={500}
      smooth={true}
      onClick={handleIsOpen}
      className={`${className} relative group  cursor-pointer`}
    >
      {title}
      <span
        className={`h-[1px] bg-dark inline-block absolute -left-0 bottom-0
       group-hover:w-full transition-[width] duration-300 ease-in
       dark:bg-light
       ${router.asPath === href ? "w-full" : "w-0"} `}
      />
    </ScrollLink>
  );
};

const navVariants = {
  show: {
    opacity: 1,
    y: 0,
  },
  hide: {
    opacity: 0,
    y: "-100%",
  },
};

const NavBar = () => {
  const [mode, setMode] = useThemeSwitch();
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [prevScrollPos, setPreviousScrollPos] = useState(0);

  const handelHamburgerClick = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {  
    const currenttScrollPos = window.scrollY;
    if (currenttScrollPos > prevScrollPos) {
      setShow(false);
    } else {
      setShow(true);
    }
    setPreviousScrollPos(currenttScrollPos);
  };

  const handleResize = ()=>{
    if(window.outerWidth > '1023'){
      setIsOpen(false);
    } 
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    }
  });

  return (
    <>
      <motion.header
        className={`flex w-full justify-between px-32 py-8 font-medium
    dark:text-light  z-10 lg:px-16 md:px-12 sm:px-8 lg:py-10 fixed
      lg:backdrop-blur-0 top-0`}
      >
        <button
          className="flex-col justify-center items-center hidden lg:flex h-8 w-9 rounded-md bg-dark/90 dark:bg-light/90"
          onClick={handelHamburgerClick}
        >
          <span
            className={`bg-light dark:bg-dark transition-all duration-300 ease-out  block h-0.5 w-6 rounded-sm ${
              isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
            }`}
          ></span>
          <span
            className={`bg-light dark:bg-dark transition-all duration-300 ease-out  block h-0.5 w-6 rounded-sm m-0.5 
          ${isOpen ? "opacity-0" : "opacity-100"}`}
          ></span>
          <span
            className={`bg-light dark:bg-dark transition-all duration-300 ease-out  block h-0.5 w-6 rounded-sm ${
              isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
            }`}
          ></span>
        </button>
        <motion.div
          className="w-full flex justify-between items-center lg:hidden"
          animate={show ? "show" : "hide"}
          variants={navVariants}
        >
          <Logo />
          <nav>
            <Customlink
              href="About-section"
              title="About"
              className="mx-4"
              offset={50}
            />
            <Customlink
              href="Experience-section"
              title="Experience"
              className="mx-4"
              offset={-150}
            />
            <Customlink
              href="Projects-section"
              title="Projects"
              className="mx-4"
              offset={-100}
            />
          </nav>
          <nav className="flex justify-center items-center">
            <motion.a
              href="https://www.linkedin.com/in/harshith-g-s-496636204/"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3"
            >
              <LinkedInIcon />
            </motion.a>
            <motion.a
              href="https://github.com/Harshithredd"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3"
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href="https://twitter.com/Harsheeeh"
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
        </motion.div>
      </motion.header>
        {isOpen ? (
          <motion.div
            className="min-w-[70vw] z-30 flex flex-col justify-between items-center 
          fixed top-1/2 left-1/2 !-translate-x-1/2  !-translate-y-1/2
           bg-dark/95 dark:bg-light/95 backdrop-blur-md py-32 
          lg:py-12 dark:text-dark text-light "
            initial={{ opacity: 0, x: "-50%", y: "-50%", scale:0}}
            animate={{scale:1, opacity: 1, transition:{duration:0.2, ease:"easeIn"} }}
          >
            <nav className="flex flex-col justify-center items-center text-center">
              <CustomlinkMobile
                href="Home-section"
                title="Home"
                className="my-2"
                handelHamburgerClick={handelHamburgerClick}
              />
              <CustomlinkMobile
                href="About-section"
                title="About"
                className="my-2"
                handelHamburgerClick={handelHamburgerClick}
                offset={-80}
              />
              <CustomlinkMobile
                title="Experience"
                href="Experience-section"
                className="my-2"
                handelHamburgerClick={handelHamburgerClick}
                offset={-100}
              />
              <CustomlinkMobile
                href="Projects-section"
                title="Projects"
                className="my-2"
                handelHamburgerClick={handelHamburgerClick}
                offset={-70}
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
               ${
                 mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
               }`}
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
    </>
  );
};

export default NavBar;
