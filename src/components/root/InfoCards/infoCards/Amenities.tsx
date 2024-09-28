import React from "react";
import { CardInfo } from "@/constants/types";
import Image from "next/image";

interface InfoCardsProps {
  title: string;
  subText?: string;
  cards: CardInfo[];
  options1: CardInfo[];
  handleClick: (option: CardInfo) => void;
  selectedOption: string[];
}

const Amenities: React.FC<InfoCardsProps> = ({
  title,
  subText,
  cards,
  handleClick,
  selectedOption,
}) => {
  return (
    <div className="mt-[7rem] flex flex-col rounded-[15px]">
      <div className="ml-[412px] mt-[-70px] w-[43rem]">
        <p className="w-[56rem] text-2xl font-normal leading-[52.5px] tracking-[0.46px] text-[#000000]">
          {title}
        </p>
        <p className="w-[43rem] pt-3 text-lg font-light leading-[27px] tracking-[0.46px] text-[#000000]">
          {subText}
        </p>
      </div>

      <div className="mx-auto ml-[26rem] mt-2 grid grid-cols-3 gap-12">
        {cards.map((option, index) => (
          <button
            key={index}
            onClick={() => handleClick(option)}
            className={`flex h-[8.5rem] w-[14rem] flex-col items-center rounded-[7px] border-[1px] px-[15px] py-[29px] ${selectedOption.includes(option.label) ? "border-[7px] border-blue-500" : "border-[#8E98A8]"}`}
          >
            <div className="flex h-[5rem] w-[9rem] flex-col items-center">
              <Image
                src={option.icon}
                alt={option.label}
                width={48}
                height={48}
                className="relative bottom-2"
              />
              <p className="h-[2rem] w-[12rem] text-lg font-normal leading-[30px] tracking-[0.46px] text-[#000000]">
                {option.label}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Amenities;
