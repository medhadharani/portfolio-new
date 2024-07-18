import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { SiStrapi } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { RiJavascriptFill } from "react-icons/ri";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <h1 className="my-20 text-center text-4xl">
            Technologies
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNodeJs className="text-7xl text-green-500"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb className="text-7xl text-green-500"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaBootstrap className="text-7xl text-purple-900"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiStrapi className="text-7xl text-violet-700"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaHtml5 className="text-7xl text-red-600"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaCss3 className="text-7xl text-blue-700"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaSass className="text-7xl text-pink-600"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <GrMysql className="text-7xl text-sky-800"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiJavascriptFill className="text-7xl text-amber-400"/>
            </div>
        </div>
    </div>
  )
}

export default Technologies