import React from "react";
import Image from "next/image";
import Chapa from "@/public/logos/Chapa.png";
import CBEBirr from "@/public/logos/CBEbirr.png";
import TeleBirr from "@/public/logos/Telebirr.svg";

const LogoSection = () => {
  return (
    <div className="flex items-center justify-center gap-23 py-20 px-10 w-screen bg-white">
      <Image src={Chapa} alt="Chapa Logo" width={120} height={80} />
      <Image src={CBEBirr} alt="CBE Birr Logo" width={120} height={80} />
      <Image src={TeleBirr} alt="Tele Birr Logo" width={120} height={80} />
      <Image src={Chapa} alt="Chapa Logo" width={120} height={80} />
      <Image src={CBEBirr} alt="CBE Birr Logo" width={120} height={80} />
      <Image src={TeleBirr} alt="Tele Birr Logo" width={120} height={80} />
    </div>
  );
};

export default LogoSection;
