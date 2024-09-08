"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { filterOptionSvgIcons } from "@/constants/images";
export default function FilterOptionFlow({ setPopup }: any) {
  const [beds, setBeds] = useState<string[]>([]);
  const [bathrooms, setBathrooms] = useState<string[]>([]);
  const [propertyType, setPropertyType] = useState<string[]>([]);
  const [minPrice, setMinPrice] = useState<string>("15");
  const [maxPrice, setMaxPrice] = useState<string>("105");
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const bedsList = ["1", "2", "3", "4", "5", "6", "7", "8+"];
  const bathroomsList = ["1", "2", "3", "4", "5", "6", "7", "8+"];
  const propertyTypes = [
    {
      name: "House",
      icon: filterOptionSvgIcons.filterHouse,
    },
    {
      name: "Appartment",
      icon: filterOptionSvgIcons.filterApartment,
    },
    {
      name: "Guesthouse",
      icon: filterOptionSvgIcons.filterGuestHouse,
    },
  ];
  const amenitiesEssentials = [
    "Wifi",
    "Kitchen",
    "Private attached bathroom",
    "Washer",
    "Double bed",
    "AC",
    "Tv",
    "Loundary",
  ];
  const hostLanguages = [
    "Hindi",
    "Malyalam",
    "English",
    "Telugu",
    "Punjabi",
    "Kannad",
    "Marathi",
    "Sanskrit",
  ];

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
    <div className="  rounded-2xl bg-neutral-50 popup font-serif">
      <div className="w-[55.5rem] h-11 flex flex-row justify-start p-2">
        <div className="w-full flex flex-row  items-center ">
          <div className="relative w-9 h-9" onClick={() => setPopup(false)}>
            <Image
              src={filterOptionSvgIcons.filterXcross}
              alt="xcross icon"
              fill={true}
            />
          </div>
          <div className="text-lg text-center w-full">Filters</div>
        </div>
      </div>
      <hr className="bg-neutral-500 border-[1px]" />

      {/* filters section*/}
      <div className="flex flex-col gap-9 h-[31rem] overflow-y-auto scrollbar-thin">
        <div className="pl-10 flex flex-col gap-10">
          <div className="flex flex-col gap-1">
            <p className="text-xl">Price range</p>
            <p className="text-lg">
              The average nightly price is $38,not including fees or taxes.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <div className="w-[46rem] h-24 bg-blue-200">
              Graph with slide bar
            </div>
            <div className=" flex flex-row pe-4 justify-between">
              <div className="w-80 h-16 rounded-lg border-[1px] flex flex-col border-neutral-500 p-1">
                <label className="text-sm">Minimum</label>
                <input
                  type="text"
                  value={`$${minPrice}`}
                  onChange={(e) => setMinPrice(e.target.value.replace("$", ""))}
                  className="text-lg"
                />
              </div>
              <div className="w-80 h-16 rounded-lg border-[1px] flex flex-col border-neutral-500 p-1">
                <label className="text-sm">Maximum</label>
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
        <hr className="bg-neutral-500 border-[1px]" />
        <div className=" flex flex-col gap-9 pl-10">
          <div className="text-xl">Beds and bathrooms</div>
          <p className="text-lg">Beds</p>
          <div className="flex flex-row gap-3 text-sm">
            <p
              className={`rounded-3xl p-1  flex justify-center items-center px-4 ${beds.length == 0 ? "bg-[#002855] text-neutral-50" : "bg-neutral-50 text-neutral-950 border-[1px] border-neutral-500 "} `}
              onClick={() => setBeds([])}
            >
              Any
            </p>
            {bedsList?.map((bed, index) => (
              <p
                className={`rounded-3xl flex justify-center items-center py-1 px-6 border-[1px] border-neutral-500 ${
                  beds.includes(bed) ? "bg-blue-200" : ""
                }`}
                key={index}
                onClick={() => handleBedClick(bed)}
              >
                {bed}
              </p>
            ))}
          </div>
          <p className="text-lg">Bathrooms</p>
          <div className=" flex flex-row gap-3 text-sm">
            <p
              onClick={() => setBathrooms([])}
              className={`rounded-3xl p-1 px-4 flex  items-center  ${bathrooms.length == 0 ? "bg-[#002855] text-neutral-50" : "bg-neutral-50 text-neutral-950 border-[1px] border-neutral-500 "} `}
            >
              Any
            </p>
            {bathroomsList?.map((bathroom, index) => (
              <p
                className={`py-1 px-6 rounded-3xl border-[1px] flex justify-center items-center border-neutral-500 ${
                  bathrooms.includes(bathroom) ? "bg-blue-200" : ""
                }`}
                key={index}
                onClick={() => handleBathroomClick(bathroom)}
              >
                {bathroom}
              </p>
            ))}
          </div>
        </div>
        <hr className="bg-neutral-500 border-[1px]" />
        <div className="pl-10 flex flex-col gap-5 text-xl">
          <div>Property type</div>
          <div className="flex flex-row gap-7">
            {propertyTypes.map((property, index) => (
              <div
                key={index}
                className={`w-44 rounded-md border-[1px] py-4 px-3 flex flex-col gap-12 border-neutral-500 ${
                  propertyType.includes(property.name) ? "bg-blue-200" : ""
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
        <hr className="bg-neutral-500 border-[1px]" />
        <div className="flex flex-col  pl-10  gap-9 text-xl">
          <div>Amenities</div>
          <div className="flex flex-col gap-2">
            <div>Essentials</div>
            <div className="grid grid-cols-2 gap-5 text-lg">
              {amenitiesEssentials.map((amenity, index) => (
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
            <p className=" underline text-blue-900 text-lg">Show more</p>
          </div>
        </div>
        <hr className="bg-neutral-500 border-[1px]" />
        <div className="pl-10 flex flex-col gap-5">
          <div className="text-xl">Host Language</div>
          <div className="flex flex-col gap-2">
            <div className="grid grid-cols-2 gap-5 text-lg">
              {hostLanguages.map((language, index) => (
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
            <p className=" underline text-lg text-blue-900">Show more</p>
          </div>
        </div>
        <hr className="bg-neutral-500 border-[1px]" />
      </div>

      <div className=" flex flex-row justify-between  p-4">
        <button
          className="underline text-blue-900 text-xl"
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
          Clear all
        </button>
        <button className=" text-lg rounded-lg text-neutral-50 py-3 px-12 bg-[#002855]">
          Show 100+ places
        </button>
      </div>
    </div>
  );
}
