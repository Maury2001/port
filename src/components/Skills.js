import React from 'react'
import {motion} from 'framer-motion'


const Skill = ({name, x,y}) =>{
    return(
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer
         lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:text-dark xs:font-bold ' 
        whileHover={{scale:1.05}}
        initial={{x:0,y:0}}
        whileInView={{ x:x, y:y}}
        transition={{duration:1.5}}
        viewport={{once: true}}>
         {name}
         
        </motion.div>

    )

}

const Skills = () => {
  return (
    <>
        <h2 className=' font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32'> Skills</h2>
        <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight lg:h0[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightlg md:bg-circularLightMd sm:bg-circularLightSm'>
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute
         lg:p-6 md:p-4 xs:text-xs xs:p-2 ' 
        whileHover={{scale:1.05}}
        >
         Web
         
        </motion.div>
        <Skill name="CSS" x={"10vw"} y={"-7vw"}/>
        <Skill name="HTML" x={"10vw"} y={"2vw"}/>
        <Skill name="JavaScript" x={"20vw"} y={"4vw"}/>
        <Skill name="REACT JS" x={"0vw"} y={"12vw"}/>
        <Skill name="NEXT JS" x={"-20vw"} y={"-15vw"}/>
        <Skill name="FIGMA" x={"15vw"} y={"-12vw"}/>
        <Skill name="WEB DESIGN" x={"32vw"} y={"-5vw"}/>
        <Skill name="TAILWIND" x={"-20vw"} y={"-20vw"}/>
        <Skill name="bOOTSTRAP" x={"-25vw"} y={"18vw"}/>
        <Skill name="DJANGO" x={"-13vw"} y={"0vw"}/>
        <Skill name="PYTHON" x={"-15vw"} y={"-15vw"}/>
        </div>
    </>
  )
}

export default Skills
