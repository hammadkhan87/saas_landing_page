"use client"; 
import ArrowRight from "@/assets/arrow-right.svg"
import starImage from "@/assets/star.png"
import springImage from "@/assets/spring.png"
import Image from "next/image";
import {motion,useScroll, useTransform} from "framer-motion";
import { use, useRef } from "react";
export const CallToAction = () => {
  const sectionRef = useRef(null);
  const {scrollYProgress} = useScroll({target:sectionRef ,
    offset:["start end", "end start"]});
  
const translateY = useTransform(scrollYProgress,[0,1],[150,-150]);
  return <section ref={sectionRef} className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
    <div className="container relative">
      <div className="section-heading">
      <h2 className="sectiontitle">Sign up for free today</h2>
      <p className="sectiondescription mt-5">Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts</p>
   <motion.img style={{translateY}} src={starImage.src} alt="star image" width={300} className="hidden md:block absolute md:-left-[180px] lg:-left-[20px] -top-[150px]"/>
   <motion.img style={{translateY}} src={springImage.src} alt="spring image" width={300} className="hidden md:block absolute -right-[100px] -bottom-[150px]"/>
   </div> 
    <div className="flex gap-2 mt-10 justify-center">
      <button className="btn btn-primary">Get for free</button>
      <button className="btn btn-text gap-1">
        <span>Learn more</span>
        <ArrowRight className="h-5 w-5"/>
        </button>
    </div>
    </div>
  </section>;
};
