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
    <div className="flex flex-col  h-[23rem]   px-6 md:w-[45rem] md:h-[35rem]  lg:w-[64rem]    lg:h-[26rem]   lg:flex-row   ">
      {/* Thumbnails */}
      <div className="hidden lg:flex w-52 h-[26rem] flex-col gap-5 mr-4  overflow-y-auto scrollbar-thin">
        {images.map((image: any, index: any) => (
          <button
            key={index}
            onClick={() => handleImageClick(index)}
            className={`border-2 relative   w-52 min-h-32 rounded-lg  ${
              index === selectedIndex ? "border-blue-500" : "border-transparent"
            }`}
          >
            <Image
              src={image.url}
              alt={image.alt}
              fill={true}
              className="object-cover rounded-lg"
            />
          </button>
        ))}
      </div>

      {/* Selected Image */}
      <div className="relative    w-[25rem] h-[19rem]   rounded-4 md:w-[45rem] md:h-[27rem] lg:h-[26rem]   lg:w-[50rem] ">
        <Image
          src={images[selectedIndex].url}
          alt={images[selectedIndex].alt}
          fill={true}
          // sizes="(min-width: 1024px) 207px, 124px"
          className="object-cover rounded-md"
        />
        <button
          onClick={handlePrevImage}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded-r-md"
        >
          &#8249;
        </button>
        <button
          onClick={handleNextImage}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded-l-md"
        >
          &#8250;
        </button>
      </div>

      {/* Mobile & Tablet Thumbnails */}
      <div className="w-[25rem] flex  gap-9 lg:hidden  md:w-[45rem]  md:gap-11  mt-4  scrollbar-thin ">
        {images.map((image: any, index: any) => (
          <button
            key={index}
            onClick={() => handleImageClick(index)}
            className={`border-2 relative w-28 md:w-52 h-24   rounded-lg ${
              index === selectedIndex
                ? "border-blue-500 "
                : "border-transparent"
            }`}
          >
            <Image
              src={image.url}
              alt={image.alt}
              fill={true}
              className="w-28 md:w-52 h-24 rounded-lg  object-cover "
            />
          </button>
        ))}
      </div>
    </div>
  );
}
