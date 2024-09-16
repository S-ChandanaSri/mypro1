"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
export default function ImageCarousel({ images }: any) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Slideshow effect
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 9000); // Change the image every 2 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [images.length]);

  const handleImageClick = (index: any) => {
    setSelectedIndex(index);
  };

  const handleNextImage = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  return (
    <div className="flex h-[23rem] flex-col items-center pt-8 md:h-[35rem] lg:h-[26rem] lg:flex-row lg:px-6 2xl:h-full 2xl:w-full 2xl:px-20">
      {/* Thumbnails */}
      <div className="scrollbar-thin mr-5 hidden h-[26rem] min-w-52 flex-col gap-5 overflow-y-auto lg:flex 2xl:mr-10 2xl:h-[32rem] 2xl:min-w-80">
        {images.map((image: any, index: any) => (
          <button
            key={index}
            onClick={() => handleImageClick(index)}
            className={`min-w-50 relative min-h-32 rounded-lg border-2 2xl:min-h-40 ${
              index === selectedIndex ? "border-blue-500" : "border-transparent"
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

      {/* Selected Image */}
      <div className="rounded-4 relative h-[19rem] w-[25rem] md:h-[27rem] md:w-[45rem] lg:h-[26rem] lg:w-[50rem] 2xl:h-[34rem] 2xl:w-full">
        <Image
          src={images[selectedIndex].url}
          alt={images[selectedIndex].alt}
          fill={true}
          // sizes="(min-width: 1024px) 207px, 124px"
          className="rounded-md object-cover"
        />
        <button
          onClick={handlePrevImage}
          className="absolute left-0 top-1/2 -translate-y-1/2 transform rounded-r-md bg-neutral-800/90 px-2 py-1 text-neutral-50"
        >
          &#8249;
        </button>
        <button
          onClick={handleNextImage}
          className="absolute right-0 top-1/2 -translate-y-1/2 transform rounded-l-md bg-neutral-800/90 px-2 py-1 text-neutral-50"
        >
          &#8250;
        </button>
      </div>

      {/* Mobile & Tablet Thumbnails */}
      <div className="scrollbar-thin mt-4 flex w-[25rem] gap-9 md:w-[45rem] md:gap-11 lg:hidden">
        {images.map((image: any, index: any) => (
          <button
            key={index}
            onClick={() => handleImageClick(index)}
            className={`relative h-24 w-28 rounded-lg border-2 md:w-52 ${
              index === selectedIndex ? "border-blue-500" : "border-transparent"
            }`}
          >
            <Image
              src={image.url}
              alt={image.alt}
              fill={true}
              className="h-24 w-28 rounded-lg object-cover md:w-52"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
