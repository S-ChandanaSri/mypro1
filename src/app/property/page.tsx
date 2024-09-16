"use client";

import ImageCarousel from "@/components/propertyDetails/ImageCarousel";
import PropertiesList from "../../components/propertyDetails/propertiesList";
import PropertyDetail from "../../components/propertyDetails/propertyDetail";
import { propertyDetailsImages } from "@/constants/images";
import PropertiesListDesktop from "@/components/propertyDetails/propertiesListDesktop";

export default function PropertyDetails() {
  const images = [
    { url: propertyDetailsImages.propertyExterior, alt: "Interior1" },
    { url: propertyDetailsImages.propertyInterior1, alt: "Interior2" },
    { url: propertyDetailsImages.propertyInterior2, alt: "Interior3" },
    { url: propertyDetailsImages.propertyInterior3, alt: "Exterior" },
  ];

  const properties = [1, 2, 3];
  return (
    <div className="flex flex-col items-center pt-[92px] font-serif md:items-stretch md:pt-[72px]">
      <div className="lg:flex lg:flex-row">
        <div>
          <div className="background">
            <ImageCarousel images={images} />
          </div>
          <PropertyDetail />
        </div>
        <PropertiesListDesktop />
      </div>
      <PropertiesList />
    </div>
  );
}
