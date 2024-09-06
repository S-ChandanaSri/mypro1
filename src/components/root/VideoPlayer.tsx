"use client";
import React, { useRef, useEffect } from "react";
import Button from "../common/Button";
import { svgs } from "@/constants/images";

type VideoPlayerProps = {
  src: string;
  title: string;
  subtitle: string;
  isPlaying?: boolean;
};

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  title,
  subtitle,
  isPlaying,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (isPlaying) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
  }, [isPlaying]);

  return (
    <div className="relative mx-2 h-[60rem] overflow-hidden whitespace-nowrap rounded-3xl text-left sm:h-[40rem] xl:mx-6 xl:h-[50rem]">
      <video loop ref={videoRef} className="h-full w-full object-cover">
        <source src={src} type="video/mp4" />
      </video>
      <div className="absolute bottom-0 grid w-full grid-flow-col grid-cols-2 grid-rows-2 bg-gradient-to-t from-neutral-900 p-8">
        <span className="text-lg font-semibold text-neutral-50">{title}</span>
        <span className="text-sm text-neutral-300">{subtitle}</span>
        <Button
          className="row-span-2 ml-auto"
          iconSize={18}
          preIconNode={svgs.play}
          variant="icon"
          size="sm"
          onClick={() => videoRef.current?.play()}
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
