import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "../../public/images/projects/port-cap.jpg";
import order24 from  "../../public/images/projects/order24.png";
import helixai from  "../../public/images/projects/helixai.png";
import logo from "src/logo.png"
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between relative  rounded-br-2xl
        rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light
    rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
    "
      />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light lg:text-3xl xs:text-2xl">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            {" "}
            <GithubIcon />
          </Link>
          
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl 
    border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4
    "
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
    rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]
    "
      />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>

        <div className="w-full flex items-center justify-between">
          
          <Link href={github} target="_blank" className="w-8 md:w-6">
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
     
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Canvas to the Imagination"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
            <FeaturedProject
  type="Featured Project"
  title="MoodSphere"
  summary="Architected MoodSphere using Python, Flask, React, HTML5, CSS3, and JavaScript. Developed emotion-based music recommendation algorithms by training a dataset of 80,000 images with ResNet50V2 and CNN, enhancing engagement by 30%. Led the team to ensure best practices in code quality, version control, and deployment using Docker and GCP."
  img={logo}
  link="https://moodsphere.vercel.app/"
  github="https://github.com/htmw/2024S-Dev-Dynasty/wiki"
/>
              <FeaturedProject
                type="Featured Project"
                title="Wayfarer"
                summary="Built a responsive web application with geolocation, data filtering, and search functionality, utilizing Google Maps API and Google Places API, resulting in increased user engagement (25%+) and decreased bounce rate (15%). Implemented advanced routing techniques using React Router for a seamless user experience, reducing support requests (50%) and improving customer satisfaction (35%). Leveraged APIs like OpenWeatherMap and Yelp, along with testing tools Jest and Enzyme, to fetch data, create powerful features, and ensure high code quality."              img={project1}
                link="https://github.com/urmil255/travel_advisor"
                github="https://github.com/urmil255/travel_advisor"
              />
            </div>
            </div>
            
            <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-5">
            <div className="col-span-12">
              <FeaturedProject
                type="Featured Project"
                img={order24}
                title="Order24"
                summary="Built a responsive web application with geolocation, data filtering, and search functionality, utilizing Google Maps API and Google Places API, resulting in increased user engagement (25%+) and decreased bounce rate (15%). Implemented advanced routing techniques using React Router for a seamless user experience, reducing support requests (50%) and improving customer satisfaction (35%). Leveraged APIs like OpenWeatherMap and Yelp, along with testing tools Jest and Enzyme, to fetch data, create powerful features, and ensure high code quality."              
                link="https://github.com/urmil255/order24"
                github="https://github.com/urmil255/order24"
              />
            </div>
            </div>

            <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-5">
            <div className="col-span-12">
              <FeaturedProject
                type="Featured Project"
               img={helixai}
                title="Helix.Ai"
                summary="Built a responsive web application with geolocation, data filtering, and search functionality, utilizing Google Maps API and Google Places API, resulting in increased user engagement (25%+) and decreased bounce rate (15%). Implemented advanced routing techniques using React Router for a seamless user experience, reducing support requests (50%) and improving customer satisfaction (35%). Leveraged APIs like OpenWeatherMap and Yelp, along with testing tools Jest and Enzyme, to fetch data, create powerful features, and ensure high code quality."            
                link="https://github.com/urmil255/AI-Assistant"
                github="https://github.com/urmil255/AI-Assistant"
              />
            </div>
            </div>
           

           
           
            {/* <div className="col-span-6 sm:col-span-12">
              <Project
                type="Website"
                title="Helix.ai"
                img={project3}
                link="https://github.com/urmil255/AI-Assistant"
                github="https://github.com/urmil255/AI-Assistant"
              />
            </div> */}

           
         
        </Layout>
      </main>
    </>
  );
};

export default projects;
