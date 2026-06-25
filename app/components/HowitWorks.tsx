import React from "react";
import Image from "next/image";
import PhoneMock from "@/public/PhoneMock.png";
import world from "@/public/world.png";

const HowitWorks = () => {
  return (
    <div
      className="flex items-center justify-between  w-screen h-221.25 bg"
      style={{ backgroundImage: `url(${world.src})` }}
    >
      {/* image */}
      <div className="w-fill h-221.25 flex justify-center items-center">
        <Image src={PhoneMock} alt="Phone Mock" className="w-full h-221.25" />
      </div>
      {/*  */}
    </div>
  );
};

export default HowitWorks;
