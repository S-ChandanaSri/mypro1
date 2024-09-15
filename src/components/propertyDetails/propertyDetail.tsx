import { svgs } from "@/constants/images";
import Image from "next/image";
import { strings } from "@/constants/strings";

export default function PropertyDetail() {
  const accomodates = [
    {
      icon: svgs.propertyAlltable,
      itemName: "All tables",
      quantity: 12,
    },
    {
      icon: svgs.propertyLounges,
      itemName: "In Lounges",
      quantity: 7,
    },
    {
      icon: svgs.propertyTotalCapactiy,
      itemName: "Maximum Total",
      quantity: 6,
    },
    {
      icon: svgs.propertySqft,
      itemName: "Sq ft.",
      quantity: 925,
    },
  ];
  const openingHours = [
    {
      days: "Mon-Fri",
      hours: "8:00-9:00",
    },
    {
      days: "Sat",
      hours: "8:00-9:00",
    },
    {
      days: "Sun",
      hours: "8:00-9:00",
    },
  ];
  const ammenities = [
    {
      icon: svgs.propertyAc,
      itemName: "AC",
    },
    {
      icon: svgs.propertyTv,
      itemName: "Tv",
    },
    {
      icon: svgs.propertyWideScreenTv,
      itemName: "Widescreen Tv",
    },
    {
      icon: svgs.propertySkyLight,
      itemName: "Skylight",
    },
    {
      icon: svgs.propertyWhiteBoards,
      itemName: "Whiteboards",
    },
    {
      icon: svgs.propertyEnsuiteKitchen,
      itemName: "Ensuite Kitchen",
    },
  ];
  return (
    <div className="flex flex-col gap-7 font-serif lg:w-[67rem]">
      <div className="flex flex-row justify-between px-6 py-2">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-1 text-md text-[#3D52A0]">
            London{" "}
            <div className="relative h-3 w-2">
              <Image
                src={svgs.propertyRightArrow}
                fill={true}
                alt="stars"
                className="object-cover"
              />
            </div>{" "}
            soho{" "}
            <div className="relative h-4 w-4">
              <Image
                src={svgs.propertyLocation}
                fill={true}
                alt="stars"
                className="object-cover"
              />
            </div>
            view on map
          </div>
          <div className="flex text-xl">21 Poland Street,#2</div>
          <div className="flex items-center gap-1 text-[#3D52A0]">
            <span className="text-xl">4.8</span>
            <div className="relative h-4 w-4">
              <Image
                src={svgs.propertyStar}
                fill={true}
                alt="stars"
                className="object-cover"
              />
            </div>
            <span className="text-md">83 Ratings</span>
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
          {accomodates?.map((item, index) => (
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
          {openingHours?.map((item, index) => (
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
          {ammenities?.map((item, index) => (
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
        <p className="text-neutral-700">
          Lorem ipsum dolor sit amet consectetur. Lacus et integer enim vitae
          odio sed. Aliquam volutpat neque accumsan tincidunt velit quam.
          Condimentum integer sed in scelerisque sit in quis et.
        </p>
      </div>
      <hr className="bg-neutral-950" />
    </div>
  );
}
