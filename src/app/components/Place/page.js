"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import phhouse from "../../_assets/images/phhouse.png";
import phbuild from "../../_assets/images/phbuild.png";

export default function Place({
  selectedOption,
  setSelectedOption,
  setIsLoading,
  setListingid,
}) {
  const [color, setColor] = useState("blue");
  const options = [
    "House",
    "Apartment",
    "Villa",
    "Duplex",
    "Penthouse",
    "Farmhouse",
    "Bungalow",
    "Flats",
    "Studiohouse",
  ];

  const handleColor = (option) => {
    setColor(option);
    setSelectedOption(option);
  };

  useEffect(() => {
    if (selectedOption) {
      setIsLoading(true);

      fetch("http://localhost:3001/sendplace", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ selectedOption }),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          return response.text().then((text) => {
            throw new Error(text);
          });
        })
        .then((data) => {
          console.log("Response data:", data);
          setListingid(data.id);
          setIsLoading(false);
        })
        .catch((err) => {
          console.error("Error:", err);
          setIsLoading(false);
        });
    }
  }, [selectedOption, setIsLoading, setListingid]);

  return (
    <>
      <div className="relative left-[450px] flex h-[670px] flex-col items-center">
        <div className="relative top-[28px] h-[106px] w-[573px] gap-[46px]">
          <p className="custo-font h-[106px] w-[573px] text-center text-[35px] font-[400] leading-[52.5px] tracking-[0.46px] text-[#000000]">
            Which of these best describes your place?
          </p>
        </div>
        <div className="grid w-[590px] grid-cols-3 gap-8 pt-12">
          {options.map((option, index) => (
            <div key={index} className="h-[133px] gap-[10px]">
              <button
                onClick={() => handleColor(option)}
                className={`h-[133px] w-[186px] gap-[10px] rounded-[7px] border-[1px] px-[15px] py-[29px] ${color === option ? "border-[5px] border-blue-700" : "border-[#8E98A8]"}`}
              >
                <div className="relative left-[10px] flex h-[96px] w-[90px] flex-col items-center gap-[10px]">
                  <Image
                    alt=""
                    width={48}
                    height={48}
                    src={option === "House" ? phhouse : phbuild}
                    className="h-[48px] w-[48px]"
                  />
                  <p className="custo-font h-[38px] w-[80px] text-[25px] font-[400] leading-[37.5px] tracking-[0.46px] text-[#000000]">
                    {option}
                  </p>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
