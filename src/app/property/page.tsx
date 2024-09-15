"use client";

import ImageCarousel from "@/components/propertyDetails/ImageCarousel";
import PropertiesList from "../../components/propertyDetails/propertiesList";
import PropertyDetail from "../../components/propertyDetails/propertyDetail";
import { propertyDetailsImages } from "@/constants/images";

export default function PropertyDetails() {
  const images = [
    { url: propertyDetailsImages.propertyExterior, alt: "Interior1" },
    { url: propertyDetailsImages.propertyInterior1, alt: "Interior2" },
    { url: propertyDetailsImages.propertyInterior2, alt: "Interior3" },
    { url: propertyDetailsImages.propertyInterior3, alt: "Exterior" },
  ];

  const properties = [1, 2, 3];
  return (
    <div className="relative flex flex-col font-serif">
      <div className="background">
        <ImageCarousel images={images} />
      </div>
      <PropertyDetail />
      <PropertiesList />
    </div>
  );
}
