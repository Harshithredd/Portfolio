import React from "react";
import { Link as ScrollLink } from "react-scroll";

const Logo = () => {
  return (
    <div className="flex justify-center items-center">
      <ScrollLink
        to="Home-section"
        spy={true}
        offset={0}
        duration={500}
        smooth={true}
        className="w-30 h-10 text-dark items-center dark:text-light
                justify-center flex cursor-pointer"
      >
        Harshith Gangi Reddy
      </ScrollLink>
    </div>
  );
};

export default Logo;
