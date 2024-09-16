import { propertyDetailsImages, svgs } from "./images";

export const PropertyListImages = [
  { url: propertyDetailsImages.propertyInterior1, alt: "Interior1" },
  { url: propertyDetailsImages.propertyInterior2, alt: "Interior2" },
  { url: propertyDetailsImages.propertyInterior3, alt: "Interior3" },
  { url: propertyDetailsImages.propertyExterior, alt: "Exterior" },
];
export const PropertyList = [
  {
    url: propertyDetailsImages.propertyInterior1,
    alt: "Interior1",
    roomType: "Studio-Medium",
    price: "Rs 10000.00",
    stars: 4,
  },
  {
    url: propertyDetailsImages.propertyInterior2,
    alt: "Interior2",
    roomType: "Studio-Medium",
    price: "Rs 10000.00",
    stars: 4,
  },
  {
    url: propertyDetailsImages.propertyInterior3,
    alt: "Interior3",
    roomType: "Studio-Medium",
    price: "Rs 10000.00",
    stars: 4,
  },
  {
    url: propertyDetailsImages.propertyExterior,
    alt: "Exterior",
    roomType: "Studio-Medium",
    price: "Rs 10000.00",
    stars: 4,
  },
];

export const PropertyDetailsData = {
  city: "London",
  area: "soho",
  address: "21 Poland Street,#2",
  overallRating: "4.8",
  noOfRatings: "83",
  roomServices:
    "Lorem ipsum dolor sit amet consectetur. Lacus et integer enim vitae odio sed. Aliquam volutpat neque accumsan tincidunt velit quam. Condimentum integer sed in scelerisque sit in quis et.",
  accomodates: [
    {
      icon: svgs.propertyAlltable,
      itemName: "All tables",
      quantity: 12,
    },
    {
      icon: svgs.propertyLounges,
      itemName: "In Lounges",
      quantity: 7,
    },
    {
      icon: svgs.propertyTotalCapactiy,
      itemName: "Maximum Total",
      quantity: 6,
    },
    {
      icon: svgs.propertySqft,
      itemName: "Sq ft.",
      quantity: 925,
    },
  ],

  openingHours: [
    {
      days: "Mon-Fri",
      hours: "8:00-9:00",
    },
    {
      days: "Sat",
      hours: "8:00-9:00",
    },
    {
      days: "Sun",
      hours: "8:00-9:00",
    },
  ],

  ammenities: [
    {
      icon: svgs.propertyAc,
      itemName: "AC",
    },
    {
      icon: svgs.propertyTv,
      itemName: "Tv",
    },
    {
      icon: svgs.propertyWideScreenTv,
      itemName: "Widescreen Tv",
    },
    {
      icon: svgs.propertySkyLight,
      itemName: "Skylight",
    },
    {
      icon: svgs.propertyWhiteBoards,
      itemName: "Whiteboards",
    },
    {
      icon: svgs.propertyEnsuiteKitchen,
      itemName: "Ensuite Kitchen",
    },
  ],
};
