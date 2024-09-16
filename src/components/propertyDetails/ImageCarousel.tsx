"use client";
import React, { useState, useEffect, memo, useRef, useCallback } from "react";
import Image from "next/image";
import { ICarouselImages } from "@/constants/types";

const ImageCarousel: React.FC<ICarouselImages> = memo(({ images }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const handleScrollToCarouselImage = useCallback(
    (index: number) => {
      ref.current?.scrollTo({
        top: index * (ref.current.clientHeight / images.length),
      });
    },
    [ref, images.length],
  );

  const handleImageClick = (index: number) => {
    setSelectedIndex(index);
    handleScrollToCarouselImage(index);
  };

  const handleNextImage = useCallback(() => {
    const newIndex = (selectedIndex + 1) % images.length;
    setSelectedIndex(newIndex);
    handleScrollToCarouselImage(newIndex);
  }, [
    selectedIndex,
    setSelectedIndex,
    handleScrollToCarouselImage,
    images.length,
  ]);

  const handlePrevImage = useCallback(() => {
    const newIndex =
      selectedIndex === 0 ? images.length - 1 : selectedIndex - 1;
    setSelectedIndex(newIndex);
    handleScrollToCarouselImage(newIndex);
  }, [
    selectedIndex,
    setSelectedIndex,
    handleScrollToCarouselImage,
    images.length,
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextImage();
    }, 9000);

    return () => clearInterval(interval);
  }, [handleNextImage]);

  return (
    <div className="flex w-full flex-col-reverse items-center gap-6 lg:flex-row">
      <div
        ref={ref}
        className="hide-scrollbar flex h-max w-full flex-row justify-center gap-3 overflow-y-auto lg:h-[35rem] lg:w-1/4 lg:flex-col lg:justify-start"
      >
        {images.map((image: any, index: any) => (
          <button
            key={index}
            onClick={() => handleImageClick(index)}
            className={`relative min-h-32 min-w-52 rounded-lg border-2 2xl:min-h-40 ${
              index === selectedIndex
                ? "bg-secondaryWashed-800"
                : "border-transparent"
            }`}
          >
            <Image
              src={image.url}
              alt={image.alt}
              fill={true}
              className="rounded-lg object-cover"
            />
          </button>
        ))}
      </div>

      <div className="rounded-4 relative h-[25rem] w-full max-w-[40rem] lg:h-[35rem] lg:max-w-full">
        <Image
          src={images[selectedIndex].url}
          alt={images[selectedIndex].alt}
          fill={true}
          className="rounded-sm object-cover"
        />
        <button
          onClick={handlePrevImage}
          className="absolute left-0 top-1/2 -translate-y-1/2 rounded-r-md bg-neutral-800/90 px-4 py-3 text-2xl text-neutral-50 md:px-2 md:py-1"
        >
          &#8249;
        </button>
        <button
          onClick={handleNextImage}
          className="absolute right-0 top-1/2 -translate-y-1/2 rounded-l-md bg-neutral-800/90 px-4 py-3 text-2xl text-neutral-50 md:px-2 md:py-1"
        >
          &#8250;
        </button>
      </div>
    </div>
  );
});

ImageCarousel.displayName = "ImageCarousel";
export default ImageCarousel;
