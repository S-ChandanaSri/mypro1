import PropTypes from "prop-types";

import Image from "next/image";
import { roomViewImages, roomViewSvgIcons } from "@/constants/images";
import List from '@/components/root/Propertycard/List';

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

      <List option={true} />
    </div>
  );
};

SideSection.propTypes = {
  className: PropTypes.string,
};

export default SideSection;