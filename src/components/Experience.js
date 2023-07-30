import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null)
  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
     <LiIcon reference={ref}/>
      <motion.div className="" 
      initial={{y:50}}
      whileInView={{y:0}}
      transition={{duration:0.5, type:"spring"}}>
        <h3 className=" capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position} &nbsp;{" "}
          <a
            href={companyLink}
            target=" _blank"
            className="text-primary capitalize"
          >
            {company}
          </a>
        </h3>
        <span className=" capitalize font-medium text-dark/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className=" font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center end"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-6xl mb-32 w-full text-center md:text-5xl xs:text-4xl">
        Experience
      </h2>

      <div className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top md:w-[2px] md:left-[30px] xs:left-[20px] "
          ref={ref}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position={"Quality Controller"}
            company={"TIFA Research"}
            companyLink="https://www.tifaresearch.com/"
            time={"2022"}
            address={"Lavington, Nairobi"}
            work="Worked on a team responsible for reading blueprints and specifications. Monitoring operations to ensure that they meet organization
standards."
          />
         
        </ul>
      </div>
    </div>
  );
};

export default Experience;
