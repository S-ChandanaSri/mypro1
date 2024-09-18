import Image from "next/image";

import { roomViewSvgIcons } from "@/constants/images";
import { strings } from "@/constants/strings";
import {
  RoomFiltersCategories,
  RoomFiltersRating,
  RoomFilterscollections,
} from "@/constants/roomViewArrays";

export function Checkbox() {
  return <input className="w-[23.3px] h-[23.3px] relative " type="checkbox" />;
}

export function ScaleOption() {
  return <input type="radio" className="w-5 h-5" />;
}

const FilterSection = ({ className = "" }) => {
  return (
    <div className="hidden md:block  p-4   border-r-[1px] bg-neutral-50 ">
      {/*top part filter price range */}
      <div className="flex flex-col gap-14">
        <div className="flex flex-row justify-between ">
          <div className="flex flex-col  items-start">
            <p>{strings.roomView.filterSection.filters}</p>
            <p>{strings.roomView.filterSection.priceRange}</p>
          </div>
          <div className="relative w-24 h-6">
            <Image
              src={roomViewSvgIcons.roomClearAll}
              alt="clear all"
              fill={true}
              className=" object-cover "
            />
          </div>
        </div>

        <div>
          <div className="relative lg:w-[17rem] w-64 h-32   ">
            <Image
              src="assests/vector-1.svg"
              alt="vector image"
              fill={true}
              className=" object-cover"
            />
          </div>
          <div className="relative lg:w-[17rem] w-64 h-4">
            <Image
              src="assests/bar.svg"
              alt="vector image"
              fill={true}
              className=" object-cover "
            />
          </div>
          <div className=" flex flex-row  justify-between    text-neutral-50">
            <p className="w-16 h-8 rounded-md bg-neutral-950 flex justify-center items-center">
              10000
            </p>
            <p className="w-16 h-8 rounded-md bg-neutral-950  flex justify-center items-center">
              100000
            </p>
          </div>
        </div>
      </div>

      <hr className=" border-[1px] border-neutral-500 mt-2 mb-6" />

      <div className="flex flex-col   rounded-md p- gap-8">
        <div className="gap-6  flex flex-col ">
          <div className="flex justify-between items-center">
            <p>{strings.roomView.filterSection.collections}</p>
            <div className="relative w-3 h-2">
              <Image
                src={roomViewSvgIcons.roomDownArrow}
                alt="downArrow"
                fill={true}
                className="object-cover"
              />
            </div>
          </div>
          {RoomFilterscollections?.map((collection, index) => (
            <div className="flex gap-x-[17.44px]" key={index}>
              <Checkbox /> {collection}
            </div>
          ))}
          <div className="flex gap-[10px] items-center">
            <div>{strings.roomView.filterSection.showMore}</div>
            <div className="relative w-3 h-2">
              <Image
                src={roomViewSvgIcons.roomDownArrow}
                alt="downArrow"
                fill={true}
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="gap-6 flex flex-col">
          <div className="flex justify-between">
            <div>{strings.roomView.filterSection.categories}</div>
            <div className="relative w-3 h-2">
              <Image
                src={roomViewSvgIcons.roomDownArrow}
                alt="downArrow"
                fill={true}
                className="object-cover"
              />
            </div>
          </div>
          {RoomFiltersCategories?.map((category, index) => (
            <div className="flex gap-4" key={index}>
              <Checkbox /> {category}
            </div>
          ))}
          <div className="flex gap-2 items-center">
            <div>{strings.roomView.filterSection.showMore}</div>
            <div className="relative w-3 h-2">
              <Image
                src={roomViewSvgIcons.roomDownArrow}
                alt="downArrow"
                fill={true}
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className=" gap-6 flex flex-col">
          <div className="flex justify-between items-center">
            <div>{strings.roomView.filterSection.rating}</div>
            <div className="relative w-3 h-2">
              <Image
                src={roomViewSvgIcons.roomDownArrow}
                alt="downArrow"
                fill={true}
                className="object-cover"
              />
            </div>
          </div>
          {RoomFiltersRating?.map((rating, index) => (
            <div className="flex gap-4 items-center" key={index}>
              <ScaleOption /> {rating}
            </div>
          ))}
          <div className="flex gap-2 items-center">
            <div>{strings.roomView.filterSection.showMore}</div>
            <div className="relative w-3 h-2">
              <Image
                src={roomViewSvgIcons.roomDownArrow}
                alt="downArrow"
                fill={true}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
