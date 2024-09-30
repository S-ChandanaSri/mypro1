"use client";
import React from "react";
import Image from "next/image";
import img1 from "../../../public/res/images/components/Logo1.png";
import materialblack from "../../../public/res/images/components/materialblack.png";
import userblack from "../../../public/res/images/components/userblack.png";
import quillblack from "../../../public/res/images/components/quillblack.png";

const Navbar = () => {
  return (
    <div className="flex h-[72px] items-center justify-between bg-[#3D52A0] pb-[15px] pl-[55px] pr-[45px] pt-[15px] shadow-[0px_-1px_1px_0px_#0000001A_inset]">
      <div className="flex h-[34px] w-[134px]">
        <Image
          width={44}
          height={44}
          src={img1}
          alt=""
          className="relative bottom-2.5 h-[44px] w-[44px]"
        />
        <p className="custom-font left-[39px] top-[2px] h-[29px] w-[99px] text-left text-[24px] font-normal leading-[34.34px] text-white">
          ZENDEN
        </p>
      </div>
      <div className="flex h-[18px] w-[239px] gap-[30px]">
        <div className="h-[18px] w-[58px]">
          <p className="custo-font top-[-1px] h-[21px] w-[60.15px] text-left text-[14px] font-medium leading-[21px] tracking-[0.2px] text-[#FFFFFF]">
            Services
          </p>
        </div>
        <div className="h-[18px] w-[63px]">
          <p className="custo-font top-[-2px] h-[21px] w-[91.26px] text-left text-[14px] font-medium leading-[21px] tracking-[0.2px] text-[#FFFFFF]">
            Features
          </p>
        </div>
        <div className="h-[18px] w-[58px]">
          <p className="custo-font top-[-1px] h-[21px] w-[65px] text-left text-[14px] font-medium leading-[21px] tracking-[0.2px] text-[#FFFFFF]">
            About Us
          </p>
        </div>
      </div>
      <div className="flex h-[42px] w-[215px] gap-[20px]">
        <button className="flex h-[40px] w-[123px] gap-[10px] rounded-[5px] border-[1px] border-[#FFFFFF] bg-[#FFFFFF] pb-[8px] pl-[14px] pr-[22px] pt-[7px]">
          <Image
            width={24}
            height={24}
            src={materialblack}
            alt=""
            className="h-[24px] w-[24px]"
          />
          <p className="text-black">Login</p>
        </button>
        <button className="flex h-[42px] w-[106px] gap-[10px] rounded-[5px] border-[1px] border-[#FFFFFF] bg-[#FFFFFF] pb-[8px] pl-[16px] pr-[22px] pt-[8px]">
          <Image
            width={28}
            height={26}
            src={userblack}
            alt=""
            className="h-[26px] w-[28px]"
          />
          <Image
            width={24}
            height={24}
            src={quillblack}
            alt=""
            className="h-[24px] w-[24px]"
          />
        </button>
      </div>
    </div>
  );
};
export default Navbar;
