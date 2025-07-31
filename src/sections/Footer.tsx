import logo from "@/assets/logosaas.png"
import Image from "next/image";
import socialX from "@/assets/social-x.svg"
import socialInsta from "@/assets/social-insta.svg"
import socialLinkedind from "@/assets/social-linkedin.svg"
import socialPin  from "@/assets/social-pin.svg"
import socialYoutube from "@/assets/social-youtube.svg"
export const Footer = () => {
  return <footer>
      <div className="container">
       <Image src={logo} alt="logo" height={40} />
       <nav>
        <a href="#">About</a>
        <a href="#">Features</a>
        <a href="#">Customer</a>
        <a href="#">pricing</a>
        <a href="#">Help</a>
        <a href="#">Careers</a>
       </nav>
      </div>
  </footer>;
};
