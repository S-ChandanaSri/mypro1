"use client";
import React, { useEffect, useState } from "react";
import { placetypeinfo } from "@/constants/arrays";
import { strings } from "@/constants/strings";
import Placet from "@/components/root/InfoCards/infoCards/Placet";

export default function Placetype({ listingid }) {
  const [placetype, setPlacetype] = useState(null);

  const handletype = (selectedOption) => {
    setPlacetype(selectedOption.label);
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
    <Placet
      title={strings.Placetype.place1.heading}
      cards={placetypeinfo}
      handletype={handletype}
      option={placetype}
    />
  );
}
