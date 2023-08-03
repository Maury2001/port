import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import reactproject from "../../public/images/projects/portfolio-cover-image.jpg";
import electronic from "../../public/images/projects/electronic.jpg";
import hulu from "../../public/images/projects/hulu.jpg";
import park from "../../public/images/projects/parking.png";
import TransitionEffect from "@/components/TransitionEffect";
import { motion } from "framer-motion";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <motion.article
      className=" w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-xl 
     lg:flex-col lg:p-8 xs:rounded-2xl xs:p-4 hover:shadow-2xl "
      initial={{ y: 50 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      <Link
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
        href={link}
        target=" _blank"
      >
        <Image src={img} alt={title} className=" w-full h-auto" />
      </Link>
      <div className=" w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span></span>
        <Link
          href={link}
          target=" _blank"
          className=" hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className=" my-2 font-medium text-dark">{summary}</p>
        <div className=" mt-2 flex flex-row items-center gap-4">
          <Link href={link} target=" _blank" className="w-10 animate-bounce">
            <GithubIcon /> 
          </Link>
          <span className=" font-semibold text-base">Visit Project</span>
        </div>
      </div>
    </motion.article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Portfolio | Projects</title>
        <meta name="description" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text={"Weaving Web Wonders"}
            className=" !text-5xl mb-10 lg:!text-6xl sm:!text-5xl xs:!text-4xl"
          />
          <div className=" grid grid-cols-12 gap-24 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title={"Portfolio Website"}
                summary="A professional portfolio website using Next JS, Framer-motion, and Styled-components. It has smooth 
page transitions, cool background effects, unique design and it is mobile responsive.
"
                link={""}
                img={reactproject}
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title={"Electronics Repair Shop Management System-Django"}
                summary="The Electronic Repair Shop Management System is a software application designed to streamline and automate the various aspects of managing an electronic repair shop. This system aims to improve operational efficiency, customer service, and overall business performance by providing a centralized platform to handle repair requests, track repair progress, manage inventory, and generate reports."
                link={"https://github.com/Maury2001/finalProject.git"}
                img={electronic}
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title={"Hulu website Clone"}
                summary="The Hulu Website Clone Project is a web development initiative aimed at creating a replica of the popular video streaming platform, Hulu. The goal of this project is to closely emulate the essential features and user interface of the original Hulu website, providing users with a similar streaming experience. It is essential to note that this is a learning or personal project and not intended for commercial use."
                link={"https://github.com/Maury2001/hulu.git"}
                img={hulu}
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title={"Car Park Management System-Java"}
                summary="The Vehicle Parking System is a Java-based software application designed to manage and streamline the parking process in a parking lot or garage. The system aims to automate the parking operations, making it convenient for both the parking lot operators and the customers."
                link={"https://github.com/Maury2001/Car-Park-Project.git"}
                img={park}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
