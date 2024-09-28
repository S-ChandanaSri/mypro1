"use client";
import React, { useState } from "react";
import People from "@/components/root/InfoCards/infoCards/People";
import { peopletypeinfo } from "@/constants/arrays";
import { strings } from "@/constants/strings";

export default function Peopletype({ listingid }) {
  const [peopletype, setPeopletype] = useState(null);

  const handlepeople = (secondoption) => {
    setPeopletype(secondoption.label);
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
    <People
      title={strings.peopletype.heading}
      subtitle={strings.peopletype.subheading}
      cards={peopletypeinfo}
      handlepeople={handlepeople}
      option={peopletype}
    />
  );
}
