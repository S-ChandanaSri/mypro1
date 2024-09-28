import React from "react";
import { CardInfo } from "@/constants/types";
import Image from "next/image";

interface InfoCardsProps {
  title: string;
  subtitle: string;
  cards: CardInfo[];
  handlepeople: (option: CardInfo) => void;
  option: string | null;
}

const People: React.FC<InfoCardsProps> = ({
  title,
  subtitle,
  handlepeople,
  cards,
  option,
}) => {
  return (
    <>
      <div className="relative left-[252px] flex flex-col rounded-[15px]">
        <div className="relative left-[0px] top-[-80px] h-[80px] w-[668px]">
          <p className="custo-font relative h-[53px] w-[523px] text-[35px] font-[400] leading-[52.5px] tracking-[0.46px] text-[#000000]">
            {" "}
            {title}{" "}
          </p>
          <p className="custo-font relative h-[27px] w-[548px] pt-2 text-[18px] font-[300] leading-[27px] tracking-[0.46px] text-[#000000]">
            {" "}
            {subtitle}
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {cards.map((card, index) => (
            <button
              key={index}
              onClick={() => handlepeople(card)}
              className={`... flex h-[133px] w-[186px] flex-col items-center rounded-[7px] border-[1px] border-[#8E98A8] px-[15px] py-[29px] ${option === card.label ? "border-4 border-blue-500" : "border-[#8E98A8]"} `}
            >
              <div className="relative left-6 mr-[3rem] flex h-[94px] w-[200px] flex-col items-center gap-[10px]">
                <Image
                  width={48}
                  height={48}
                  src={card.icon}
                  alt="card.label"
                  className="h-[48px] w-[48px]"
                />
                <p className="custo-font relative h-[66px] w-[200px] text-[24px] font-[400] leading-[36px] tracking-[0.46px] text-[#000000]">
                  {" "}
                  {card.label}{" "}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default People;
