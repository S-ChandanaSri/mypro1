"use client";
import React, { useState } from "react";
import Amenitie1 from "@/components/root/InfoCards/infoCards/Amenitie1";
import { strings } from "@/constants/strings";

export default function Amenities1({ listingid }) {
  const [guests, setGuests] = useState(0);
  const [bedrooms, setBedrooms] = useState(0);
  const [beds, setBeds] = useState(0);
  const [isClicked, setIsClicked] = useState(null);

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
      countguests: guests,
      countBedrooms: bedrooms,
      countBeds: beds,
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
    <Amenitie1
      title={strings.Amenities1.heading}
      subtitle={strings.Amenities1.subheading}
      setGuests={setGuests}
      setBedrooms={setBedrooms}
      setBeds={setBeds}
      setIsClicked={setIsClicked}
      guests={guests}
      bedrooms={bedrooms}
      beds={beds}
      isClicked={isClicked}
    />
  );
}
