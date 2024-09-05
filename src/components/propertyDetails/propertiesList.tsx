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
    <div className=" w-[302px]  md:max-w-[767px] md:h-[1113px] mt-[10px] lg:ml-[5px] lg:mt-0 ml-[60px] md:gap-[49px] md:ml-[45px]   lg:w-[304px]  flex flex-col md:flex-row lg:gap-[49px] gap-[22px]   lg:absolute lg:min-h-[1336px]  lg:left-[1091px] lg:flex-col border-1 border-gray-500 lg:top-0 text-neutral-950">
      <div className="lg:w-[302px] md:w-[302px] w-[302px] min-h-[421px]  bg-white lg:min-h-[421px] md:h-[421px] border-[1px] border-gray-400 rounded-[5px]">
        <div className="pt-[21px] pl-[18px] ml-[4px] w-[300px] h-[75px] ">
          <div className="flex flex-row  gap-2 w-[250px] h-[33px]">
            <div className="relative w-[27.5px] h-[27.5px]">
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

        <div className="w-[300px] h-[113px] ml-[4px]  pt-[21px] pl-[18px]">
          <div className=" w-[250px] h-[33px]">
            <div className="flex flex-row gap-10 text-[17px]">
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
        </div>
        <hr />

        <div className="pt-[21px] pl-[18px] flex flex-col gap-[20px] text-neutral-700 ">
          <button className="w-[271px] h-[48px]  rounded-[4px] border-[1px] border-gray-400 text-neutral-50 bg-[#3D52A0] text-lg">
            {strings.propertyDetails.reservation.reserve}
          </button>
          <p className="text-xs ">
            {strings.propertyDetails.reservation.instruction1}
          </p>
          <p className="text-xs">
            {strings.propertyDetails.reservation.instruction2}
          </p>
          <button className="w-[271px] text-xs h-[37px] text-neutral-800 rounded-[4px] border-[1px] border-gray-400">
            {strings.propertyDetails.reservation.request}
          </button>
        </div>
      </div>
      <div className="lg:hidden w-[302px] md:w-[302px] flex flex-col  min-h-[1090px] md:h-[1090px]   gap-[22px]  ">
        {images?.map((image: any, index: any) => (
          <>
            <div className=" w-[302px] max-h-[256px] border-[1px] border-gray-400 ">
              <div className="relative w-[302px]  h-[160px]">
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill={true}
                  //   sizes="(min-width: 1024px) 207px, 124px"
                  className=" w-full h-full object-cover "
                  //   style={{ objectFit: "contain" }}
                />
              </div>
              <div className="flex flex-col gap-[10px] text-xs ">
                <div className="flex justify-between p-[4px]">
                  <p>Studio-Medium</p>
                  <p>Rs 10000.00</p>
                </div>
                <div className="flex justify-between p-[4px]">
                  <div className="flex gap-[4px]">
                    <div className="relative w-[17.21px] h-[16.47px] text-[#3D52A0]">
                      <Image
                        src={propertySvgIcons.propertyStar}
                        fill={true}
                        alt="stars"
                        className="object-cover"
                      />
                    </div>{" "}
                    <div className="relative w-[17.21px] h-[16.47px] text-[#3D52A0]">
                      <Image
                        src={propertySvgIcons.propertyStar}
                        fill={true}
                        alt="stars"
                        className="object-cover"
                      />
                    </div>
                    <div className="relative w-[17.21px] h-[16.47px] text-[#3D52A0]">
                      <Image
                        src={propertySvgIcons.propertyStar}
                        fill={true}
                        alt="stars"
                        className="object-cover"
                      />
                    </div>
                    <div className="relative w-[17.21px] h-[16.47px] text-[#3D52A0]">
                      <Image
                        src={propertySvgIcons.propertyStar}
                        fill={true}
                        alt="stars"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <button className="border border-gray-400 w-[115px] text-neutral-50 h-[34px] rounded-[3px] bg-[#3D52A0]">
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
            <div className="w-[302px] max-h-[256px] border-[1px] border-gray-400 ">
              <div className="relative w-[302px]  h-[160px]">
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill={true}
                  //   sizes="(min-width: 1024px) 207px, 124px"
                  className=" w-full h-full object-cover "
                  //   style={{ objectFit: "contain" }}
                />
              </div>
              <div className="flex flex-col gap-[10px] ">
                <div className="flex justify-between p-[4px]">
                  <p>Studio-Medium</p>
                  <p>Rs 10000.00</p>
                </div>
                <div className="flex justify-between p-[4px]">
                  <div className="flex gap-[4px]">
                    <div className="relative w-[17.21px] h-[16.47px] text-[#3D52A0]">
                      <Image
                        src={propertySvgIcons.propertyStar}
                        fill={true}
                        alt="stars"
                        className="object-cover"
                      />
                    </div>{" "}
                    <div className="relative w-[17.21px] h-[16.47px] text-[#3D52A0]">
                      <Image
                        src={propertySvgIcons.propertyStar}
                        fill={true}
                        alt="stars"
                        className="object-cover"
                      />
                    </div>
                    <div className="relative w-[17.21px] h-[16.47px] text-[#3D52A0]">
                      <Image
                        src={propertySvgIcons.propertyStar}
                        fill={true}
                        alt="stars"
                        className="object-cover"
                      />
                    </div>
                    <div className="relative w-[17.21px] h-[16.47px] text-[#3D52A0]">
                      <Image
                        src={propertySvgIcons.propertyStar}
                        fill={true}
                        alt="stars"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <button className="border border-gray-400 w-[115px] h-[34px] text-neutral-50 rounded-[3px] bg-[#3D52A0]">
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
