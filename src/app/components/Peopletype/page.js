"use client";
import React, { useState } from "react";
import Image from "next/image";
import people from "../../_assets/images/people.png";
import peopleline from "../../_assets/images/peopleline.png";
import peoplesharp from "../../_assets/images/peoplesharp.png";
//import { useLocation, useNavigate } from 'react-router-dom';

export default function Peopletype({ listingid }) {
  const [peopletype, setPeopletype] = useState(null);

  const handlepeople = (secondoption) => () => {
    setPeopletype(secondoption);
  };
  fetch("http://localhost:3001/peopletype", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ peopletype, id: listingid }),
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
      <div className="relative left-[252px] flex flex-col rounded-[15px]">
        <div className="relative left-[0px] top-[-80px] h-[80px] w-[668px]">
          <p className="custo-font relative h-[53px] w-[523px] text-[35px] font-[400] leading-[52.5px] tracking-[0.46px] text-[#000000]">
            {" "}
            Who else might be there ?{" "}
          </p>
          <p className="custo-font relative h-[27px] w-[548px] pt-2 text-[18px] font-[300] leading-[27px] tracking-[0.46px] text-[#000000]">
            {" "}
            Guest need to know whether they will encounter with other people
            there{" "}
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <button
            onClick={handlepeople("me")}
            className={`flex h-[133px] w-[186px] flex-col items-center rounded-[7px] border-[1px] border-[#8E98A8] px-[15px] py-[29px] ${peopletype === "me" ? "border-4 border-blue-500" : "border-[#8E98A8]"} `}
          >
            <div className="ga-[10px] relative left-6 h-[94px] w-[90px]">
              <Image
                alt=""
                width={48}
                height={48}
                src={people}
                className="h-[48px] w-[48px]"
              />
              <p className="custo-font relative h-[36px] w-[80px] pr-10 text-[24px] font-[400] leading-[36px] tracking-[0.46px] text-[#000000]">
                {" "}
                Me{" "}
              </p>
            </div>
          </button>
          <button
            onClick={handlepeople("family")}
            className={`flex h-[133px] w-[206px] flex-col items-center rounded-[7px] border-[1px] border-[#8E98A8] px-[15px] py-[29px] ${peopletype === "family" ? "border-[5px] border-blue-700" : "border-[#8E98A8]"} `}
          >
            <div className="ga-[10px] h-[94px] w-[90px]">
              <Image
                alt=""
                width={48}
                height={48}
                src={peopleline}
                className="relative left-[10px] h-[48px] w-[48px]"
              />
              <p className="custo-font relative right-[25px] h-[36px] w-[160px] pr-10 text-[24px] font-[400] leading-[36px] tracking-[0.46px] text-[#000000]">
                {" "}
                My family{" "}
              </p>
            </div>
          </button>
          <button
            onClick={handlepeople("other")}
            className={`flex h-[133px] w-[210px] flex-col items-center rounded-[7px] border-[1px] border-[#8E98A8] px-[15px] py-[29px] ${peopletype === "other" ? "border-[5px] border-blue-700" : "border-[#8E98A8]"} `}
          >
            <div className="ga-[10px] h-[94px] w-[80px]">
              <Image
                alt=""
                width={48}
                height={48}
                src={peoplesharp}
                className="relative left-[10px] h-[48px] w-[48px]"
              />
              <p className="custo-font relative right-[45px] h-[36px] w-[200px] pr-5 text-[24px] font-[400] leading-[36px] tracking-[0.46px] text-[#000000]">
                {" "}
                Other guests{" "}
              </p>
            </div>
          </button>
          <button
            onClick={handlepeople("roomates")}
            className={`flex h-[133px] w-[186px] flex-col items-center rounded-[7px] border-[1px] border-[#8E98A8] px-[15px] py-[29px] ${peopletype === "roomates" ? "border-[5px] border-blue-700" : "border-[#8E98A8]"} `}
          >
            <div className="ga-[10px] h-[94px] w-[80px]">
              <Image
                alt=""
                width={39}
                height={39}
                src={peoplesharp}
                className="relative left-[10px] h-[39px] w-[39px]"
              />
              <p className="custo-font relative right-[20px] h-[36px] w-[80px] text-[24px] font-[400] leading-[36px] tracking-[0.46px] text-[#000000]">
                {" "}
                Roomates{" "}
              </p>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
