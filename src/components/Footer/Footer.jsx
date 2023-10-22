import React from "react";
import { Layout } from "../Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="w-full border-t-2 border-solid border-dark 
            font-medium text-lg  dark:text-light dark:border-light"
    >
      <Layout className="py-8 flex justify-between dark:text-light">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div>
          Build with <span className="text-primary dark:text-primaryDark  px-1">&#9825;</span>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;
