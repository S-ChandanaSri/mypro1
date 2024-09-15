"use client";
import React from "react";
import Image from 'next/image';
import List from '@/components/root/Propertycard/List';
import makiarrow from '../../public/res/icons/downArrow.svg';

import {
  GetInTouchInfo,
  OurServicesInfo,
  Propertcardinfo,
  WhyChooseUsInfo,
} from "@/constants/arrays";
import { strings } from "@/constants/strings";
import InfoCards from "@/components/root/InfoCards";
import Hero from "@/components/root/Hero";
import VideoTestimonials from "@/components/root/VideoTestimonials";
import FAQs from "@/components/root/FAQs";

function Home() {
  return (
    <div className="space-y-32 overflow-hidden px-6 sm:px-16">
      <Hero />
      {/* <div className="flex h-[157px] items-center gap-[105px] border-[1px] border-[#0000004D] bg-[#FFFFFF] px-[47px] py-[15px] sm:gap-2 lg:gap-10">
        <div className="w-fill h-fill h-[127px] w-[1066.33px] gap-[82px]">
          <div className="flex h-[126.82px] w-[1066.89px] gap-[77px] sm:mx-auto sm:w-[400px] md:relative md:right-5 md:mx-auto md:flex md:w-[500px] md:justify-between lg:mx-auto lg:w-auto">
            <div className="flex h-[121.78px] w-[86.46px] flex-col items-center sm:w-[70px] md:mx-auto md:flex md:flex-col md:justify-between">
              <Image
                width={113}
                height={113}
                src={image6}
                alt=""
                className="left-[980.58px] -[2.52px] h-[85.97px] w-[86.31px]"
              />
              <p className="custo-font left-[980.4px] -[94.06px] h-[30.24px] w-[86.02px] items-center pl-2 text-[20px] font-[500] leading-[30px] text-black">
                Bombay
              </p>
            </div>
            <div className="left-[980.42px] -[2.52px] h-[121.78px] w-[86.46px] sm:w-[70px] md:flex md:flex-col md:justify-between">
              <Image
                width={86.31}
                height={85.97}
                src={image7}
                alt=""
                className="left-[980.58px] -[2.52px] h-[85.97px] w-[86.31px]"
              />
              <p className="custo-font left-[980.4px] -[94.06px] h-[30.24px] w-[86.02px] items-center pl-6 text-[20px] font-[500] leading-[30px] text-black">
                Pune
              </p>
            </div>
            <div className="left-[980.42px] -[2.52px] h-[121.78px] w-[86.46px] sm:w-[70px]">
              <Image
                width={86.31}
                height={85.97}
                src={image6}
                alt=""
                className="left-[980.58px] -[2.52px] h-[85.97px] w-[86.31px]"
              />
              <p className="custo-font left-[980.4px] -[94.06px] h-[30.24px] w-[86.02px] items-center pl-2 text-[20px] font-[500] leading-[30px] text-black">
                Bombay
              </p>
            </div>
            <div className="left-[980.42px] -[2.52px] h-[121.78px] w-[86.46px] sm:hidden md:block lg:block">
              <Image
                width={86.31}
                height={85.97}
                src={image5}
                alt=""
                className="left-[980.58px] -[2.52px] h-[85.97px] w-[86.31px]"
              />
              <p className="custo-font left-[980.4px] -[94.06px] h-[30.24px] w-[86.02px] items-center pl-3 text-[20px] font-[500] leading-[30px] text-black">
                Kolkata
              </p>
            </div>
            <div className="left-[980.42px] -[2.52px] h-[121.78px] w-[86.46px] sm:hidden md:hidden lg:block">
              <Image
                width={86.31}
                height={85.97}
                src={image4}
                alt=""
                className="left-[980.58px] -[2.52px] h-[85.97px] w-[86.31px]"
              />
              <p className="custo-font left-[980.4px] -[94.06px] h-[30.24px] w-[86.02px] items-center pl-2 text-[20px] font-[500] leading-[30px] text-black">
                Bombay
              </p>
            </div>
            <div className="left-[980.42px] -[2.52px] h-[121.78px] w-[86.46px] sm:hidden lg:block">
              <Image
                width={86.31}
                height={85.97}
                src={image3}
                alt=""
                className="left-[980.58px] -[2.52px] h-[85.97px] w-[86.31px]"
              />
              <p className="custo-font left-[980.4px] -[94.06px] h-[30.24px] w-[86.02px] items-center pl-2 text-[20px] font-[500] leading-[30px] text-black">
                Bombay
              </p>
            </div>
            <div className="left-[980.42px] -[2.52px] h-[121.78px] w-[86.46px] sm:hidden lg:block">
              <Image
                width={86.31}
                height={85.97}
                src={image2}
                alt=""
                className="left-[980.58px] -[2.52px] h-[85.97px] w-[86.31px]"
              />
              <p className="custo-font left-[980.4px] -[94.06px] h-[30.24px] w-[86.02px] items-center pl-2 text-[20px] font-[500] leading-[30px] text-black">
                Bombay
              </p>
            </div>
          </div>
        </div>
        <div className="h-[36px] w-[36px] sm:mx-auto sm:block md:relative md:right-1 md:mx-auto lg:relative lg:left-[3rem] lg:hidden">
          <button className="h-[36px] w-[36px] border-[1.04px] border-[#000000]">
            <Image width={36} height={36} src={Frame39907} alt="" />
          </button>
        </div>
        <div className="lg:mx-autolg:right-4 h-[50.16px] w-[101.67px] sm:relative sm:left-[3rem] sm:mx-auto md:relative md:right-5 md:mx-auto lg:relative lg:w-auto">
          <button className="border-mixed h-[50.16px] w-[101.67px] border-[#000000]">
            <Image width={80} height={40} src={Frame39908} alt="" />
          </button>
        </div>
      </div> */}


<div className="-[887px] h-[950px] gap-[32px] bg-[#C1C7DC] bg-opacity-10 px-[37px] py-[3px] sm:mx-auto sm:h-auto lg:w-[1450px] lg:relative lg:right-[2rem] lg:h-[900px] ">
        <div className="flex items-center justify-between sm:relative sm:left-3 sm:mx-auto sm:flex sm:items-center sm:justify-around md:flex md:justify-between">
          <div className="h-[100px ] flex-col justify-between sm:mx-auto md:mx-2">
            <p className="custo-font -[2px] h-[38px] w-[281px] text-[13px] font-normal leading-[37.8px] text-[#000000] transition-all duration-300 xxs:ml-6 xxs:text-[15px] xs:ml-9 xs:text-[16px] sm:relative sm:text-left sm:text-[16px] lg:text-[28px]">
              Our Popular Homes
            </p>
            <div className="h-[30px] w-[530px]">
              <p className="custo-font h-[30px] w-[540px] text-[12px] font-[300] leading-[29.7px] text-[#000000] transition-all duration-300 xxs:ml-6 xxs:text-[14px] xs:ml-9 xs:text-[15px] sm:relative sm:h-auto sm:text-left sm:text-[16px] lg:text-[22px]">
                Book student acomodation across popular cities
              </p>
            </div>
          </div>

          <div className="-[0.5rem] flex items-center sm:relative sm:right-[3rem] sm:mx-auto sm:flex md:mx-2">
            <p className="custo-font h-[38px] w-[134px] items-center text-[28px] font-[300] leading-[37.8px] text-black transition-all duration-300 sm:relative sm:h-auto sm:text-left sm:text-[16px] lg:text-[22px]">
              Explore All
            </p>
            <button>
              <Image
                width={31}
                height={31}
                src={makiarrow}
                alt=""
                className="relative right-0 h-[31px] w-[31px]"
              />
            </button>
          </div>
        </div>
        <div className="sm:flex sm:flex-col sm:items-center">
        <div className="grid grid-cols-1 gap-4 xxs:grid xxs:grid-cols-1 xxs:items-center xxs:justify-center sm:mx-auto sm:grid sm:h-auto sm:grid-cols-2 sm:justify-start md:mx-auto md:grid-cols-2 md:justify-between lg:mr-[5rem] lg:grid lg:h-auto lg:grid-cols-4 lg:justify-between">

        <List
       
        cards={Propertcardinfo}
        />
        </div>
        </div>
        </div> 

      

      {/* <div className="-[887px] h-[950px] gap-[32px] bg-[#C1C7DC] bg-opacity-10 px-[37px] py-[3px] sm:mx-auto sm:h-auto">
        <div className="flex items-center justify-between sm:relative sm:left-3 sm:mx-auto sm:flex sm:items-center sm:justify-around md:flex md:justify-between">
          <div className="h-[100px ] flex-col justify-between sm:mx-auto md:mx-2">
            <p className="custo-font -[2px] h-[38px] w-[281px] text-[13px] font-normal leading-[37.8px] text-[#000000] transition-all duration-300 xxs:ml-6 xxs:text-[15px] xs:ml-9 xs:text-[16px] sm:relative sm:text-left sm:text-[16px] lg:text-[28px]">
              Our Popular Homes
            </p>
            <div className="h-[30px] w-[530px]">
              <p className="custo-font h-[30px] w-[540px] text-[12px] font-[300] leading-[29.7px] text-[#000000] transition-all duration-300 xxs:ml-6 xxs:text-[14px] xs:ml-9 xs:text-[15px] sm:relative sm:h-auto sm:text-left sm:text-[16px] lg:text-[22px]">
                Book student acomodation across popular cities
              </p>
            </div>
          </div>

          <div className="-[0.5rem] flex items-center sm:relative sm:right-[3rem] sm:mx-auto sm:flex md:mx-2">
            <p className="custo-font h-[38px] w-[134px] items-center text-[28px] font-[300] leading-[37.8px] text-black transition-all duration-300 sm:relative sm:h-auto sm:text-left sm:text-[16px] lg:text-[22px]">
              Explore All
            </p>
            <button>
              <Image
                width={31}
                height={31}
                src={makiarrow}
                alt=""
                className="relative right-0 h-[31px] w-[31px]"
              />
            </button>
          </div>
        </div>

        <div className="sm:flex sm:flex-col sm:items-center">
          <div className="grid grid-cols-1 gap-4 xxs:grid xxs:grid-cols-1 xxs:items-center xxs:justify-center sm:mx-auto sm:grid sm:h-auto sm:grid-cols-2 sm:justify-start md:mx-auto md:grid-cols-2 md:justify-between lg:grid lg:h-auto lg:grid-cols-4 lg:justify-between">
            <div className="h-[341px] w-[270px] rounded-[13px] pl-2 pt-4 xxs:ml-[4rem] xxs:w-[300px] xs:ml-[8rem] xs:w-[306px] sm:relative sm:right-[5rem] lg:w-[250px] xl:w-[306px]">
              <Image
                width={306}
                height={228}
                alt=""
                src={view1}
                className="h-[228px] w-[306px] rounded-[13px]"
              />
              <div className="h-[97.96px] w-[284.11px] pt-2">
                <div className="h-[57.14px] w-[284.11px] rounded-[13px]">
                  <div className="flex h-[26.37px] w-[167px] items-center rounded-[13px]">
                    <Image
                      width={26.37}
                      height={26.37}
                      alt=""
                      src={mingcute}
                      className="h-[26.37px] w-[26.37px] rounded-[13px]"
                    />
                    <p className="font-inter h-[18px] w-[136px] text-[13.19px] font-semibold leading-[17.8px] text-[#3D52A0]">
                      Banaras Island,Lagos
                    </p>
                  </div>
                  <div className="flex h-[20.88px] w-[280.11px] justify-between rounded-[13px] pl-2">
                    <div className="flex h-[18.68px] w-[61.47px] rounded-[13px]">
                      <Image
                        width={18.68}
                        height={18.68}
                        alt=""
                        src={mdibed}
                        className="h-[18.68px] w-[18.68px] rounded-[13px]"
                      />
                      <p className="font-inter h-[16px] w-[34px] text-[12.09px] font-[600] leading-[16.32px]">
                        4 Bed
                      </p>
                    </div>
                    <div className="flex h-[17.58px] w-[71.37px] rounded-[13px]">
                      <Image
                        width={17.58}
                        height={17.58}
                        alt=""
                        src={mdigraphbox}
                        className="h-[17.58px] w-[17.58px] rounded-[13px]"
                      />
                      <p className="font-inter h-[16px] w-[45px] text-[12.09px] font-[600] leading-[16.32px]">
                        4 Bed
                      </p>
                    </div>
                    <div className="flex h-[16.48px] w-[69.27px] rounded-[13px]">
                      <Image
                        width={16.48}
                        height={16.48}
                        alt=""
                        src={mdigraphline}
                        className="h-[16.48px] w-[16.48px] rounded-[13px]"
                      />
                      <p className="font-inter h-[16px] w-[44px] text-[12.09px] font-[600] leading-[16.32px]">
                        4 Bed
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pr-[170px]">
                  <button className="font-inter h-[32.96px] w-[94.49px] rounded-[5px] bg-[#3D52A0] text-[13.19px] font-[500] leading-[17.8px] text-white">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            <div className="h-[341px] w-[270px] rounded-[13px] pl-2 pt-4 xxs:ml-[4rem] xxs:w-[300px] xs:ml-[8rem] xs:w-[306px] sm:relative sm:right-[5rem] lg:w-[250px] xl:w-[306px]">
              <Image
                width={306}
                height={228}
                alt=""
                src={view2}
                className="h-[228px] w-[306px] rounded-[13px]"
              />
              <div className="h-[97.96px] w-[284.11px] pt-2">
                <div className="h-[57.14px] w-[284.11px] rounded-[13px]">
                  <div className="flex h-[26.37px] w-[167px] items-center rounded-[13px]">
                    <Image
                      width={26.37}
                      height={26.37}
                      alt=""
                      src={mingcute}
                      className="h-[26.37px] w-[26.37px] rounded-[13px]"
                    />
                    <p className="font-inter h-[18px] w-[136px] text-[13.19px] font-semibold leading-[17.8px] text-[#3D52A0]">
                      Banaras Island,Lagos
                    </p>
                  </div>
                  <div className="flex h-[20.88px] w-[280.11px] justify-between rounded-[13px] pl-2">
                    <div className="flex h-[18.68px] w-[61.47px] rounded-[13px]">
                      <Image
                        width={18.68}
                        height={18.68}
                        alt=""
                        src={mdibed}
                        className="h-[18.68px] w-[18.68px] rounded-[13px]"
                      />
                      <p className="font-inter h-[16px] w-[34px] text-[12.09px] font-[600] leading-[16.32px]">
                        4 Bed
                      </p>
                    </div>
                    <div className="flex h-[17.58px] w-[71.37px] rounded-[13px]">
                      <Image
                        width={17.58}
                        height={17.58}
                        alt=""
                        src={mdigraphbox}
                        className="h-[17.58px] w-[17.58px] rounded-[13px]"
                      />
                      <p className="font-inter h-[16px] w-[45px] text-[12.09px] font-[600] leading-[16.32px]">
                        4 Bed
                      </p>
                    </div>
                    <div className="flex h-[16.48px] w-[69.27px] rounded-[13px]">
                      <Image
                        width={16.48}
                        height={16.48}
                        alt=""
                        src={mdigraphline}
                        className="h-[16.48px] w-[16.48px] rounded-[13px]"
                      />
                      <p className="font-inter h-[16px] w-[44px] text-[12.09px] font-[600] leading-[16.32px]">
                        4 Bed
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pr-[170px]">
                  <button className="font-inter h-[32.96px] w-[94.49px] rounded-[5px] bg-[#3D52A0] text-[13.19px] font-[500] leading-[17.8px] text-white">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            <div className="h-[341px] w-[270px] rounded-[13px] pl-2 pt-4 xxs:ml-[4rem] xxs:w-[300px] xs:ml-[8rem] xs:w-[306px] sm:relative sm:right-[5rem] lg:w-[250px] xl:w-[306px]">
              <Image
                width={306}
                height={228}
                alt=""
                src={view3}
                className="h-[228px] w-[306px] rounded-[13px]"
              />
              <div className="h-[97.96px] w-[284.11px] pt-2">
                <div className="h-[57.14px] w-[284.11px] rounded-[13px]">
                  <div className="flex h-[26.37px] w-[167px] items-center rounded-[13px]">
                    <Image
                      width={26.37}
                      height={26.37}
                      alt=""
                      src={mingcute}
                      className="h-[26.37px] w-[26.37px] rounded-[13px]"
                    />
                    <p className="font-inter h-[18px] w-[136px] text-[13.19px] font-semibold leading-[17.8px] text-[#3D52A0]">
                      Banaras Island,Lagos
                    </p>
                  </div>
                  <div className="flex h-[20.88px] w-[280.11px] justify-between rounded-[13px] pl-2">
                    <div className="flex h-[18.68px] w-[61.47px] rounded-[13px]">
                      <Image
                        width={18.68}
                        height={18.68}
                        alt=""
                        src={mdibed}
                        className="h-[18.68px] w-[18.68px] rounded-[13px]"
                      />
                      <p className="font-inter h-[16px] w-[34px] text-[12.09px] font-[600] leading-[16.32px]">
                        4 Bed
                      </p>
                    </div>
                    <div className="flex h-[17.58px] w-[71.37px] rounded-[13px]">
                      <Image
                        width={17.58}
                        height={17.58}
                        alt=""
                        src={mdigraphbox}
                        className="h-[17.58px] w-[17.58px] rounded-[13px]"
                      />
                      <p className="font-inter h-[16px] w-[45px] text-[12.09px] font-[600] leading-[16.32px]">
                        4 Bed
                      </p>
                    </div>
                    <div className="flex h-[16.48px] w-[69.27px] rounded-[13px]">
                      <Image
                        width={16.48}
                        height={16.48}
                        alt=""
                        src={mdigraphline}
                        className="h-[16.48px] w-[16.48px] rounded-[13px]"
                      />
                      <p className="font-inter h-[16px] w-[44px] text-[12.09px] font-[600] leading-[16.32px]">
                        4 Bed
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pr-[170px]">
                  <button className="font-inter h-[32.96px] w-[94.49px] rounded-[5px] bg-[#3D52A0] text-[13.19px] font-[500] leading-[17.8px] text-white">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            <div className="h-[341px] w-[270px] rounded-[13px] pl-2 pt-4 xxs:ml-[4rem] xxs:w-[300px] xs:ml-[8rem] xs:w-[306px] sm:relative sm:right-[5rem] lg:w-[250px] xl:w-[306px]">
              <Image
                width={306}
                height={228}
                src={view4}
                alt=""
                className="h-[228px] w-[306px] rounded-[13px]"
              />
              <div className="h-[97.96px] w-[284.11px] pt-2">
                <div className="h-[57.14px] w-[284.11px] rounded-[13px]">
                  <div className="flex h-[26.37px] w-[167px] items-center rounded-[13px]">
                    <Image
                      width={26.37}
                      height={26.37}
                      src={mingcute}
                      alt=""
                      className="h-[26.37px] w-[26.37px] rounded-[13px]"
                    />
                    <p className="font-inter h-[18px] w-[136px] text-[13.19px] font-semibold leading-[17.8px] text-[#3D52A0]">
                      Banaras Island,Lagos
                    </p>
                  </div>
                  <div className="flex h-[20.88px] w-[280.11px] justify-between rounded-[13px] pl-2">
                    <div className="flex h-[18.68px] w-[61.47px] rounded-[13px]">
                      <Image
                        width={18.68}
                        height={18.68}
                        src={mdibed}
                        alt=""
                        className="h-[18.68px] w-[18.68px] rounded-[13px]"
                      />
                      <p className="font-inter h-[16px] w-[34px] text-[12.09px] font-[600] leading-[16.32px]">
                        4 Bed
                      </p>
                    </div>
                    <div className="flex h-[17.58px] w-[71.37px] rounded-[13px]">
                      <Image
                        width={17.58}
                        height={17.58}
                        src={mdigraphbox}
                        alt=""
                        className="h-[17.58px] w-[17.58px] rounded-[13px]"
                      />
                      <p className="font-inter h-[16px] w-[45px] text-[12.09px] font-[600] leading-[16.32px]">
                        4 Bed
                      </p>
                    </div>
                    <div className="flex h-[16.48px] w-[69.27px] rounded-[13px]">
                      <Image
                        width={16.48}
                        height={16.48}
                        src={mdigraphline}
                        alt=""
                        className="h-[16.48px] w-[16.48px] rounded-[13px]"
                      />
                      <p className="font-inter h-[16px] w-[44px] text-[12.09px] font-[600] leading-[16.32px]">
                        4 Bed
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pr-[170px]">
                  <button className="font-inter h-[32.96px] w-[94.49px] rounded-[5px] bg-[#3D52A0] text-[13.19px] font-[500] leading-[17.8px] text-white">
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            <div className="h-[341px] w-[270px] rounded-[13px] pl-2 pt-4 xxs:ml-[4rem] xxs:w-[300px] xs:ml-[8rem] xs:w-[306px] sm:relative sm:right-[5rem] lg:w-[250px] xl:w-[306px]">
              <Image
                width={306}
                height={228}
                src={view5}
                alt=""
                className="h-[228px] w-[306px] rounded-[13px]"
              />
              <div className="h-[97.96px] w-[284.11px] pt-2">
                <div className="h-[57.14px] w-[284.11px] rounded-[13px]">
                  <div className="flex h-[26.37px] w-[167px] items-center rounded-[13px]">
                    <Image
                      width={26.37}
                      height={26.37}
                      src={mingcute}
                      alt=""
                      className="h-[26.37px] w-[26.37px] rounded-[13px]"
                    />
                    <p className="font-inter h-[18px] w-[136px] text-[13.19px] font-semibold leading-[17.8px] text-[#3D52A0]">
                      Banaras Island,Lagos
                    </p>
                  </div>
                  <div className="flex h-[20.88px] w-[280.11px] justify-between rounded-[13px] pl-2">
                    <div className="flex h-[18.68px] w-[61.47px] rounded-[13px]">
                      <Image
                        width={18.68}
                        height={18.68}
                        src={mdibed}
                        alt=""
                        className="h-[18.68px] w-[18.68px] rounded-[13px]"
                      />
                      <p className="font-inter h-[16px] w-[34px] text-[12.09px] font-[600] leading-[16.32px]">
                        4 Bed
                      </p>
                    </div>
                    <div className="flex h-[17.58px] w-[71.37px] rounded-[13px]">
                      <Image
                        width={17.58}
                        height={17.58}
                        src={mdigraphbox}
                        alt=""
                        className="h-[17.58px] w-[17.58px] rounded-[13px]"
                      />
                      <p className="font-inter h-[16px] w-[45px] text-[12.09px] font-[600] leading-[16.32px]">
                        4 Bed
                      </p>
                    </div>
                    <div className="flex h-[16.48px] w-[69.27px] rounded-[13px]">
                      <Image
                        width={16.48}
                        height={16.48}
                        src={mdigraphline}
                        alt=""
                        className="h-[16.48px] w-[16.48px] rounded-[13px]"
                      />
                      <p className="font-inter h-[16px] w-[44px] text-[12.09px] font-[600] leading-[16.32px]">
                        4 Bed
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pr-[170px]">
                  <button className="font-inter h-[32.96px] w-[94.49px] rounded-[5px] bg-[#3D52A0] text-[13.19px] font-[500] leading-[17.8px] text-white">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            <div className="h-[341px] w-[270px] rounded-[13px] pl-2 pt-4 xxs:ml-[4rem] xxs:w-[300px] xs:ml-[8rem] xs:w-[306px] sm:relative sm:right-[5rem] lg:w-[250px] xl:w-[306px]">
              <Image
                width={306}
                height={228}
                src={view6}
                alt=""
                className="h-[228px] w-[306px] rounded-[13px]"
              />
              <div className="h-[97.96px] w-[284.11px] pt-2">
                <div className="h-[57.14px] w-[284.11px] rounded-[13px]">
                  <div className="flex h-[26.37px] w-[167px] items-center rounded-[13px]">
                    <Image
                      width={26.37}
                      height={26.37}
                      src={mingcute}
                      alt=""
                      className="h-[26.37px] w-[26.37px] rounded-[13px]"
                    />
                    <p className="font-inter h-[18px] w-[136px] text-[13.19px] font-semibold leading-[17.8px] text-[#3D52A0]">
                      Banaras Island,Lagos
                    </p>
                  </div>
                  <div className="flex h-[20.88px] w-[280.11px] justify-between rounded-[13px] pl-2">
                    <div className="flex h-[18.68px] w-[61.47px] rounded-[13px]">
                      <Image
                        width={18.68}
                        height={18.68}
                        src={mdibed}
                        alt=""
                        className="h-[18.68px] w-[18.68px] rounded-[13px]"
                      />
                      <p className="font-inter h-[16px] w-[34px] text-[12.09px] font-[600] leading-[16.32px]">
                        4 Bed
                      </p>
                    </div>
                    <div className="flex h-[17.58px] w-[71.37px] rounded-[13px]">
                      <Image
                        width={17.58}
                        height={17.58}
                        src={mdigraphbox}
                        alt=""
                        className="h-[17.58px] w-[17.58px] rounded-[13px]"
                      />
                      <p className="font-inter h-[16px] w-[45px] text-[12.09px] font-[600] leading-[16.32px]">
                        4 Bed
                      </p>
                    </div>
                    <div className="flex h-[16.48px] w-[69.27px] rounded-[13px]">
                      <Image
                        width={16.48}
                        height={16.48}
                        src={mdigraphline}
                        alt=""
                        className="h-[16.48px] w-[16.48px] rounded-[13px]"
                      />
                      <p className="font-inter h-[16px] w-[44px] text-[12.09px] font-[600] leading-[16.32px]">
                        4 Bed
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pr-[170px]">
                  <button className="font-inter h-[32.96px] w-[94.49px] rounded-[5px] bg-[#3D52A0] text-[13.19px] font-[500] leading-[17.8px] text-white">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            <div className="h-[341px] w-[270px] rounded-[13px] pl-2 pt-4 xxs:ml-[4rem] xxs:w-[300px] xs:ml-[8rem] xs:w-[306px] sm:relative sm:right-[5rem] lg:w-[250px] xl:w-[306px]">
              <Image
                width={306}
                height={228}
                src={view7}
                alt=""
                className="h-[228px] w-[306px] rounded-[13px]"
              />
              <div className="h-[97.96px] w-[284.11px] pt-2">
                <div className="h-[57.14px] w-[284.11px] rounded-[13px]">
                  <div className="flex h-[26.37px] w-[167px] items-center rounded-[13px]">
                    <Image
                      width={26.37}
                      height={26.37}
                      src={mingcute}
                      alt=""
                      className="h-[26.37px] w-[26.37px] rounded-[13px]"
                    />
                    <p className="font-inter h-[18px] w-[136px] text-[13.19px] font-semibold leading-[17.8px] text-[#3D52A0]">
                      Banaras Island,Lagos
                    </p>
                  </div>
                  <div className="flex h-[20.88px] w-[280.11px] justify-between rounded-[13px] pl-2">
                    <div className="flex h-[18.68px] w-[61.47px] rounded-[13px]">
                      <Image
                        width={18.68}
                        height={18.68}
                        src={mdibed}
                        alt=""
                        className="h-[18.68px] w-[18.68px] rounded-[13px]"
                      />
                      <p className="font-inter h-[16px] w-[34px] text-[12.09px] font-[600] leading-[16.32px]">
                        4 Bed
                      </p>
                    </div>
                    <div className="flex h-[17.58px] w-[71.37px] rounded-[13px]">
                      <Image
                        width={17.58}
                        height={17.58}
                        src={mdigraphbox}
                        alt=""
                        className="h-[17.58px] w-[17.58px] rounded-[13px]"
                      />
                      <p className="font-inter h-[16px] w-[45px] text-[12.09px] font-[600] leading-[16.32px]">
                        4 Bed
                      </p>
                    </div>
                    <div className="flex h-[16.48px] w-[69.27px] rounded-[13px]">
                      <Image
                        width={16.48}
                        height={16.48}
                        src={mdigraphline}
                        alt=""
                        className="h-[16.48px] w-[16.48px] rounded-[13px]"
                      />
                      <p className="font-inter h-[16px] w-[44px] text-[12.09px] font-[600] leading-[16.32px]">
                        4 Bed
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pr-[170px]">
                  <button className="font-inter h-[32.96px] w-[94.49px] cursor-pointer rounded-[5px] bg-[#3D52A0] text-[13.19px] font-[500] leading-[17.8px] text-white">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            <div className="h-[341px] w-[270px] rounded-[13px] pl-2 pt-4 xxs:ml-[4rem] xxs:w-[300px] xs:ml-[8rem] xs:w-[306px] sm:relative sm:right-[5rem] lg:w-[250px] xl:w-[306px]">
              <Image
                width={284.11}
                height={97.96}
                src={view8}
                alt=""
                className="h-[228px] w-[306px] rounded-[13px]"
              />
              <div className="h-[97.96px] w-[284.11px] pt-2">
                <div className="h-[57.14px] w-[284.11px] rounded-[13px]">
                  <div className="flex h-[26.37px] w-[167px] items-center rounded-[13px]">
                    <Image
                      width={26.37}
                      height={26.37}
                      src={mingcute}
                      alt=""
                      className="h-[26.37px] w-[26.37px] rounded-[13px]"
                    />
                    <p className="font-inter h-[18px] w-[136px] text-[13.19px] font-semibold leading-[17.8px] text-[#3D52A0]">
                      Banaras Island,Lagos
                    </p>
                  </div>
                  <div className="flex h-[20.88px] w-[280.11px] justify-between rounded-[13px] pl-2">
                    <div className="flex h-[18.68px] w-[61.47px] rounded-[13px]">
                      <Image
                        width={18.68}
                        height={18.68}
                        src={mdibed}
                        alt=""
                        className="h-[18.68px] w-[18.68px] rounded-[13px]"
                      />
                      <p className="font-inter h-[16px] w-[34px] text-[12.09px] font-[600] leading-[16.32px]">
                        4 Bed
                      </p>
                    </div>
                    <div className="flex h-[17.58px] w-[71.37px] rounded-[13px]">
                      <Image
                        width={17.58}
                        height={17.58}
                        src={mdigraphbox}
                        alt=""
                        className="h-[17.58px] w-[17.58px] rounded-[13px]"
                      />
                      <p className="font-inter h-[16px] w-[45px] text-[12.09px] font-[600] leading-[16.32px]">
                        4 Bed
                      </p>
                    </div>
                    <div className="flex h-[16.48px] w-[69.27px] rounded-[13px]">
                      <Image
                        width={16.48}
                        height={16.48}
                        src={mdigraphline}
                        alt=""
                        className="h-[16.48px] w-[16.48px] rounded-[13px]"
                      />
                      <p className="font-inter h-[16px] w-[44px] text-[12.09px] font-[600] leading-[16.32px]">
                        4 Bed
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pr-[170px]">
                  <button className="font-inter h-[32.96px] w-[94.49px] rounded-[5px] bg-[#3D52A0] text-[13.19px] font-[500] leading-[17.8px] text-white">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button className="flex w-full items-center justify-center">
          <div className="h-[48px] w-[170.43px] rounded-[4.17px] border border-[#4A61B5] text-[#000000] sm:relative sm:right-[10rem] sm:-[0.6rem]">
            <div className="flex h-[15px] w-[145.91px] items-center pl-2 pt-[23px]">
              <p className="custo-font h-[15px] w-[149px] text-[11.13px] font-[500] leading-[15.03px] text-black">
                View All the Cities
              </p>
              <Image src={Arrow3} alt="" className="pl-2" />
            </div>
          </div>
        </button>
      </div> */}

      <div className="space-y-32">
        <InfoCards
          title={strings.landing.ourServices.heading}
          subText={strings.landing.ourServices.subHeading}
          cards={OurServicesInfo}
        />
        <InfoCards
          title={strings.landing.whyChooseUs.heading}
          subText={strings.landing.whyChooseUs.subHeading}
          cards={WhyChooseUsInfo}
        />
        <InfoCards
          title={strings.landing.getInTouch.heading}
          subText={strings.landing.getInTouch.subHeading}
          cards={GetInTouchInfo}
        />
      </div>
      <VideoTestimonials />
      <FAQs />
    </div>
  );
}

export default Home;
