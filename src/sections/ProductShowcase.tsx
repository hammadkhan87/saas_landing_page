import productImage from "@/assets/product-image.png"
import Image from "next/image";
export const ProductShowcase = () => {
  return (
    <section className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-20 ">
      <div className="">
        <div className="flex justify-center">
        <div className="tag">
          Boost Your Productivity</div>
                  </div>

          <h2 className="mt-5 text-center text-3xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text">A more effective way to track  progress </h2>
          <p className=" mt-5 text-center text-[22px] leading-[30px] tracking-tight text-[#010D3E]">Effortlessly turn your ideas into fully functional, responsive, SaaS website in just  minutes with this template </p>
        <Image src={productImage} alt="Product Image" className=" mt-10"/>

      </div>
    </section>
  );
};
