"use client";

import ImageCarousel from "@/components/propertyDetails/ImageCarousel";
import PropertiesList from "../../components/propertyDetails/propertiesList";
import PropertyDetail from "../../components/propertyDetails/propertyDetail";
import {
  PropertyListImages,
  PropertyDetailsData,
  PropertyList,
} from "@/constants/propertyDetailsArrays";

export default function PropertyDetails() {
  return (
    <div className="flex flex-col items-center pt-[92px] font-serif md:items-stretch md:pt-[72px] lg:flex lg:flex-row">
      <div>
        <div className="background">
          <ImageCarousel images={PropertyListImages} />
        </div>
        <PropertyDetail propertyDetails={PropertyDetailsData} />
      </div>
      <PropertiesList properties={PropertyList} />
    </div>
  );
}
