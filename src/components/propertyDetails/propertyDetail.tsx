import { svgs } from "@/constants/images";
import Image from "next/image";
import { strings } from "@/constants/strings";

export default function PropertyDetail({ propertyDetails }: any) {
  return (
    <div className="flex flex-col gap-7 font-serif lg:mt-5 lg:w-[67rem] xl:w-full">
      <div className="flex flex-row justify-between px-6 py-2">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-1 text-md text-[#3D52A0]">
            {propertyDetails?.city}
            <div className="relative h-3 w-2">
              <Image
                src={svgs.propertyRightArrow}
                fill={true}
                alt="stars"
                className="object-cover"
              />
            </div>{" "}
            {propertyDetails?.soho}
            <div className="relative h-4 w-4">
              <Image
                src={svgs.propertyLocation}
                fill={true}
                alt="stars"
                className="object-cover"
              />
            </div>
            {strings.propertyDetails.viewOnMap}
          </div>
          <div className="flex text-xl">{propertyDetails?.address}</div>
          <div className="flex items-center gap-1 text-[#3D52A0]">
            <span className="text-xl">{propertyDetails?.overallRating}</span>
            <div className="relative h-4 w-4">
              <Image
                src={svgs.propertyStar}
                fill={true}
                alt="stars"
                className="object-cover"
              />
            </div>
            <span className="text-md">
              {propertyDetails?.noOfRatings} {strings.propertyDetails.ratings}
            </span>
          </div>
        </div>

        <div className="relative h-6 w-6">
          <Image
            src={svgs.propertyLike}
            fill={true}
            alt="stars"
            className="object-cover"
          />
        </div>
      </div>

      <hr className="bg-neutral-950" />

      <div className="flex flex-col justify-between gap-5 px-6 text-xl md:flex-row md:gap-14">
        <div className="flex w-full flex-col gap-6">
          <p className="flex">{strings.propertyDetails.accomodates}</p>
          {propertyDetails.accomodates?.map((item: any, index: any) => (
            <div
              className="flex flex-row justify-between text-neutral-600"
              key={index}
            >
              <div className="flex flex-row gap-4">
                <div className="relative h-5 w-5">
                  <Image
                    src={item.icon}
                    fill={true}
                    alt="accomdates"
                    className="object-cover"
                  />
                </div>
                {item.itemName}
              </div>
              <p>{item.quantity}</p>
            </div>
          ))}
        </div>

        <div className="flex w-full flex-col gap-6">
          <p className="flex">{strings.propertyDetails.openingHours}</p>
          {propertyDetails.openingHours?.map((item: any, index: any) => (
            <div
              className="flex flex-row justify-between text-neutral-700"
              key={index}
            >
              <p>{item?.days}</p>
              <div>{item?.hours}</div>
            </div>
          ))}
        </div>
      </div>
      <hr className="bg-neutral-950" />
      <div className="flex flex-col gap-y-8 px-6 md:text-xl">
        <div>{strings.propertyDetails.ammenities}</div>
        <div className="grid grid-cols-3 grid-rows-2 gap-6">
          {propertyDetails.ammenities?.map((item: any, index: any) => (
            <div
              className="flex flex-row gap-1 text-nowrap text-neutral-700"
              key={index}
            >
              <div className="relative h-5 w-5">
                <Image
                  src={item.icon}
                  fill={true}
                  alt="accomdates"
                  className="object-cover"
                />
              </div>
              {item.itemName}
            </div>
          ))}
        </div>
      </div>
      <hr className="bg-neutral-950" />
      <div className="flex flex-col gap-4 px-6 text-xl">
        <p>{strings.propertyDetails.roomServices}</p>
        <p className="text-neutral-700">{propertyDetails?.roomServices}</p>
      </div>
      <hr className="bg-neutral-950" />
    </div>
  );
}
