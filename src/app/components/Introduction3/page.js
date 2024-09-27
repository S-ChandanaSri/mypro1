"use client";
import React from "react";
import Image from "next/image";
import jhome from "../../_assets/images/jhome.png";

export default function Display() {
  return (
    <>
      <div className="flex h-[555px]">
        <div className="relative left-[98px] top-[-10px] h-[114px] w-[509px] gap-[46px]">
          <div className="flex h-[114px] w-[448px] flex-col items-center pb-3 pl-11 text-left">
            <p className="custo-font relative left-[163px] top-[224px] h-[120px] w-[653px] text-[40px] font-[400] leading-[60px] tracking-[0.46px] text-[#000000]">
              3.Make your place stand out
            </p>
            <p className="custo-font relative left-[133px] top-[224px] h-[54px] w-[539px] text-[18px] font-[300] leading-[27px] tracking-[0.46px] text-[#000000]">
              Add images ,photos and cutomize them to make them stand out{" "}
            </p>
          </div>
          <Image
            width={1000}
            alt=""
            height={571.17}
            src={jhome}
            className="relative left-[692px] top-[-106px] h-[571.17px] w-[1000px]"
          />
        </div>
      </div>
    </>
  );
}
