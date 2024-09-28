import { svgs } from "@/constants/images";
import Image from "next/image";
import { strings } from "@/constants/strings";
import { IPropertyDetails } from "@/constants/types";
import AddressIndex from "./AddressIndex";
import Button from "../common/Button";
import Accomodates from "./Service/Accomodates";
import OpenHours from "./Service/OpenHours";
import Amenity from "./Service/Amenity";

const PropertyDetail: React.FC<IPropertyDetails> = ({
  location,
  address,
  overallRating,
  noOfRatings,
  roomServices,
  accomodates,
  openingHours,
  ammenities,
}) => {
  return (
    <div className="relative flex flex-col gap-7 p-2 sm:p-6 lg:mt-5">
      <Image
        width={36}
        height={36}
        src={svgs.propertyLike}
        alt="stars"
        className="absolute right-0 cursor-pointer transition-transform duration-100 hover:scale-105"
      />
      <div className="flex flex-col gap-3">
        <ul className="flex">
          {location.map((location: string, idx: number) => (
            <AddressIndex key={idx} label={location} />
          ))}
          <Button
            preIconNode={svgs.propertyLocation}
            variant="link"
            iconSize={14}
            className="w-max p-0 text-md text-secondary-800"
          >
            {strings.propertyDetails.viewOnMap}
          </Button>
        </ul>
        <h2 className="text-lg sm:text-xl">{address}</h2>
        <div className="flex items-center gap-3 font-medium">
          <span className="text-lg text-secondaryWashed-800 sm:text-xl">
            {overallRating}
          </span>
          <Image src={svgs.propertyStar} width={18} height={18} alt="stars" />
          <span className="mt-1 text-md">
            {noOfRatings} {strings.propertyDetails.ratings}
          </span>
        </div>
      </div>

      <hr className="bg-neutral-950" />
      <div className="space-y-7">
        <div className="flex flex-col justify-between gap-14 py-7 md:flex-row">
          <Accomodates accomodates={accomodates} />
          <hr className="bg-neutral-950 md:hidden" />
          <OpenHours openingHours={openingHours} />
        </div>
        <hr className="bg-neutral-950" />
        <Amenity amenities={ammenities} />
        <hr className="bg-neutral-950" />
        <div className="flex flex-col gap-6 py-7 text-lg sm:text-xl">
          <p>{strings.propertyDetails.roomServices}</p>
          <p className="text-neutral-950/70">{roomServices}</p>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
