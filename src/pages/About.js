import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import profile_pic from "../../public/images/profile/profilee.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const SpringValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    SpringValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [SpringValue, value]);

  return <span ref={ref}></span>;
};

const About = () => {
  return (
    <>
      <Head>
        <title>MyPortfolio | About</title>
      </Head>
      <TransitionEffect/>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text={"Passion Fuels Purpose!"}
            className="mb-16 !text-4xl lg:!text-5xl sm:!text-4xl xs:text-3xl sm:mb-8 "
          />
          <div className="grid grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-base font-bold uppercase text-dark/75">
                Biography
              </h2>
              <p className="font-medium">
<<<<<<< HEAD
                Hi, I&apos;m Meshack, a web developer and designer with a
                passion for creating beautiful, functional, and user-centered
                digital experiences. I
                am always looking for new and innovative ways to bring my
                clients&apos; visions to life.
=======
              {"Hi, I&apos;m Meshack, a web developer and designer with a
                passion for creating beautiful, functional, and user-centered
                digital experiences. I
                am always looking for new and innovative ways to bring my
                clients&apos; visions to life."}
                
>>>>>>> 805adbcf5fe460c65bd40d8fcd1cdd7a043bdbf4
              </p>
              <p className="font-medium my-6">
                  {"I am a fast learner and embrace new challenges with adaptability and curiosity. Detail-oriented and analytical, I take pride in producing clean and efficient code while continuously seeking to improve my skills and stay up-to-date with the latest industry trends. I have a solid foundation in programming languages, development methodologies, and problem-solving skills.
             "}
               </p>
              <p className="font-medium ">
<<<<<<< HEAD
                Whether I&apos;m working on a website or other digital
=======
                  {" Whether I&apos;m working on a website or other digital
>>>>>>> 805adbcf5fe460c65bd40d8fcd1cdd7a043bdbf4
                product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project. I thrive in collaborative environments and approach problem-solving with a positive attitude, always eager to contribute to the success of the team.
             "}
                </p>
            </div>

            <div className="col-span-3 relative h-max border-2 border-solid border-dark rounded-3xl bg-light p-8 xl:col-span-4 md:order-1 md:col-span-8">
              <div className="">
                <Image
                  src={profile_pic}
                  alt="something"
                  className="w-full h-auto rounded-3xl"
                />
              </div>
            </div>

            <div className="col-span-2 flex flex-col items-end justify-center xl:col-span-8 xl:flex-row xl:items-center md:order-3 ">
              <div className="flex flex-col items-end justify-center p-6 xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={4} />
                </span>

                <h2 className=" text-xl font-medium capitalize text-dark/75 xl:text-center md:text-lg sm:text-base">
                  Satisfied clients
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center p-6 xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={10} />
                </span>
                <h2 className=" text-xl font-medium capitalize text-dark/75 xl:text-center md:text-lg sm:text-base">
                  Projects completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center p-6 xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={1} />
                </span>
                <h2 className=" text-xl font-medium capitalize text-dark/75 xl:text-center md:text-lg sm:text-base">
                  Years of Experience{" "}
                </h2>
              </div>
            </div>
          </div>
        </Layout>
        <Skills />
        <Experience />
        <Education/>
      </main>
    </>
  );
};

export default About;
