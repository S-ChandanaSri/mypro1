"use client";
import React, { useState } from "react";
import plus1 from "../../_assets/images/plus1.png";
import subt1 from "../../_assets/images/subt1.png";
import Image from "next/image";
//import { useLocation, useNavigate } from 'react-router-dom';

export default function Amenities1({ listingid }) {
  const [isClicked, setIsClicked] = useState(null);
  const [countguests, setCountGuests] = useState(0);
  const [countBedrooms, setCountBedrooms] = useState(0);
  const [countBeds, setCountBeds] = useState(0);

  const handleClick = (button) => {
    setIsClicked(button);
  };

  if (listingid) {
    console.log("sssssssssssssss:", listingid);
  }

  fetch("http://localhost:3001/amenities1", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      countguests,
      countBedrooms,
      countBeds,
      isClicked,
      idd: listingid,
    }),
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
    })
    .catch((err) => console.error("Error:", err));

  return (
    <>
      <div className="relative left-[350px] flex h-[670px] flex-col items-center">
        <div className="h-[914px] w-[1166px] rounded-[15px] border-[black]">
          <p className="custo-font relative top-[30px] h-[53px] w-[392px] text-[35px] font-[400] leading-[52.5px] tracking-[0.46px] text-[#000000]">
            {" "}
            Let’s start with basics{" "}
          </p>
          <p className="custo-font relative top-[70px] h-[27px] w-[322px] text-[18px] font-[500] leading-[27px] tracking-[0.46px] text-[#000000]">
            {" "}
            How many people can stay here?{" "}
          </p>
          <div className="relative top-[30px]">
            <div className="relative top-[106px] flex h-[38px] w-[667px] justify-between">
              <p className="custo-font h-[38px] w-[88px] text-[25px] font-[300] leading-[37.5px] tracking-[0.46px] text-[#000000]">
                {" "}
                Guests{" "}
              </p>
              <div className="flex h-[30px] w-[94px] gap-[12px]">
                <button
                  className="h-[30px] w-[30px] rounded-[50%] border-[0.51px] border-[#000000]"
                  onClick={() => setCountGuests(countguests + 1)}
                >
                  <Image
                    src={plus1}
                    width={17.8}
                    height={17.8}
                    className="relative left-[6.1px] h-[17.8px] w-[17.8px]"
                    alt="plus"
                  />
                </button>
                <p className="custo-font h-[27px] w-[11px] text-[18px] font-[400] leading-[27px] tracking-[0.46px] text-[#000000]">
                  {" "}
                  {countguests}{" "}
                </p>
                <button
                  className="h-[30px] w-[30px] rounded-[50%] border-[0.51px] border-[#000000]"
                  onClick={() => setCountGuests(countguests - 1)}
                >
                  <Image
                    src={subt1}
                    width={14.24}
                    height={14.24}
                    className="relative left-[7px] top-[1.63px] h-[14.24px] w-[14.24px]"
                    alt="minus"
                  />
                </button>
              </div>
            </div>

            <div className="relative left-[2px] top-[112px] w-[667px] border-[1px] border-[#8E98A8]"></div>

            <div className="relative top-[142px] flex h-[38px] w-[667px] justify-between">
              <p className="custo-font h-[38px] w-[88px] text-[25px] font-[300] leading-[37.5px] tracking-[0.46px] text-[#000000]">
                {" "}
                Bedrooms{" "}
              </p>
              <div className="flex h-[30px] w-[94px] gap-[12px]">
                <button
                  className="h-[30px] w-[30px] rounded-[50%] border-[0.51px] border-[#000000]"
                  onClick={() => setCountBedrooms(countBedrooms + 1)}
                >
                  <Image
                    src={plus1}
                    width={17.8}
                    height={17.8}
                    className="relative left-[6.1px] h-[17.8px] w-[17.8px]"
                    alt="plus"
                  />
                </button>
                <p className="custo-font h-[27px] w-[11px] text-[18px] font-[400] leading-[27px] tracking-[0.46px] text-[#000000]">
                  {" "}
                  {countBedrooms}{" "}
                </p>
                <button
                  className="h-[30px] w-[30px] rounded-[50%] border-[0.51px] border-[#000000]"
                  onClick={() => setCountBedrooms(countBedrooms - 1)}
                >
                  <Image
                    src={subt1}
                    width={14.24}
                    height={14.24}
                    className="relative left-[7px] top-[1.63px] h-[14.24px] w-[14.24px]"
                    alt="minus"
                  />
                </button>
              </div>
            </div>
            <div className="relative left-[2px] top-[153px] w-[667px] border-[1px] border-[#8E98A8]"></div>

            <div className="relative top-[180px] flex h-[38px] w-[667px] justify-between">
              <p className="custo-font h-[38px] w-[88px] text-[25px] font-[300] leading-[37.5px] tracking-[0.46px] text-[#000000]">
                {" "}
                Beds{" "}
              </p>
              <div className="flex h-[30px] w-[94px] gap-[12px]">
                <button
                  className="h-[30px] w-[30px] rounded-[50%] border-[0.51px] border-[#000000]"
                  onClick={() => setCountBeds(countBeds + 1)}
                >
                  <Image
                    src={plus1}
                    width={17.8}
                    height={17.8}
                    className="relative left-[6.1px] h-[17.8px] w-[17.8px]"
                    alt="plus"
                  />
                </button>
                <p className="custo-font h-[27px] w-[11px] text-[18px] font-[400] leading-[27px] tracking-[0.46px] text-[#000000]">
                  {" "}
                  {countBeds}{" "}
                </p>
                <button
                  className="h-[30px] w-[30px] rounded-[50%] border-[0.51px] border-[#000000]"
                  onClick={() => setCountBeds(countBeds - 1)}
                >
                  <Image
                    src={subt1}
                    width={14.24}
                    height={14.24}
                    className="relative left-[7px] top-[1.63px] h-[14.24px] w-[14.24px]"
                    alt="minus"
                  />
                </button>
              </div>
            </div>

            <div className="relative left-[2px] top-[190px] w-[667px] border-[1px] border-[#8E98A8]"></div>
          </div>
        </div>

        <div className="relative left-[-350px] top-[-40px] h-[174px] w-[460px]">
          <p className="custo-font h-[54px] w-[490px] text-[18px] font-[500] leading-[27px] tracking-[0.46px] text-[#000000]">
            {" "}
            Do bedroom have separate locks or connected to each other?{" "}
          </p>
          <div className="h-[87px] w-[432px]">
            <div className="flex h-[27px] w-[432px] justify-between pt-4">
              <p className="custo-font h-[27px] w-[147px] text-[18px] font-[400] leading-[27px] tracking-[0.46px] text-[#000000]">
                {" "}
                Separate Lock{" "}
              </p>
              <button
                onClick={() => handleClick(0)}
                className={`h-[25px] w-[25px] rounded-[50%] border-[2px] border-[#002855] ${isClicked === 0 ? "bg-blue-800" : ""}`}
              ></button>{" "}
            </div>
            <div className="flex h-[27px] w-[432px] justify-between pt-8">
              <p className="custo-font h-[27px] w-[197px] text-[18px] font-[400] leading-[27px] tracking-[0.46px] text-[#000000]">
                {" "}
                Connected to eachother{" "}
              </p>
              <button
                onClick={() => handleClick(1)}
                className={`h-[25px] w-[25px] rounded-[50%] border-[2px] border-[#002855] ${isClicked === 1 ? "bg-blue-800" : ""}`}
              ></button>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
