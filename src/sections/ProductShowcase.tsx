"use client";
import productImage from "@/assets/product-image.png"
import Image from "next/image";
import pyramidImage from "@/assets/pyramid.png"
import tubeImage from "@/assets/tube.png"
import {motion, useScroll, useTransform} from "framer-motion";
import { use, useRef } from "react";
export const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const {scrollYProgress} =useScroll({
    target:sectionRef,
    offset:["start end", "end start"] 
  })
  const translateY = useTransform(scrollYProgress,[0,1],[150,-150]);
  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="">
        <div className="section-heading">
        <div className="flex justify-center">
        <div className="tag">
          Boost Your Productivity</div>
                  </div>

          <h2 className="mt-5 sectiontitle">A more effective way to track  progress </h2>
          <p className=" mt-5 sectiondescription">Effortlessly turn your ideas into fully functional, responsive, SaaS website in just  minutes with this template </p>
        </div>
        <div className="relative">
        <Image src={productImage} alt="Product Image" className="mt-10"/>
        <motion.img src={pyramidImage.src} height={250} width={250} alt="Pyramid Image" 
        className=" hidden md:block absolute -right-18 -top-10"
        style={{translateY,}} />
        <motion.img src={tubeImage.src} height={235} width={235} alt="Tube Image" 
        className="hidden md:block absolute -left-17 bottom-12" 
        style={{translateY}} 
        />
         </div>
      </div>
    </section>
  );
};
