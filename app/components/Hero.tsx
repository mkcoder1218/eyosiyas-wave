import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import PhoneBack2 from "@/public/pb2.png";
import PhoneBack1 from "@/public/pb1.png";
import PhoneFront from "@/public/pfront.png";

const Hero = () => {
  return (
    <div className="h-209.5 flex flex-col justify-between items-center px-40 w-screen overflow-clip">
      <div className="flex flex-col items-center space-y-5 w-screen pt-20">
        <div className="flex flex-col items-center space-y-5">
          <h1 className="text-6xl font-black">
            Transforming Equb for the Digital Age
          </h1>
          <p className="text-[#1A5A45] text-lg font-semibold w-152 text-center">
            Save together, access funds easily, and manage your Equb anytime,
            anywhere with Wave.
          </p>
        </div>
        <button className="bg-[#1A5A45] px-5 py-3 rounded-xl text-white text-xl flex items-center space-x-2 gap-2">
          Get the App
          <div className="bg-white text-[#1A5A45] p-3 rounded-lg flex items-center justify-center">
            <FaArrowRight className="rotate-[135]" />
          </div>
        </button>
      </div>
      {/* the pictures */}
      <div className="w-screen h-221.25 flex justify-center items-center relative">
        <Image
          src={PhoneBack2}
          alt="Phone Back 2"
          className="absolute z-0 h-206.5 w-290.25 -bottom-80 left-40 "
        />
        <Image
          src={PhoneFront}
          alt="Phone Front"
          className="absolute z-1 h-198.75 w-98.25 -bottom-80"
        />
        <Image
          src={PhoneBack1}
          alt="Phone Back 1"
          className="absolute z-0 h-206.5 w-290.25 left-180 -bottom-80"
        />
      </div>
    </div>
  );
};

export default Hero;
