import React from "react";
import waveBg from "@/public/wave.png";
import AppStore from "@/public/downloadAppstore.png";
import PlayStore from "@/public/DownloadGoogle.png";
import Image from "next/image";
import CtaHand from "@/public/ctaHand.png";
import ctaSmallBg from "@/public/ctaSmallBg.png";

const cta = () => {
  return (
    <div
      className="w-screen h-160 bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${waveBg.src})` }}
    >
      <div
        className="flex flex-col w-270 rounded-xl md:flex-row items-start justify-start gap-10 px-20 py-20 relative"
        style={{
          backgroundImage: `url(${ctaSmallBg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-140 flex flex-col gap-5 text-white">
          <h1 className="text-4xl font-bold">Download the Wave Equib Now</h1>
          <p>
            Discover a smarter way to save together. Scan to join your Equb,
            manage contributions, and enjoy secure, transparent group savings.
          </p>
          <div>
            <div className="flex gap-5 py-5">
              {/* downloadbts */}
              <Image src={PlayStore} alt="Play Store" width={144} height={64} />
              <Image src={AppStore} alt="App Store" width={144} height={64} />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center absolute -right-70 bottom-9 h-full w-full">
          <Image
            src={CtaHand}
            alt="CTA Hand"
            width={320}
            height={320}
            className="aboslute"
          />
        </div>
      </div>
    </div>
  );
};

export default cta;
