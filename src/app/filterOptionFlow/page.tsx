"use client";
import { useState, useEffect } from "react";
import { GiHouse } from "react-icons/gi";
import { BiBuildingHouse } from "react-icons/bi";
import { MdOutlineApartment } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";
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
      icon: <GiHouse />,
    },
    {
      name: "Appartment",
      icon: <MdOutlineApartment />,
    },
    {
      name: "Guesthouse",
      icon: <BiBuildingHouse />,
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
    <div className="max-w-[61vw] max-h-[633px]  rounded-[15px] bg-white popup ">
      <div className="w-[889px] h-[45px] flex flex-row justify-start p-[10px] ">
        <div className="flex flex-row justify-between items-center w-[475px] ">
          <div className="w-[35] h-[35]" onClick={() => setPopup(false)}>
            <RxCross2 className="w-[35px] h-[35px]" />
          </div>
          <div>Filters</div>
        </div>
      </div>
      <hr className="bg-[#8E98A8] border-[1px]" />

      {/* filters section*/}
      <div className="flex flex-col gap-[35px] max-h-[498px] overflow-y-auto scrollbar-thin">
        <div className="pl-[41px] flex flex-col gap-[40px]">
          <div className="flex flex-col gap-[5px]">
            <p>Price range</p>
            <p>The average nightly price is $38,not including fees or taxes.</p>
          </div>
          <div className="flex flex-col gap-[20px]">
            <div className="w-[739px] h-[94px] bg-blue-200">
              Graph with slide bar
            </div>
            <div className="w-[740px] h-[69px] flex flex-row gap-[72px] justify-between">
              <div className="min-w-[334px] max-h-[69px] rounded-[8px] border-[1px] flex flex-col border-[#8E98A8] p-[5px]">
                <label>Minimum</label>
                <input
                  type="text"
                  value={`$${minPrice}`}
                  onChange={(e) => setMinPrice(e.target.value.replace("$", ""))}
                />
              </div>
              <div className="min-w-[334px] max-h-[69px] rounded-[8px] border-[1px] flex flex-col border-[#8E98A8] p-[5px]">
                <label>Maximum</label>
                <input
                  type="text"
                  value={`$${maxPrice}`}
                  onChange={(e) => setMaxPrice(e.target.value.replace("$", ""))}
                />
              </div>
            </div>
          </div>
        </div>
        <hr className="bg-[#8E98A8] border-[1px]" />
        <div className="w-[626px] h-[269px] flex flex-col gap-[36px] pl-[41px]">
          <div>Beds and bathrooms</div>
          <p>Beds</p>
          <div className="w-[626px] h-[35px] flex flex-row gap-[12px]">
            <p
              className={`w-[74px] h-[35px] rounded-[30px] py-[5px]  flex justify-center items-center px-[16px] ${beds.length == 0 ? "bg-[#002855] text-white" : "bg-white text-black border-[1px] border-[#8E98A8] "} `}
              onClick={() => setBeds([])}
            >
              Any
            </p>
            {bedsList?.map((bed, index) => (
              <p
                className={`w-[57px] h-[35px] rounded-[30px] flex justify-center items-center py-[5px] px-[16px] border-[1px] border-[#8E98A8] ${
                  beds.includes(bed) ? "bg-blue-200" : ""
                }`}
                key={index}
                onClick={() => handleBedClick(bed)}
              >
                {bed}
              </p>
            ))}
          </div>
          <p>Bathrooms</p>
          <div className="w-[626px] h-[35px] flex flex-row gap-[12px]">
            <p
              onClick={() => setBathrooms([])}
              className={`w-[74px] h-[35px] rounded-[30px] py-[5px]  flex justify-center items-center px-[16px] ${bathrooms.length == 0 ? "bg-[#002855] text-white" : "bg-white text-black border-[1px] border-[#8E98A8] "} `}
            >
              Any
            </p>
            {bathroomsList?.map((bathroom, index) => (
              <p
                className={`w-[57px] h-[35px] rounded-[30px] py-[5px] px-[16px] border-[1px] flex justify-center items-center border-[#8E98A8] ${
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
        <hr className="bg-[#8E98A8] border-[1px]" />
        <div className="pl-[41px] flex flex-col gap-[20px]">
          <div>Property type</div>
          <div className="flex flex-row gap-[30px]">
            {propertyTypes.map((property, index) => (
              <div
                key={index}
                className={`w-[173px] h-[156px] rounded-[7px] border-[1px] py-[18px] px-[12px] flex flex-col gap-[50px] border-[#8E98A8] ${
                  propertyType.includes(property.name) ? "bg-blue-200" : ""
                }`}
                onClick={() => handlePropertyTypeClick(property.name)}
              >
                <div className="w-[36px] h-[36px]">{property.icon}</div>
                <div>{property.name}</div>
              </div>
            ))}
          </div>
        </div>
        <hr className="bg-[#8E98A8] border-[1px]" />
        <div className="flex flex-col gap-[35px] pl-[41px]">
          <div>Amenities</div>
          <div className="flex flex-col gap-[10px]">
            <div>Essentials</div>
            <div className="grid grid-cols-2 gap-[20px]">
              {amenitiesEssentials.map((amenity, index) => (
                <div className="flex gap-[10px]" key={index}>
                  <input
                    type="checkbox"
                    checked={selectedAmenities.includes(amenity)}
                    onChange={() => handleAmenityChange(amenity)}
                  />
                  {amenity}
                </div>
              ))}
            </div>
            <Link className=" underline text-blue-900" href="#">
              Show more
            </Link>
          </div>
        </div>
        <hr className="bg-[#8E98A8] border-[1px]" />
        <div className="pl-[41px] flex flex-col gap-[20px]">
          <div>Host Language</div>
          <div className="flex flex-col gap-[10px]">
            <div className="grid grid-cols-2 gap-[20px]">
              {hostLanguages.map((language, index) => (
                <div className="flex gap-[10px]" key={index}>
                  <input
                    type="checkbox"
                    checked={selectedLanguages.includes(language)}
                    onChange={() => handleLanguageChange(language)}
                  />
                  {language}
                </div>
              ))}
            </div>
            <Link className=" underline text-blue-900" href="#">
              Show more
            </Link>
          </div>
        </div>
        <hr className="bg-[#8E98A8] border-[1px]" />
      </div>

      <div className="w-[889px] h-[90px] rounded-b-[15px] flex flex-row justify-between py-[14px] px-[16px] gap-[10px]">
        <div
          className="w-[847px] h-[62px] flex flex-row justify-between items-center"
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
          <button className="underline text-blue-900">Clear all</button>
          <button className="w-[252px] h-[62px] rounded-[10px] text-white py-[12px] px-[47px] bg-[#002855]">
            Show 100+ places
          </button>
        </div>
      </div>
    </div>
  );
}
