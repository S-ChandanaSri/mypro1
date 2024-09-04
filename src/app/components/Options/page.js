import React from "react";
import Image from "next/image";
import mattress2 from "../../_assets/images/mattress2.png";
import mattress1 from "../../_assets/images/mattress1.png";
import mattress3 from "../../_assets/images/mattress3.png";

export default function page() {
  return (
    <>
      <div className="relative bottom-[80px] flex h-[575px]">
        <div className="relative left-[140px] top-[310px] h-[136px] w-[568px]">
          <p className="custo-font text-center text-[45px] font-[500] leading-[67.5px] tracking-[0.46px] text-[#000000]">
            You,re just three steps to setup your zenden
          </p>
        </div>
        <div className="flex flex-col items-center justify-between">
          <div className="relative left-[250px] top-[100px] flex h-[115.07px] w-[623px]">
            <div className="h-[107px] w-[448px]">
              <p className="custo-font h-[53px] w-[448px] text-left text-[35px] font-[400] leading-[52.5px] tracking-[0.46px] text-[#000000]">
                1.Tell us about your place
              </p>
              <p className="custo-font h-[54px] w-[394px] text-left text-[18px] font-[300] leading-[27px] tracking-[0.46px] text-[#000000]">
                Share some basic info, like where it is and how many guest can
                stay
              </p>
            </div>
            <Image src={mattress1} width={129} height={115.07} alt="" />
          </div>
          <div className="relative left-[250px] top-[100px] flex h-[115.07px] w-[623px]">
            <div className="h-[107px] w-[448px]">
              <p className="custo-font h-[53px] w-[448px] text-left text-[35px] font-[400] leading-[52.5px] tracking-[0.46px] text-[#000000]">
                2.Make it stand out
              </p>
              <p className="custo-font h-[54px] w-[394px] text-left text-[18px] font-[300] leading-[27px] tracking-[0.46px] text-[#000000]">
                Add 5 or more photos plus title and little description
              </p>
            </div>
            <Image src={mattress3} width={129} height={115.07} alt="" />
          </div>
          <div className="relative left-[250px] top-[100px] flex h-[115.07px] w-[623px]">
            <div className="h-[107px] w-[448px]">
              <p className="custo-font h-[53px] w-[448px] text-left text-[35px] font-[400] leading-[52.5px] tracking-[0.46px] text-[#000000]">
                3.Finish up and publish
              </p>
              <p className="custo-font h-[54px] w-[394px] text-left text-[18px] font-[300] leading-[27px] tracking-[0.46px] text-[#000000]">
                Choose if you like to start with an experienced guest ,set up
                starting price and publish your listing
              </p>
            </div>
            <Image src={mattress2} width={129} height={115.07} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
