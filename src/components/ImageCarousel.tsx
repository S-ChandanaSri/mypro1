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
    <div className="flex flex-col lg:justify-between  h-[363px] lg:ml-[47px] ml-[15px] md:ml-[22px] md:w-[720px] md:h-[556px]  lg:w-[1025px]    lg:h-[421px]   lg:flex-row   ">
      {/* Thumbnails */}
      <div className="hidden lg:flex lg:min-w-[207px] lg:max-h-[416px] flex-col gap-[22px]   overflow-y-auto scrollbar-thin">
        {images.map((image: any, index: any) => (
          <button
            key={index}
            onClick={() => handleImageClick(index)}
            className={`border-2 relative   min-w-[207px] min-h-[124px] rounded-[10px]  ${
              index === selectedIndex ? "border-blue-500" : "border-transparent"
            }`}
          >
            <Image
              src={image.url}
              alt={image.alt}
              fill={true}
              //   sizes="(min-width: 1024px) 207px, 124px"
              className=" w-full h-full object-cover rounded-md"
              //   style={{ objectFit: "contain" }}
            />
          </button>
        ))}
      </div>

      {/* Selected Image */}
      <div className="relative    w-[400px] h-[300px]  rounded-[10px] md:w-[720px] md:h-[256px]   lg:w-[797px] lg:h-[421px] lg:ml-4 flex-1  mt-4 lg:mt-0">
        <Image
          src={images[selectedIndex].url}
          alt={images[selectedIndex].alt}
          fill={true}
          // sizes="(min-width: 1024px) 207px, 124px"
          className="w-full h-full object-cover rounded-md "
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
      <div className="w-[400px] flex h-[100px] gap-[36px] lg:hidden  md:w-[713px] md:h-[124px] md:gap-[46px]  mt-4  scrollbar-thin ">
        {images.map((image: any, index: any) => (
          <button
            key={index}
            onClick={() => handleImageClick(index)}
            className={`border-2 relative w-[107px] md:w-[207px] h-[90px]   rounded-[10px] ${
              index === selectedIndex
                ? "border-blue-500 "
                : "border-transparent"
            }`}
          >
            <Image
              src={image.url}
              alt={image.alt}
              fill={true}
              className="w-[107px] md:w-[207px] h-[90px] rounded-[10px]  object-cover "
            />
          </button>
        ))}
      </div>
    </div>
  );
}
