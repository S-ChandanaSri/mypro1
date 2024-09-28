import PropTypes from "prop-types";

import Image from "next/image";
import { svgs } from "@/constants/images";
import { RoomViewRooms } from "@/constants/roomViewArrays";
import { strings } from "@/constants/strings";

const SideSection = ({ className = "" }) => {
  return (
    <div className="scrollbar-thin h-[104rem] overflow-y-auto px-5 pt-3 sm:max-h-[88.3rem] lg:max-h-[88.3rem] lg:min-w-[71.5rem] lg:px-5 xl:w-full xl:pe-10">
      <div className="flex flex-col justify-between gap-3 sm:items-center lg:flex-row">
        <div className="hidden flex-row items-center gap-1 text-xl sm:flex">
          <div>India</div>
          <div className="relative h-3 w-2">
            <Image
              src={svgs.roomRightArrow}
              alt="right arrow"
              fill={true}
              className="object-cover"
            />
          </div>
          <div>Bihar</div>
          <div className="relative h-3 w-2">
            <Image
              src={svgs.roomRightArrow}
              alt="right arrow"
              fill={true}
              className="object-cover"
            />
          </div>
          <div>Patna</div>
        </div>

        <div className="flex flex-row justify-between sm:hidden">
          <div className="flex flex-row items-center gap-1 text-xl">
            <div>India</div>
            <div className="relative h-3 w-2">
              <Image
                src={svgs.roomRightArrow}
                alt="right arrow"
                fill={true}
                className="object-cover"
              />
            </div>
            <div>Bihar</div>
            <div className="relative h-3 w-2">
              <Image
                src={svgs.roomRightArrow}
                alt="right arrow"
                fill={true}
                className="object-cover"
              />
            </div>
            <div>Patna</div>
          </div>
          <div className="relative h-6 w-6">
            <Image
              src={svgs.roomHamburger}
              alt="right arrow"
              fill={true}
              className="object-cover"
            />
          </div>
        </div>
        <div className="mb-2 flex w-full flex-row justify-between gap-5 text-xl sm:gap-6 lg:w-auto lg:gap-4">
          <div className="flex items-center gap-1">
            <div>{strings.roomView.sideSection.mapView}</div>
            <div className="relative h-6 w-12 sm:w-[4.4rem]">
              <Image
                src={svgs.roomMapButton}
                alt="right arrow"
                fill={true}
                className="h-full w-full object-contain p-1"
              />
            </div>
          </div>
          <div className="flex items-center gap-1">
            <div>{strings.roomView.sideSection.sortBy}</div>
            <div>
              <select className="rounded-md border border-neutral-600 p-1">
                <option>Popularity</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-8 xl:gap-10">
        {RoomViewRooms?.map((room, index) => (
          <div className="flex flex-col gap-2 lg:flex-row xl:gap-4" key={index}>
            {/* images rectangle*/}
            <div className="flex flex-col gap-1 lg:flex-row xl:gap-3">
              <div className="relative min-h-[13rem] rounded-sm lg:h-[16.6rem] lg:w-[17.4rem] xl:w-[19rem] 2xl:w-[22rem]">
                <Image
                  src={room.image1}
                  alt="main image"
                  fill={true}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-row gap-1 lg:flex-col">
                <div className="relative h-20 w-36 rounded-sm lg:h-[5.3rem] lg:w-[9.3rem] xl:w-[11rem] 2xl:w-[13rem]">
                  <Image
                    src={room.image2}
                    alt="main image"
                    fill={true}
                    className="object-cover"
                  />
                </div>
                <div className="relative h-20 w-36 rounded-sm lg:h-[5.3rem] lg:w-[9.3rem] xl:w-[11rem] 2xl:w-[13rem]">
                  <Image
                    src={room.image3}
                    alt="main image"
                    fill={true}
                    className="object-cover"
                  />
                </div>
                <div className="relative h-20 w-36 rounded-sm lg:h-[5.3rem] lg:w-[9.3rem] xl:w-[11rem] 2xl:w-[13rem]">
                  <Image
                    src={room.image4}
                    alt="main image"
                    fill={true}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* details rectangle*/}
            <div className="flex w-full flex-col justify-between gap-6 lg:ml-4 lg:h-64">
              <div className="flex flex-col gap-1">
                <p className="text-lg">{room.area}</p>
                <div className="flex text-xs">
                  {room.location}
                  <div className="relative mx-1 h-4 w-3">
                    <Image
                      src={svgs.roomLocation}
                      alt="right arrow"
                      fill={true}
                      className="object-contain"
                    />
                  </div>
                  {room.distance}
                </div>
                <div className="flex flex-row items-center gap-2">
                  <div className="flex items-center gap-1 bg-secondaryWashed-800 p-1 text-sm text-neutral-50">
                    {room.overAllRating}
                    <div className="relative h-3 w-3">
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

              <div className="flex flex-row gap-5 text-sm">
                {room?.ammenities?.map((ammenity, index) => (
                  <div className="flex gap-2" key={index}>
                    <div className="relative h-5 w-6">
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

              <div className="flex flex-row items-center justify-between text-md">
                <div>{room.price}</div>

                <div className="flex flex-row gap-2 xl:gap-6">
                  <button className="border-1 h-10 w-32 rounded-md border-neutral-950">
                    {strings.roomView.sideSection.viewDetails}
                  </button>
                  <button className="border-1 h-10 w-32 rounded-md bg-secondary-900 text-neutral-50">
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
