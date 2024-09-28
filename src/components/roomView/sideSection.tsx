import PropTypes from "prop-types";

import Image from "next/image";
import { svgs } from "@/constants/images";
import { RoomViewRooms } from "@/constants/roomViewArrays";
import { strings } from "@/constants/strings";

const SideSection = ({ className = "" }) => {
  return (
    <div className="lg:min-w-[71.5rem] xl:w-full lg:max-h-[88.3rem]  md:max-h-[88.3rem]  h-[104rem] overflow-y-auto scrollbar-thin px-5  xl:pe-10 lg:px-5 ">
      <div className=" flex flex-col md:items-center lg:flex-row  justify-between  gap-3">
        <div className="md:flex hidden text-xl flex-row items-center gap-[1px]">
          <div>India</div>
          <div className="relative w-2 h-3">
            <Image
              src={svgs.roomRightArrow}
              alt="right arrow"
              fill={true}
              className="object-cover"
            />
          </div>
          <div>Bihar</div>
          <div className="relative w-2 h-3">
            <Image
              src={svgs.roomRightArrow}
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
                src={svgs.roomRightArrow}
                alt="right arrow"
                fill={true}
                className="object-cover"
              />
            </div>
            <div>Bihar</div>
            <div className="relative w-2 h-3">
              <Image
                src={svgs.roomRightArrow}
                alt="right arrow"
                fill={true}
                className="object-cover"
              />
            </div>
            <div>Patna</div>
          </div>
          <div className="relative w-6 h-6">
            <Image
              src={svgs.roomHamburger}
              alt="right arrow"
              fill={true}
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex flex-row gap-5  text-xl w-full lg:w-auto mb-2 justify-between  md:gap-6  lg:gap-4">
          <div className="flex gap-1  items-center">
            <div>{strings.roomView.sideSection.mapView}</div>
            <div className="relative  w-12 md:w-[4.4rem] h-6 ">
              <Image
                src={svgs.roomMapButton}
                alt="right arrow"
                fill={true}
                className="object-contain w-full h-full p-1"
              />
            </div>
          </div>
          <div className="flex gap-1 items-center">
            <div>{strings.roomView.sideSection.sortBy}</div>
            <div>
              <select className="rounded-md border  border-neutral-600 p-1">
                <option>Popularity</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-8 xl:gap-10 ">
        {RoomViewRooms?.map((room, index) => (
          <div
            className="   flex lg:flex-row flex-col gap-2 xl:gap-4 "
            key={index}
          >
            {/* images rectangle*/}
            <div className=" gap-1  flex lg:flex-row flex-col xl:gap-3">
              <div className="relative lg:w-[17.4rem] xl:w-[19rem] 2xl:w-[22rem] lg:h-[16.6rem]   min-h-[13rem] rounded-sm">
                <Image
                  src={room.image1}
                  alt="main image"
                  fill={true}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="  flex lg:flex-col flex-row gap-1">
                <div className="relative lg:w-[9.3rem] xl:w-[11rem] 2xl:w-[13rem] lg:h-[5.3rem]  w-36 h-20 rounded-sm">
                  <Image
                    src={room.image2}
                    alt="main image"
                    fill={true}
                    className=" object-cover"
                  />
                </div>
                <div className="relative lg:w-[9.3rem] xl:w-[11rem] 2xl:w-[13rem] lg:h-[5.3rem]  w-36 h-20 rounded-sm">
                  <Image
                    src={room.image3}
                    alt="main image"
                    fill={true}
                    className=" object-cover"
                  />
                </div>
                <div className="relative lg:w-[9.3rem] xl:w-[11rem] 2xl:w-[13rem] lg:h-[5.3rem]  w-36 h-20 rounded-sm">
                  <Image
                    src={room.image4}
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
                <p className="text-lg">{room.area}</p>
                <div className="flex text-xs">
                  {room.location}
                  <div className="relative w-3  h-4 mx-1">
                    <Image
                      src={svgs.roomLocation}
                      alt="right arrow"
                      fill={true}
                      className="object-contain"
                    />
                  </div>
                  {room.distance}
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <div className="flex gap-1  bg-secondaryWashed-800 text-neutral-50 p-1 items-center text-sm">
                    {room.overAllRating}
                    <div className="relative w-3  h-3 ">
                      <Image
                        src={svgs.roomStar}
                        alt="right arrow"
                        fill={true}
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <p className="text-xs">
                    {room.noOfRatings} <span>{room.review}</span>
                  </p>
                </div>
              </div>

              <div className=" text-sm   flex flex-row gap-5">
                {room?.ammenities?.map((ammenity, index) => (
                  <div className="flex gap-2" key={index}>
                    <div className="relative w-6  h-5">
                      <Image
                        src={ammenity.icon}
                        alt="right arrow"
                        fill={true}
                        className="object-contain"
                      />
                    </div>
                    {ammenity.name}
                  </div>
                ))}

                <div>+ 4 more</div>
              </div>

              <div className=" text-md   flex flex-row justify-between items-center">
                <div>{room.price}</div>

                <div className="flex flex-row gap-2  xl:gap-6 ">
                  <button className="w-32 h-10 border-[1px] border-neutral-950 rounded-md">
                    {strings.roomView.sideSection.viewDetails}
                  </button>
                  <button className="w-32 h-10 text-neutral-50 border-1 rounded-md bg-secondary-900">
                    {strings.roomView.sideSection.bookNow}
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
