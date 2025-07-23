import productImage from "@/assets/product-image.png"
import Image from "next/image";
export const ProductShowcase = () => {
  return (
    <section className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-20 ">
      <div className="container">
        <div className="tag">
          Boost Your Productivity
          <h1>A more effective way to track  progress </h1>
          <p>Effortlessly turn your ideas into fully functional, responsive, SaaS website in just  minutes with this template </p>
        <Image src={productImage} alt="Product Image" className=""/>
        </div>

      </div>
    </section>
  );
};
