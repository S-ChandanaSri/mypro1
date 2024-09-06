"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import image6 from "../app/_assets/images/image6.png";
import image7 from "../app/_assets/images/image7.png";
import image5 from "../app/_assets/images/image5.png";
import image4 from "../app/_assets/images/image4.png";
import image3 from "../app/_assets/images/image3.png";
import image2 from "../app/_assets/images/image2.png";
import Frame39907 from "../app/_assets/images/Frame39907.png";
import Frame39908 from "../app/_assets/images/Frame39908.png";
import makiarrow from "../app/_assets/images/makiarrow.png";
import view1 from "../app/_assets/images/view1.jpg";
import mingcute from "../app/_assets/images/mingcute.png";
import mdibed from "../app/_assets/images/mdibed.png";
import mdigraphbox from "../app/_assets/images/mdigraphbox.png";
import mdigraphline from "../app/_assets/images/mdigraphline.png";
import view2 from "../app/_assets/images/view2.jpg";
import view3 from "../app/_assets/images/view3.jpg";
import view4 from "../app/_assets/images/view4.jpg";
import view5 from "../app/_assets/images/view5.jpg";
import view6 from "../app/_assets/images/view6.jpg";
import view7 from "../app/_assets/images/view7.jpg";
import view8 from "../app/_assets/images/view8.jpg";
import Arrow3 from "../app/_assets/images/Arrow3.png";
import pluscircle from "../app/_assets/images/pluscircle.png";
import minuscircle from "../app/_assets/images/minuscircle.png";
import Avatar from "../app/_assets/images/Avatar.png";
import Avatar1 from "../app/_assets/images/Avatar1.png";
import Avatar2 from "../app/_assets/images/Avatar2.png";
import sms from "../app/_assets/images/sms.png";
import icons from "../app/_assets/images/Icons.png";
import mail from "../app/_assets/images/mail.png";
import address from "../app/_assets/images/address.png";
import fax from "../app/_assets/images/fax.png";
import Logoz from "../app/_assets/images/Logoz.png";
import VideoPlayer from "../components/root/VideoPlayer";
import {
  GetInTouchInfo,
  OurServicesInfo,
  VideoTestimonials,
  WhyChooseUsInfo,
} from "@/constants/arrays";
import { strings } from "@/constants/strings";
import InfoCards from "@/components/root/InfoCards";
import Hero from "@/components/root/Hero";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "@/components/common/Button";
import { svgs } from "@/constants/images";
import { PATHS } from "@/constants";
import { useRouter } from "next/navigation";

