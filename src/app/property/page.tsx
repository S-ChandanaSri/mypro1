"use client";

import ImageCarousel from "@/components/ImageCarousel";
import { FaCalendar } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import PropertiesList from "./PropertiesList";
import PropertyDetail from "./propertyDetail";
export default function PropertyDetails() {
  const images = [
    { url: "/images/int1.jpeg", alt: "Interior1" },
    { url: "/images/int2.jpeg", alt: "Interior2" },
    { url: "/images/int3.jpeg", alt: "Interior3" },
    { url: "/images/ext.jpeg", alt: "Exterior" },
  ];

  const properties = [1, 2, 3];
  return (
    <div className=" flex flex-col font-poppins relative ">
      <div className="background">
        <ImageCarousel images={images} />
      </div>
      <PropertyDetail />
      <PropertiesList />
    </div>
  );
}
