import React from "react";
import { CardInfo } from "@/constants/types";
import Image from "next/image";

interface InfoCardsProps {
  title: string;
  subtitle: string;
  cards: CardInfo[];
  handlecolor: (option: CardInfo) => void;
  option: string | null;
  selectedopt: CardInfo[];
}

const Describehome: React.FC<InfoCardsProps> = ({
  title,
  subtitle,
  handlecolor,
  cards,
  option,
  selectedopt,
}) => {
  return (
    <>
      <div>
        <div className="w-[1166px]">
          <div className="relative left-[470px] top-[150px] h-[336px] w-[42rem]">
            <div className="h-[30rem] w-[42rem]">
              <div className="h-[4rem] w-[42rem]">
                <p className="custo-font h-[2rem] w-[42rem] text-[35px] font-[500] leading-[24px] text-[#000000]">
                  {title}
                </p>
                <p className="custo-font h-[23px] w-[42rem] pt-1 text-[16px] font-[300] leading-[24px] text-[#000000]">
                  {subtitle}
                </p>
              </div>
              <div className="relative left-[0px] top-[30px] grid h-[81px] w-[449px] grid-cols-4 gap-5">
                {cards.map((option, index) => (
                  <div key={index} className="h-[36px] w-[104px]">
                    <button
                      onClick={() => handlecolor(option)}
                      className={`h-[36px] w-[7rem] rounded-[26.31px] border-[0.61px] px-[12.24px] py-[6.12px] ${
                        selectedopt.includes(option)
                          ? "border-4 border-pink-700"
                          : "border-[#8E98A8]"
                      }`}
                    >
                      <div className="flex h-[22.02px]">
                        <Image
                          width={22.02}
                          height={22.02}
                          src={option.icon}
                          className="h-[22.02px] w-[22.02px]"
                          alt="peace icon"
                        />
                        <p className="custo-font h-[15px] w-[123px] pt-1 text-[9.79px] font-[400] leading-[14.68px] text-[#000000]">
                          {option.label}
                        </p>
                      </div>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Describehome;
