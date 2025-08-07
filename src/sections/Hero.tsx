"use client";
import ArrowIcon from "@/assets/arrow-right.svg"
import cogImage from "@/assets/cog.png";
import Image from "next/image";
import cylinderImage from "@/assets/cylinder.png"
import noodleImage from "@/assets/noodle.png"
import {motion, useScroll, useTransform,useMotionValueEvent} from "framer-motion";
import { useRef } from "react";
export const Hero = () => {

  const heroref = useRef(null)

  const {scrollYProgress} = useScroll({
    target:heroref,
    offset:["start end", "end start"]
  });
  const  translateY = useTransform(scrollYProgress,[0,1],[150,-150])

// useMotionValueEvent(translateY, "change", (latestValue) => console.log(latestValue));

  return(
    <section className="items-center px-5 pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip">
      <div className="px-20">
        <div className="md:flex items-center">

        
       <div className="md:w-[478px]">
        <div className="tag">
         Version 2.0 is here
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">Pathway to productivity</h1>
        <p className="text-xl text-[#010D3E] tracking-tight mt-6">Celebrate the joy of accomplishment with an app designed to
           track your progress, motivate your efforts, and celebrate your successes.</p>
           <div className="flex gap-1 items-center mt-[30px]">
            <button className="btn btn-primary">Get for free</button>
            <button className="btn btn-text gap-1">
              <span>Learn more</span>
              <ArrowIcon className="h-5 w-5"/>
              </button>
              </div>
       </div>
       <div className="mt-20 md:mt-0 md:h-[648px] md:ml-20 md:flex-1 relative">
        <motion.img src={cogImage.src} alt="cog" 
         className="md:absolute md:h-full md:w-auto md:max-w-none lg:right-0 md:left-12"
          animate={{translateY:[-30,30],}}
          transition={{repeat: Infinity, repeatType:'mirror',duration:3, ease: "easeInOut"}}
         
         />
       <motion.img src={cylinderImage.src} height={200} width={200} alt="cylinder" 
       className="hidden md:block -top-30 -left-15 md:absolute lg:right-0"
       style={{translateY:translateY}}
       />
       <motion.img src={noodleImage.src} width={200} 
        alt="noodle image"
         className="hidden lg:block absolute top-[410px] left-[590px]"
          style={{
            rotate:30,
            translateY:translateY
          }}

         />
       </div>
       </div>
      </div>
      </section>
  )
};
