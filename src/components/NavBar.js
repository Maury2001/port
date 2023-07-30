import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { GithubIcon, LinkedInIcon, PinterestIcon, TwitterIcon } from "./Icons";
import { motion } from "framer-motion";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[2px] bg-dark inline-block absolute left-0 -bottom-0 
                         group-hover:w-full transition-[width] ease duration-300 ${
                           router.asPath === href ? "w-full " : "w-0"
                         }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "" , toggle}) => {
    const router = useRouter();
    const handleClick =()=>{
        router.push(href)
    }
    return (
      <button href={href} className={`${className} relative group text-light my-3`} onClick={handleClick}>
        {title}
        <span
          className={`h-[2px] bg-dark inline-block absolute left-0 -bottom-0 
                           group-hover:w-full transition-[width] ease duration-300 ${
                             router.asPath === href ? "w-full " : "w-0"
                           }`}
        >
          &nbsp;
        </span>
      </button>
    );
  };

const NavBar = () => {
  const [isopen, setIsopen] = useState(false);

  const handleClick = () => {
    setIsopen(!isopen);
  };

  return (
    <header className=" w-full px-32 py-8 font-medium flex items-center justify-between relative z-10 lg:px-16 md:px-12 sm:px-8 ">
      <button
        className=" flex-col justify-center items-center hidden lg:flex"
        onClick={handleClick}
      >
        <span
          className={` bg-dark block transition-all duration-300 ease-in-out h-0.5 w-6 rounded-sm -translate-y-0.5 ${
            isopen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={` bg-dark block transition-all duration-300 ease-in-out h-0.5 w-6 rounded-sm my-0.5 ${
            isopen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={` bg-dark block transition-all duration-300 ease-in-out h-0.5 w-6 rounded-sm -translate-y-0.5 ${
            isopen ? "-rotate-45 -translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
      </button>

      <div className=" w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href="/" title="Home" className="mx-4" />
          <CustomLink href="/About" title="About" className="mx-4" />
          <CustomLink href="/projects" title="Projects" className="mx-4" />
        </nav>

        <nav className="flex items-center justify-center flex-wrap">
        <motion.a
          href="/"
          target={"_blank"}
          whileHover={{ y: -2 }}
          className="w-6 ml-6"
          whileTap={{ scale: 0.9 }}
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a
          href="/"
          target={"_blank"}
          whileHover={{ y: -2 }}
          className="w-6 ml-6"
          whileTap={{ scale: 0.9 }}
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href="/"
          target={"_blank"}
          whileHover={{ y: -2 }}
          className="w-6 ml-6"
          whileTap={{ scale: 0.9 }}
        >
          <PinterestIcon />
        </motion.a>
        <motion.a
          href="/"
          target={"_blank"}
          whileHover={{ y: -2 }}
          className="w-6 ml-6"
          whileTap={{ scale: 0.9 }}
        >
          <TwitterIcon />
        </motion.a>
      </nav>

      </div>


    {
        isopen? 
        <motion.div 
        initial={{scale:0, opacity:0, x: "-50%", y:"-50%"}}
        animate={{scale:1 , opacity:1}}
        className=" min-w-[70vw] flex flex-col justify-between items-center z-30 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 rounded-lg backdrop-blur-md py-32">
        <nav className=" flex flex-col justify-center">
          <CustomMobileLink href="/" title="Home" className="" toggle={handleClick} />
          <CustomMobileLink href="/About" title="About" className="" toggle={handleClick} />
          <CustomMobileLink href="/projects" title="Projects" className="" toggle={handleClick} />
        </nav>

        <nav className="flex items-center justify-center flex-wrap mt-2">
        <motion.a
          href="/"
          target={"_blank"}
          whileHover={{ y: -2 }}
          className="w-6 ml-6 sm:mx-1"
          whileTap={{ scale: 0.9 }}
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a
          href="/"
          target={"_blank"}
          whileHover={{ y: -2 }}
          className="w-6 ml-6 sm:mx-1"
          whileTap={{ scale: 0.9 }}
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href="/"
          target={"_blank"}
          whileHover={{ y: -2 }}
          className="w-6 ml-6 sm:mx-1"
          whileTap={{ scale: 0.9 }}
        >
          <PinterestIcon />
        </motion.a>
        <motion.a
          href="/"
          target={"_blank"}
          whileHover={{ y: -2 }}
          className="w-6 ml-6 sm:mx-1"
          whileTap={{ scale: 0.9 }}
        >
          <TwitterIcon />
        </motion.a>
      </nav>

      </motion.div>
        
        : null
    }
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
      
    </header>
  );
};

export default NavBar;
