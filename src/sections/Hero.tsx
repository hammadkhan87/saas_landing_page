"use client";
import ArrowIcon from "@/assets/arrow-right.svg"
import cogImage from "@/assets/cog.png";
import Image from "next/image";
import cylinderImage from "@/assets/cylinder.png"
import noodleImage from "@/assets/noodle.png"
export const Hero = () => {
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
        <Image src={cogImage} alt="cog"  className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:right-0"/>
       <Image src={cylinderImage} height={200} width={200} alt="cylinder" className="hidden md:block -top-8 -left-32 md:absolute lg:right-0"/>
       <Image src={noodleImage} width={200}  alt="noodle image" className="hidden lg:block absolute top-[540px] left-[530px] rotate-[33deg]" />
       </div>
       </div>
      </div>
      </section>
  )
};
