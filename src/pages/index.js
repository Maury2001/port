import Head from "next/head";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import Image from "next/image";
import profile_pic from "../../public/images/profile/profile.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import Footer from "@/components/Footer";
import Hire from "@/components/Hire";
import TransitionEffect from "@/components/TransitionEffect";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio | MeshackMakira</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <TransitionEffect/>
      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout className=" md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image src={profile_pic} alt="" className="w-full h-auto lg:hidden md:inline-block md:w-full" 
              priority
              sizes="(max-width:85px) 100vw, 
              (max-width:1200px) 50vw,
              50vw" />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full ">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                className="!text-5xl !text-left xl:!text-4xl lg:!text-center lg:!text-6xl md:!text-4xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs ">
              I&apos;m a skilled Entry-Level full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development. 
              
              </p>
              <div className="flex items-center self-start mt-2 gap-4 lg:self-center">
                <Link
                  href="/MeshackMakira.pdf"
                  className=" flex items-center bg-dark text-light p-3 px-6 rounded-lg hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark md:px-4 md:text-base"
                  target={"_blank"}
                  download={true}
                >
                 
                  Resume <LinkArrow className={"w-6 ml-1"} />
                </Link>
                {/* <Link
                  href=""
                  className=" flex items-center bg-light underline text-dark p-4 px-6 rounded-lg hover:bg-dark hover:text-light md:px-4 md:text-base"
                  target={"_blank"}
                >
                  {" "}
                  Contacts
                </Link> */}
              </div>
            </div>
          </div>
        </Layout>
        <Hire/>
      </main>
      
    </>
  );
}
