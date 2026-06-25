import React from "react";
import Image from "next/image";
import GuyusingPhone from "@/public/guyUsingphone.png";
import ImagePhone from "@/public/imagePhone.png";
import womenUsingPhone from "@/public/womenUsingPhone.png";

import { IoGridOutline } from "react-icons/io5";
import { FaDollarSign } from "react-icons/fa";
import { FaDivide } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";

const WhyChoose = () => {
  return (
    <div className="felx flex-col px-24 w-screen py-20">
      <h1 className="text-5xl font-bold text-[#1A5A45]">
        Why Choose Wave Equib
      </h1>
      <div className="flex justify-center gap-10 px-40 py-10 w-screen">
        <div className="flex flex-col items-center justify-start gap-5 px-30 py-20 w-180 h-180 bg-linear-to-b from-[rgba(133,224,64,1)] to-[rgba(26,90,69,1)] relative overflow-clip rounded-4xl">
          <h2 className="text-[#1A5A45] text-2xl">YOU ONLY NEED ONE APP</h2>
          <h1 className="text-white text-5xl font-bold text-center">
            Save smarter with a trusted digital Equb.
          </h1>
          <Image
            src={GuyusingPhone}
            alt="Guy using phone"
            className="w-full h-auto absolute -bottom-60 left-0 right-0"
          />
        </div>
        <div className="flex flex-col items-center justify-start gap-5 px-30 py-20 w-180 h-180 bg-linear-to-t from-[rgba(133,224,64,1)] to-[rgba(26,90,69,1)] relative overflow-clip rounded-4xl">
          <h2 className="text-[#85E040] text-2xl">Simple Control</h2>
          <h1 className="text-white text-5xl font-bold text-center">
            Easily manage your Equb with reliability.
          </h1>
          <Image
            src={ImagePhone}
            alt="Guy using phone"
            className="w-[80%] h-auto absolute -bottom-180 left-20 right-0"
          />
        </div>
      </div>
      <div className="flex gap-10 px-40 w-full border rounded-4xl">
        <div className="flex flex-col items-start justify-between py-12">
          <div className="flex gap-5 text-[#1A5A45] text-4xl">
            <FaDollarSign />
            <IoGridOutline />
            <FaDivide />
            <FaArrowTrendUp />
          </div>
          <div>
            <h1 className="text-5xl text-[#1a5a45] font-bold">
              Save Anytime,Anywhere
            </h1>
            <p className="text-4xl font-normal">
              Stay connected to your Equb wherever you are, without limits.
            </p>
          </div>
        </div>
        {/* Image right */}
        <div className=" h-115 relative overflow-clip rounded-4xl">
          <Image
            src={womenUsingPhone}
            alt="Women using phone"
            className="h-auto  w-340 -bottom-130 left-0 right-0"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
