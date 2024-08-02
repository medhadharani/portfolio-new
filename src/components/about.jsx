import aboutPic from "../assets/AboutPic.jpg"; 
import { about_me } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h1
            whileInView={{opacity: 1, y: 0}}
            initial={{opacity: 0, y: -100}}
            transition={{duration: 1}} 
            className="my-20 text-center text-4xl">
                About
            <span className="text-neutral-500"> Me</span>
        </motion.h1>
        <div className="flex flex-wrap">
            <motion.div 
                initial= {{x: -100, opacity: 0}}
                whileInView={{x: 0, opacity: 1}}
                transition={{duration: 1.5}}
                className="w-full lg:w-1/2 lg:p-8">
                <div className="flex items-center justify-center">
                    <img src={aboutPic} alt="about" className="rounded-2xl w-80 h-80 lg:w-96 lg:h-96" />
                </div>
            </motion.div>
            <motion.div 
                initial= {{x: 100, opacity: 0}}
                whileInView={{x: 0, opacity: 1}}
                transition={{duration: 1.5}}
                className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <p className="my-2 max-w-xl py-6 font-light tracking-tighter">{about_me}</p>
                    </div>
            </motion.div>
        </div>
    </div>
  )
}

export default About