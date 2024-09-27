import { NextPage } from "next";
import Introduction from "../../components/testimonial/Introduction";
import Space from "../../components/testimonial/Space";
import Content from "../../components/testimonial/Content";
import { strings } from "@/constants/strings";
import { testimonial } from "@/constants/arrays";

const Testimonial: NextPage = () => {
  return (
    <>
      <div className="pt-[154.86px]">
        <div className=" ">
          <p className="text-center text-6xl font-medium leading-[96px] text-[#002855]">
            {" "}
            {strings.testimonial.heading}
          </p>
        </div>
        <p className="text-center text-xl font-normal leading-[36px]">
          {strings.testimonial.subHeading}
        </p>
      </div>
      <div className="mx-auto mt-9 max-w-[1149px] grid-cols-1 gap-4 sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-3 lg:place-items-center lg:gap-0">
        {testimonial.map((card, index) => (
          <div
            key={index}
            className={`m-auto w-[297px] border-[2px] border-[#E9EBF8] lg:m-[1rem] ${index % 3 === 1 ? "lg:translate-y-[3rem]" : ""} `}
          >
            <Introduction
              icon1={card.icon1}
              icon2={card.icon2}
              label={card.label}
              sublabel={card.sublabel}
            />
            <Space />
            <Content label1={card.label1} sublabel1={card.sublabel1} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Testimonial;
