import { propertySvgIcons } from "@/constants/images";
import Image from "next/image";
import { strings } from "@/constants/strings";
export default function PropertyDetail() {
  const accomodates = [
    {
      icon: propertySvgIcons.propertyAlltable,
      itemName: "All tables",
      quantity: 12,
    },
    {
      icon: propertySvgIcons.propertyLounges,
      itemName: "In Lounges",
      quantity: 7,
    },
    {
      icon: propertySvgIcons.propertyTotalCapactiy,
      itemName: "Maximum Total",
      quantity: 6,
    },
    {
      icon: propertySvgIcons.propertySqft,
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
      icon: propertySvgIcons.propertyAc,
      itemName: "AC",
    },
    {
      icon: propertySvgIcons.propertyTv,
      itemName: "Tv",
    },
    {
      icon: propertySvgIcons.propertyWideScreenTv,
      itemName: "Widescreen Tv",
    },
    {
      icon: propertySvgIcons.propertySkyLight,
      itemName: "Skylight",
    },
    {
      icon: propertySvgIcons.propertyWhiteBoards,
      itemName: "Whiteboards",
    },
    {
      icon: propertySvgIcons.propertyEnsuiteKitchen,
      itemName: "Ensuite Kitchen",
    },
  ];
  return (
    <div className="lg:w-[67rem] flex flex-col gap-7 font-serif ">
      <div className="flex flex-row justify-between  px-6    py-2">
        <div className="  flex flex-col gap-3">
          <div className="flex text-[#3D52A0] items-center gap-1 text-md">
            London{" "}
            <div className="relative w-2 h-3  ">
              <Image
                src={propertySvgIcons.propertyRightArrow}
                fill={true}
                alt="stars"
                className="object-cover"
              />
            </div>{" "}
            soho{" "}
            <div className="relative w-4 h-4  ">
              <Image
                src={propertySvgIcons.propertyLocation}
                fill={true}
                alt="stars"
                className="object-cover"
              />
            </div>
            view on map
          </div>
          <div className="flex text-xl">21 Poland Street,#2</div>
          <div className="flex items-center gap-1 text-[#3D52A0] ">
            <span className="text-xl">4.8</span>
            <div className="relative w-4 h-4 ">
              <Image
                src={propertySvgIcons.propertyStar}
                fill={true}
                alt="stars"
                className="object-cover"
              />
            </div>
            <span className="text-md">83 Ratings</span>
          </div>
        </div>

        <div className="relative w-6 h-6">
          <Image
            src={propertySvgIcons.propertyLike}
            fill={true}
            alt="stars"
            className="object-cover"
          />
        </div>
      </div>

      <hr className="bg-neutral-950" />

      <div className="px-6   flex md:flex-row flex-col justify-between    gap-5 md:gap-14   text-xl">
        <div className="flex flex-col  gap-6    w-full ">
          <p className="flex">{strings.propertyDetails.accomodates}</p>
          {accomodates?.map((item, index) => (
            <div
              className="flex flex-row  justify-between text-neutral-600"
              key={index}
            >
              <div className="flex flex-row gap-4">
                <div className="relative w-5 h-5 ">
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

        <div className="flex flex-col gap-6   w-full ">
          <p className="flex">{strings.propertyDetails.openingHours}</p>
          {openingHours?.map((item, index) => (
            <div
              className="flex  flex-row  justify-between text-neutral-700"
              key={index}
            >
              <p>{item?.days}</p>
              <div>{item?.hours}</div>
            </div>
          ))}
        </div>
      </div>
      <hr className="bg-neutral-950" />
      <div className=" px-6  flex flex-col gap-y-8   md:text-xl">
        <div>{strings.propertyDetails.ammenities}</div>
        <div className="grid grid-cols-3 grid-rows-2 gap-6">
          {ammenities?.map((item, index) => (
            <div
              className="flex flex-row gap-1 text-nowrap text-neutral-700"
              key={index}
            >
              <div className="relative w-5 h-5 ">
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
      <div className="flex flex-col  px-6      gap-4        text-xl">
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
