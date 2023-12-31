import React from "react";
import { Layout } from "../Layout";
import { string } from "prop-types";

/**
 * Footer component
 * @returns {React.Element} Element
 **/
const Footer = () => {
  return (
    <footer
      className="w-full border-t-2 border-solid border-dark 
            font-medium text-lg  dark:text-light dark:border-light
            sm:text-base"
    >
      <Layout className="py-8 flex justify-between dark:text-light
      lg:flex-col lg:py-6 lg:text-center">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="py-2">
          Build with <span className="text-primary dark:text-primaryDark  px-1">&#9825;</span> by Harshith
        </div>
      </Layout>
    </footer>
  );
};

Footer.propTypes ={

}
Footer.defaultProps ={
  
}

export default Footer;
