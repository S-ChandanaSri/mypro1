"use client";
import React, { useRef, useEffect, SetStateAction, useCallback } from "react";
import Button from "../../common/Button";
import { svgs } from "@/constants/images";
import { IVideoTestimonial } from "@/constants/types";

export interface VideoPlayerProps extends IVideoTestimonial {
  togglePlaying: () => void;
  isPlaying?: boolean;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videoPath,
  label,
  subText,
  togglePlaying,
  isPlaying,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleVideoState = useCallback(() => {
    if (videoRef.current?.paused) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
    togglePlaying();
  }, [videoRef, togglePlaying]);

  useEffect(() => {
    if (isPlaying) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
  }, [isPlaying]);

  return (
    // <div className="relative mx-2 h-[60rem] overflow-hidden whitespace-nowrap rounded-3xl text-left sm:h-[40rem] xl:mx-6 xl:h-[50rem]">
    //   <video muted loop ref={videoRef} className="h-full w-full object-cover">
    //     <source src={videoPath} type="video/mp4" />
    //   </video>
    //   <div className="absolute bottom-0 grid w-full grid-flow-col grid-cols-2 grid-rows-2 bg-gradient-to-t from-neutral-900 p-8">
    //     <span className="text-lg font-semibold text-neutral-50">{label}</span>
    //     <span className="text-sm text-neutral-300">{subText}</span>
    //     <Button
    //       className="row-span-2 ml-auto"
    //       iconSize={18}
    //       preIconNode={!isPlaying ? svgs.play : svgs.pause}
    //       variant="icon"
    //       size="sm"
    //       onClick={handleVideoState}
    //     />
    //   </div>
    // </div>
    <></>
  );
};

export default React.memo(VideoPlayer);
