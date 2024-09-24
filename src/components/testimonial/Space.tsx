"use client";
import Image from 'next/image';
import check from '../../../public/res/images/teams/check.svg';

const Space=()=>{
    return (
        <div className="w-64 h-12 mt-8 ml-2 ">
            <div className=" flex w-[152px] h-[26px]  bg-[#ECFDF5] pl-2 ">
                <Image src={check} alt='' />
                <p className=" text-xs font-Semi-Bold leading-[18] text-[#B5B2FF] relative bottom-[6rem] left-2 ">Verified Purchase</p>
            </div>
        </div>
    )

}
export default Space;