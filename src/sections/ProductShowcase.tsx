import productImage from "@/assets/product-image.png"
import Image from "next/image";
import pyramidImage from "@/assets/pyramid.png"
import tubeImage from "@/assets/tube.png"
export const ProductShowcase = () => {
  return (
    <section className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip">
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
        <Image src={pyramidImage} height={250} width={250} alt="Pyramid Image" className=" hidden md:block absolute -right-18 -top-10" />
        <Image src={tubeImage} height={235} alt="Tube Image" className="hidden md:block absolute -left-17 bottom-12" />
         </div>
      </div>
    </section>
  );
};
