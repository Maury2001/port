import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ school, time,  certificate }) => {
  const ref = useRef(null)
  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
     <LiIcon reference={ref}/>
      <motion.div className="" 
      initial={{y:50}}
      whileInView={{y:0}}
      transition={{duration:0.5, type:"spring"}}>
        <h3 className=" capitalize font-bold text-2xl text-left sm:text-xl xs:text-lg font-serif">
          {school} &nbsp;{" "}
          
        </h3>
        <span className=" capitalize font-semibold text-base text-dark/75 xs:text-sm text-primary">
          {time}
        </span>
        <p className=" font-medium w-full md:text-sm text-base">{certificate}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center end"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-6xl mb-32 w-full text-center md:text-5xl xs:text-4xl">
        Education
      </h2>

      <div className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top md:w-[2px] md:left-[30px] xs:left-[20px] "
          ref={ref}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            school={"The Technical University of Kenya"}
            time={"2019-Present"}
            certificate={"Bachelor's Degree In Information Technology (I.T)"}
          />
          <Details
            school={"Kanunga High School"}
            time={"2015-2018"}
            certificate={"Kenya Certificate Of Secondary Education (K.C.S.E)"}
          />
          <Details
            school={"LightHouse Grace Academy"}
            time={"2010-2018"}
            certificate={"Kenya Certificate of Primary Education (K.C.P.E)"}
          />
          
        </ul>
      </div>
    </div>
  );
};

export default Education;
