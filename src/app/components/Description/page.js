"use client";
import React, { useState } from "react";
import Image from "next/image";
import peace from "../../_assets/images/peace.png";

export default function Description({ listingid }) {
  const [selectedopt, setSelectedOpt] = useState([]);
  const optons = [
    "Peaceful",
    "Central",
    "Unique",
    "Family-friendly",
    "Spacious",
    "Stylish",
  ];

  const handlecolor = (option) => {
    if (selectedopt.includes(option)) {
      setSelectedOpt(selectedopt.filter((item) => item !== option));
    } else if (selectedopt.length < 2) {
      setSelectedOpt([...selectedopt, option]);
    }
  };

  console.log("99999", selectedopt);
  fetch("http://localhost:3001/describeproperty", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ selectedopt, id: listingid }),
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
      console.log("success");

      console.log("success", data.id);
    })
    .catch((err) => console.error("Error:", err));
  return (
    <div>
      <div className="w-[1166px]">
        <div className="relative left-[470px] top-[150px] h-[336px] w-[672px]">
          <div className="h-[306px] w-[672px]">
            <div className="h-[67px] w-[637px]">
              <p className="custo-font h-[34px] w-[637px] text-[35px] font-[500] leading-[24px] text-[#000000]">
                Next, Let’s describe your property
              </p>
              <p className="custo-font h-[23px] w-[637px] pt-1 text-[16px] font-[300] leading-[24px] text-[#000000]">
                Choose up to 2 highlights. We’ll use this to get your
                description ready.
              </p>
            </div>
            <div className="relative left-[0px] top-[30px] grid h-[81px] w-[449px] grid-cols-4 gap-5">
              {optons.map((option, index) => (
                <div key={index} className="h-[36px] w-[104px]">
                  <button
                    onClick={() => handlecolor(option)}
                    className={`h-[36px] w-[105px] rounded-[26.31px] border-[0.61px] px-[12.24px] py-[6.12px] ${
                      selectedopt.includes(option)
                        ? "border-4 border-pink-700"
                        : "border-[#8E98A8]"
                    }`}
                  >
                    <div className="flex h-[22.02px]">
                      <Image
                        width={22.02}
                        height={22.02}
                        src={peace}
                        className="h-[22.02px] w-[22.02px]"
                        alt="peace icon"
                      />
                      <p className="custo-font h-[15px] w-[123px] pt-1 text-[9.79px] font-[400] leading-[14.68px] text-[#000000]">
                        {option}
                      </p>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
