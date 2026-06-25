import React from "react";
import Image from "next/image";
import Logo from "@/public/logoWhite.png";
import AppStore from "@/public/downloadAppstore.png";
import PlayStore from "@/public/DownloadGoogle.png";
import { FaArrowRight } from "react-icons/fa";

const footer = () => {
  return (
    <div className="h-144 w-screen bg-[#1A1A19] flex flex-col justify-center items-center py-12 text-white">
      <div className="flex justify-between items-center px-40 py-10 w-full">
        <div>
          {/* Logo */}
          <Image src={Logo} alt="Logo" width={240} height={100} />
          <h1 className=" w-105 text-base font-normal py-5">
            Discover a smarter way to save together. Scan to join your Equb,
            manage contributions, and enjoy secure, transparent group savings.
          </h1>
          <div className="flex gap-5 py-5">
            {/* downloadbts */}
            <Image src={PlayStore} alt="Play Store" width={144} height={64} />
            <Image src={AppStore} alt="App Store" width={144} height={64} />
          </div>
        </div>
        <div className="flex flex-col gap-20 text-xl">
          <div className="flex flex-col gap-2">
            <h1>Menu</h1>
            <div className="flex gap-5">
              <div>Home</div>
              <div>About</div>
              <div>How it Works</div>
              <div>Features</div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h1>Socials</h1>
            <div className="flex gap-5">
              <div>Telegram</div>
              <div>Instagram</div>
              <div>Tiktok</div>
              <div>Facebook</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end justify-end">
          <h1 className="text-lg text-gray-300">Contact Info</h1>
          <div className="flex flex-col items-end justify-end gap-2 py-5">
            <div>+251 912 345 678</div>
            <div>info@tilaequb.com</div>
            <div>Addis Ababa, Ethiopai</div>
          </div>
          <button className="bg-[#F9FFE3] px-3 py-2 rounded-xl text-[#1a5a45] flex items-center space-x-2 gap-2">
            Get the App
            <div className="bg-[#1A5A45] p-2 rounded-lg flex items-center justify-center">
              <FaArrowRight className="rotate-[135] text-white" />
            </div>
          </button>
        </div>
      </div>
      <div className="w-full flex items-start justify-start px-40  ">
        © 2026 Wave Equb. All rights reserved.
      </div>
    </div>
  );
};

export default footer;