function Home() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean[]>([]);

  const handleToggle = (index: number) => {
    setIsOpen((prev) => {
      const newIsOpen = [...prev];
      newIsOpen[index] = !newIsOpen[index];
      return newIsOpen;
    });
  };

  const activeTestimonial = useRef<number>(1);
  const TestimonialSettings = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    beforeChange: (_oldIndex: number, newIndex: number) => {
      activeTestimonial.current == newIndex;
    },
  };

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

      <div className="flex flex-col items-center space-y-16 text-center">
        <h3 className="text-2xl font-medium">
          {strings.landing.testimonials.heading}
          <p className="text-md font-light md:w-[50rem]">
            {strings.landing.testimonials.subHeading}
          </p>
        </h3>
        <div className="hidden w-full lg:block">
          <Slider {...TestimonialSettings}>
            {VideoTestimonials.map((testimonial, idx) => (
              <VideoPlayer
                key={idx}
                isPlaying={idx === activeTestimonial.current}
                src={testimonial.videoPath}
                title={testimonial.label}
                subtitle={testimonial.subText}
              />
            ))}
          </Slider>
        </div>
        <ul className="block space-y-12 lg:hidden">
          {VideoTestimonials.map((testimonial, idx) => (
            <VideoPlayer
              key={idx}
              src={testimonial.videoPath}
              title={testimonial.label}
              subtitle={testimonial.subText}
            />
          ))}
        </ul>

        <Button
          onClick={() => router.push(PATHS.testimonials)}
          className="font-semibold"
          size="md"
          postIconNode={svgs.chevronRightUp}
          variant="link"
        >
          {strings.landing.testimonials.seeAllReviews}
        </Button>
      </div>

      {/* <div className="bg-white">
        <div className="relative -[461rem] flex h-[94x] w-[1280px] flex-col items-center gap-[32px] px-[32px] xxs:relative xxs:left-[4rem] xs:relative xs:left-[8rem] sm:relative sm:-[455rem] lg:relative lg:left-[15rem] lg:-[378rem] xl:relative xl:left-[22rem]">
          <div className="h-[94px] w-[1216px] gap-[48px]">
            <div className="relative h-[94px] w-[768px] gap-[20px] pl-[50px]">
              <p className="custo-font relative right-[4rem] h-[44px] text-[13px] font-[400] leading-[44px] tracking-[-2%] transition-all duration-300 xs:relative xs:right-[8rem] xs:text-[25px] sm:mx-auto sm:text-left sm:text-[26px] lg:mx-auto lg:text-left lg:text-[30px] xl:mx-auto xl:text-left xl:text-[36px]">
                Frequently asked questions
              </p>
              <p className="custo-font relative right-[4rem] h-[30px] pt-[13px] text-[9px] font-[400] leading-[28px] text-[#667085] transition-all duration-300 xs:relative xs:right-[8rem] xs:text-[12px] sm:mx-auto sm:text-left sm:text-[16px] lg:mx-auto lg:text-left lg:text-[18px] xl:mx-auto xl:text-left xl:text-[20px]">
                Everything you need to know about the student Accomodation and
                Housing
              </p>
            </div>
          </div>
        </div>
        <div className="relative -[461rem] h-[513px] w-[1280px] gap-[64px] px-[32px] xxs:relative xxs:left-[4rem] xs:relative xs:left-[8rem] sm:relative sm:-[455rem] lg:relative lg:left-[16rem] lg:-[378rem] xl:relative xl:left-[22rem]">
          <div className="h-[513px] w-[768px] gap-[32px] pl-[40px] pt-[50px]">
            {faqs.map((item, index) => (
              <div key={item.id} className="h-[84px] w-[768px] gap-[24px]">
                <div className="flex h-[84px] w-[768px] justify-between gap-[24px]">
                  <div className="w-fill h-[84px] w-[720px] gap-[18px] transition-all duration-300 sm:mx-auto sm:text-center">
                    <p className="custo-font relative right-[3.5rem] flex h-[px] pr-[210px] text-[11px] font-[500] leading-[28px] text-[#101828] transition-all duration-300 xs:relative xs:right-[8rem] xs:text-[15px] sm:mx-auto sm:text-left sm:text-[18px] lg:mx-auto lg:text-left lg:text-[18px] xl:mx-auto xl:text-left xl:text-[18px]">
                      {item.question}
                    </p>
                    {isOpen[index] && (
                      <p className="custo-font relative right-[3.5rem] flex h-[48px] w-[335px] text-left text-[8px] font-[400] leading-[24px] text-[#667085] transition-all duration-300 xs:relative xs:right-[8rem] xs:w-[470px] xs:text-[12px] sm:mx-auto sm:mr-[11rem] sm:w-[580px] sm:text-[12px] lg:mx-auto lg:mr-[11rem] lg:w-[580px] lg:text-left lg:text-[14px] xl:mx-auto xl:mr-[11rem] xl:w-[720px] xl:text-left xl:text-[16px]">
                        {item.answer}
                      </p>
                    )}
                  </div>
                  <Image
                    width={24}
                    height={24}
                    src={isOpen[index] ? minuscircle : pluscircle}
                    onClick={() => handleToggle(index)}
                    className="relative right-[33rem] h-[24px] w-[24px] cursor-pointer xs:relative xs:right-[30rem] sm:relative sm:right-[12rem] sm:mx-auto xl:relative xl:left-[1rem]"
                    alt={isOpen[index] ? "Collapse" : "Expand"}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative -[460rem] h-[294px] gap-[32px] xxs:relative xxs:right-[0rem] xs:relative xs:right-[0rem] sm:relative sm:-[455rem] sm:flex sm:items-center md:ml-[9rem] lg:relative lg:right-[1rem] lg:-[380rem] lg:flex lg:items-center xl:relative xl:right-[1rem]">
          <div className="flex h-[294px] flex-col items-center gap-[32px] rounded-[16px] bg-[#F9FAFB] p-[32px] sm:mx-auto sm:flex sm:items-center">
            <div className="flex h-[56px] w-[120px]">
              <Image
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
              />
            </div>
            <div className="w-fixed h-[66px] w-[768px] text-center">
              <p className="custo-font h-[30px] w-[768px] text-[20px] font-[400] leading-[30px] text-[#101828]">
                Still have questions?
              </p>
              <p className="custo-font relative left-[14rem] h-[28px] w-[320px] text-[12px] font-[400] leading-[28px] text-[#667085]">
                Can&apos;t find the answer you&apos;re looking for? Please chat
                to our friendly team.
              </p>
            </div>

            <div className="h-[44px] w-[134px] gap-[8px]">
              <div className="h-[44x] w-[134px] gap-[8px] rounded-[8px] border-[1px] bg-[#002855] px-[18px] py-[10px]">
                <button className="custo-font h-[24px] w-[98px] cursor-pointer text-[16px] font-[500] leading-[24px] text-[#FFFFFF]">
                  Get in touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="-[465rem] sm:-[460rem] lg:-[385rem] relative flex h-[977px] flex-col items-center gap-[56px] rounded-[4px] bg-[#F6F9FF] sm:relative lg:relative">
        <div className="flex h-auto w-auto flex-col gap-[20px] rounded-[12px] bg-[#3D52A0] px-4 py-[28px] sm:w-auto lg:flex-row lg:gap-[100px]">
          <div className="h-auto w-full gap-[4px] lg:w-[645px]">
            <p className="custo-font h-[24px] w-auto text-[16px] font-[500] leading-[24px] text-[#FFFFFF]">
              Newsletter
            </p>
            <p className="custo-font h-[24px] w-auto text-[16px] font-[400] leading-[24px] text-[#FFFFFF]">
              Be the first one to know about discounts, offers and events
            </p>
          </div>
          <div className="flex h-[48px] w-full items-center rounded-[12px] bg-[#4A61B5] pl-[24px] pr-[6px] lg:w-[457px]">
            <div className="flex items-center">
              <Image
                width={16}
                height={16}
                alt=""
                src={sms}
                className="h-[16px] w-[16px]"
              />
              <input
                placeholder="Enter your email"
                className="custo-font h-[24px] w-full cursor-pointer bg-[#4A61B5] pl-2 text-[16px] font-[400] leading-[24px] focus:border-0 focus:outline-none lg:w-[160px]"
              />
            </div>
            <button className="flex h-[36px] w-full justify-end gap-[10px] lg:w-[265px]">
              <div className="h-[36px] w-[94px] rounded-[10px] bg-[#FFFFFFDB]">
                <p className="custo-font -[6px] relative left-[17px] h-[24px] w-[58px] text-[16px] font-[500] leading-[24px] text-[#002855]">
                  Submit
                </p>
              </div>
            </button>
          </div>
        </div>

        <div className="w-[1184px] gap-[24px] sm:h-[250px] sm:w-[100%]">
          <div className="h-[98px] flex-col gap-[16px] sm:flex sm:w-[100%] sm:items-center lg:flex lg:w-[1184px] lg:items-start">
            <Image
              alt=""
              width={134}
              height={34}
              src={Logoz}
              className="left-[13.5rem] h-[34px] w-[134px] pb-2 sm:h-[100%] xl:relative"
            />
            <p className="custo-font h-[48px] w-[750px] pl-[27rem] text-center text-[9px] font-[400] leading-[24px] sm:relative sm:right-[13rem] sm:w-[1100px] sm:text-center sm:text-[16px] lg:relative lg:right-[26rem] lg:w-[1450px] lg:text-left xl:relative xl:right-[13rem]">
              We ara a lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat...{" "}
              <span className="text-[#4A61B5]">Read More</span>
            </p>
          </div>
          <div className="flex h-[51px] w-[1184px] flex-col items-center gap-[80px] pt-[30px] sm:relative sm:left-[2rem] sm:flex sm:w-[700px] sm:flex-row sm:items-center sm:pt-[110px] md:relative md:right-[2rem] md:w-[900px] xl:relative xl:left-[11rem] xl:flex">
            <div className="w-fill h-fill flex h-[51px] w-[236px] gap-[12px] sm:flex sm:w-[180px] sm:items-center sm:pr-[130px] md:w-[200px] md:pl-[30px]">
              <Image
                alt=""
                width={32}
                height={32}
                src={icons}
                className="h-[32px] w-[32px]"
              />
              <div className="h-[48px] w-[192px] gap-[2px]">
                <p className="custo-font flex h-[24px] w-[192px] text-[16px] font-[400] leading-[24px] text-[#4B5768]">
                  Tel
                </p>
                <p className="custo-font flex h-[22px] w-[192px] text-[16px] font-[500] leading-[20.83px] text-[#3D52A0]">
                  310-437-2766
                </p>
              </div>
            </div>
            <div className="w-fill h-fill flex h-[51px] w-[236px] gap-[12px] sm:relative sm:right-[100px] sm:flex sm:w-[180px] sm:items-center md:w-[200px] md:pl-[60px] lg:relative lg:right-[6rem]">
              <Image
                alt=""
                width={32}
                height={32}
                src={mail}
                className="h-[32px] w-[32px]"
              />
              <div className="h-[48px] w-[192px] gap-[2px]">
                <p className="custo-font flex h-[24px] w-[192px] text-[16px] font-[400] leading-[24px] text-[#4B5768]">
                  Mail
                </p>
                <button className="custo-font flex h-[22px] w-[192px] text-[16px] font-[500] leading-[20.83px] text-[#3D52A0]">
                  unreal@outlook.com
                </button>
              </div>
            </div>
            <div className="w-fill h-fill flex h-[51px] w-[236px] gap-[12px] sm:relative sm:right-[170px] sm:flex sm:w-[180px] sm:items-center md:w-[200px] md:pl-[60px] lg:relative lg:right-[8rem] xl:mr-[2rem]">
              <Image
                alt=""
                width={32}
                height={32}
                src={address}
                className="h-[32px] w-[32px]"
              />
              <div className="h-[48px] w-[192px] gap-[2px]">
                <p className="custo-font flex h-[24px] w-[192px] text-[16px] font-[400] leading-[24px] text-[#4B5768]">
                  Address
                </p>
                <p className="custo-font flex h-[22px] w-[262px] text-[16px] font-[500] leading-[20.83px] text-[#3D52A0]">
                  706 Campfire Ave. Meriden, CT 06450
                </p>
              </div>
            </div>
            <div className="w-fill h-fill flex h-[51px] w-[236px] justify-evenly gap-[18px] pl-8 sm:hidden lg:relative lg:right-[5rem] lg:block lg:flex">
              <Image
                alt=""
                width={32}
                height={32}
                src={fax}
                className="h-[32px] w-[32px]"
              />
              <div className="h-[48px] w-[192px] gap-[2px]">
                <p className="custo-font flex h-[24px] w-[192px] text-[16px] font-[400] leading-[24px] text-[#4B5768]">
                  Fax
                </p>
                <p className="custo-font flex h-[22px] w-[192px] text-[16px] font-[500] leading-[20.83px] text-[#3D52A0]">
                  +1-000-0000
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="-[24rem] sm:-[0rem] relative flex h-[272px] w-[300px] justify-between sm:relative sm:right-[2rem] sm:flex sm:w-[900px] sm:justify-evenly md:w-[1100px] lg:flex lg:w-[984px] lg:justify-between lg:pt-4 xl:w-[1100px]">
          <div className="flex h-[248px] flex-col gap-[24px] sm:relative sm:left-[9rem] sm:w-[137.33px] lg:relative lg:left-[3rem]">
            <p className="custo-font flex h-[24px] w-[80px] text-[16px] font-[500] leading-[24px] text-[#191D23] sm:w-[137.33px]">
              About
            </p>
            <div className="flex h-[200px] w-[80px] flex-col gap-[20px] sm:w-[137.33px]">
              <p className="custo-font flex h-[24px] w-[80px] text-[16px] font-[500] leading-[24px] text-[#4B5768] sm:w-[137.33px]">
                About us
              </p>
              <p className="custo-font flex h-[24px] w-[80px] text-[16px] font-[500] leading-[24px] text-[#4B5768] sm:w-[137.33px]">
                Blog
              </p>
              <p className="custo-font flex h-[24px] w-[80px] text-[16px] font-[500] leading-[24px] text-[#4B5768] sm:w-[137.33px]">
                Careers
              </p>
              <p className="custo-font flex h-[24px] w-[80px] text-[16px] font-[500] leading-[24px] text-[#4B5768] sm:w-[137.33px]">
                Jobs
              </p>
              <p className="custo-font flex h-[24px] w-[80px] text-[16px] font-[500] leading-[24px] text-[#4B5768] sm:w-[137.33px]">
                In Press
              </p>
            </div>
          </div>
          <div className="flex h-[248px] flex-col gap-[24px] sm:relative sm:left-[5.3rem] sm:w-[137.33px] lg:relative lg:left-[3rem]">
            <p className="custo-font flex h-[24px] w-[80px] text-[16px] font-[500] leading-[24px] text-[#191D23] sm:w-[137.33px]">
              Support
            </p>
            <div className="flex h-[200px] flex-col gap-[20px] sm:w-[137.33px]">
              <p className="custo-font flex h-[24px] w-[80px] text-[16px] font-[500] leading-[24px] text-[#4B5768] sm:w-[137.33px]">
                Contact us
              </p>
              <p className="custo-font flex h-[24px] w-[80px] text-[16px] font-[500] leading-[24px] text-[#4B5768] sm:w-[137.33px]">
                Contact us
              </p>
              <p className="custo-font flex h-[24px] w-[80px] text-[16px] font-[500] leading-[24px] text-[#4B5768] sm:w-[137.33px]">
                Whatsapp
              </p>
              <p className="custo-font flex h-[24px] w-[80px] text-[16px] font-[500] leading-[24px] text-[#4B5768] sm:w-[137.33px]">
                Telegram
              </p>
              <p className="custo-font flex h-[24px] w-[80px] text-[16px] font-[500] leading-[24px] text-[#4B5768] sm:w-[137.33px]">
                Ticketing
              </p>
            </div>
          </div>
          <div className="flex h-[272px] flex-col gap-[24px] sm:relative sm:left-[3.8rem] sm:w-[137.33px] lg:relative lg:left-[3rem]">
            <p className="custo-font flex h-[24px] w-[80px] text-[16px] font-[500] leading-[24px] text-[#191D23] sm:w-[137.33px]">
              FAQ
            </p>
            <div className="flex h-[200px] flex-col gap-[20px] sm:w-[137.33px]">
              <p className="custo-font flex h-[24px] w-[80px] text-[16px] font-[500] leading-[24px] text-[#4B5768] sm:w-[137.33px]">
                Account
              </p>
              <p className="custo-font relative h-[42px] w-[80px] text-[16px] font-[500] leading-[24px] text-[#4B5768] sm:relative sm:right-[35px] sm:w-[137.33px]">
                Manage Deliveries
              </p>
              <p className="custo-font flex h-[24px] w-[80px] text-[16px] font-[500] leading-[24px] text-[#4B5768] sm:w-[137.33px]">
                Orders
              </p>
              <p className="custo-font flex h-[24px] w-[80px] text-[16px] font-[500] leading-[24px] text-[#4B5768] sm:w-[137.33px]">
                Orders
              </p>
              <p className="custo-font flex h-[24px] w-[80px] text-[16px] font-[500] leading-[24px] text-[#4B5768] sm:w-[137.33px]">
                Returns
              </p>
            </div>
          </div>
          <div className="flex h-[248px] flex-col gap-[24px] sm:relative sm:left-[1rem] sm:w-[137.33px] lg:relative lg:left-[2rem]">
            <p className="custo-font flex h-[24px] w-[80px] text-[16px] font-[500] leading-[24px] text-[#191D23] sm:w-[137.33px]">
              About
            </p>
            <div className="flex h-[200px] flex-col gap-[20px] sm:w-[137.33px]">
              <p className="custo-font flex h-[24px] w-[80px] text-[16px] font-[500] leading-[24px] text-[#4B5768] sm:w-[137.33px]">
                About us
              </p>
              <p className="custo-font flex h-[24px] w-[80px] text-[16px] font-[500] leading-[24px] text-[#4B5768] sm:w-[137.33px]">
                Blog
              </p>
              <p className="custo-font flex h-[24px] w-[80px] text-[16px] font-[500] leading-[24px] text-[#4B5768] sm:w-[137.33px]">
                Careers
              </p>
              <p className="custo-font flex h-[24px] w-[80px] text-[16px] font-[500] leading-[24px] text-[#4B5768] sm:w-[137.33px]">
                Jobs
              </p>
              <p className="custo-font flex h-[24px] w-[80px] text-[16px] font-[500] leading-[24px] text-[#4B5768] sm:w-[137.33px]">
                In Press
              </p>
            </div>
          </div>
          <div className="flex hidden h-[248px] flex-col gap-[24px] sm:relative sm:right-[3.2rem] sm:w-[137.33px] lg:relative lg:right-[2rem] lg:block">
            <p className="custo-font flex h-[24px] w-[80px] text-[16px] font-[500] leading-[24px] text-[#191D23] sm:w-[137.33px]">
              Support
            </p>
            <div className="flex h-[200px] flex-col gap-[20px] sm:w-[137.33px] lg:mt-[1.5rem]">
              <p className="custo-font flex h-[24px] w-[80px] text-[16px] font-[500] leading-[24px] text-[#4B5768] sm:w-[137.33px]">
                Contact us
              </p>
              <p className="custo-font flex h-[24px] w-[80px] text-[16px] font-[500] leading-[24px] text-[#4B5768] sm:w-[137.33px]">
                Online Chat
              </p>
              <p className="custo-font flex h-[24px] w-[80px] text-[16px] font-[500] leading-[24px] text-[#4B5768] sm:w-[137.33px]">
                Whatsapp
              </p>
              <p className="custo-font flex h-[24px] w-[80px] text-[16px] font-[500] leading-[24px] text-[#4B5768] sm:w-[137.33px]">
                Telegram
              </p>
              <p className="custo-font flex h-[24px] w-[80px] text-[16px] font-[500] leading-[24px] text-[#4B5768] sm:w-[137.33px]">
                Ticketing
              </p>
            </div>
          </div>
          <div className="flex hidden h-[272px] flex-col gap-[24px] sm:relative sm:right-[5rem] sm:w-[137.33px] lg:relative lg:left-[1rem] lg:block">
            <p className="custo-font flex h-[24px] w-[80px] text-[16px] font-[500] leading-[24px] text-[#191D23] sm:w-[137.33px]">
              FAQ
            </p>
            <div className="flex h-[200px] flex-col gap-[20px] sm:w-[137.33px] lg:mt-[1.5rem]">
              <p className="custo-font flex h-[24px] w-[80px] text-[16px] font-[500] leading-[24px] text-[#4B5768] sm:w-[137.33px]">
                Account
              </p>
              <p className="custo-font relative right-[35px] h-[40px] w-[80px] text-[16px] font-[500] leading-[24px] text-[#4B5768] sm:w-[137.33px]">
                Manage Deliveries
              </p>

              <p className="custo-font relative right-[35px] h-[40px] w-[80px] text-[16px] font-[500] leading-[24px] text-[#4B5768] sm:w-[137.33px]">
                Manage Deliveries
              </p>
              <p className="custo-font flex h-[24px] w-[80px] text-[16px] font-[500] leading-[24px] text-[#4B5768] sm:w-[137.33px]">
                Payments
              </p>
              <p className="custo-font flex h-[24px] w-[80px] text-[16px] font-[500] leading-[24px] text-[#4B5768] sm:w-[137.33px]">
                Returns
              </p>
            </div>
          </div>
        </div>
        <div
          id="services"
          className="-[22rem] sm:-[0rem] relative flex flex-col items-center justify-between border-t border-[#D0D5DD] bg-white py-[24px] sm:relative sm:flex-row lg:w-[1000px]"
        >
          <div className="custo-font flex flex-wrap gap-[20px] text-[16px] font-[400] leading-[24px] text-[#4B5768]">
            <p className="w-auto">About us</p>
            <p className="w-auto">Contact</p>
            <p className="w-auto">Privacy policy</p>
            <p className="w-auto">Sitemap</p>
            <p className="w-auto">Terms of Use</p>
          </div>
          <p className="custo-font mt-[16px] text-[16px] font-[400] leading-[24px] text-[#4B5768] sm:mt-0">
            © 2000-2021, All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
