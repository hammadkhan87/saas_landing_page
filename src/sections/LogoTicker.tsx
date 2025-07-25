import acmeLogo from "@/assets/logo-acme.png"
import quantumLogo from "@/assets/logo-quantum.png"
import echoLogo from "@/assets/logo-echo.png"
import celestialLogo from "@/assets/logo-celestial.png"
import pulseLogo from "@/assets/logo-pulse.png"
import apexLogo from "@/assets/logo-apex.png"
import Image from "next/image"


export const LogoTicker = () => {
  return(
    <div className="py-8 md:py-12 bg-white">
   <div className="container">
    <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,black,transparent)]">
    <div className="flex gap-14 flex-none">
      <Image src={acmeLogo} alt="Acme Logo" className="logoticker"/>
      <Image src={quantumLogo} alt="Quantum Logo" className="logoticker"/>
      <Image src={echoLogo} alt="Echo Logo" className="logotiker"/>
      <Image src={celestialLogo} alt="Celestial Logo" className="logoticker"/>
      <Image src={pulseLogo} alt="Pulse Logo" className="logoticker"/>
      <Image src={apexLogo} alt="Apex Logo" className="logoticker"/>
      <Image src={acmeLogo} alt="Acme Logo" className="logoticker"/>

    </div>
    </div>

   </div>
    </div>
  );
};
