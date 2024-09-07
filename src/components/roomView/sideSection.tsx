import PropTypes from "prop-types";

import Image from "next/image";
import { roomViewImages, roomViewSvgIcons } from "@/constants/images";

const list = [1, 2, 3, 4, 5];

const SideSection = ({ className = "" }) => {
  return (
    <div className="lg:min-w-[71.5rem] lg:max-h-[88.3rem]  md:max-h-[88.3rem]  h-[104rem] overflow-y-auto scrollbar-thin px-5 lg:p-1 ">
      <div className=" flex flex-col md:items-center lg:flex-row  justify-between  gap-3">
        <div className="md:flex hidden text-xl flex-row items-center gap-[1px]">
          <div>India</div>
          <div className="relative w-2 h-3">
            <Image
              src={roomViewSvgIcons.roomRightArrow}
              alt="right arrow"
              fill={true}
              className="object-cover"
            />
          </div>
          <div>Bihar</div>
          <div className="relative w-2 h-3">
            <Image
              src={roomViewSvgIcons.roomRightArrow}
              alt="right arrow"
              fill={true}
              className="object-cover"
            />
          </div>
          <div>Patna</div>
        </div>

        <div className="flex md:hidden flex-row justify-between ">
          <div className="flex text-xl flex-row items-center gap-[1px]">
            <div>India</div>
            <div className="relative w-2 h-3">
              <Image
                src={roomViewSvgIcons.roomRightArrow}
                alt="right arrow"
                fill={true}
                className="object-cover"
              />
            </div>
            <div>Bihar</div>
            <div className="relative w-2 h-3">
              <Image
                src={roomViewSvgIcons.roomRightArrow}
                alt="right arrow"
                fill={true}
                className="object-cover"
              />
            </div>
            <div>Patna</div>
          </div>
          <div className="relative w-6 h-6">
            <Image
              src={roomViewSvgIcons.roomHamburger}
              alt="right arrow"
              fill={true}
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex flex-row gap-5  text-xl w-full lg:w-auto mb-2 justify-between  md:gap-6  lg:gap-4">
          <div className="flex gap-1  items-center">
            <div>Map View</div>
            <div className="relative w-12 md:w-[4.4rem] h-4  md:h-6">
              <Image
                src={roomViewSvgIcons.roomMapButton}
                alt="right arrow"
                fill={true}
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex gap-1 items-center">
            <div>Sort By</div>
            <div>
              <select className="rounded-md border  border-neutral-600 p-1">
                <option>Popularity</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-8 ">
        {list?.map((items, index) => (
          <div className="   flex lg:flex-row flex-col gap-2 " key={index}>
            {/* images rectangle*/}
            <div className=" gap-1 flex lg:flex-row flex-col">
              <div className="relative lg:w-[17.4rem] lg:h-[16.6rem] w-[27.5rem] min-h-[13rem] rounded-sm">
                <Image
                  src={roomViewImages.roomViewExterior}
                  alt="main image"
                  fill={true}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="  flex lg:flex-col flex-row gap-1">
                <div className="relative lg:w-[9.3rem] lg:h-[5.3rem] w-36 h-20 rounded-sm">
                  <Image
                    src={roomViewImages.roomViewinterior1}
                    alt="main image"
                    fill={true}
                    className=" object-cover"
                  />
                </div>
                <div className="relative lg:w-[9.3rem] lg:h-[5.3rem] w-36 h-20 rounded-sm">
                  <Image
                    src={roomViewImages.roomViewinterior2}
                    alt="main image"
                    fill={true}
                    className=" object-cover"
                  />
                </div>
                <div className="relative lg:w-[9.3rem] lg:h-[5.3rem] w-36 h-20 rounded-sm">
                  <Image
                    src={roomViewImages.roomViewinterior3}
                    alt="main image"
                    fill={true}
                    className=" object-cover"
                  />
                </div>
              </div>
            </div>

            {/* details rectangle*/}
            <div className="w-full lg:h-64  justify-between  lg:ml-4 flex flex-col gap-6">
              <div className="  flex flex-col gap-1">
                <p className="text-lg">
                  Super Collection Avenue near Gandhi maidan
                </p>
                <div className="flex text-xs">
                  Gandhi maidan,patna&nbsp;&nbsp;
                  <div className="relative w-3  h-4">
                    <Image
                      src={roomViewSvgIcons.roomLocation}
                      alt="right arrow"
                      fill={true}
                      className="object-cover"
                    />
                  </div>
                  3.3 km
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <div className="flex gap-1  bg-[#3D52A0] text-neutral-50 p-1 items-center text-sm">
                    3.7{" "}
                    <div className="relative w-3  h-3">
                      <Image
                        src={roomViewSvgIcons.roomStart}
                        alt="right arrow"
                        fill={true}
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <p className="text-xs">
                    112 ratings <span>Good</span>
                  </p>
                </div>
              </div>

              <div className=" text-sm   flex flex-row gap-5">
                <div className="flex gap-2">
                  <div className="relative w-6  h-4">
                    <Image
                      src={roomViewSvgIcons.roomWifi}
                      alt="right arrow"
                      fill={true}
                      className="object-cover"
                    />
                  </div>
                  Free wifi
                </div>
                <div className="flex gap-2">
                  <div className="relative w-7  h-4">
                    <Image
                      src={roomViewSvgIcons.roomTv}
                      alt="right arrow"
                      fill={true}
                      className="object-cover"
                    />
                  </div>
                  Tv
                </div>
                <div className="flex gap-2">
                  <div className="relative w-5  h-5">
                    <Image
                      src={roomViewSvgIcons.roomCloud}
                      alt="right arrow"
                      fill={true}
                      className="object-cover"
                    />
                  </div>{" "}
                  Ac
                </div>
                <div>+ 4 more</div>
              </div>

              <div className=" text-md   flex flex-row justify-between items-center">
                <div>Rs 10,000</div>

                <div className="flex flex-row gap-2 ">
                  <button className="w-32 h-10 border-[1px] border-neutral-950 rounded-md">
                    View Details
                  </button>
                  <button className="w-32 h-10 text-neutral-50 border-1 rounded-md bg-[#002855]">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

SideSection.propTypes = {
  className: PropTypes.string,
};

export default SideSection;
