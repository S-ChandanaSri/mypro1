import PropTypes from "prop-types";

import Image from "next/image";
import { roomViewImages, roomViewSvgIcons } from "@/constants/images";
import List from "@/components/root/Propertycard/List";

const list = [1, 2, 3, 4, 5];

const SideSection = ({ className = "" }) => {
  return (
    <div className="scrollbar-thin h-[104rem] overflow-y-auto px-5 md:max-h-[88.3rem] lg:max-h-[88.3rem] lg:min-w-[71.5rem] lg:p-1">
      <div className="flex flex-col justify-between gap-3 md:items-center lg:flex-row">
        <div className="hidden flex-row items-center gap-[1px] text-xl md:flex">
          <div>India</div>
          <div className="relative h-3 w-2">
            <Image
              src={roomViewSvgIcons.roomRightArrow}
              alt="right arrow"
              fill={true}
              className="object-cover"
            />
          </div>
          <div>Bihar</div>
          <div className="relative h-3 w-2">
            <Image
              src={roomViewSvgIcons.roomRightArrow}
              alt="right arrow"
              fill={true}
              className="object-cover"
            />
          </div>
          <div>Patna</div>
        </div>

        <div className="flex flex-row justify-between md:hidden">
          <div className="flex flex-row items-center gap-[1px] text-xl">
            <div>India</div>
            <div className="relative h-3 w-2">
              <Image
                src={roomViewSvgIcons.roomRightArrow}
                alt="right arrow"
                fill={true}
                className="object-cover"
              />
            </div>
            <div>Bihar</div>
            <div className="relative h-3 w-2">
              <Image
                src={roomViewSvgIcons.roomRightArrow}
                alt="right arrow"
                fill={true}
                className="object-cover"
              />
            </div>
            <div>Patna</div>
          </div>
          <div className="relative h-6 w-6">
            <Image
              src={roomViewSvgIcons.roomHamburger}
              alt="right arrow"
              fill={true}
              className="object-cover"
            />
          </div>
        </div>

        <div className="mb-2 flex w-full flex-row justify-between gap-5 text-xl md:gap-6 lg:w-auto lg:gap-4">
          <div className="flex items-center gap-1">
            <div>Map View</div>
            <div className="relative h-4 w-12 md:h-6 md:w-[4.4rem]">
              <Image
                src={roomViewSvgIcons.roomMapButton}
                alt="right arrow"
                fill={true}
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex items-center gap-1">
            <div>Sort By</div>
            <div>
              <select className="rounded-md border border-neutral-600 p-1">
                <option>Popularity</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <List option={true} />
    </div>
  );
};

SideSection.propTypes = {
  className: PropTypes.string,
};

export default SideSection;
