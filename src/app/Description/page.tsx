"use client";

import React, { useState } from "react";
import Describehome from "@/components/root/InfoCards/infoCards/Describehome";
import { strings } from "@/constants/strings";
import { Describeinfo } from "@/constants/arrays";

export default function Description({ listingid }: { listingid: string }) {
  const [selectedopt, setSelectedOpt] = useState([]);

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
    <Describehome
      title={strings.Describehome.heading}
      subtitle={strings.Describehome.subheading}
      cards={Describeinfo}
      handlecolor={handlecolor}
      selectedopt={selectedopt}
    />
  );
}
