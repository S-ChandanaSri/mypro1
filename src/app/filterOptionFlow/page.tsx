"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { svgs } from "@/constants/images";
import { strings } from "@/constants/strings";
import {
  FilterOptionAmenitiesEssentials,
  FilterOptionBathroomsList,
  FilterOptionBedsList,
  FilterOptionHostLanguages,
  FilterOptionPropertyTypes,
} from "@/constants/filterOptionFlowArrays";
export default function FilterOptionFlow({ setPopup }: any) {
  const [beds, setBeds] = useState<string[]>([]);
  const [bathrooms, setBathrooms] = useState<string[]>([]);
  const [propertyType, setPropertyType] = useState<string[]>([]);
  const [minPrice, setMinPrice] = useState<string>("15");
  const [maxPrice, setMaxPrice] = useState<string>("105");
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const response = await axios.get("/api/properties", {
    //
    //         beds: beds.join(","),
    //         bathrooms: bathrooms.join(","),
    //         propertyType: propertyType.join(","),
    //         minPrice,
    //         maxPrice,
    //
    //     });
    //     setFilteredData(response.data);
    //   } catch (error) {
    //     console.error("Error:", error);
    //   }

    // };

    // fetchData();

    console.log({
      beds: beds.join(","),
      bathrooms: bathrooms.join(","),
      propertyType: propertyType.join(","),
      minPrice,
      maxPrice,
      amenities: selectedAmenities.join(","),
      languages: selectedLanguages.join(","),
    });
  }, [
    beds,
    bathrooms,
    propertyType,
    minPrice,
    maxPrice,
    selectedAmenities,
    selectedLanguages,
  ]);

  const handleBedClick = (bed: string) => {
    setBeds((prev) =>
      prev.includes(bed) ? prev.filter((b) => b !== bed) : [...prev, bed],
    );
  };

  const handleBathroomClick = (bathroom: string) => {
    setBathrooms((prev) =>
      prev.includes(bathroom)
        ? prev.filter((b) => b !== bathroom)
        : [...prev, bathroom],
    );
  };

  const handlePropertyTypeClick = (type: string) => {
    setPropertyType((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type],
    );
  };

  const handleAmenityChange = (amenity: string) => {
    setSelectedAmenities((prev: string[]) =>
      prev.includes(amenity)
        ? prev.filter((item) => item !== amenity)
        : [...prev, amenity],
    );
  };

  const handleLanguageChange = (language: string) => {
    setSelectedLanguages((prev: string[]) =>
      prev.includes(language)
        ? prev.filter((item) => item !== language)
        : [...prev, language],
    );
  };
  return (
    <div className="w-[26.25rem] md:w-[45rem] lg:w-[55.5rem] max-h-[40rem]  rounded-2xl bg-neutral-50 popup font-serif">
      <div className=" h-11 flex flex-row justify-start p-2">
        <div className="w-full flex flex-row  items-center ">
          <div className="relative w-9 h-9" onClick={() => setPopup(false)}>
            <Image src={svgs.filterXcross} alt="xcross icon" fill={true} />
          </div>
          <div className="text-lg text-center  w-full">
            {strings.filterOptionFlow.filters}
          </div>
        </div>
      </div>
      <hr className="bg-neutral-500 border" />

      {/* filters section*/}
      <div className="flex flex-col gap-9 h-[31rem] overflow-y-auto scrollbar-thin">
        <div className="pl-10 flex flex-col gap-10">
          <div className="flex flex-col gap-1">
            <p className="text-xl">{strings.filterOptionFlow.priceRange}</p>
            <p className="text-lg">
              The average nightly price is $38,not including fees or taxes.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <div className=" h-24  pe-4">Graph with slide bar</div>
            <div className=" flex flex-col gap-y-2 md:flex-row pe-4 justify-between">
              <div className="lg:w-80 h-16 rounded-lg border flex flex-col border-neutral-500 p-1">
                <label className="text-sm">
                  {strings.filterOptionFlow.minimum}
                </label>
                <input
                  type="text"
                  value={`$${minPrice}`}
                  onChange={(e) => setMinPrice(e.target.value.replace("$", ""))}
                  className="text-lg"
                />
              </div>
              <div className="lg:w-80 h-16 rounded-lg border flex flex-col border-neutral-500 p-1">
                <label className="text-sm">
                  {strings.filterOptionFlow.maximum}
                </label>
                <input
                  type="text"
                  value={`$${maxPrice}`}
                  onChange={(e) => setMaxPrice(e.target.value.replace("$", ""))}
                  className="text-lg"
                />
              </div>
            </div>
          </div>
        </div>
        <hr className="bg-neutral-500 border" />
        <div className=" flex flex-col gap-9 pl-10">
          <div className="text-xl">
            {strings.filterOptionFlow.bedsAndBathrooms}
          </div>
          <p className="text-lg">{strings.filterOptionFlow.beds}</p>
          <div className="flex flex-wrap flex-row gap-3 text-sm">
            <p
              className={`rounded-3xl p-1  flex justify-center items-center px-4 ${beds.length == 0 ? "bg-secondary-900 text-neutral-50" : "bg-neutral-50 text-neutral-950 border border-neutral-500 "} `}
              onClick={() => setBeds([])}
            >
              {strings.filterOptionFlow.any}
            </p>
            {FilterOptionBedsList?.map((bed, index) => (
              <p
                className={`rounded-3xl flex justify-center items-center py-1 px-6 border border-neutral-500 ${
                  beds.includes(bed) ? "bg-secondary-50" : ""
                }`}
                key={index}
                onClick={() => handleBedClick(bed)}
              >
                {bed}
              </p>
            ))}
          </div>
          <p className="text-lg">{strings.filterOptionFlow.bathrooms}</p>
          <div className=" flex flex-wrap flex-row gap-3 text-sm">
            <p
              onClick={() => setBathrooms([])}
              className={`rounded-3xl p-1 px-4 flex  items-center  ${bathrooms.length == 0 ? "bg-secondary-900 text-neutral-50" : "bg-neutral-50 text-neutral-950 border border-neutral-500 "} `}
            >
              {strings.filterOptionFlow.any}
            </p>
            {FilterOptionBathroomsList?.map((bathroom, index) => (
              <p
                className={`py-1 px-6 rounded-3xl border flex justify-center items-center border-neutral-500 ${
                  bathrooms.includes(bathroom) ? "bg-secondary-50" : ""
                }`}
                key={index}
                onClick={() => handleBathroomClick(bathroom)}
              >
                {bathroom}
              </p>
            ))}
          </div>
        </div>
        <hr className="bg-neutral-500 border" />
        <div className="pl-10 flex flex-col gap-5 text-xl">
          <div>{strings.filterOptionFlow.propertyTypes}</div>
          <div className="flex flex-col md:flex-row gap-7">
            {FilterOptionPropertyTypes.map((property, index) => (
              <div
                key={index}
                className={`w-44 rounded-md border py-4 px-3 flex flex-col gap-12 border-neutral-500 ${
                  propertyType.includes(property.name) ? "bg-secondary-50" : ""
                }`}
                onClick={() => handlePropertyTypeClick(property.name)}
              >
                <div className="relative w-9 h-9">
                  {" "}
                  <Image src={property.icon} alt="xcross icon" fill={true} />
                </div>
                <div>{property.name}</div>
              </div>
            ))}
          </div>
        </div>
        <hr className="bg-neutral-500 border" />
        <div className="flex flex-col  pl-10  gap-9 text-xl">
          <div>{strings.filterOptionFlow.amenities}</div>
          <div className="flex flex-col gap-2">
            <div>{strings.filterOptionFlow.essentials}</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-lg">
              {FilterOptionAmenitiesEssentials.map((amenity, index) => (
                <div className="flex gap-2" key={index}>
                  <input
                    type="checkbox"
                    checked={selectedAmenities.includes(amenity)}
                    onChange={() => handleAmenityChange(amenity)}
                  />
                  {amenity}
                </div>
              ))}
            </div>
            <p className=" underline text-secondary-600 text-lg">
              {strings.filterOptionFlow.showMore}
            </p>
          </div>
        </div>
        <hr className="bg-neutral-500 border" />
        <div className="pl-10 flex flex-col gap-5">
          <div className="text-xl">{strings.filterOptionFlow.hostLanguage}</div>
          <div className="flex flex-col gap-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-lg">
              {FilterOptionHostLanguages.map((language, index) => (
                <div className="flex gap-2" key={index}>
                  <input
                    type="checkbox"
                    checked={selectedLanguages.includes(language)}
                    onChange={() => handleLanguageChange(language)}
                  />
                  {language}
                </div>
              ))}
            </div>
            <p className=" underline text-lg text-secondary-600">
              {strings.filterOptionFlow.showMore}
            </p>
          </div>
        </div>
        <hr className="bg-neutral-500 border" />
      </div>

      <div className=" flex flex-row justify-between  p-4">
        <button
          className="underline text-secondary-600 text-xl"
          onClick={() => {
            setBeds([]);
            setBathrooms([]);
            setPropertyType([]);
            setMinPrice("15");
            setMaxPrice("105");
            setSelectedAmenities([]);
            setSelectedLanguages([]);
          }}
        >
          {strings.filterOptionFlow.clearAll}
        </button>
        <button className=" text-lg rounded-lg text-neutral-50 py-3 px-12 bg-secondary-900">
          Show 100+ places
        </button>
      </div>
    </div>
  );
}
