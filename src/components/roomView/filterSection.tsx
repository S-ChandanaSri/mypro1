import Image from "next/image";

import { svgs } from "@/constants/images";
import { strings } from "@/constants/strings";
import {
  RoomFiltersCategories,
  RoomFiltersRating,
  RoomFilterscollections,
} from "@/constants/roomViewArrays";

export function Checkbox() {
  return <input className="relative h-[23.3px] w-[23.3px]" type="checkbox" />;
}

export function ScaleOption() {
  return <input type="radio" className="h-5 w-5" />;
}

const FilterSection = ({ className = "" }) => {
  return (
    <div className="hidden border-r-[1px] bg-neutral-50 p-4 sm:block">
      {/*top part filter price range */}
      <div className="flex flex-col gap-14">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col items-start">
            <p>{strings.roomView.filterSection.filters}</p>
            <p>{strings.roomView.filterSection.priceRange}</p>
          </div>
          <div className="relative h-6 w-24">
            <Image
              src={svgs.roomClearAll}
              alt="clear all"
              fill={true}
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <div className="relative h-32 w-64 lg:w-[17rem]">
            <Image
              src="assests/vector-1.svg"
              alt="vector image"
              fill={true}
              className="object-cover"
            />
          </div>
          <div className="relative h-4 w-64 lg:w-[17rem]">
            <Image
              src="assests/bar.svg"
              alt="vector image"
              fill={true}
              className="object-cover"
            />
          </div>
          <div className="flex flex-row justify-between text-neutral-50">
            <p className="flex h-8 w-16 items-center justify-center rounded-md bg-neutral-950">
              10000
            </p>
            <p className="flex h-8 w-16 items-center justify-center rounded-md bg-neutral-950">
              100000
            </p>
          </div>
        </div>
      </div>

      <hr className="mb-6 mt-2 border-[1px] border-neutral-500" />

      <div className="p- flex flex-col gap-8 rounded-md">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <p>{strings.roomView.filterSection.collections}</p>
            <div className="relative h-2 w-3">
              <Image
                src={svgs.roomDownArrow}
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
          <div className="flex items-center gap-[10px]">
            <div>{strings.roomView.filterSection.showMore}</div>
            <div className="relative h-2 w-3">
              <Image
                src={svgs.roomDownArrow}
                alt="downArrow"
                fill={true}
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex justify-between">
            <div>{strings.roomView.filterSection.categories}</div>
            <div className="relative h-2 w-3">
              <Image
                src={svgs.roomDownArrow}
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
          <div className="flex items-center gap-2">
            <div>{strings.roomView.filterSection.showMore}</div>
            <div className="relative h-2 w-3">
              <Image
                src={svgs.roomDownArrow}
                alt="downArrow"
                fill={true}
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <div>{strings.roomView.filterSection.rating}</div>
            <div className="relative h-2 w-3">
              <Image
                src={svgs.roomDownArrow}
                alt="downArrow"
                fill={true}
                className="object-cover"
              />
            </div>
          </div>
          {RoomFiltersRating?.map((rating, index) => (
            <div className="flex items-center gap-4" key={index}>
              <ScaleOption /> {rating}
            </div>
          ))}
          <div className="flex items-center gap-2">
            <div>{strings.roomView.filterSection.showMore}</div>
            <div className="relative h-2 w-3">
              <Image
                src={svgs.roomDownArrow}
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
