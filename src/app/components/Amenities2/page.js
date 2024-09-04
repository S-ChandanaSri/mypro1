"use client";
import React from "react";
import Image from "next/image";
import plus1 from "../../_assets/images/plus1.png";
import subt1 from "../../_assets/images/subt1.png";

export default function Amenities2({
  label1,
  label2,
  handleminus,
  handleplus,
  count,
}) {
  return (
    <div>
      <div className="relative top-[106px] flex h-[38px] w-[667px] justify-between">
        <div>
          <p className="custo-font h-[27px] w-[210px] text-[18px] font-[400] leading-[27px] tracking-[0.46px] text-[#000000]">
            {" "}
            {label1}{" "}
          </p>
          <p className="custo-font h-[38px] w-[329px] pt-1 text-[12px] font-[300] leading-[18px] tracking-[0.46px] text-[#000000]">
            {label2}
          </p>
        </div>
        <div className="flex h-[30px] w-[94px] gap-[12px]">
          <button
            className="h-[30px] w-[30px] rounded-[50%] border-[0.51px] border-[#000000]"
            onClick={handleminus}
          >
            <Image
              alt=""
              src={subt1}
              width={14.24}
              height={14.24}
              className="relative left-[7px] top-[1.63px] h-[14.24px] w-[14.24px]"
            />
          </button>
          <p className="custo-font h-[27px] w-[11px] text-[18px] font-[400] leading-[27px] tracking-[0.46px] text-[#000000]">
            {" "}
            {count}{" "}
          </p>
          <button
            className="h-[30px] w-[30px] rounded-[50%] border-[0.51px] border-[#000000]"
            onClick={handleplus}
          >
            <Image
              alt=""
              src={plus1}
              width={14.24}
              height={14.24}
              className="relative left-[7px] top-[1.63px] h-[14.24px] w-[14.24px]"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
