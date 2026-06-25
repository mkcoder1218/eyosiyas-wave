import React from "react";
import Image from "next/image";
import WomenUsingPhone from "@/public/womenUsingPhone.png";

const Aboutapp = () => {
  return (
    <div className="flex items-center justify-between w-screen h-221.25 ">
      {/* Image */}
      <div className="w-[90%] h-221.25 flex justify-center items-center -scale-x-100 p-12">
        <Image
          src={WomenUsingPhone}
          alt="Women Using Phone"
          className="w-screen h-221.25"
        />
      </div>
      {/* content */}
      <div className="flex flex-col text-[#1A5A45] space-y-5 px-40 py-20 w-full">
        <p className="font-bold text-xl">About the App</p>
        <h1 className="font-bold text-7xl">Wave Equb</h1>
        <div className="space-y-5 text-lg">
          <p>
            Wave Equb modernizes the traditional equb system, making it easier,
            clearer, and faster to use. Users can save money together in a
            structured and secure manner using mobile technology—without
            confusion or risk. Every contribution and payout is recorded,
            visible, and easy to track.
          </p>
          <p>
            With Wave Equb, users can effortlessly create or join Equb groups,
            set contribution amounts and schedules, and manage everything
            directly from their mobile device. The platform offers a fully
            cashless environment where all transactions are processed digitally,
            ensuring safety, accuracy, and convenience. Automated reminders and
            smart payment systems help users stay consistent with their
            contributions, minimizing delays or conflicts within the group.
          </p>
          <p>
            Beyond just digitizing Equb, Wave Equb enhances the entire saving
            experience by merging technology with community trust. It empowers
            individuals to build better financial habits, supports groups in
            achieving their goals more efficiently, and opens access to
            structured savings for those who may lack traditional financial
            services.
          </p>
          <p>
            By bridging tradition and technology, Wave Equb provides a smarter,
            safer, and more reliable way to save—anytime, anywhere.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutapp;
