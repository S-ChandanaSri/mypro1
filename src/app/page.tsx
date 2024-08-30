"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import img1 from "../app/_assets/images/Logo1.png";
import backgroundImg from "../../public/background.jpg";
import material from "../app/_assets/images/material.png";
import user from "../app/_assets/images/mdi_user.png";
import quill from "../app/_assets/images/quill.png";
import homeverify from "../app/_assets/images/homeverify.png";
import bxsupport from "../app/_assets/images/bxsupport.png";
import akar from "../app/_assets/images/akar.png";
import searchline from "../app/_assets/images/searchline.png";
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
import ellipse1 from "../app/_assets/images/ellipse1.png";
import ellipse2 from "../app/_assets/images/ellipse2.png";
import ellipse3 from "../app/_assets/images/ellipse3.png";
import ellipse4 from "../app/_assets/images/ellipse4.png";
import ellipse11 from "../app/_assets/images/ellipse11.png";
import ellipse12 from "../app/_assets/images/ellipse12.png";
import ellipse13 from "../app/_assets/images/ellipse13.png";
import ellipse14 from "../app/_assets/images/ellipse14.png";
import ellipse15 from "../app/_assets/images/ellipse15.png";
import ellipse16 from "../app/_assets/images/ellipse16.png";
import ellipse17 from "../app/_assets/images/ellipse17.png";
import ellipse18 from "../app/_assets/images/ellipse18.png";
import icon from "../app/_assets/images/Icon.png";
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
import VideoPlayer from "./Video/page";

