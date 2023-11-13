import React from "react";
import Project from "../Project/Project";
import { FeaturedProject } from "../FeaturedProject";
import { AnimatedText } from "../AnimatedText";
import { Layout } from "../Layout";
import projectCoverQtrip from "../../../public/images/projects/QTrip.png";
import projectCoverXflix from "../../../public/images/projects/Xflix.png";
import projectCoverQkart from "../../../public/images/projects/Qkart.png";
import projectCoverXboard from "../../../public/images/projects/Xboard.png";
import projectCoverAdmin from "../../../public/images/projects/AdminPage.png";
const ProjectsWrapper = () => {
  return (
    <div
      id="Projects-section"
      className="w-full mb-16 flex flex-col items-center justify-center dark:text-light"
    >
      <Layout className="pt-16">
        <AnimatedText
          text="Imagination Trumps Knowledge!"
          className="m-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
        />
        <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
          <div className="col-span-12">
            <FeaturedProject
              title="XFlix"
              type="Featured Project"
              summary="XFlix is a video sharing platform which hosts videos for the world to watch. It also features uploading new videos by using external video links (eg: Youtube) and playing these videos."
              img={projectCoverXflix}
              link="https://xflixtwo.netlify.app/"
              github="https://github.com/Harshithredd/Xflix_frontend"
              direction="-50%"
            />
          </div>
          <div className="col-span-12">
            <FeaturedProject
              title="QKart"
              type="Featured Project"
              summary="QKart is an e-commerce application offering a variety of products for customers to choose from."
              img={projectCoverQkart}
              link="https://qkarttwo.netlify.app/"
              github="https://github.com/Harshithredd/Qkart_Frontend"
              direction="50%"
            />
          </div>
          <div className="col-span-12">
            <FeaturedProject
              title="QTrip"
              type="Featured Project"
              summary="Built a dynamic travel website that showcases list of various cities, adventures and their details, allowing users to make
            reservations for the ad"
              img={projectCoverQtrip}
              link="https://qtriptwo.netlify.app/"
              github="https://github.com/Harshithredd/Qtrip-dynamic-frontend"
              direction="-50%"
            />
          </div>

          <div className="col-span-6 sm:col-span-12">
            <Project
              title="Xboard"
              type="Featured Prjoect"
              img={projectCoverXboard}
              link="https://newsandboard.netlify.app/"
              github="https://github.com/Harshithredd/NewsFeed-Xboard"
              direction="-50%"
            />
          </div>
          <div className="col-span-6 sm:col-span-12">
            <Project
              title="Admin Dashboard"
              type="Featured Prjoect"
              img={projectCoverAdmin}
              link="https://admin-ui-harshithgs.netlify.app/"
              github="https://github.com/Harshithredd/Admin_UI"
              direction="50%"
            />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default ProjectsWrapper;
