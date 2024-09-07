import { strings } from "@/constants/strings";
import Image from "next/image";
import { propertySvgIcons } from "@/constants/images";
import { propertyDetailsImages } from "@/constants/images";
export default function PropertiesList() {
  const images = [
    { url: propertyDetailsImages.propertyInterior1, alt: "Interior1" },
    { url: propertyDetailsImages.propertyInterior2, alt: "Interior2" },
    { url: propertyDetailsImages.propertyInterior3, alt: "Interior3" },
    { url: propertyDetailsImages.propertyExterior, alt: "Exterior" },
  ];
  return (
    <div className=" w-[19rem]     m-2  lg:mt-0 ml-14   md:ml-11 lg:ml-0 rounded-md   flex flex-col md:flex-row  gap-12    lg:absolute   lg:left-[69rem] lg:flex-col border-[1px] md:border-none lg:border-[1px] border-gray-500 lg:top-0 text-neutral-950">
      <div className=" min-w-[19rem] h-fit   bg-white   border-[1px] border-gray-400 rounded-md">
        <div className="p-5  ">
          <div className="flex flex-row  gap-2 ">
            <div className="relative w-7 h-7">
              <Image
                src={propertySvgIcons.propertyCalendar}
                fill={true}
                alt="calendar"
                className="object-cover"
              />
            </div>
            <div className="text-lg">
              {strings.propertyDetails.reservation.dateTime}
            </div>
          </div>
        </div>
        <hr />

        <div className="p-5 ">
          <div className="flex flex-row gap-10 text-lg justify-center">
            <div className="text-lg">
              <p className="text-neutral-700">
                {strings.propertyDetails.reservation.hourly}
              </p>
              <p className="text-neutral-950">Rs100/hr</p>
            </div>
            <div className="text-lg">
              <p className="text-neutral-700">
                {strings.propertyDetails.reservation.daily}
              </p>
              <p className="text-neutral-950">Rs1000/day</p>
            </div>
          </div>
        </div>
        <hr />

        <div className="p-5 flex flex-col gap-5 text-neutral-700 ">
          <button className=" h-12  rounded-md border-[1px] border-gray-400 text-neutral-50 bg-[#3D52A0] text-lg">
            {strings.propertyDetails.reservation.reserve}
          </button>
          <p className="text-xs ">
            {strings.propertyDetails.reservation.instruction1}
          </p>
          <p className="text-xs">
            {strings.propertyDetails.reservation.instruction2}
          </p>
          <button className=" text-xs h-9 text-neutral-800 rounded-sm border-2 border-gray-400">
            {strings.propertyDetails.reservation.request}
          </button>
        </div>
      </div>

      <div className="lg:hidden  flex flex-col     gap-5  ">
        {images?.map((image: any, index: any) => (
          <>
            <div className="  h-64 border-[1px] border-gray-400 ">
              <div className="relative w-[19rem]  h-40">
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill={true}
                  className=" w-full h-full object-cover "
                />
              </div>
              <div className="flex flex-col gap-2 text-xs ">
                <div className="flex justify-between p-1">
                  <p>Studio-Medium</p>
                  <p>Rs 10000.00</p>
                </div>
                <div className="flex justify-between p-1">
                  <div className="flex gap-1">
                    <div className="relative w-4 h-4 text-[#3D52A0]">
                      <Image
                        src={propertySvgIcons.propertyStar}
                        fill={true}
                        alt="stars"
                        className="object-cover"
                      />
                    </div>{" "}
                    <div className="relative w-4 h-4 text-[#3D52A0]">
                      <Image
                        src={propertySvgIcons.propertyStar}
                        fill={true}
                        alt="stars"
                        className="object-cover"
                      />
                    </div>
                    <div className="relative w-4 h-4 text-[#3D52A0]">
                      <Image
                        src={propertySvgIcons.propertyStar}
                        fill={true}
                        alt="stars"
                        className="object-cover"
                      />
                    </div>
                    <div className="relative w-4 h-4 text-[#3D52A0]">
                      <Image
                        src={propertySvgIcons.propertyStar}
                        fill={true}
                        alt="stars"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <button className="border border-gray-400 w-28 text-neutral-50 h-8 rounded-sm bg-[#3D52A0]">
                    {strings.propertyDetails.bookNow}
                  </button>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
      <div className="hidden lg:block ">
        {images?.map((image, index) => (
          <>
            <div className="  border-[1px] border-gray-400 ">
              <div className="relative w-[19rem]  h-40">
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill={true}
                  className=" w-full h-full object-cover "
                />
              </div>
              <div className="flex flex-col gap-2 ">
                <div className="flex justify-between p-1">
                  <p>Studio-Medium</p>
                  <p>Rs 10000.00</p>
                </div>
                <div className="flex justify-between p-1">
                  <div className="flex gap-1">
                    <div className="relative w-4 h-4 text-[#3D52A0]">
                      <Image
                        src={propertySvgIcons.propertyStar}
                        fill={true}
                        alt="stars"
                        className="object-cover"
                      />
                    </div>{" "}
                    <div className="relative w-4 h-4 text-[#3D52A0]">
                      <Image
                        src={propertySvgIcons.propertyStar}
                        fill={true}
                        alt="stars"
                        className="object-cover"
                      />
                    </div>
                    <div className="relative w-4 h-4 text-[#3D52A0]">
                      <Image
                        src={propertySvgIcons.propertyStar}
                        fill={true}
                        alt="stars"
                        className="object-cover"
                      />
                    </div>
                    <div className="relative w-4 h-4 text-[#3D52A0]">
                      <Image
                        src={propertySvgIcons.propertyStar}
                        fill={true}
                        alt="stars"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <button className="border border-gray-400 w-28 h-8 text-neutral-50 rounded-sm bg-[#3D52A0]">
                    {strings.propertyDetails.bookNow}
                  </button>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
