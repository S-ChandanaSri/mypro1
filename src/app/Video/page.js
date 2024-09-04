"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import buttonplay1 from "../_assets/images/buttonplay1.png";
import icon2 from "../_assets/images/Icon2.png";

function VideoPlayer({ src, title, subtitle }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="mb-4 h-[568px] w-[338px] border-white">
      <div className="grid-btn">
        <div className="relative h-[568px] w-[338px] pt-24">
          <video className="h-[568px] w-[316px] rounded-[20px]" ref={videoRef}>
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <button
            className="btn -translate-x-1/2 -translate-y-1/2 transform"
            onClick={handlePlay}
          >
            <p className="custo-font relative bottom-[15px] h-[24px] text-[18px] font-[600] leading-[24px] tracking-[-0.5px] text-white">
              {title}
            </p>
            <p className="custo-font relative bottom-[14px] h-[22px] text-[14px] font-[400] leading-[22px] text-white">
              {subtitle}
            </p>
            <div className="relative bottom-[66px] left-[190px] h-[58px] w-[58px] rounded-[19px] border-[2px] border-[white] bg-[#FFFFFF17]">
              <Image
                alt=""
                src={isPlaying ? icon2 : buttonplay1}
                className="relative left-[20px] top-[20px] rounded-[19px] bg-[#FFFFFF17]"
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;