function Home() {
  const [isOpen, setIsOpen] = useState([]);

  const handleToggle = (index) => {
    setIsOpen((prev) => {
      const newIsOpen = [...prev];
      newIsOpen[index] = !newIsOpen[index];
      return newIsOpen;
    });
  };

  const data = [
    {
      id: 1,
      question: "What types of student accommodation are available?",
      answer:
        "There are several types of student accommodation, including on-campus dormitories, off-campus apartments, shared houses, and homestays with local families.",
    },
    {
      id: 2,
      question: "What is the cost of student accommodation?",
      answer:
        "The cost of student accommodation varies depending on the type, and amenities provided. On-campus dormitories tend to be more affordable.",
    },
    {
      id: 3,
      question: "What types of student accommodation are available?",
      answer:
        "There are several types of student accommodation, including on-campus dormitories, off-campus apartments, shared houses, and homestays with local families.",
    },
    {
      id: 4,
      question: "What types of student accommodation are available?",
      answer:
        "There are several types of student accommodation, including on-campus dormitories, off-campus apartments, shared houses, and homestays with local families.",
    },
    {
      id: 5,
      question: "What types of student accommodation are available?",
      answer:
        "There are several types of student accommodation, including on-campus dormitories, off-campus apartments, shared houses, and homestays with local families.",
    },
  ];

  const backgroundImgUrl = backgroundImg.src;

  return (
    <div className=" h-[800px] ">
      <div
        className="w-full h-full bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImgUrl})` }}
      >
        <div className="flex justify-between items-center  h-[72px]  pt-[15px] pr-[45px] pb-[15px] pl-[55px] shadow-[0px_-1px_1px_0px_#0000001A_inset]">
          <div className="w-[134px] h-[34px] flex">
            <Image
              src={img1}
              alt="Description of image"
              width={44}
              height={44}
              className="w-[44px] h-[44px] relative bottom-2.5 "
            />
            <p className=" text-white w-[99px] h-[29px] top-[2px] left-[39px] custom-font text-[24px] font-normal leading-[34.34px] text-left ">
              ZENDEN
            </p>
          </div>
          <div className="w-[239px] h-[18px] gap-[30px] flex">
            <div className="w-[58px] h-[18px] ">
              <p className="text-[#FFFFFF] w-[60.15px] h-[21px] top-[-1px] custo-font text-[14px] font-medium leading-[21px] tracking-[0.2px] text-left ">
                Services
              </p>
            </div>
            <div className="w-[63px] h-[18px]">
              <p className="text-[#FFFFFF] w-[91.26px] h-[21px] top-[-2px] custo-font text-[14px] font-medium leading-[21px] tracking-[0.2px] text-left">
                Features
              </p>
            </div>
            <div className="w-[58px] h-[18px]">
              <p className="text-[#FFFFFF] w-[65px] h-[21px] top-[-1px] custo-font text-[14px] font-medium leading-[21px] tracking-[0.2px] text-left">
                About Us
              </p>
            </div>
          </div>
          <div className="flex w-[215px] h-[42px] gap-[20px]">
            <button className="flex w-[123px]  h-[40px] gap-[10px] pt-[8px] pr-[22px] pb-[8px] pl-[22px] border-[1px] rounded-[5px] border-[#FFFFFF] ">
              <Image
                src={material}
                alt="material"
                className="w-[24px] h-[24px] "
              />
              <p className="text-white">Login</p>
            </button>
            <button className="flex w-[106px]  h-[42px] gap-[10px] pt-[8px] pr-[22px] pb-[8px] pl-[22px] border-[1px] rounded-[5px] border-[#FFFFFF] ">
              <Image src={user} alt="user" className="w-[28px] h-[26px]" />
              <Image src={quill} alt="quill" className="w-[24px] h-[24px]" />
            </button>
          </div>
        </div>

        <div className=" h-[730px] py-[156px] px-[418px]  gap-[40px] bg-[linear-gradient(180deg,_rgba(248,_247,_255,_0.02)_0%,_rgba(5,_7,_13,_0.48)_57.76%,_rgba(0,_0,_0,_0.82)_92.61%)]">
          <div className="w-[638px] w-fill h-[281x] h-fixed gap-[19px]">
            <p className="text-[#E3F2FD]  foundation-blue-light] w-[638px] h-[141px] custo-font font-[400] text-[56px] leading-[61.6px] items-center shadow-[5px_5px_10px_0px_#0000004D] text-center ">
              Reserve{" "}
              <span className="custo-font font-[400] text-[56px] leading-[61.6px] items-center">
                your Ideal Holiday
              </span>{" "}
            </p>
            <p className=" w-[638px] mt-4 h-[61.4px] custo-font font-[400] text-[22px] leading-[27px] text-[#FFFFFF] items-center shadow-[5px_5px_10px_0px_#0000004D] pt-3 pl-3 ">
              We&apos;re thrilled to have you! Let&apos;s find you the ideal
              place to stay.
            </p>
            <div className="flex mt-9 w-Fill [638px] h-[41px] h-fixed gap-[53px]">
              <div className="bg-black w-[208.21px] h-[40.94px] rounded-[31px] ">
                <div className="flex items-center justify-evenly w-full h-full pl-5">
                  <Image
                    src={homeverify}
                    alt="home"
                    className="w-[18.93px] h-[19.33px]   "
                  />
                  <p className="w-[161.45px]  top-[12.54px] left-[36.08px] custo-font font-[400] text-[16px] leading-[61.6px] items-center text-white bg--10-90">
                    verified properties
                  </p>
                </div>
              </div>
              <div className="bg-black rounded-[31px] w-[171.47px] h-[40.94px] pl-5 ">
                <div className="flex items-center justify-evenly w-full h-full">
                  <Image
                    src={bxsupport}
                    alt=""
                    className="w-[22.27px] h-[22.74px] top-[9.13px] left-[275.02px] "
                  />
                  <p className="w-[114.68px]  top-[13.68px] left-[308.42px] custo-font font-[400] text-[16px] leading-[61.6px] text-white bg-opacity-90">
                    24/7 support
                  </p>
                </div>
              </div>
              <div className="bg-black rounded-[31px] w-[151.43px] h-[40.94px] pl-5 ">
                <div className="flex items-center justify-evenly w-full h-full">
                  <Image
                    src={akar}
                    alt=""
                    className="w-[18.93px] h-[19.33px] top-[10.27px] left-[498.38px] "
                  />
                  <p className="w-[108px] top-[12.54px] left-[525.76px] pl-2 custo-font font-[400] text-[16px] leading-[61.6px]  text-white bg-opacity-90">
                    Price match
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex mt-10 ml-14 items-center w-[501px] w-fixed h-[66px] h-fixed gap-[7px] p-[18px] rounded-[61.05px] bg-[#FFFFFF]">
            <Image src={searchline} alt="" className="w-[24px] h-[24px] " />

            <div className="flex w-[313px] h-[30px] items-center pt-2 ">
              <div className="relative  bottom-[4px] w-[101px] h-[30px] font-poppins font-normal text-[20px] leading-[30px] text-black">
                Search by
              </div>
              <input
                placeholder=" city, college, property"
                className="relative focus:outline-none  bottom-[4px] w-[203px] h-[30px] font-poppins font-normal text-[20px] leading-[30px] text-blue-custom text-opacity-80"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center h-[157px] top-[730px] border-[1px] py-[15px] px-[47px] gap-[105px] bg-[#FFFFFF] border-[#0000004D]">
        <div className=" w-[1066.33px] w-fill h-[127px] h-fill gap-[82px] ">
          <div className="flex w-[1066.89px] h-[126.82px] gap-[77px] ">
            <div className="w-[86.46px] h-[121.78px] flex flex-col items-center ">
              <Image
                width={113}
                height={113}
                src={image6}
                alt=""
                className="w-[86.31px] h-[85.97px] top-[2.52px] left-[980.58px] "
              />
              <p className="w-[86.02px] h-[30.24px] pl-2 top-[94.06px] left-[980.4px] custo-font font-[500] text-[20px] leading-[30px] items-center text-black">
                Bombay
              </p>
            </div>
            <div className="w-[86.46px] h-[121.78px] top-[2.52px] left-[980.42px] ">
              <Image
                width={86.31}
                height={85.97}
                src={image7}
                alt=""
                className="w-[86.31px] h-[85.97px] top-[2.52px] left-[980.58px] "
              />
              <p className="w-[86.02px] h-[30.24px] top-[94.06px] pl-6 left-[980.4px] custo-font font-[500] text-[20px] leading-[30px] items-center text-black">
                Pune
              </p>
            </div>
            <div className="w-[86.46px] h-[121.78px] top-[2.52px] left-[980.42px] ">
              <Image
                width={86.31}
                height={85.97}
                src={image6}
                alt=""
                className="w-[86.31px] h-[85.97px] top-[2.52px] left-[980.58px] "
              />
              <p className="w-[86.02px] h-[30.24px] top-[94.06px] pl-2 left-[980.4px] custo-font font-[500] text-[20px] leading-[30px] items-center text-black">
                Bombay
              </p>
            </div>
            <div className="w-[86.46px] h-[121.78px] top-[2.52px] left-[980.42px] ">
              <Image
                width={86.31}
                height={85.97}
                src={image5}
                alt=""
                className="w-[86.31px] h-[85.97px] top-[2.52px] left-[980.58px] "
              />
              <p className="w-[86.02px] h-[30.24px] top-[94.06px] pl-3 left-[980.4px] custo-font font-[500] text-[20px] leading-[30px] items-center text-black">
                Kolkata
              </p>
            </div>
            <div className="w-[86.46px] h-[121.78px] top-[2.52px] left-[980.42px] ">
              <Image
                width={86.31}
                height={85.97}
                src={image4}
                alt=""
                className="w-[86.31px] h-[85.97px] top-[2.52px] left-[980.58px] "
              />
              <p className="w-[86.02px] h-[30.24px] top-[94.06px] pl-2 left-[980.4px] custo-font font-[500] text-[20px] leading-[30px] items-center text-black">
                Bombay
              </p>
            </div>
            <div className="w-[86.46px] h-[121.78px] top-[2.52px] left-[980.42px] ">
              <Image
                width={86.31}
                height={85.97}
                src={image3}
                alt=""
                className="w-[86.31px] h-[85.97px] top-[2.52px] left-[980.58px] "
              />
              <p className="w-[86.02px] h-[30.24px] top-[94.06px] pl-2 left-[980.4px] custo-font font-[500] text-[20px] leading-[30px] items-center text-black">
                Bombay
              </p>
            </div>
            <div className="w-[86.46px] h-[121.78px] top-[2.52px] left-[980.42px] ">
              <Image
                width={86.31}
                height={85.97}
                src={image2}
                alt=""
                className="w-[86.31px] h-[85.97px] top-[2.52px] left-[980.58px] "
              />
              <p className="w-[86.02px] h-[30.24px] top-[94.06px] pl-2 left-[980.4px] custo-font font-[500] text-[20px] leading-[30px] items-center text-black">
                Bombay
              </p>
            </div>
          </div>
        </div>
        <div className="w-[36px] h-[36px] ">
          <button className="w-[36px] h-[36px] border-[1.04px] border-[#000000]">
            <Image width={36} height={36} src={Frame39907} alt="" />
          </button>
        </div>
        <div className="w-[101.67px] h-[50.16px] ">
          <button className="w-[101.67px] h-[50.16px] border-mixed border-[#000000]">
            <Image width={80} height={40} src={Frame39908} alt="" />
          </button>
        </div>
      </div>

      <div className="h-[950px] top-[887px] px-[37px] py-[3px] gap-[32px] bg-[#C1C7DC] bg-opacity-10 ">
        <div className="flex justify-between items-center  ">
          <div className=" h-[100px ] flex-col justify-between">
            <p className="w-[281px] h-[38px] top-[2px] custo-font font-normal text-[28px] leading-[37.8px] text-[#000000] ">
              Our Popular Homes
            </p>
            <div className="w-[530px] h-[30px] ">
              <p className="w-[540px] h-[30px] custo-font font-[300] text-[22px] leading-[29.7px] text-[#000000] ">
                Book student acomodation across popular cities
              </p>
            </div>
          </div>

          <div className="flex items-center ">
            <p className="w-[137x] h-[38px] custo-font font-[300] text-[28px] leading-[37.8px] items-center text-black  ">
              Explore All
            </p>
            <button>
              <Image
                width={31}
                height={31}
                src={makiarrow}
                alt=""
                className="w-[31px] h-[31px] pl-2"
              />
            </button>
          </div>
        </div>

        <div className=" h-[726px] ">
          <div className=" h-[726px] bg-white">
            <div className="h-[345px] ">
              <div className=" flex gap-[89px] w-[306px] h-[341px] ">
                <div className="w-[306px] h-[341px] rounded-[13px] pt-4 pl-2 ">
                  <Image
                    width={306}
                    height={228}
                    alt=""
                    src={view1}
                    className="w-[306px] h-[228px] rounded-[13px] "
                  />
                  <div className="w-[284.11px] h-[97.96px] pt-2 ">
                    <div className="w-[284.11px] h-[57.14px] rounded-[13px]">
                      <div className="flex items-center w-[167px] h-[26.37px] rounded-[13px]">
                        <Image
                          width={26.37}
                          height={26.37}
                          alt=""
                          src={mingcute}
                          className="w-[26.37px] h-[26.37px] rounded-[13px] "
                        />
                        <p className="w-[136px] h-[18px] font-inter text-[13.19px] font-semibold leading-[17.8px] text-[#3D52A0]">
                          Banaras Island, Lagos
                        </p>
                      </div>
                      <div className="flex justify-between pl-2 w-[280.11px] h-[20.88px] rounded-[13px]">
                        <div className="flex w-[61.47px] h-[18.68px] rounded-[13px] ">
                          <Image
                            width={18.68}
                            height={18.68}
                            alt=""
                            src={mdibed}
                            className="w-[18.68px] h-[18.68px] rounded-[13px] "
                          />
                          <p className="w-[34px] h-[16px] font-inter text-[12.09px] font-[600] leading-[16.32px] ">
                            4 Bed
                          </p>
                        </div>
                        <div className="flex w-[71.37px] h-[17.58px] rounded-[13px] ">
                          <Image
                            width={17.58}
                            height={17.58}
                            alt=""
                            src={mdigraphbox}
                            className="w-[17.58px] h-[17.58px] rounded-[13px] "
                          />
                          <p className="w-[45px] h-[16px] font-inter text-[12.09px] font-[600] leading-[16.32px] ">
                            4 Bed
                          </p>
                        </div>
                        <div className="flex w-[69.27px] h-[16.48px] rounded-[13px] ">
                          <Image
                            width={16.48}
                            height={16.48}
                            alt=""
                            src={mdigraphline}
                            className="w-[16.48px] h-[16.48px] rounded-[13px] "
                          />
                          <p className="w-[44px] h-[16px] font-inter text-[12.09px] font-[600] leading-[16.32px] ">
                            4 Bed
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="pr-[170px]">
                      <button className="w-[94.49px] h-[32.96px] rounded-[5px] bg-[#3D52A0] text-white font-inter text-[13.19px] font-[500] leading-[17.8px] ">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-[306px] h-[341px] rounded-[13px] pt-4 pl-2 ">
                  <Image
                    width={306}
                    height={228}
                    alt=""
                    src={view2}
                    className="w-[306px] h-[228px] rounded-[13px] "
                  />
                  <div className="w-[284.11px] h-[97.96px] pt-2 ">
                    <div className="w-[284.11px] h-[57.14px] rounded-[13px]">
                      <div className="flex items-center w-[167px] h-[26.37px] rounded-[13px]">
                        <Image
                          width={26.37}
                          height={26.37}
                          alt=""
                          src={mingcute}
                          className="w-[26.37px] h-[26.37px] rounded-[13px] "
                        />
                        <p className="w-[136px] h-[18px] font-inter text-[13.19px] font-semibold leading-[17.8px] text-[#3D52A0]">
                          Banaras Island, Lagos
                        </p>
                      </div>
                      <div className="flex justify-between pl-2 w-[280.11px] h-[20.88px] rounded-[13px]">
                        <div className="flex w-[61.47px] h-[18.68px] rounded-[13px] ">
                          <Image
                            width={18.68}
                            height={18.68}
                            alt=""
                            src={mdibed}
                            className="w-[18.68px] h-[18.68px] rounded-[13px] "
                          />
                          <p className="w-[34px] h-[16px] font-inter text-[12.09px] font-[600] leading-[16.32px] ">
                            4 Bed
                          </p>
                        </div>
                        <div className="flex w-[71.37px] h-[17.58px] rounded-[13px] ">
                          <Image
                            width={17.58}
                            height={17.58}
                            alt=""
                            src={mdigraphbox}
                            className="w-[17.58px] h-[17.58px] rounded-[13px] "
                          />
                          <p className="w-[45px] h-[16px] font-inter text-[12.09px] font-[600] leading-[16.32px] ">
                            4 Bed
                          </p>
                        </div>
                        <div className="flex w-[69.27px] h-[16.48px] rounded-[13px] ">
                          <Image
                            width={16.48}
                            height={16.48}
                            alt=""
                            src={mdigraphline}
                            className="w-[16.48px] h-[16.48px] rounded-[13px] "
                          />
                          <p className="w-[44px] h-[16px] font-inter text-[12.09px] font-[600] leading-[16.32px] ">
                            4 Bed
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="pr-[170px]">
                      <button className="w-[94.49px] h-[32.96px] rounded-[5px] bg-[#3D52A0] text-white font-inter text-[13.19px] font-[500] leading-[17.8px] ">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-[306px] h-[341px] rounded-[13px] pt-4 pl-2 ">
                  <Image
                    width={306}
                    height={228}
                    alt=""
                    src={view3}
                    className="w-[306px] h-[228px] rounded-[13px] "
                  />
                  <div className="w-[284.11px] h-[97.96px] pt-2 ">
                    <div className="w-[284.11px] h-[57.14px] rounded-[13px]">
                      <div className="flex items-center w-[167px] h-[26.37px] rounded-[13px]">
                        <Image
                          width={26.37}
                          height={26.37}
                          alt=""
                          src={mingcute}
                          className="w-[26.37px] h-[26.37px] rounded-[13px] "
                        />
                        <p className="w-[136px] h-[18px] font-inter text-[13.19px] font-semibold leading-[17.8px] text-[#3D52A0]">
                          Banaras Island, Lagos
                        </p>
                      </div>
                      <div className="flex justify-between pl-2 w-[280.11px] h-[20.88px] rounded-[13px]">
                        <div className="flex w-[61.47px] h-[18.68px] rounded-[13px] ">
                          <Image
                            width={18.68}
                            height={18.68}
                            alt=""
                            src={mdibed}
                            className="w-[18.68px] h-[18.68px] rounded-[13px] "
                          />
                          <p className="w-[34px] h-[16px] font-inter text-[12.09px] font-[600] leading-[16.32px] ">
                            4 Bed
                          </p>
                        </div>
                        <div className="flex w-[71.37px] h-[17.58px] rounded-[13px] ">
                          <Image
                            width={17.58}
                            height={17.58}
                            alt=""
                            src={mdigraphbox}
                            className="w-[17.58px] h-[17.58px] rounded-[13px] "
                          />
                          <p className="w-[45px] h-[16px] font-inter text-[12.09px] font-[600] leading-[16.32px] ">
                            4 Bed
                          </p>
                        </div>
                        <div className="flex w-[69.27px] h-[16.48px] rounded-[13px] ">
                          <Image
                            width={16.48}
                            height={16.48}
                            alt=""
                            src={mdigraphline}
                            className="w-[16.48px] h-[16.48px] rounded-[13px] "
                          />
                          <p className="w-[44px] h-[16px] font-inter text-[12.09px] font-[600] leading-[16.32px] ">
                            4 Bed
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="pr-[170px]">
                      <button className="w-[94.49px] h-[32.96px] rounded-[5px] bg-[#3D52A0] text-white font-inter text-[13.19px] font-[500] leading-[17.8px] ">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-[306px] h-[341px] rounded-[13px] pt-4 pl-2 ">
                  <Image
                    width={306}
                    height={228}
                    src={view4}
                    alt=""
                    className="w-[306px] h-[228px] rounded-[13px] "
                  />
                  <div className="w-[284.11px] h-[97.96px] pt-2 ">
                    <div className="w-[284.11px] h-[57.14px] rounded-[13px]">
                      <div className="flex items-center w-[167px] h-[26.37px] rounded-[13px]">
                        <Image
                          width={26.37}
                          height={26.37}
                          src={mingcute}
                          alt=""
                          className="w-[26.37px] h-[26.37px] rounded-[13px] "
                        />
                        <p className="w-[136px] h-[18px] font-inter text-[13.19px] font-semibold leading-[17.8px] text-[#3D52A0]">
                          Banaras Island, Lagos
                        </p>
                      </div>
                      <div className="flex justify-between pl-2 w-[280.11px] h-[20.88px] rounded-[13px]">
                        <div className="flex w-[61.47px] h-[18.68px] rounded-[13px] ">
                          <Image
                            width={18.68}
                            height={18.68}
                            src={mdibed}
                            alt=""
                            className="w-[18.68px] h-[18.68px] rounded-[13px] "
                          />
                          <p className="w-[34px] h-[16px] font-inter text-[12.09px] font-[600] leading-[16.32px] ">
                            4 Bed
                          </p>
                        </div>
                        <div className="flex w-[71.37px] h-[17.58px] rounded-[13px] ">
                          <Image
                            width={17.58}
                            height={17.58}
                            src={mdigraphbox}
                            alt=""
                            className="w-[17.58px] h-[17.58px] rounded-[13px] "
                          />
                          <p className="w-[45px] h-[16px] font-inter text-[12.09px] font-[600] leading-[16.32px] ">
                            4 Bed
                          </p>
                        </div>
                        <div className="flex w-[69.27px] h-[16.48px] rounded-[13px] ">
                          <Image
                            width={16.48}
                            height={16.48}
                            src={mdigraphline}
                            alt=""
                            className="w-[16.48px] h-[16.48px] rounded-[13px] "
                          />
                          <p className="w-[44px] h-[16px] font-inter text-[12.09px] font-[600] leading-[16.32px] ">
                            4 Bed
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="pr-[170px]">
                      <button className="w-[94.49px] h-[32.96px] rounded-[5px] bg-[#3D52A0] text-white font-inter text-[13.19px] font-[500] leading-[17.8px] ">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex h-[345px] gap-[89px] pt-3 ">
              <div className="w-[306px] h-[341px] rounded-[13px] pt-4 pl-2 ">
                <Image
                  width={306}
                  height={228}
                  src={view5}
                  alt=""
                  className="w-[306px] h-[228px] rounded-[13px] "
                />
                <div className="w-[284.11px] h-[97.96px] pt-2 ">
                  <div className="w-[284.11px] h-[57.14px] rounded-[13px]">
                    <div className="flex items-center w-[167px] h-[26.37px] rounded-[13px]">
                      <Image
                        width={26.37}
                        height={26.37}
                        src={mingcute}
                        alt=""
                        className="w-[26.37px] h-[26.37px] rounded-[13px] "
                      />
                      <p className="w-[136px] h-[18px] font-inter text-[13.19px] font-semibold leading-[17.8px] text-[#3D52A0]">
                        Banaras Island, Lagos
                      </p>
                    </div>
                    <div className="flex justify-between pl-2 w-[280.11px] h-[20.88px] rounded-[13px]">
                      <div className="flex w-[61.47px] h-[18.68px] rounded-[13px] ">
                        <Image
                          width={18.68}
                          height={18.68}
                          src={mdibed}
                          alt=""
                          className="w-[18.68px] h-[18.68px] rounded-[13px] "
                        />
                        <p className="w-[34px] h-[16px] font-inter text-[12.09px] font-[600] leading-[16.32px] ">
                          4 Bed
                        </p>
                      </div>
                      <div className="flex w-[71.37px] h-[17.58px] rounded-[13px] ">
                        <Image
                          width={17.58}
                          height={17.58}
                          src={mdigraphbox}
                          alt=""
                          className="w-[17.58px] h-[17.58px] rounded-[13px] "
                        />
                        <p className="w-[45px] h-[16px] font-inter text-[12.09px] font-[600] leading-[16.32px] ">
                          4 Bed
                        </p>
                      </div>
                      <div className="flex w-[69.27px] h-[16.48px] rounded-[13px] ">
                        <Image
                          width={16.48}
                          height={16.48}
                          src={mdigraphline}
                          alt=""
                          className="w-[16.48px] h-[16.48px] rounded-[13px] "
                        />
                        <p className="w-[44px] h-[16px] font-inter text-[12.09px] font-[600] leading-[16.32px] ">
                          4 Bed
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="pr-[170px]">
                    <button className="w-[94.49px] h-[32.96px] rounded-[5px] bg-[#3D52A0] text-white font-inter text-[13.19px] font-[500] leading-[17.8px] ">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-[306px] h-[341px] rounded-[13px] pt-4 pl-2 ">
                <Image
                  width={306}
                  height={228}
                  src={view6}
                  alt=""
                  className="w-[306px] h-[228px] rounded-[13px] "
                />
                <div className="w-[284.11px] h-[97.96px] pt-2 ">
                  <div className="w-[284.11px] h-[57.14px] rounded-[13px]">
                    <div className="flex items-center w-[167px] h-[26.37px] rounded-[13px]">
                      <Image
                        width={26.37}
                        height={26.37}
                        src={mingcute}
                        alt=""
                        className="w-[26.37px] h-[26.37px] rounded-[13px] "
                      />
                      <p className="w-[136px] h-[18px] font-inter text-[13.19px] font-semibold leading-[17.8px] text-[#3D52A0]">
                        Banaras Island,Lagos
                      </p>
                    </div>
                    <div className="flex justify-between pl-2 w-[280.11px] h-[20.88px] rounded-[13px]">
                      <div className="flex w-[61.47px] h-[18.68px] rounded-[13px] ">
                        <Image
                          width={18.68}
                          height={18.68}
                          src={mdibed}
                          alt=""
                          className="w-[18.68px] h-[18.68px] rounded-[13px] "
                        />
                        <p className="w-[34px] h-[16px] font-inter text-[12.09px] font-[600] leading-[16.32px] ">
                          4 Bed
                        </p>
                      </div>
                      <div className="flex w-[71.37px] h-[17.58px] rounded-[13px] ">
                        <Image
                          width={17.58}
                          height={17.58}
                          src={mdigraphbox}
                          alt=""
                          className="w-[17.58px] h-[17.58px] rounded-[13px] "
                        />
                        <p className="w-[45px] h-[16px] font-inter text-[12.09px] font-[600] leading-[16.32px] ">
                          4 Bed
                        </p>
                      </div>
                      <div className="flex w-[69.27px] h-[16.48px] rounded-[13px] ">
                        <Image
                          width={16.48}
                          height={16.48}
                          src={mdigraphline}
                          alt=""
                          className="w-[16.48px] h-[16.48px] rounded-[13px] "
                        />
                        <p className="w-[44px] h-[16px] font-inter text-[12.09px] font-[600] leading-[16.32px] ">
                          4 Bed
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="pr-[170px]">
                    <button className="w-[94.49px] h-[32.96px] rounded-[5px] bg-[#3D52A0] text-white font-inter text-[13.19px] font-[500] leading-[17.8px] ">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-[306px] h-[341px] rounded-[13px] pt-4 pl-2 ">
                <Image
                  width={306}
                  height={228}
                  src={view7}
                  alt=""
                  className="w-[306px] h-[228px] rounded-[13px] "
                />
                <div className="w-[284.11px] h-[97.96px] pt-2 ">
                  <div className="w-[284.11px] h-[57.14px] rounded-[13px]">
                    <div className="flex items-center w-[167px] h-[26.37px] rounded-[13px]">
                      <Image
                        width={26.37}
                        height={26.37}
                        src={mingcute}
                        alt=""
                        className="w-[26.37px] h-[26.37px] rounded-[13px] "
                      />
                      <p className="w-[136px] h-[18px] font-inter text-[13.19px] font-semibold leading-[17.8px] text-[#3D52A0]">
                        Banaras Island,Lagos
                      </p>
                    </div>
                    <div className="flex justify-between pl-2 w-[280.11px] h-[20.88px] rounded-[13px]">
                      <div className="flex w-[61.47px] h-[18.68px] rounded-[13px] ">
                        <Image
                          width={18.68}
                          height={18.68}
                          src={mdibed}
                          alt=""
                          className="w-[18.68px] h-[18.68px] rounded-[13px] "
                        />
                        <p className="w-[34px] h-[16px] font-inter text-[12.09px] font-[600] leading-[16.32px] ">
                          4 Bed
                        </p>
                      </div>
                      <div className="flex w-[71.37px] h-[17.58px] rounded-[13px] ">
                        <Image
                          width={17.58}
                          height={17.58}
                          src={mdigraphbox}
                          alt=""
                          className="w-[17.58px] h-[17.58px] rounded-[13px] "
                        />
                        <p className="w-[45px] h-[16px] font-inter text-[12.09px] font-[600] leading-[16.32px] ">
                          4 Bed
                        </p>
                      </div>
                      <div className="flex w-[69.27px] h-[16.48px] rounded-[13px] ">
                        <Image
                          width={16.48}
                          height={16.48}
                          src={mdigraphline}
                          alt=""
                          className="w-[16.48px] h-[16.48px] rounded-[13px] "
                        />
                        <p className="w-[44px] h-[16px] font-inter text-[12.09px] font-[600] leading-[16.32px] ">
                          4 Bed
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="pr-[170px]">
                    <button className="w-[94.49px] h-[32.96px] cursor-pointer rounded-[5px] bg-[#3D52A0] text-white font-inter text-[13.19px] font-[500] leading-[17.8px] ">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-[306px] h-[341px] rounded-[13px] pt-4 pl-2 ">
                <Image
                  width={284.11}
                  height={97.96}
                  src={view8}
                  alt=""
                  className="w-[306px] h-[228px] rounded-[13px] "
                />
                <div className="w-[284.11px] h-[97.96px] pt-2 ">
                  <div className="w-[284.11px] h-[57.14px] rounded-[13px]">
                    <div className="flex items-center w-[167px] h-[26.37px] rounded-[13px]">
                      <Image
                        width={26.37}
                        height={26.37}
                        src={mingcute}
                        alt=""
                        className="w-[26.37px] h-[26.37px] rounded-[13px] "
                      />
                      <p className="w-[136px] h-[18px] font-inter text-[13.19px] font-semibold leading-[17.8px] text-[#3D52A0]">
                        Banaras Island,Lagos
                      </p>
                    </div>
                    <div className="flex justify-between pl-2 w-[280.11px] h-[20.88px] rounded-[13px]">
                      <div className="flex w-[61.47px] h-[18.68px] rounded-[13px] ">
                        <Image
                          width={18.68}
                          height={18.68}
                          src={mdibed}
                          alt=""
                          className="w-[18.68px] h-[18.68px] rounded-[13px] "
                        />
                        <p className="w-[34px] h-[16px] font-inter text-[12.09px] font-[600] leading-[16.32px] ">
                          4 Bed
                        </p>
                      </div>
                      <div className="flex w-[71.37px] h-[17.58px] rounded-[13px] ">
                        <Image
                          width={17.58}
                          height={17.58}
                          src={mdigraphbox}
                          alt=""
                          className="w-[17.58px] h-[17.58px] rounded-[13px] "
                        />
                        <p className="w-[45px] h-[16px] font-inter text-[12.09px] font-[600] leading-[16.32px] ">
                          4 Bed
                        </p>
                      </div>
                      <div className="flex w-[69.27px] h-[16.48px] rounded-[13px] ">
                        <Image
                          width={16.48}
                          height={16.48}
                          src={mdigraphline}
                          alt=""
                          className="w-[16.48px] h-[16.48px] rounded-[13px] "
                        />
                        <p className="w-[44px] h-[16px] font-inter text-[12.09px] font-[600] leading-[16.32px] ">
                          4 Bed
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="pr-[170px]">
                    <button className="w-[94.49px] h-[32.96px] rounded-[5px] bg-[#3D52A0] text-white font-inter text-[13.19px] font-[500] leading-[17.8px] ">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button className="h-[48px] pt-10 pl-[650px] ">
          <div className="w-[170.43px] h-[48px] rounded-[4.17px]  text-[#000000] border border-[#4A61B5] ">
            <div className="flex items-center w-[145.91px] h-[15px] pt-[23px] pl-2">
              <p className="w-[149px] h-[15px] custo-font text-[11.13px] font-[500] leading-[15.03px] text-black">
                View All the Cities
              </p>
              <Image src={Arrow3} alt="" className=" pl-2" />
            </div>
          </div>
        </button>
      </div>

      <div className="h-[613px] px-[52px] py-[20px] gap-[29px] top-[1837px] flex flex-col items-center ">
        <div className="h-[77px] w-fixed flex flex-col items-center pl-[150px]  ">
          <p className="w-[570px] h-[57px] custo-font font-[400] text-[38px] pl-[45px] leading-[57px] items-center">
            Book in 4 easy steps
          </p>
          <p className="w-[680px] h-[20px] custo-font font-[400] text-[13x] leading-[19.5px] items-center pr-9 pt-2">
            Hassle free booking with prioritize 1 on 1 support ,and peace of
            mind for students
          </p>
        </div>
        <div className="flex items-center w-[1336px] w-fill h-[467px] gap-[82px] pt-[30px] ">
          <div className="w-[310px] h-[467px] rounded-[20px] border-[3px] border-[#C1C7DC]">
            <div className="w-[113px] h-[113px] relative top-[35px] left-[100px] ">
              <Image
                width={94}
                height={94}
                src={ellipse1}
                alt=""
                className="w-[94px] h-[94px]  "
              />
            </div>
            <p className="w-[258px] h-[64px] top-[30px] custo-font font-[500] text-[21px] leading-[31.5px] relative pl-[38px] pb-[15px] text-center ">
              Discover verified properties
            </p>
            <p className="w-[290px] h-[119px] top-[30px] custo-font font-[400] text-[16px] leading-[24px] relative pt-[30px] pl-[6px] text-center ">
              Student accommodation is often located close to campus, saving
              time on commutes and making it easier to get to classes and
              activities
            </p>
          </div>
          <div className="w-[310px] h-[467px] rounded-[20px] border-[3px] border-[#C1C7DC]">
            <div className="w-[113px] h-[113px] relative top-[35px] left-[100px] ">
              <Image
                width={94}
                height={94}
                src={ellipse2}
                alt=""
                className="w-[94px] h-[94px]  "
              />
            </div>
            <p className="w-[258px] h-[64px] top-[30px] custo-font font-[500] text-[21px] leading-[31.5px] relative pl-[38px] pb-[15px] text-center">
              Discover verified properties
            </p>
            <p className="w-[290px] h-[119px] top-[30px] custo-font font-[400] text-[16px] leading-[24px] relative pt-[30px] pl-[6px] text-center ">
              Student accommodation is often located close to campus, saving
              time on commutes and making it easier to get to classes and
              activities
            </p>
          </div>
          <div className="w-[310px] h-[467px] rounded-[20px] border-[3px] border-[#C1C7DC]">
            <div className="w-[113px] h-[113px] relative top-[35px] left-[100px] ">
              <Image
                width={94}
                height={94}
                src={ellipse3}
                alt=""
                className="w-[94px] h-[94px]  "
              />
            </div>
            <p className="w-[258px] h-[64px] top-[30px] custo-font font-[500] text-[21px] leading-[31.5px] relative pl-[38px] pb-[15px] text-center">
              Discover verified properties
            </p>
            <p className="w-[290px] h-[119px] top-[30px] custo-font font-[400] text-[16px] leading-[24px] relative pt-[30px] pl-[6px] text-center ">
              Student accommodation is often located close to campus, saving
              time on commutes and making it easier to get to classes and
              activities
            </p>
          </div>
          <div className="w-[310px] h-[467px] rounded-[20px] border-[3px] border-[#C1C7DC]">
            <div className="w-[113px] h-[113px] relative top-[35px] left-[100px] ">
              <Image
                width={94}
                height={94}
                src={ellipse4}
                alt=""
                className="w-[94px] h-[94px]  "
              />
            </div>
            <p className="w-[258px] h-[64px] top-[30px] custo-font font-[500] text-[21px] leading-[31.5px] relative pl-[38px] pb-[15px] text-center">
              Discover verified properties
            </p>
            <p className="w-[290px] h-[119px] top-[30px] custo-font font-[400] text-[16px] leading-[24px] relative pt-[30px] pl-[6px] text-center ">
              Student accommodation is often located close to campus, saving
              time on commutes and making it easier to get to classes and
              activities
            </p>
          </div>
        </div>
      </div>

      <div className=" w-fill h-[402px] gap-[57px] pt-9  flex flex-col items-center ">
        <p className="h-[50px] custo-font font-[400] text-[33px] leading-[49.5px] pt-7 ">
          Our services
        </p>
        <div className="flex h-[295px] gap-[61px] pt-3 pl-11 ">
          <div className="w-[310px] h-[295px]  rounded-[20px] border-[2px] border-[#C1C7DC]  ">
            <Image
              width={113}
              height={113}
              src={ellipse11}
              alt=""
              className="w-[113px] h-[113px] relative left-[85px] top-[50px] "
            />
            <p className="w-[205px] h-[38px] custo-font font-[400] text-[25px] leading-[37.5px] text-center relative left-[50px] top-[65px]  ">
              Communication
            </p>
          </div>
          <div className="w-[310px] h-[295px] rounded-[20px] border-[2px] border-[#C1C7DC]   ">
            <Image
              width={113}
              height={113}
              src={ellipse12}
              alt=""
              className="w-[113px] h-[113px] pl-2 relative left-[85px] top-[50px] "
            />
            <p className="w-[205px] h-[38px] custo-font font-[400] text-[25px] text-center leading-[37.5px] relative left-[50px] top-[65px]  ">
              Realibility
            </p>
          </div>
          <div className="w-[310px] h-[295px] rounded-[20px] border-[2px] border-[#C1C7DC]  ">
            <Image
              width={113}
              height={113}
              src={ellipse13}
              alt=""
              className="w-[125px] h-[113px] pl-3 relative left-[85px] top-[50px] "
            />
            <p className="w-[205px] h-[38px] custo-font font-[400] text-[25px] leading-[37.5px] text-center relative left-[50px] top-[65px]  ">
              Quality First
            </p>
          </div>
          <div className="w-[310px] h-[295px] rounded-[20px] border-[2px] border-[#C1C7DC]  ">
            <Image
              width={113}
              height={113}
              src={ellipse14}
              alt=""
              className="w-[120px] h-[113px] relative pl-2 left-[85px] top-[50px] "
            />
            <p className="w-[205px] h-[38px] custo-font font-[400] text-center text-[25px] leading-[37.5px] relative left-[50px] top-[65px]  ">
              Student Friendly
            </p>
          </div>
        </div>
      </div>

      <div className="h-[613px] px-[52px] py-[20px] gap-[29px] pt-[90px] ">
        <div className="h-[77px] w-fixed pl-[430px] flex flex-col items-center ">
          <p className="w-[570px] h-[57px] custo-font font-[400] text-[38px] leading-[57px] items-center">
            Why Choose Us
          </p>
          <p className="w-[725px] h-[20px] custo-font font-[400] text-[13x] leading-[19.5px] items-center pr-[50px] pt-2">
            Hassle free with prioritize security,and peace of mind for students
            and their parents
          </p>
        </div>
        <div className="flex w-[1336px] w-fill h-[467px] gap-[82px] pt-[30px] ">
          <div className="w-[310px] h-[467px] rounded-[20px] border-[3px] border-[#C1C7DC]">
            <div className="w-[113px] h-[113px] relative top-[35px] left-[100px] ">
              <Image
                src={ellipse11}
                width={94}
                height={94}
                alt=""
                className="w-[94px] h-[94px]  "
              />
            </div>
            <p className="w-[258px] h-[64px] top-[30px] custo-font font-[500] text-[21px] text-center leading-[31.5px] relative pl-[38px] pb-[15px]">
              Convenience and Social Life
            </p>
            <p className="w-[290px] h-[119px] top-[30px] custo-font font-[400] text-[16px] text-center leading-[24px] relative pt-[30px] pl-[6px] ">
              Student accommodation is often located close to campus, saving
              time on commutes and making it easier to get to classes and
              activities
            </p>
          </div>
          <div className="w-[310px] h-[467px] rounded-[20px] border-[3px] border-[#C1C7DC]">
            <div className="w-[113px] h-[113px] relative top-[35px] left-[100px] ">
              <Image
                width={94}
                height={94}
                src={ellipse12}
                alt=""
                className="w-[94px] h-[94px]  "
              />
            </div>
            <p className="w-[258px] h-[64px] top-[30px] custo-font font-[500] text-[21px] text-center leading-[31.5px] relative pl-[38px] pb-[15px]">
              Hassle-free living
            </p>
            <p className="w-[290px] h-[119px] top-[30px] custo-font font-[400] text-[16px] text-center leading-[24px] relative pt-[30px] pl-[6px] ">
              Student accommodation is often located close to campus, saving
              time on commutes and making it easier to get to classes and
              activities
            </p>
          </div>
          <div className="w-[310px] h-[467px] rounded-[20px] border-[3px] border-[#C1C7DC]">
            <div className="w-[113px] h-[113px] relative top-[35px] left-[100px] ">
              <Image
                width={94}
                height={94}
                src={ellipse13}
                alt=""
                className="w-[94px] h-[94px]  "
              />
            </div>
            <p className="w-[258px] h-[64px] top-[30px] custo-font font-[500] text-[21px] text-center leading-[31.5px] relative pl-[38px] pb-[15px]">
              Safety and Security
            </p>
            <p className="w-[290px] h-[119px] top-[30px] custo-font font-[400] text-[16px] text-center leading-[24px] relative pt-[30px] pl-[6px] ">
              Student accommodation is often located close to campus, saving
              time on commutes and making it easier to get to classes and
              activities
            </p>
          </div>
          <div className="w-[310px] h-[467px] rounded-[20px] border-[3px] border-[#C1C7DC]">
            <div className="w-[113px] h-[113px] relative top-[35px] left-[100px] ">
              <Image
                width={94}
                height={94}
                src={ellipse14}
                alt=""
                className="w-[94px] h-[94px]  "
              />
            </div>
            <p className="w-[258px] h-[64px] top-[30px]  custo-font font-[500] text-[21px] text-center leading-[31.5px] relative  pl-[38px] pb-[15px]">
              Support Services
            </p>
            <p className="w-[290px] h-[119px] top-[30px] custo-font font-[400] text-[16px] text-center leading-[24px] relative pt-[30px] pl-[6px] ">
              Student accommodation is often located close to campus, saving
              time on commutes and making it easier to get to classes and
              activities
            </p>
          </div>
        </div>
      </div>

      <div className=" w-fill h-[402px] gap-[57px] pt-[100px] ">
        <div className="h-[83px] flex flex-col items-center ">
          <p className="h-[50px] custo-font font-[400] text-[33px] leading-[49.5px] ">
            Get in touch with Us
          </p>
          <p className="h-[33px] custo-font font-[400] text-[22px] leading-[33px] ">
            If you have any query feel free to contact us
          </p>
        </div>
        <div className="flex h-[295px] gap-[61px] pt-8 pl-11  ">
          <div className="w-[310px] h-[295px] rounded-[20px] border-[2px] border-[#C1C7DC]  ">
            <Image
              width={113}
              height={113}
              src={ellipse15}
              alt=""
              className="w-[113px] h-[113px] relative left-[85px] top-[50px] "
            />
            <p className="w-[205px] h-[38px] custo-font font-[400] text-[25px] leading-[37.5px] relative left-[110px] top-[65px]   ">
              call us
            </p>
          </div>
          <div className="w-[310px] h-[295px] rounded-[20px] border-[2px] border-[#C1C7DC]  ">
            <Image
              width={113}
              height={113}
              src={ellipse16}
              alt=""
              className="w-[113px] h-[113px] relative left-[100px] top-[50px] "
            />
            <p className="w-[205px] h-[38px] custo-font font-[400] text-[25px] leading-[37.5px] relative left-[110px] top-[65px]  ">
              Email Us
            </p>
          </div>
          <div className="w-[310px] h-[295px] rounded-[20px] border-[2px] border-[#C1C7DC]  ">
            <Image
              width={113}
              height={113}
              src={ellipse17}
              alt=""
              className="w-[113px] h-[113px] relative left-[100px] top-[50px] "
            />
            <p className="w-[205px] h-[38px] custo-font font-[400] text-[25px] leading-[37.5px] relative left-[70px] top-[65px]  ">
              Chat on Whatsapp
            </p>
          </div>
          <div className="w-[310px] h-[295px] rounded-[20px] border-[2px] border-[#C1C7DC]  ">
            <Image
              width={113}
              height={113}
              src={ellipse18}
              alt=""
              className="w-[113px] h-[113px] relative left-[100px] top-[50px] "
            />
            <p className="w-[205px] h-[38px] custo-font font-[400] text-[25px] leading-[37.5px] relative left-[70px] top-[65px]  ">
              Chat on Website
            </p>
          </div>
        </div>
      </div>

      <div className=" h-[1099x] py-[106px] px-[172px] gap-[71px] pt-[125px]  ">
        <div className="w-[755px] h-[145px] gap-[23px] pt-11 flex flex-col items-center ">
          <p className=" h-[62px] custo-font font-[400] text-[52px] leading-[62px] tracking-[-2px] text-[#090914] relative left-[216px] pt-2 ">
            Over 1000+ people trust us
          </p>
          <p className="w-[710px] h-[60px] custo-font font-[400] text-[18px] leading-[30px] text-gray-900 relative left-[236px] top-[20px] text-center ">
            Clarity gives you the blocks & components you need to create a truly
            professional website, landing page or admin panel for your SaaS.
          </p>
        </div>
        <div className="flex w-[1096px] h-[568px] gap-[90px] ">
          <VideoPlayer
            src="Videos/video2.mp4"
            title="Albert Flores"
            subtitle="Founder of GearUp"
          />
          <VideoPlayer
            src="Videos/video3.mp4"
            title="Jane Doe"
            subtitle="CEO of TechWorld"
          />
          <VideoPlayer
            src="Videos/video4.mp4"
            title="John Smith"
            subtitle="CTO of Innovate"
          />
        </div>

        <button className="w-[297px] h-[32px] rounded-[50px] gap-[10px] p-[16px] cursor-pointer ">
          <div className="flex h-[28px] gap-[9px] relative top-[120px] left-[470px] pt-5 ">
            <p className="text-blue-600 w-[267px] h-[28px] custo-font font-[600] text-[16px] leading-[22px]  ">
              See all reviews by our customers
            </p>
            <Image
              width={18}
              height={18}
              src={icon}
              alt=""
              className="w-[18px] h-[18px] gap-[10px] pt-0.5 "
            />
          </div>
        </button>
      </div>

      <div className="h-[1221px] pt-[180px]  py-[96px] gap-[64px] bg-white ">
        <div className="w-[1280px] flex flex-col items-center h-[94x] px-[32px] gap-[32px] ">
          <div className="w-[1216px] h-[94px] gap-[48px] ">
            <div className="w-[768px] h-[94px] gap-[20px] relative pl-[350px] ">
              <p className="w-[768px]  h-[44px] custo-font font-[400] text-[36px] leading-[44px] tracking-[-2%]">
                Frequently asked questions
              </p>
              <p className="w-[768px] pt-[13px] h-[30px] custo-font font-[400] text-[20px] leading-[30px] text-[#667085] ">
                Everything you need to know about the student Accomodation and
                Housing
              </p>
            </div>
          </div>
        </div>
        <div className="w-[1280px] h-[513px] px-[32px] gap-[64px] ">
          <div className="w-[768px] h-[513px] gap-[32px] pl-[340px] pt-[50px] ">
            {data.map((item, index) => (
              <div key={item.id} className="w-[768px] h-[84px] gap-[24px]">
                <div className="flex w-[768px] h-[84px] gap-[24px] justify-between ">
                  <div className="w-[720px] w-fill h-[84px] gap-[18px] ">
                    <p className="flex text-[#101828] w-[720px] h-[px] custo-font font-[500] text-[18px] leading-[28px] pr-[210px] ">
                      {item.question}
                    </p>
                    {isOpen[index] && (
                      <p className="flex text-left  text-[#667085] w-[720px] h-[48px] custo-font font-[400] text-[16px] leading-[24px]">
                        {item.answer}
                      </p>
                    )}
                  </div>
                  <Image
                    width={24}
                    height={24}
                    src={isOpen[index] ? minuscircle : pluscircle}
                    onClick={() => handleToggle(index)}
                    className="w-[24px] h-[24px] cursor-pointer"
                    alt={isOpen[index] ? "Collapse" : "Expand"}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className=" w-[1280px] h-[294px] px-[100px] gap-[32px] ">
          <div className="flex flex-col items-center w-[1326px] h-[294px] rounded-[16px] p-[32px] gap-[32px] bg-[#F9FAFB] ">
            <div className="flex w-[120px] h-[56px] ">
              <Image
                width={48}
                height={48}
                src={Avatar}
                alt=""
                className="w-[48px] h-[48px] w-fixed rounded-[200px] border-[1.5px] border-[#ABB677] h-fixed"
              />
              <Image
                width={48}
                height={48}
                src={Avatar1}
                alt=""
                className="w-[48px] h-[48px] w-fixed rounded-[200px] border-[1.5px] border-[#C7B9DA] h-fixed"
              />
              <Image
                width={48}
                height={48}
                src={Avatar2}
                alt=""
                className="w-[48px] h-[48px] w-fixed rounded-[200px] border-[1.5px] border-[#D9B9BB] h-fixed"
              />
            </div>
            <div className="w-[768px] w-fixed h-[66px] text-center">
              <p className="w-[768px] h-[30px] custo-font font-[400] text-[20px] leading-[30px] text-[#101828] ">
                Still have questions?
              </p>
              <p className="w-[768px] h-[28px] custo-font font-[400] text-[18px] leading-[28px] text-[#667085] ">
                Can&apos;t find the answer you&apos;re looking for? Please chat
                to our friendly team.
              </p>
            </div>

            <div className="w-[134px] h-[44px] gap-[8px] ">
              <div className="w-[134px] h-[44x] rounded-[8px] border-[1px] gap-[8px] py-[10px] px-[18px] bg-[#002855] ">
                <button className="w-[98px] h-[24px] cursor-pointer custo-font font-[500] text-[16px] leading-[24px] text-[#FFFFFF] ">
                  Get in touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F6F9FF] h-[977px] flex flex-col items-center rounded-[4px] py-[92px] px-[128px] gap-[56px] ">
        <div className="flex w-[1184px] h-[108px] rounded-[12px] py-[28px] px-[36px] gap-[100px] bg-[#3D52A0] ">
          <div className="w-[645px] w-fill  h-[52px] gap-[4px] ">
            <p className="w-[86px] h-[24px] custo-font font-[500] text-[16px] leading-[24px] text-[#FFFFFF]">
              Newsletter
            </p>
            <p className="w-[470px] h-[24px] custo-font font-[400] text-[16px] leading-[24px] text-[#FFFFFF]">
              Be the first one to know about discounts, offers and events
            </p>
          </div>
          <div className="flex items-center w-[457px] w-fixed rounded-[12px] pr-[6px] pl-[24px] h-[48px] h-fixed gap-[8px] bg-[#4A61B5] ">
            <div className="flex items-center">
              <Image
                width={16}
                height={16}
                alt=""
                src={sms}
                className="w-[16px] h-[16px] "
              />
              <input
                placeholder="Enter your email"
                className="focus:border-0 w-[160px] h-[24px] custo-font font-[400] text-[16px] leading-[24px] focus:outline-none pl-2 cursor-pointer  bg-[#4A61B5] "
              />
            </div>
            <button className="w-[265px] h-[36px] gap-[10px] pl-[163px] ">
              <div className="w-[94px] h-[36px] gap-[8px] rounded-[10px] bg-[#FFFFFFDB]  ">
                <p className="relative top-[6px] left-[17px] w-[58px] h-[24px] custo-font font-[500] text-[16px] leading-[24px] text-[#002855]">
                  Submit
                </p>
              </div>
            </button>
          </div>
        </div>
        <div className="w-[1184px] h-[173px] gap-[24px]  ">
          <div className="w-[1184px] h-[98px] gap-[16px] ">
            <Image
              width={134}
              height={34}
              src={Logoz}
              alt=""
              className="w-[134px] h-[34px] pb-2 "
            />
            <p className="text-left w-[1184px] h-[48px] custo-font font-[400] text-[16px] leading-[24px] ">
              We ara a lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat...{" "}
              <span className="text-[#4A61B5]">Read More</span>
            </p>
          </div>
          <div className="flex items-center w-[1184px] h-[51px] gap-[80px] pt-[30px] ">
            <div className="flex w-[236px] w-fill h-fill h-[51px] gap-[12px] ">
              <Image
                width={32}
                height={32}
                src={icons}
                alt=""
                className="w-[32px] h-[32px] "
              />
              <div className="w-[192px] h-[48px] gap-[2px] ">
                <p className="flex text-[#4B5768] w-[192px] h-[24px] custo-font font-[400] text-[16px] leading-[24px]  ">
                  Tel
                </p>
                <p className="flex text-[#3D52A0] w-[192px] h-[22px] custo-font font-[500] text-[16px] leading-[20.83px]  ">
                  310-437-2766
                </p>
              </div>
            </div>
            <div className="flex w-[236px] w-fill h-fill h-[51px] gap-[12px] ">
              <Image
                width={32}
                height={32}
                src={mail}
                alt=""
                className="w-[32px] h-[32px] "
              />
              <div className="w-[192px] h-[48px] gap-[2px] ">
                <p className="flex text-[#4B5768] w-[192px] h-[24px] custo-font font-[400] text-[16px] leading-[24px]  ">
                  Mail
                </p>
                <button className="flex text-[#3D52A0] w-[192px] h-[22px] custo-font font-[500] text-[16px] leading-[20.83px]">
                  unreal@outlook.com
                </button>
              </div>
            </div>
            <div className="flex w-[236px] w-fill h-fill h-[51px] gap-[12px] ">
              <Image
                width={32}
                height={32}
                src={address}
                alt=""
                className="w-[32px] h-[32px] "
              />
              <div className="w-[192px] h-[48px] gap-[2px] ">
                <p className="flex text-[#4B5768] w-[192px] h-[24px] custo-font font-[400] text-[16px] leading-[24px]  ">
                  Address
                </p>
                <p className="flex text-[#3D52A0] w-[262px] h-[22px] custo-font font-[500] text-[16px] leading-[20.83px]  ">
                  706 Campfire Ave. Meriden, CT 06450
                </p>
              </div>
            </div>
            <div className="flex justify-evenly w-[236px] w-fill h-fill h-[51px] gap-[18px] pl-8">
              <Image
                width={32}
                height={32}
                src={fax}
                alt=""
                className="w-[32px] h-[32px] "
              />
              <div className="w-[192px] h-[48px] gap-[2px]  ">
                <p className="flex text-[#4B5768] w-[192px] h-[24px] custo-font font-[400] text-[16px] leading-[24px]  ">
                  Fax
                </p>
                <p className="flex text-[#3D52A0] w-[192px] h-[22px] custo-font font-[500] text-[16px] leading-[20.83px]  ">
                  +1-000-0000
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-[1184px] h-[272px] justify-between  ">
          <div className="w-[137.33px] h-[248px] flex flex-col gap-[24px]">
            <p className="flex text-[#191D23]  w-[137.33px] h-[24px] custo-font font-[500] text-[16px] leading-[24px] ">
              About
            </p>
            <div className=" w-[137.33px] h-[200px] flex flex-col gap-[20px] ">
              <p className="flex w-[137.33px] h-[24px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px]  ">
                About us
              </p>
              <p className="flex w-[137.33px] h-[24px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px]  ">
                Blog
              </p>
              <p className="flex w-[137.33px] h-[24px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px]  ">
                Careers
              </p>
              <p className="flex w-[137.33px] h-[24px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px]  ">
                Jobs
              </p>
              <p className="flex w-[137.33px] h-[24px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px]  ">
                In Press
              </p>
            </div>
          </div>
          <div className="w-[137.33px] h-[248px] flex flex-col gap-[24px]">
            <p className="flex text-[#191D23]  w-[137.33px] h-[24px] custo-font font-[500] text-[16px] leading-[24px] ">
              Support
            </p>
            <div className=" w-[137.33px] h-[200px] flex flex-col gap-[20px] ">
              <p className="flex w-[137.33px] h-[24px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px]  ">
                Contact us
              </p>
              <p className="flex w-[137.33px] h-[24px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px]  ">
                Contact us
              </p>
              <p className="flex w-[137.33px] h-[24px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px]  ">
                Whatsapp
              </p>
              <p className="flex w-[137.33px] h-[24px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px]  ">
                Telegram
              </p>
              <p className="flex w-[137.33px] h-[24px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px]  ">
                Ticketing
              </p>
            </div>
          </div>
          <div className="w-[137.33px] h-[272px] flex flex-col  gap-[24px]">
            <p className="flex text-[#191D23]  w-[137.33px] h-[24px] custo-font font-[500] text-[16px] leading-[24px] ">
              FAQ
            </p>
            <div className=" w-[137.33px] h-[200px] flex flex-col gap-[20px] ">
              <p className="flex w-[137.33px] h-[24px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px]  ">
                Account
              </p>
              <p className="relative right-[35px] w-[137.33px] h-[42px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px]  ">
                Manage Deliveries
              </p>
              <p className="flex w-[137.33px] h-[24px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px]  ">
                Orders
              </p>
              <p className="flex w-[137.33px] h-[24px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px]  ">
                Orders
              </p>
              <p className="flex w-[137.33px] h-[24px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px]  ">
                Returns
              </p>
            </div>
          </div>
          <div className="w-[137.33px] h-[248px] flex flex-col  gap-[24px]">
            <p className="flex text-[#191D23]  w-[137.33px] h-[24px] custo-font font-[500] text-[16px] leading-[24px] ">
              About
            </p>
            <div className=" w-[137.33px] h-[200px] flex flex-col gap-[20px] ">
              <p className="flex w-[137.33px] h-[24px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px]  ">
                About us
              </p>
              <p className="flex w-[137.33px] h-[24px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px]  ">
                Blog
              </p>
              <p className="flex w-[137.33px] h-[24px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px]  ">
                Careers
              </p>
              <p className="flex w-[137.33px] h-[24px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px]  ">
                Jobs
              </p>
              <p className="flex w-[137.33px] h-[24px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px]  ">
                In Press
              </p>
            </div>
          </div>
          <div className="w-[137.33px] h-[248px] flex flex-col gap-[24px]">
            <p className="flex text-[#191D23]  w-[137.33px] h-[24px] custo-font font-[500] text-[16px] leading-[24px] ">
              Support
            </p>
            <div className=" w-[137.33px] h-[200px] flex flex-col gap-[20px] ">
              <p className="flex w-[137.33px] h-[24px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px]  ">
                Contact us
              </p>
              <p className="flex w-[137.33px] h-[24px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px]  ">
                Online Chat
              </p>
              <p className="flex w-[137.33px] h-[24px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px]  ">
                Whatsapp
              </p>
              <p className="flex w-[137.33px] h-[24px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px]  ">
                Telegram
              </p>
              <p className="flex w-[137.33px] h-[24px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px]  ">
                Ticketing
              </p>
            </div>
          </div>
          <div className="w-[137.33px] h-[272px] flex flex-col gap-[24px]">
            <p className="flex text-[#191D23]  w-[137.33px] h-[24px] custo-font font-[500] text-[16px] leading-[24px] ">
              FAQ
            </p>
            <div className=" w-[137.33px] h-[200px] flex flex-col gap-[20px] ">
              <p className="flex w-[137.33px] h-[24px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px]  ">
                Account
              </p>
              <p className="relative right-[35px] w-[137.33px] h-[40px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px]  ">
                Manage Deliveries
              </p>

              <p className="relative right-[35px] w-[137.33px] h-[40px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px]  ">
                Manage Deliveries
              </p>
              <p className="flex w-[137.33px] h-[24px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px]  ">
                Payments
              </p>
              <p className="flex w-[137.33px] h-[24px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px]  ">
                Returns
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between w-[1184px] h-[72px] py-[24px] border-[1px] border-[#D0D5DD] ">
          <div className="flex w-[928px] h-[24px] gap-[40px] ">
            <p className="flex w-[73px] h-[24px] text-[#4B5768] custo-font font-[400] text-[16px] leading-[24px] ">
              About us
            </p>
            <p className="flex w-[71px] h-[24px] text-[#4B5768] custo-font font-[400] text-[16px] leading-[24px] ">
              Contact
            </p>
            <p className="flex h-[24px] text-[#4B5768] custo-font font-[400] text-[16px] leading-[24px] ">
              Privacy policy
            </p>
            <p className="flex w-[71px] h-[24px] text-[#4B5768] custo-font font-[400] text-[16px] leading-[24px] ">
              Sitemap
            </p>
            <p className="flex  h-[24px] text-[#4B5768] custo-font font-[400] text-[16px] leading-[24px] ">
              Terms of Use
            </p>
          </div>
          <p className="flex w-[266px] h-[24px] text-[#4B5768] custo-font font-[400] text-[16px] leading-[24px] ">
            © 2000-2021, All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
