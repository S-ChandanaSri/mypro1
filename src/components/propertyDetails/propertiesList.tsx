import { strings } from "@/constants/strings";
import Image from "next/image";
import { svgs } from "@/constants/images";
import ChooseDateAndTime from "./chooseDateAndTime";
export default function PropertiesList({ properties }: any) {
  return (
    <div className="background-list m-2 flex flex-col gap-12 rounded-md border border-neutral-400 text-neutral-950 md:ml-11 md:flex-row md:border-none lg:m-0 lg:ml-0 lg:flex lg:flex-col lg:gap-12 lg:rounded-none lg:px-5 lg:pt-5 xl:px-10">
      <ChooseDateAndTime />
      <div className="flex flex-col gap-5 lg:hidden">
        {properties?.map((property: any, index: Number) => (
          <>
            <div className="h-64 border border-neutral-400">
              <div className="relative h-40 w-[19rem]">
                <Image
                  src={property.url}
                  alt={property.alt}
                  fill={true}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-2 text-xs">
                <div className="flex justify-between p-1">
                  <p>{property.roomType}</p>
                  <p>{property.price}</p>
                </div>
                <div className="flex justify-between p-1">
                  <div className="flex gap-1">
                    {Array.from({ length: property.stars }).map(
                      (star: any, index: any) => (
                        <div
                          className="relative h-4 w-4 text-secondaryWashed-800"
                          key={index}
                        >
                          <Image
                            src={svgs.propertyStar}
                            fill={true}
                            alt="stars"
                            className="object-cover"
                          />
                        </div>
                      ),
                    )}
                  </div>
                  <button className="h-8 w-28 rounded-sm border border-neutral-400 bg-secondaryWashed-800 text-neutral-50">
                    {strings.propertyDetails.bookNow}
                  </button>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
      <div className="hidden lg:block">
        {properties?.map((property: any, index: Number) => (
          <>
            <div className="border border-neutral-400">
              <div className="relative h-40 w-[19rem]">
                <Image
                  src={property.url}
                  alt={property.alt}
                  fill={true}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between p-1">
                  <p>{property.roomType}</p>
                  <p>{property.price}</p>
                </div>
                <div className="flex justify-between p-1">
                  <div className="flex gap-1">
                    {Array.from({ length: property.stars }).map(
                      (star: any, index: any) => (
                        <div
                          className="relative h-4 w-4 text-secondaryWashed-800"
                          key={index}
                        >
                          <Image
                            src={svgs.propertyStar}
                            fill={true}
                            alt="stars"
                            className="object-cover"
                          />
                        </div>
                      ),
                    )}
                  </div>
                  <button className="h-8 w-28 rounded-sm border border-neutral-400 bg-secondaryWashed-800 text-neutral-50">
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
