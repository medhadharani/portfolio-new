import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs, FaBootstrap, FaHtml5, FaCss3, FaSass } from "react-icons/fa";
import { SiMongodb, SiStrapi } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { RiJavascriptFill } from "react-icons/ri";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h1 
                whileInView={{opacity: 1, y: 0}}
                initial={{opacity: 0,y: -100}}
                transition={{duration: 1.5}}
                className="my-20 text-center text-4xl">
                    Technologies
            </motion.h1>
            <div className="flex flex-col items-center">
                <motion.div 
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity: 0, x: -100}}
                    transition={{duration: 1.5}}
                    className="flex flex-wrap justify-center w-full max-w-screen-lg gap-4 sm:gap-4 md:gap-6 lg:gap-4">
                    <motion.div
                        variants={iconVariants(2.5)}
                        initial="initial"
                        animate="animate"
                        className="flex items-center justify-center rounded-2xl border-4 border-neutral-800 p-4">
                        <RiReactjsLine className="text-7xl text-cyan-400" />
                    </motion.div>
                    <motion.div
                        variants={iconVariants(3)}
                        initial="initial"
                        animate="animate"
                        className="flex items-center justify-center rounded-2xl border-4 border-neutral-800 p-4">
                        <FaNodeJs className="text-7xl text-green-500" />
                    </motion.div>
                    <motion.div
                        variants={iconVariants(5)}
                        initial="initial"
                        animate="animate"
                        className="flex items-center justify-center rounded-2xl border-4 border-neutral-800 p-4">
                        <SiMongodb className="text-7xl text-green-500" />
                    </motion.div>
                    <motion.div
                        variants={iconVariants(6)}
                        initial="initial"
                        animate="animate"
                        className="flex items-center justify-center rounded-2xl border-4 border-neutral-800 p-4">
                        <FaBootstrap className="text-7xl text-purple-900" />
                    </motion.div>
                    <motion.div
                        variants={iconVariants(4)}
                        initial="initial"
                        animate="animate"
                        className="flex items-center justify-center rounded-2xl border-4 border-neutral-800 p-4">
                        <SiStrapi className="text-7xl text-violet-700" />
                    </motion.div>
                </motion.div>
                <motion.div 
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity: 0, x: -100}}
                    transition={{duration: 1.5}}
                    className="flex flex-wrap justify-center w-full max-w-screen-lg gap-4 mt-4 sm:gap-4 md:gap-6 lg:gap-4">
                    <motion.div
                        variants={iconVariants(2.5)}
                        initial="initial"
                        animate="animate"
                        className="flex items-center justify-center rounded-2xl border-4 border-neutral-800 p-4">
                        <FaHtml5 className="text-7xl text-red-600" />
                    </motion.div>
                    <motion.div
                        variants={iconVariants(3)}
                        initial="initial"
                        animate="animate"
                        className="flex items-center justify-center rounded-2xl border-4 border-neutral-800 p-4">
                        <FaCss3 className="text-7xl text-blue-700" />
                    </motion.div>
                    <motion.div
                        variants={iconVariants(5)}
                        initial="initial"
                        animate="animate"
                        className="flex items-center justify-center rounded-2xl border-4 border-neutral-800 p-4">
                        <FaSass className="text-7xl text-pink-600" />
                    </motion.div>
                    <motion.div
                        variants={iconVariants(6)}
                        initial="initial"
                        animate="animate"
                        className="flex items-center justify-center rounded-2xl border-4 border-neutral-800 p-4">
                        <GrMysql className="text-7xl text-sky-800" />
                    </motion.div>
                    <motion.div
                        variants={iconVariants(4)}
                        initial="initial"
                        animate="animate"
                        className="flex items-center justify-center rounded-2xl border-4 border-neutral-800 p-4">
                        <RiJavascriptFill className="text-7xl text-amber-400" />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default Technologies;
