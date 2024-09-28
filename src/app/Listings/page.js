"use client";
import React, { useState } from "react";
import rectangle from "../../../public/res/images/components/rectangle.png";
//import { Link,useNavigate } from 'react-router-dom';
import Navbar from "../Navbar/page.js";
import { ThreeDots } from "react-loader-spinner";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Listings() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const handlebutton = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push("/components/Steps");
    }, 3000);
  };

  return (
    <div className="h-[1124px] bg-[#FFFFFF]">
      <Navbar />

      <div className="flex items-center justify-evenly">
        <div className="relative left-[5rem] top-[110px] h-[373px] w-[461px] gap-[8px]">
          <div className="flex h-[190px] w-[420px] flex-col items-center">
            <p className="custom-font ml-[10px] mt-[-1px] h-[107px] w-[26rem] text-[75px] font-[400] leading-[107.3px] tracking-[0.46px] text-[#002855]">
              ZENDEN
            </p>
            <p className="custo-font mr-[45px] mt-[-1px] h-[83px] w-[26rem] text-[55px] font-[400] leading-[82.5px] tracking-[0.46px] text-[#000000]">
              You could earn
            </p>
          </div>
          <div className="flex h-[110px] w-[335px] flex-col items-center">
            <p className="custo-font ml-[8rem] mt-[-1px] h-[5rem] w-[21rem] text-[55px] font-[400] leading-[82.5px] text-[#002855]">
              50,000
            </p>
            <p className="custo-font mt-[-1px] h-[27px] w-[21rem] text-[18px] font-[400] leading-[27px] tracking-[0.46px] text-[#000000]">
              7nights at an estimated 5000/night
            </p>
          </div>
          <div className="h-[107px] w-[461px] gap-[10px]">
            <p className="custo-font top-[-1px] h-[27px] w-[30rem] text-left text-[18px] font-[300] leading-[27px] tracking-[0.46px] text-[#000000]">
              Learn how we estimate your earnings
            </p>
          </div>

          <button
            onClick={handlebutton}
            className="ml-[4rem] mt-[-1rem] h-[4rem] w-[11rem] gap-[8px] rounded-[8px] border-[1px] border-[#6941C6] bg-[#002855]"
          >
            {isLoading ? (
              <ThreeDots
                height="40"
                width="40"
                radius="9"
                color="white"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClass="flex justify-center items-center"
                visible={true}
              />
            ) : (
              <p className="inter-font relative right-4 top-[4px] h-[28px] w-[218px] text-[18px] font-[400] leading-[18px] tracking-[0.46px] text-[white]">
                ZENDEN SETUP
              </p>
            )}
          </button>
        </div>
        <div className="relative left-[45px] top-[149px] h-[827px] w-[804px] rounded-[15px] border-[#D9D9D9]">
          <Image src={rectangle} alt="" />
        </div>
      </div>
    </div>
  );
}
