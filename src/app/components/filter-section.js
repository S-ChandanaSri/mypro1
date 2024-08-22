import ScaleOption from "./scale-option";
import PropTypes from "prop-types";
import Image from "next/image";

import { FaArrowRight } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

import styles from "./checkbox.module.css";

export function Checkbox() {
  return <input className={styles.checkbox} type="checkbox" />;
}

const FilterSection = ({ className = "" }) => {
  const collections = ["Best value from", "Members only d..."];

  const categories = [
    "Less than $25",
    "$150-$250",
    "$250-$350",
    "Greater than $500",
  ];

  const rating = ["1 star", "2 star", "3 star", "4 star", "5 star"];
  return (
    <div className="hidden md:block lg:max-w-[298px] md:max-w-[267px] md:h-[1412px] md:border-r-[1px] bg-white ">
      {/*top part filter price range */}
      <div className="flex flex-col lg:min-h-auto">
        <div className="flex flex-row justify-between md:p-[10px]">
          <div className="flex flex-col  items-start">
            <p>Filters</p>
            <p>Price Range</p>
          </div>
          <div className="flex">
            <p>Clear all</p>
            <p>
              <FaArrowRight />
            </p>
          </div>
        </div>

        <div className="lg:w-[276px] md:w-[265.97px] md:h-[172.5px] lg:min-h-[172px] lg:ml-[11px] md:ml-[2.89px] md:mt-[50px]">
          <div className="relative lg:w-[274px] md:max-w-[264.04px] md:h-[123.5px] md:ml-[3.37px]  lg:h-[123.5px] lg:ml-[11.5px]">
            <Image
              src="assests/vector-1.svg"
              alt="vector image"
              fill={true}
              className=" object-cover w-full h-full"
            />
          </div>
          <div className="relative lg:w-[276px] md:max-w-[265.97px] md:h-[15px] md:ml-[2.89px] md:rounded-[2px] lg:h-[15px] lg:ml-[11px] rounded-[2px]">
            <Image
              src="assests/bar.svg"
              alt="vector image"
              fill={true}
              className=" object-cover w-full h-full"
            />
          </div>
          <div className=" flex flex-row  justify-between lg:w-full lg:p-[11px] md:px-[2.89px]">
            <p className="lg:w-[64px] md:w-[61.6px] h-[32px] md:rounded-[4px] bg-black text-white flex justify-center items-center">
              10000
            </p>
            <p className="lg:w-[64px] md:w-[61.6px] h-[32px] md:rounded-[4px] bg-black text-white flex justify-center items-center">
              100000
            </p>
          </div>
        </div>
      </div>
      <hr className=" border-1 border-gray-500 my-[2px]" />

      <div className="lg:w-[298px] md:w-[267px] md:h-[1103px]  lg:h-[1029px] md:rounded-[5.81px] md:p-[34px] md:gap-[45px]">
        <div className="lg:w-[228px] md:w-[197.22px] md:h-[202.08px] md:gap-[23.26px] lg:h-[199.15px] lg:mt-[20px]  flex flex-col ">
          <div className="flex justify-between">
            <div>Collections</div>
            <div>
              <IoIosArrowDown />
            </div>
          </div>
          {collections?.map((collection, index) => (
            <div className="flex gap-x-[17.44px]" key={index}>
              <Checkbox /> {collection}
            </div>
          ))}
          <div className="flex gap-[10px]">
            <div>Show more</div>
            <div>
              <IoIosArrowDown />
            </div>
          </div>
        </div>

        <div className="lg:w-[228px] md:w-[197.22px] md:h-[306.74px]  lg:h-[304.74px] lg:mt-[20px] md:gap-[23.26px] flex flex-col">
          <div className="flex justify-between">
            <div>Categories</div>
            <div>
              <IoIosArrowDown />
            </div>
          </div>
          {categories?.map((category, index) => (
            <div className="flex gap-x-[17.44px]" key={index}>
              <Checkbox /> {category}
            </div>
          ))}
          <div className="flex gap-[10px]">
            <div>Show more</div>
            <div>
              <IoIosArrowDown />
            </div>
          </div>
        </div>

        <div className="lg:w-[228px] lg:h-[365.8px] md:w-[197.22px] md:h-[367.8px]  lg:mt-[20px] md:gap-[23.26px] flex flex-col">
          <div className="flex justify-between">
            <div>Rating</div>
            <div>
              <IoIosArrowDown />
            </div>
          </div>
          {rating?.map((rating, index) => (
            <div className="flex gap-x-[17.44px]" key={index}>
              <ScaleOption /> {rating}
            </div>
          ))}
          <div className="flex gap-[10px]">
            <div>Show more</div>
            <div>
              <IoIosArrowDown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FilterSection.propTypes = {
  className: PropTypes.string,
};

export default FilterSection;
