"use client";
import React, { useState } from "react";

export default function Describe({ listingid }) {
  const [text, setText] = useState("");

  const handleTextChange = (event) => {
    if (event.target.value.length <= 36) {
      setText(event.target.value);
    }
  };

  console.log(";;;;;", text);

  fetch("http://localhost:3001/descriptionn", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text, id: listingid }),
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
    <>
      <div className="w-[1166px]">
        <div className="relative left-[470px] top-[150px] h-[336px] w-[672px]">
          <div className="h-[306px] w-[672px]">
            <div className="h-[67px] w-[637px]">
              <p className="custo-font h-[34px] w-[637px] text-[35px] font-[500] leading-[24px] text-[#000000]">
                Create your description
              </p>
              <p className="custo-font h-[23px] w-[637px] text-[16px] font-[300] leading-[24px] text-[#000000]">
                Share what makes your place special
              </p>
            </div>
            <textarea
              className="h-[209px] w-[672px] rounded-[5px] border-[1px] border-[#000000]"
              onChange={handleTextChange}
              value={text}
            ></textarea>
          </div>
        </div>
        <p className="custo-font relative left-[470px] top-[90px] h-[24px] w-[672px] text-[16px] font-[400] leading-[24px] tracking-[0.46px] text-[#000000]">
          {text.length}/26
        </p>
      </div>
    </>
  );
}
