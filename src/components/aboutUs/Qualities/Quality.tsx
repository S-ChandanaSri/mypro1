import { IQuality } from "@/constants/types";
import Image from "next/image";
import React from "react";

const Quality: React.FC<IQuality> = ({ icon, label, body }) => {
  return (
    <div className="flex min-h-[25rem] flex-col items-center space-y-5 border-[1px] border-neutral-200 p-12 text-center md:max-w-[35rem]">
      <Image src={icon} className="h-20 w-20" alt="" />
      <span className="text-xl text-neutral-900">{label}</span>
      <p className="font-sans text-md text-neutral-500">{body}</p>
    </div>
  );
};

export default Quality;
