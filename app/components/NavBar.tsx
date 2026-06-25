import React from "react";
import Image from "next/image";
import Logo from "@/public/Logo.png";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center pt-5 px-32 w-full">
      <Image src={Logo} alt="Logo" width={100} height={50} />
      <div className="flex space-x-4 font-black text-xl">
        <div>About</div>
        <div>Features</div>
        <div>How it Works</div>
        <div>Connect</div>
      </div>
      <button className="bg-[#1A5A45] p-5 rounded-xl text-white text-lg ">
        Download App
      </button>
    </div>
  );
};

export default NavBar;
