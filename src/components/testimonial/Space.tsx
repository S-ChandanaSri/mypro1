"use client";
import Image from "next/image";
import check from "../../../public/res/images/teams/check.svg";

const Space = () => {
  return (
    <div className="ml-2 mt-8 h-12 w-64">
      <div className="flex h-[26px] w-[152px] bg-[#ECFDF5] pl-2">
        <Image src={check} alt="" />
        <p className="font-Semi-Bold relative bottom-[6rem] left-2 text-xs leading-[18] text-[#B5B2FF]">
          Verified Purchase
        </p>
      </div>
    </div>
  );
};
export default Space;
