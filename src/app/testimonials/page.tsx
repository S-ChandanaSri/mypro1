import { NextPage } from "next";
import Introduction from '../../components/testimonial/Introduction';
import Space from '../../components/testimonial/Space';
import Content from '../../components/testimonial/Content';
import { strings } from "@/constants/strings";
import {testimonial} from '@/constants/arrays';

const Testimonial: NextPage = () => {
    return (
        <>
            <div className="pt-[154.86px]  ">
                <div className=" " >
                    <p className=" text-6xl text-[#002855] font-medium leading-[96px] text-center "> {strings.testimonial.heading}</p>
                </div>
                <p className=" text-xl font-normal leading-[36px] text-center ">{strings.testimonial.subHeading}</p>
            </div>
            <div className=" mt-9 mx-auto grid-cols-1  sm:grid sm:grid-cols-2  lg:grid lg:grid-cols-3 max-w-[1149px] gap-4 lg:gap-0 lg:place-items-center  ">
                {testimonial.map((card,index)=> (
                    <div className={`w-[297px] lg:m-[1rem] m-auto  border-[2px] border-[#E9EBF8] ${index % 3 === 1 ? 'lg:translate-y-[3rem]' : ""} `}>
                        <Introduction icon1={card.icon1} icon2={card.icon2} label={card.label} sublabel={card.sublabel} />
                        <Space/>
                        <Content label1={card.label1} sublabel1={card.sublabel1}/>
                    </div>
                        ))}

                    </div>
                    </>
                    );
                };

export default Testimonial;
