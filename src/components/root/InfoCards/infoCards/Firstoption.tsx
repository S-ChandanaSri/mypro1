import React from "react";
import Image from "next/image";
import { CardInfo1 } from "@/constants/types";

interface InfoCardsPropss {
  title: string;
  cards: CardInfo1[];
  icon: string;
}

const Firstoption: React.FC<InfoCardsPropss> = ({ title, cards }) => {
  return (
    <>
      <div className="mb-[10rem] flex h-[36rem]">
        <div className="ml-[220px] mt-[310px] h-[8rem] w-[30rem]">
          <p className="custo-font text-center text-[45px] font-medium leading-[67.5px] tracking-tight text-[#000000]">
            {title}
          </p>
        </div>
        <div className="flex flex-col items-center justify-between">
          {cards.map((card, index) => (
            <div
              key={index}
              className="ml-[8rem] mt-[7rem] flex h-[115.07px] w-[39rem]"
            >
              <div className="h-[6.5rem] w-[29rem]">
                <p className="custo-font h-[53px] w-[29rem] text-left text-2xl font-normal leading-[52.5px] tracking-normal text-[#000000]">
                  {card.label}
                </p>
                <p className="custo-font h-[54px] w-[26rem] text-left text-lg font-light leading-[27px] tracking-wide text-[#000000]">
                  {card.sublabel}
                </p>
              </div>
              <Image src={card.icon} width={129} height={115.07} alt="" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Firstoption;
