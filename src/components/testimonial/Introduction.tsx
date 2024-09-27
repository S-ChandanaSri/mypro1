"use client";
import Image from "next/image";

interface IntroductionProps {
  icon1: string;
  icon2: string;
  label: string;
  sublabel: string;
}

const Introduction: React.FC<IntroductionProps> = ({
  icon1,
  icon2,
  label,
  sublabel,
}) => {
  return (
    <div className="ml-2 flex gap-4">
      <Image src={icon1} alt="" width={40} height={40} />
      <div className="flex h-[68px] w-52 flex-col gap-2 pt-2">
        <div className="flex flex-col gap-1">
          <p className="font-Semi-Bold text-md leading-[24px]">{label}</p>
          <p className="text-sm font-normal leading-[15.6px] text-[#64748B]">
            {sublabel}
          </p>
        </div>
        <div>
          <Image src={icon2} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Introduction;
