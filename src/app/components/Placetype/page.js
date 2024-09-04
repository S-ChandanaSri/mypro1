"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import house from "../../_assets/images/house.png";
import room from "../../_assets/images/room.png";
import cilroom from "../../_assets/images/cilroom.png";
//import { useLocation, useNavigate } from 'react-router-dom';

export default function Placetype({ listingid }) {
  const [placetype, setPlacetype] = useState(null);

  const handletype = (firstoption) => () => {
    setPlacetype(firstoption);
  };

  useEffect(() => {
    if (placetype && listingid) {
      fetch("http://localhost:3001/placetype", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ placetype, id: listingid }),
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
    }
  }, [placetype, listingid]);

  return (
    <>
      <div className="relative left-[450px] flex h-[670px] flex-col items-center">
        <div className="relative top-[55px] h-[106px] w-[640px] gap-[46px]">
          <p className="custo-font h-[53px] w-[640px] text-center text-[35px] font-[400] leading-[52.5px] tracking-[0.46px] text-[#000000]">
            What type of place will guest have?
          </p>
        </div>
        <div className="flex flex-col items-center">
          <button
            onClick={handletype("an entire place")}
            className={`relative left-[7px] top-[44px] h-[135px] w-[666px] gap-[10px] rounded-[15px] border-[2px] border-[#000000] px-[22px] py-[20px] ${placetype === "an entire place" ? "border-4 border-blue-500" : "border-[#8E98A8]"}`}
          >
            <div className="flex h-[74px] w-[620px] items-center gap-[161px] pt-5">
              <div className="h-[74px] w-[401px] gap-[9px]">
                <p className="custo-font h-[38px] w-[401px] text-left text-[25px] font-[400] leading-[37.5px] tracking-[0.46px] text-[#000000]">
                  An entire place
                </p>
                <p className="custo-font h-[27px] w-[401px] text-left text-[18px] font-[300] leading-[27px] tracking-[0.46px] text-[#000000]">
                  Guest will have whole place to live or enjoy
                </p>
              </div>
              <Image
                alt=""
                width={58}
                height={58}
                src={house}
                className="h-[58px] w-[58px]"
              />
            </div>
          </button>
          <button
            onClick={handletype("a room")}
            className={`relative left-[7px] top-[68px] h-[135px] w-[666px] gap-[10px] rounded-[15px] border-[2px] border-[#000000] px-[22px] py-[20px] ${placetype === "a room" ? "border-4 border-blue-500" : "border-[#8E98A8]"}`}
          >
            <div className="flex h-[74px] w-[620px] items-center gap-[161px] pt-2">
              <div className="h-[74px] w-[401px] gap-[9px]">
                <p className="custo-font h-[38px] w-[401px] text-left text-[25px] font-[400] leading-[37.5px] tracking-[0.46px] text-[#000000]">
                  A room
                </p>
                <p className="custo-font h-[27px] w-[481px] text-left text-[18px] font-[300] leading-[27px] tracking-[0.46px]">
                  Guest will have only a small part of the house to live or
                  enjoy
                </p>
              </div>
              <Image
                alt=""
                width={58}
                height={58}
                src={cilroom}
                className="h-[58px] w-[58px]"
              />
            </div>
          </button>
          <button
            onClick={handletype("a shared room")}
            className={`relative left-[7px] top-[90px] h-[135px] w-[666px] gap-[10px] rounded-[15px] border-[2px] border-[#000000] px-[22px] py-[20px] ${placetype === "a shared room" ? "border-4 border-blue-500" : "border-[#8E98A8]"}`}
          >
            <div className="flex h-[74px] w-[620px] items-center gap-[161px] pt-4">
              <div className="h-[74px] w-[401px] gap-[9px]">
                <p className="custo-font h-[38px] w-[401px] text-left text-[25px] font-[400] leading-[37.5px] tracking-[0.46px] text-[#000000]">
                  A shared room
                </p>
                <p className="custo-font h-[27px] w-[601px] text-left text-[18px] font-[300] leading-[27px] tracking-[0.46px] text-[#000000]">
                  Guest will have a shared place to live or enjoy
                </p>
              </div>
              <Image
                alt=""
                width={58}
                height={58}
                src={room}
                className="h-[58px] w-[58px]"
              />
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
