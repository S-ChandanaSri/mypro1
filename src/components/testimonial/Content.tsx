"use client";
import { useState } from "react";
import Image from "next/image";
import icons from "../../../public/res/images/teams/icons.svg";

interface ContentProps {
  label1: string;
  sublabel1: string;
}

const Content: React.FC<ContentProps> = ({ label1, sublabel1 }) => {
  const [morecontent, setMorecontent] = useState(false);

  const toggleContent = () => {
    setMorecontent((prev) => !prev);
  };

  return (
    <div className="ml-2 flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <p
          className={`text-md font-normal leading-6 transition-all duration-300 ease-in-out ${morecontent ? "h-auto" : "h-[4.5rem] overflow-hidden"}`}
        >
          {label1}
        </p>
        <div className="flex items-center gap-2">
          <p
            onClick={toggleContent}
            className="cursor-pointer text-sm font-medium"
          >
            {morecontent ? "Show Less" : "Show More"}{" "}
          </p>
          <Image src={icons} alt="Toggle icon" />
        </div>
      </div>
      <p className="text-xs font-normal leading-5 text-[#6889FF]">
        {sublabel1}
      </p>
    </div>
  );
};

export default Content;
