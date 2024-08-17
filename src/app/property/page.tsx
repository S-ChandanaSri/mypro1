"use client";

import ImageCarousel from "@/components/ImageCarousel";
export default function PropertyDetails() {
  const images = [
    { url: "/images/int1.jpeg", alt: "Interior1" },
    { url: "/images/int2.jpeg", alt: "Interior2" },
    { url: "/images/int3.jpeg", alt: "Interior3" },
    { url: "/images/ext.jpeg", alt: "Exterior" },
  ];
  return (
    <div className="background ">
      <ImageCarousel images={images} />
    </div>
  );
}
