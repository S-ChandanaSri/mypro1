import CardContainer from "./card-container";
import PropTypes from "prop-types";
import styles from "./side-section.module.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import { CgToggleOn } from "react-icons/cg";
import { IoLocationSharp } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { MdOutlineWifi } from "react-icons/md";
import { BsFillTvFill } from "react-icons/bs";
import { TbAirConditioning } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";
// import * from "../../public/images/"
// import { weuiarrowfilled } from "../../public/images/weuiarrowfilled.svg";
// import { Bar } from "../../public/next.svg";

const list = [1, 2, 3, 4, 5];

const SideSection = ({ className = "" }) => {
  return (
    <div className="lg:min-w-[1143px] lg:max-h-[1412px] md:w-[499px] md:max-h-[1411px] w-[479px] h-[1660px] overflow-y-auto scrollbar-thin ">
      <div className="max-w-[477px] h-[106px] lg:min-w-[1143px] lg:h-[62px] md:w-[499px] md:max-h-[106px] flex flex-col md:items-center lg:flex-row  justify-between   md:py-[11px] md:px-[8px] py-[11px] px-[20px]">
        <div className="md:flex hidden flex-row">
          <div>India</div>
          <MdKeyboardArrowRight />
          <div>Bihar</div>
          <MdKeyboardArrowRight />
          <div>Patna</div>
        </div>

        <div className="flex md:hidden flex-row justify-between">
          <div className="flex flex-row">
            <div>India</div>
            <MdKeyboardArrowRight />
            <div>Bihar</div>
            <MdKeyboardArrowRight />
            <div>Patna</div>
          </div>
          <div>
            <GiHamburgerMenu />
          </div>
        </div>

        <div className="flex flex-row gap-[20px] justify-between md:w-[443.07px] md:h-[35px] md:gap-[23px] lg:w-[419.07px] lg:h-[35px] lg:gap-[15px]">
          <div className="flex gap-[5px] items-center">
            <div>Map View</div>
            <CgToggleOn className="w-5 h-5" />
          </div>
          <div className="flex gap-[5px] items-center">
            <div>Sort By</div>
            <div>
              <select className="rounded-[4px] border border-1 border-gray-400 p-[5px]">
                <option>Popularity</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[32px] lg:ml-[13px] md:ml-[28px] px-[20px] md:px-[0]  ">
        {list?.map((items, index) => (
          <div
            className="w-[439px] h-[508px] lg:w-[1091px] lg:h-[267px] md:w-[439px] md:h-[515px]  flex lg:flex-row flex-col gap-[9px] "
            key={index}
          >
            {/* images rectangle*/}
            <div className="lg:w-[438.95px] lg:h-[266.97px] w-[439px] h-[299px] gap-[4px] flex lg:flex-row flex-col lg:gap-[12px]">
              <div className="relative lg:w-[279px] lg:h-[266.97px] w-[439px] min-h-[209.87px] rounded-[8.02px]">
                <Image
                  src="/assests/rectangle-83@2x.png"
                  alt="main image"
                  fill={true}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="lg:w-[147.95px] lg:h-[265.39px] w-[439px] h-[85.13px] flex lg:flex-col flex-row gap-[5px]">
                <div className="relative lg:w-[147.95px] lg:h-[85.13px] w-[143.95px] h-[85.13px] rounded-[1.7px]">
                  <Image
                    src="/assests/rectangle-83-1@2x.png"
                    alt="main image"
                    fill={true}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative lg:w-[147.95px] lg:h-[85.13px] w-[143.95px] h-[85.13px] rounded-[1.7px]">
                  <Image
                    src="/assests/rectangle-83-2@2x.png"
                    alt="main image"
                    fill={true}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative lg:w-[147.95px] lg:h-[85.13px] w-[143.95px] h-[85.13px] rounded-[1.7px]">
                  <Image
                    src="/assests/rectangle-83-3@2x.png"
                    alt="main image"
                    fill={true}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* details rectangle*/}
            <div className="lg:w-[643px] lg:h-[259px] w-[439px] h-[192px] lg:ml-[20px] flex flex-col justify-between">
              <div className="lg:w-[410px] lg:max-h-[74.82px] w-[410px] h-[74.82px] md:h-[70px] flex flex-col">
                <div>Super Collection Avenue near Gandhi maidan</div>
                <div className="flex">
                  Gandhi maidan,patna&nbsp;&nbsp;
                  <IoLocationSharp style={{ color: "#3D52A0" }} />
                  3.3 km
                </div>
                <div className="flex flex-row gap-[10px]">
                  <div className="flex gap-[5px] bg-[#3D52A0] text-white p-1">
                    3.7 <FaStar />
                  </div>
                  <div>
                    112 ratings <span>Good</span>
                  </div>
                </div>
              </div>

              <div className="lg:w-[362px] lg:h-[32px] md:w-[358px] w-[356px] h-[32px] flex flex-row gap-[20px]">
                <div className="flex gap-[10px]">
                  <MdOutlineWifi />
                  Free wifi
                </div>
                <div className="flex gap-[10px]">
                  <BsFillTvFill />
                  Tv
                </div>
                <div className="flex gap-[10px]">
                  <TbAirConditioning /> Ac
                </div>
                <div>+ 4 more</div>
              </div>

              <div className="lg:w-[641px] lg:h-[41px] w-[437px] h-[41px] flex flex-row justify-between items-center">
                <div>Rs 10,000</div>

                <div className="flex flex-row gap-[10px] w-[311px] h-[41px] ">
                  <button className="w-[139px] h-[41px] border-1 rounded-[4px]">
                    View Details
                  </button>
                  <button className="w-[139px] h-[41px] text-white border-1 rounded-[4px] bg-[#002855]">
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
