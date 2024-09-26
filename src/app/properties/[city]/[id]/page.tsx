"use client";

import ReservePlace from "@/components/propertyDetails/ReservePlace";
import ImageCarousel from "@/components/propertyDetails/ImageCarousel";
import PropertyDetail from "@/components/propertyDetails";
import {
  PropertyListImages,
  PropertyDetailsData,
} from "@/constants/propertyDetailsArrays";
import { NextPage } from "next";

interface PropertyPageProps {
  params: {
    city: string;
    id: string;
  };
}

const PropertyPage: NextPage<PropertyPageProps> = ({
  params,
}: PropertyPageProps) => {
  const { city, id } = params;

  return (
    <div className="top-gradient grid grid-cols-1 place-items-center gap-6 px-6 pt-[92px] font-serif sm:px-16 md:items-stretch md:pt-[72px] lg:grid-cols-[75%_25%]">
      <ImageCarousel images={PropertyListImages} />
      <ReservePlace />
      <PropertyDetail {...PropertyDetailsData} />
      {/* <PropertiesList properties={PropertyList} /> */}
    </div>
  );
};

export default PropertyPage;
