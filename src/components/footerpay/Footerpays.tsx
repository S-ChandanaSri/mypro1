//@ts-nocheck

"use client";
import React from "react";
import { ThreeDots } from "react-loader-spinner";

export default function Footerpays({
  isLoading,
  buttonText,
  onClick,
  onBack,
  currentstep,
  listingid,
}) {
  // listingid is now a prop and can be used as needed

  const handleBackButton = () => {
    if (onBack) {
      onBack();
    }
    // If navigate is not used, you can remove this
    // else {
    //   navigate(-1);
    // }
  };

  const totalSteps = 3;
  const progressPercentage = (currentstep / totalSteps) * 100;

  return (
    <>
      <div className="relative h-[5px] w-full bg-[#E0E0E0]">
        <div
          style={{
            width: `${progressPercentage}%`,
            transition: "width 0.5s ease-in-out",
            backgroundColor: "",
            borderTop: "2px solid #8E98A8",
          }}
          className="absolute left-0 top-0 h-full border-t-2 border-[#8E98A8] bg-[#002855]"
        ></div>
      </div>
      <div className="w-full bg-[#FFFFFF]">
        <div className="flex items-center justify-between px-4 py-2">
          <button
            onClick={handleBackButton}
            className="h-[60px] w-[153px] rounded-[8px] bg-[#CCCCCC] px-[28px] py-[16px]"
          >
            <p className="text-[18px] font-[400] leading-[27px] text-[#000000]">
              Back
            </p>
          </button>
          <button
            onClick={onClick}
            className="flex h-[60px] w-[153px] items-center justify-center rounded-[8px] bg-[#002855] px-[28px] py-[16px]"
          >
            {isLoading ? (
              <ThreeDots
                height="40"
                width="40"
                radius="9"
                color="white"
                ariaLabel="three-dots-loading"
                visible={true}
              />
            ) : (
              <p className="text-[18px] font-[400] leading-[27px] text-[#FFFFFF]">
                {buttonText}
              </p>
            )}
          </button>
        </div>
      </div>
    </>
  );
}
