"use client";

import Image from "next/image";
import { useState } from "react";
import { faqs } from "@/constants/arrays";
import { svgs } from "@/constants/images";
import { strings } from "@/constants/strings";
import Button from "../common/Button";

const FAQs: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number>(-1);

  return (
    <div className="flex flex-col items-center space-y-16">
      <div className="space-y-5 text-center">
        <h3 className="text-2xl text-neutral-950">
          {strings.landing.faqs.heading}
        </h3>
        <span className="text-lg text-neutral-500">
          {strings.landing.faqs.subHeading}
        </span>
      </div>
      <ul className="max-w-[65rem] space-y-8">
        {faqs.map((item, index) => (
          <div
            key={item.id}
            onClick={() => setActiveFaq(index === activeFaq ? -1 : index)}
            className={`relative overflow-hidden ${index === activeFaq ? "h-80 xs:h-48" : "h-32 xs:h-24"} ${index !== faqs.length - 1 && "border-b-2 border-neutral-300"} transition-all duration-300`}
          >
            <div className="flex justify-between gap-12">
              <div className="space-y-2 text-md">
                <span className="text-lg font-medium">{item.question}</span>
                <p
                  className={`font-sans text-neutral-500 ${index === activeFaq ? "opacity-100" : "opacity-0"} transition-all duration-300`}
                >
                  {item.answer}
                </p>
              </div>
              <Image
                width={24}
                height={24}
                src={activeFaq === index ? svgs.minusCircle : svgs.plusCircle}
                className="mb-auto cursor-pointer"
                alt=""
              />
            </div>
          </div>
        ))}
      </ul>
      <div className="flex flex-1 flex-col items-center rounded-3xl bg-neutral-50 py-12 text-center">
        <div className="flex h-[56px] w-[120px]">
          {/* <Image
              width={48}
              height={48}
              src={Avatar}
              alt=""
              className="w-fixed h-fixed h-[48px] w-[48px] rounded-[200px] border-[1.5px] border-[#ABB677]"
            />
            <Image
              width={48}
              height={48}
              src={Avatar1}
              alt=""
              className="w-fixed h-fixed h-[48px] w-[48px] rounded-[200px] border-[1.5px] border-[#C7B9DA]"
            />
            <Image
              width={48}
              height={48}
              src={Avatar2}
              alt=""
              className="w-fixed h-fixed h-[48px] w-[48px] rounded-[200px] border-[1.5px] border-[#D9B9BB]"
            /> */}
        </div>
        <div className="flex flex-col items-center">
          <span className="text-lg text-neutral-950">
            {strings.landing.faqs.stillHaveQuestions}
          </span>
          <p className="mt-4 text-md text-neutral-500">
            {strings.landing.faqs.cantFindAnswer}
          </p>
          <Button
            className="mt-10 w-max rounded-lg bg-secondary-900 px-4 py-3 hover:bg-secondary-900/80"
            variant="base"
          >
            {strings.landing.faqs.getInTouch}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
