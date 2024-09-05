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
    <div className="max-w-[481px] max-h-[1317px] md:max-w-[765px] md:h-[873px] lg:max-w-[1072px] lg:h-auto flex flex-col gap-[27px] font-[poppins]">
      <div className="flex flex-row justify-between w-full lg:p-0 lg:pl-[47px] h-[118px] lg:min-h-[121px] px-[23px] py-[0px]">
        <div className="lg:w-[1011px] lg:min-h-[121px] md:w-[765px] md:min-h-[118px] flex flex-col justify-between ">
          <div className="flex text-[#3D52A0] items-center gap-[2px] text-md">
            London{" "}
            <div className="relative w-[9px] h-[11px]  ">
              <Image
                src={propertySvgIcons.propertyRightArrow}
                fill={true}
                alt="stars"
                className="object-cover"
              />
            </div>{" "}
            soho{" "}
            <div className="relative w-[13.5px] h-[15.12px]  ">
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
          <div className="flex items-center gap-[4px] text-[#3D52A0] ">
            <span className="text-xl">4.8</span>
            <div className="relative w-[17.21px] h-[16.47px] ">
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
        <div className="relative w-[25px] h-[25px] mx-1 ">
          <Image
            src={propertySvgIcons.propertyLike}
            fill={true}
            alt="stars"
            className="object-cover"
          />
        </div>
      </div>
      <hr className="bg-[#000000]" />
      <div className="px-[25px] md:px-0  flex md:flex-row flex-col justify-between max-w-[481px] max-h-[490px] lg:w-[981px] lg:min-h-[277px] md:w-[697.32px] md:h-[277px] gap-[20px]  md:gap-[55px] md:ml-[32px] lg:ml-[41px] text-[xl]">
        <div className="flex flex-col  justify-between max-w-[318px] min-h-[277px] lg:min-w-[318px] lg:max-h-[277px] md:min-w-[318px] md:max-h-[277px]">
          <p className="flex">{strings.propertyDetails.accomodates}</p>
          {accomodates?.map((item, index) => (
            <div
              className="flex flex-row w-full justify-between text-neutral-600"
              key={index}
            >
              <div className="flex flex-row gap-[5px]">
                <div className="relative w-[20px] h-[20px] ">
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
        <div className="flex flex-col justify-between max-w-[343px] min-h-[213px]   lg:min-w-[344px] lg:h-[213px] md:min-w-[344px] md:h-[213px]">
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
      <hr className="bg-[#000000]" />
      <div className=" px-[25px] md:p-0 flex flex-col gap-y-[30px]  max-w-[441px] max-h-[269px] lg:w-[876px]  lg:min-h-[179px]  lg:ml-[41px] md:max-w-[736px] md:h-[179px] md:ml-[30px] text-[xl]">
        <div>{strings.propertyDetails.ammenities}</div>
        <div className="grid grid-cols-3 grid-rows-2 gap-[30px]">
          {ammenities?.map((item, index) => (
            <div
              className="flex flex-row gap-[3px] text-neutral-700"
              key={index}
            >
              <div className="relative w-[20px] h-[20px] ">
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
      <hr className="bg-[#000000]" />
      <div className="flex flex-col  max-w-[481px] max-h-[290px]  lg:w-[826px] lg:max-h-[163px] lg:min-gap-[20px] lg:p-0 py-0 px-[25px] gap-[15px]   lg:ml-[41px] md:w-[765px] md:h-[193px] md:px-[25px] md:my-[0px] md:gap-[15px] text-[xl]">
        <p>{strings.propertyDetails.roomServices}</p>
        <p className="text-neutral-700">
          Lorem ipsum dolor sit amet consectetur. Lacus et integer enim vitae
          odio sed. Aliquam volutpat neque accumsan tincidunt velit quam.
          Condimentum integer sed in scelerisque sit in quis et.
        </p>
      </div>
      <hr className="bg-[#000000]" />
    </div>
  );
}
