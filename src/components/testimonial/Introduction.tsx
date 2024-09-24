"use client";
import Image from 'next/image';

interface IntroductionProps {
    icon1: string;
    icon2: string;
    label: string;
    sublabel: string;
}

const Introduction:React.FC<IntroductionProps>=({icon1,icon2,label,sublabel})=>{
    return (
        <div className="flex gap-4 ml-2 ">
            <Image src={icon1} alt='' width={40} height={40}/>
            <div className="w-52 h-[68px] flex flex-col gap-2 pt-2 ">
                <div className="flex flex-col gap-1 ">
                    <p className=" text-md font-Semi-Bold leading-[24px] ">{label}</p>
                    <p className=" text-sm font-normal leading-[15.6px] text-[#64748B] ">{sublabel}</p>
                </div>
                <div>
                    <Image src={icon2} alt='' />
                </div>
            </div>
        </div>
    )

}
export default Introduction;