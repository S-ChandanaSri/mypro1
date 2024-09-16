import { strings } from "@/constants/strings";
import Image from "next/image";
import { svgs } from "@/constants/images";
import { propertyDetailsImages } from "@/constants/images";
export default function PropertiesListDesktop() {
  const images = [
    { url: propertyDetailsImages.propertyInterior1, alt: "Interior1" },
    { url: propertyDetailsImages.propertyInterior2, alt: "Interior2" },
    { url: propertyDetailsImages.propertyInterior3, alt: "Interior3" },
    { url: propertyDetailsImages.propertyExterior, alt: "Exterior" },
  ];
  return (
    <div className="background-list hidden flex-col gap-12 pt-5 text-neutral-950 lg:flex lg:px-5 xl:px-10">
      <div className="h-fit min-w-[19rem] rounded-md border border-gray-400 bg-white">
        <div className="p-5">
          <div className="flex flex-row gap-2">
            <div className="relative h-7 w-7">
              <Image
                src={svgs.propertyCalendar}
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

        <div className="p-5">
          <div className="flex flex-row justify-center gap-10 text-lg">
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

        <div className="flex flex-col gap-5 p-5 text-neutral-700">
          <button className="h-12 rounded-md border border-gray-400 bg-[#3D52A0] text-lg text-neutral-50">
            {strings.propertyDetails.reservation.reserve}
          </button>
          <p className="text-xs">
            {strings.propertyDetails.reservation.instruction1}
          </p>
          <p className="text-xs">
            {strings.propertyDetails.reservation.instruction2}
          </p>
          <button className="h-9 rounded-sm border-2 border-gray-400 text-xs text-neutral-800">
            {strings.propertyDetails.reservation.request}
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-5 lg:hidden">
        {images?.map((image: any, index: any) => (
          <>
            <div className="h-64 border border-gray-400">
              <div className="relative h-40 w-[19rem]">
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill={true}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-2 text-xs">
                <div className="flex justify-between p-1">
                  <p>Studio-Medium</p>
                  <p>Rs 10000.00</p>
                </div>
                <div className="flex justify-between p-1">
                  <div className="flex gap-1">
                    <div className="relative h-4 w-4 text-[#3D52A0]">
                      <Image
                        src={svgs.propertyStar}
                        fill={true}
                        alt="stars"
                        className="object-cover"
                      />
                    </div>{" "}
                    <div className="relative h-4 w-4 text-[#3D52A0]">
                      <Image
                        src={svgs.propertyStar}
                        fill={true}
                        alt="stars"
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-4 w-4 text-[#3D52A0]">
                      <Image
                        src={svgs.propertyStar}
                        fill={true}
                        alt="stars"
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-4 w-4 text-[#3D52A0]">
                      <Image
                        src={svgs.propertyStar}
                        fill={true}
                        alt="stars"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <button className="h-8 w-28 rounded-sm border border-gray-400 bg-[#3D52A0] text-neutral-50">
                    {strings.propertyDetails.bookNow}
                  </button>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
      <div className="hidden lg:block">
        {images?.map((image, index) => (
          <>
            <div className="border border-gray-400">
              <div className="relative h-40 w-[19rem]">
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill={true}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between p-1">
                  <p>Studio-Medium</p>
                  <p>Rs 10000.00</p>
                </div>
                <div className="flex justify-between p-1">
                  <div className="flex gap-1">
                    <div className="relative h-4 w-4 text-[#3D52A0]">
                      <Image
                        src={svgs.propertyStar}
                        fill={true}
                        alt="stars"
                        className="object-cover"
                      />
                    </div>{" "}
                    <div className="relative h-4 w-4 text-[#3D52A0]">
                      <Image
                        src={svgs.propertyStar}
                        fill={true}
                        alt="stars"
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-4 w-4 text-[#3D52A0]">
                      <Image
                        src={svgs.propertyStar}
                        fill={true}
                        alt="stars"
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-4 w-4 text-[#3D52A0]">
                      <Image
                        src={svgs.propertyStar}
                        fill={true}
                        alt="stars"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <button className="h-8 w-28 rounded-sm border border-gray-400 bg-[#3D52A0] text-neutral-50">
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
