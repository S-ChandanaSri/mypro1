"use client";
import React, { useState } from "react";
import Image from "next/image";
import img1 from "../../_assets/images/Logo1.png";
import materialblack from "../../_assets/images/materialblack.png";
import userblack from "../../_assets/images/userblack.png";
import quillblack from "../../_assets/images/quillblack.png";
import octicon from "../../_assets/images/octicon.png";
import chartbar from "../../_assets/images/chartbar.png";
import Money from "../../_assets/images/Money.png";
import Product from "../../_assets/images/Product.png";
import Quality from "../../_assets/images/Quality.png";
import Candidate from "../../_assets/images/Candidate.png";
import Imageg from "../../_assets/images/Imageg.png";
import social from "../../_assets/images/social.png";
import social1 from "../../_assets/images/social1.png";
import social2 from "../../_assets/images/social2.png";
import Image11 from "../../_assets/images/Image11.png";
import Image12 from "../../_assets/images/Image12.png";
import Image13 from "../../_assets/images/Image13.png";
import Image14 from "../../_assets/images/Image14.png";
import Image15 from "../../_assets/images/Image15.png";
import Image16 from "../../_assets/images/Image16.png";
import Image17 from "../../_assets/images/Image17.png";
import icons from "../../_assets/images/Icons.png";
import mail from "../../_assets/images/mail.png";
import address from "../../_assets/images/address.png";
import fax from "../../_assets/images/fax.png";
import Logoz from "../../_assets/images/Logoz.png";
import sms from "../../_assets/images/sms.png";
import Line4 from "../../_assets/images/Line4.png";
import Mapwrap from "../../_assets/images/Mapwrap.png";
import { VectorMap } from "@react-jvectormap/core";
import { worldMill } from "@react-jvectormap/world";
import { colorScale, countries, missingCountries } from "../Countries/page.js";

export default function Aboutus() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="overflow-y-auto overflow-x-hidden bg-[#FFFFFF]">
      <div className="lg:w-100% flex h-[72px] items-center justify-between bg-[#3D52A0] pb-[15px] pl-[55px] pr-[45px] pt-[15px] shadow-[0px_-1px_1px_0px_#0000001A_inset]">
        <div className="relative right-[2.5rem] flex h-[34px] w-[134px]">
          <Image
            alt=""
            width={44}
            height={44}
            src={img1}
            className="relative bottom-2.5 h-[44px] w-[44px]"
          />
          <p className="custom-font left-[39px] top-[2px] h-[29px] w-[99px] text-left text-[24px] font-normal leading-[34.34px] text-white">
            ZENDEN
          </p>
        </div>
        <div className="flex hidden h-[18px] w-[239px] gap-[30px] md:flex">
          <div className="h-[18px] w-[58px]">
            <p className="custo-font top-[-1px] h-[21px] w-[60.15px] text-left text-[14px] font-medium leading-[21px] tracking-[0.2px] text-[#FFFFFF]">
              Services
            </p>
          </div>
          <div className="h-[18px] w-[63px]">
            <p className="custo-font top-[-2px] h-[21px] w-[91.26px] text-left text-[14px] font-medium leading-[21px] tracking-[0.2px] text-[#FFFFFF]">
              Features
            </p>
          </div>
          <div className="h-[18px] w-[58px]">
            <p className="custo-font top-[-1px] h-[21px] w-[65px] text-left text-[14px] font-medium leading-[21px] tracking-[0.2px] text-[#FFFFFF]">
              About Us
            </p>
          </div>
        </div>
        <div className="flex hidden h-[42px] w-[215px] gap-[20px] md:flex">
          <button className="flex h-[40px] w-[123px] gap-[10px] rounded-[5px] border-[1px] border-[#FFFFFF] bg-[#FFFFFF] pb-[8px] pl-[14px] pr-[22px] pt-[7px]">
            <Image
              alt=""
              width={24}
              height={24}
              src={materialblack}
              className="h-[24px] w-[24px]"
            />
            <p className="text-black">Login</p>
          </button>
          <button className="flex h-[42px] w-[106px] gap-[10px] rounded-[5px] border-[1px] border-[#FFFFFF] bg-[#FFFFFF] pb-[8px] pl-[16px] pr-[22px] pt-[8px]">
            <Image
              alt=""
              width={28}
              height={26}
              src={userblack}
              className="h-[26px] w-[28px]"
            />
            <Image
              alt=""
              width={24}
              height={24}
              src={quillblack}
              className="h-[24px] w-[24px]"
            />
          </button>
        </div>

        <button
          className="right-0 top-0 z-50 p-4 md:fixed md:relative md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Image
            alt="Menu"
            width={24}
            height={24}
            src={quillblack}
            className="pt-2"
          />
        </button>
        {menuOpen && (
          <div className="fixed right-0 top-[72px] z-40 w-[168px] bg-[#3D52A0] p-[15px] shadow-[0px_-1px_1px_0px_#0000001A_inset] md:hidden">
            <div className="flex flex-col gap-4">
              <button className="flex h-[40px] w-[123px] gap-[10px] rounded-[5px] border-[1px] border-[#FFFFFF] bg-[#FFFFFF] pb-[8px] pl-[14px] pr-[22px] pt-[7px]">
                <Image
                  alt="Login Icon"
                  width={24}
                  height={24}
                  src={materialblack}
                  className="h-[24px] w-[24px]"
                />
                <p className="text-black">Login</p>
              </button>
              <p className="pl-2 text-[14px] font-medium text-[#FFFFFF]">
                Services
              </p>
              <p className="pl-2 text-[14px] font-medium text-[#FFFFFF]">
                Features
              </p>
              <p className="pl-2 text-[14px] font-medium text-[#FFFFFF]">
                About Us
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="flex h-[1024px] flex-col items-center sm:h-[934px] sm:w-auto">
        <div className="top-[140px] h-[449px] w-[1066px]">
          <div className="relative top-[140px] flex h-[449px] w-[1066px] flex-col items-center gap-[11px]">
            <div className="w-fixed flex h-[361px] w-[773px] flex-col items-center sm:w-auto">
              <p className="custo-font h-[68px] w-[204px] text-[45px] font-[500] leading-[67.5px] text-[#002855]">
                About Us
              </p>
              <p className="custom-font relative left-[12rem] h-[233px] w-[670px] text-[73px] font-[400] leading-[233.2px] text-[#002855] xs:relative xs:mr-[6rem] xs:text-[97px] sm:relative sm:mr-[50rem] sm:w-[150px] sm:text-[140px] md:relative md:mx-auto md:mr-[22rem] md:w-auto md:text-[150px] lg:relative lg:left-[13rem] lg:w-[670px] lg:text-[140px] xl:relative xl:mr-[25rem] xl:text-[163px]">
                ZENDEN
              </p>
              <div className="flex h-[60px] w-[439px] justify-between text-[#3D52A0] xs:relative xs:left-[3rem] xs:w-auto sm:w-auto lg:w-auto">
                <p className="top[301px] custo-font relative left-[5rem] h-[60px] w-[180px] text-[25px] font-[500] leading-[60px] text-[#3D52A0] xs:relative xs:right-[1rem] xs:w-[420px] xs:pl-[9rem] xs:text-[40px] sm:text-[40px]">
                  Live Easy
                </p>
                <Image
                  alt=""
                  src={Line4}
                  className="left-[368px] top-[315px]"
                />
                <p className="custo-font relative right-[0.5rem] h-[60px] w-[211px] text-[25px] font-[500] leading-[60px] text-[#3D52A0] xs:relative xs:left-[1rem] xs:w-[500px] xs:text-[40px] sm:relative sm:left-[1rem] sm:text-[40px] lg:relative lg:left-[10px]">
                  Feel Home
                </p>
              </div>
            </div>
            <p className="custo-font relative h-[77px] w-[350px] pt-[4px] text-center text-[12px] font-[300] leading-[39px] text-[#000000] xs:w-[450px] xs:text-[19px] sm:w-[800px] sm:px-[48px] sm:text-[20px] lg:w-[1066px] lg:text-[26px] xl:text-[26px]">
              {" "}
              ZenDen is reshaping student accommodation by offering affordable,
              comfortable and luxurious living spaces.
            </p>
          </div>
        </div>
        <div className="relative top-[180px] flex h-[144x] flex-col items-center gap-[46px] sm:h-[150px] sm:w-auto lg:w-[842px]">
          <p className="custo-font relative h-[39x] text-center text-[26px] font-[400] leading-[39px] text-[#3D52A0] sm:w-auto sm:px-[15px] lg:w-[852px]">
            Join us in creating a home away from home for you across India.
          </p>
          <button className="h-[59x] w-[268px] rounded-[6px]">
            <div className="left-[297px] top-[85px] h-[59x] w-[268px] rounded-[6px] bg-[#002855]">
              <p className="custo-font h-[48px] w-[268px] px-[2px] py-1 text-[26px] font-[400] leading-[39px] text-[#FFFFFF]">
                Join Now
              </p>
            </div>
          </button>
        </div>
        <div className="relative top-[16rem] flex flex-wrap items-center justify-center gap-8 p-4 sm:relative sm:left-[3rem] sm:top-[230px] sm:h-auto sm:w-auto sm:gap-[50px]">
          <div className="flex h-[118px] w-[181px] flex-col items-center sm:h-[100px] sm:w-[150px] lg:relative lg:right-[3rem] lg:w-[160px]">
            <p className="custo-font h-[113px] w-[181px] text-[75px] font-[400] leading-[112.5px] text-[#3D52A0] sm:text-[50px] sm:leading-[75px]">
              2024
            </p>
            <p className="custo-font right-[1rem] h-[26px] w-[119px] text-[17px] font-[500] leading-[25.5px] text-[#000000] sm:relative sm:text-[15px] sm:leading-[22.5px]">
              Join Now
            </p>
          </div>
          <div className="flex h-[113px] w-[193px] flex-col items-center sm:h-[100px] sm:w-[160px] lg:right-[18rem] lg:w-[160px]">
            <p className="custo-font h-[113px] w-[193px] text-[75px] font-[400] leading-[112.5px] text-[#3D52A0] sm:text-[50px] sm:leading-[75px]">
              500+
            </p>
            <p className="custo-font right-[2rem] h-[23px] w-[84px] text-[15px] font-[500] leading-[22.5px] text-[#000000] sm:relative sm:text-[13px] sm:leading-[20px]">
              Customers
            </p>
          </div>
          <div className="flex h-[113px] w-[140px] flex-col items-center sm:h-[100px] sm:w-[120px] lg:right-[20rem] lg:w-[160px]">
            <p className="custo-font h-[113px] w-[140px] text-[75px] font-[400] leading-[112.5px] text-[#3D52A0] sm:text-[50px] sm:leading-[75px]">
              70+
            </p>
            <p className="custo-font right-[1rem] h-[23px] w-[119px] text-[15px] font-[500] leading-[22.5px] text-[#000000] sm:relative sm:text-[13px] sm:leading-[20px]">
              House rented
            </p>
          </div>
        </div>
      </div>

      <div className="relative top-[23rem] xs:relative xs:top-[9rem] sm:relative sm:top-[2rem]">
        <div className="flex h-[996px] flex-col items-center">
          <div className="relative top-[55px] h-[103px] w-[554.4px] gap-[27px] text-center sm:w-auto">
            <p className="custo-font h-[48px] w-[554.4px] text-[42px] font-[400] leading-[48px] text-[#002855]">
              Why Us
            </p>
            <p className="jakarta-font relative left-[3rem] h-[28px] w-[454.4px] pt-5 text-[14px] font-[400] leading-[28px] text-[#002855] xs:text-[18px] lg:text-[19px]">
              Lorem ipsum dolor sit amet, consectetur adipis elit
            </p>
          </div>
          <div className="relative right-[3rem] top-[70px] grid h-[550px] grid-cols-1 gap-4 py-[4px] sm:grid sm:h-[100%] sm:w-auto sm:grid-cols-1 sm:place-items-center lg:grid lg:grid-cols-3">
            <div className="flex h-[385px] w-[330px] flex-col items-center sm:w-[330px]">
              <Image
                alt=""
                width={59}
                height={59}
                src={octicon}
                className="relative left-[52px] top-[58px] h-[59px] w-[59px]"
              />

              <p className="custo-font relative left-[51px] top-[91px] h-[28px] w-[315px] text-center text-[21px] font-[400] leading-[28px] text-[#002855]">
                Our Mission
              </p>
              <p className="jakarta-font relative left-[43px] top-[125px] h-[78px] w-[300px] text-center text-[16px] font-[400] leading-[26px] text-[#52525B] xs:w-auto lg:w-[280px] lg:text-[15px] xl:w-[330px] xl:text-[16px]">
                Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim
                nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.
              </p>
            </div>
            <div className="flex h-[385px] w-[330px] flex-col items-center">
              <Image
                alt=""
                width={59}
                height={59}
                src={chartbar}
                className="relative left-[52px] top-[58px] h-[59px] w-[59px]"
              />

              <p className="custo-font relative left-[51px] top-[91px] h-[28px] w-[315px] text-center text-[21px] font-[400] leading-[28px] text-[#002855]">
                Our Vision
              </p>
              <p className="jakarta-font relative left-[43px] top-[125px] h-[78px] w-[300px] text-center text-[16px] font-[400] leading-[26px] text-[#52525B] xs:w-auto lg:w-[280px] lg:text-[15px] xl:w-[330px] xl:text-[16px]">
                Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim
                nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.
              </p>
            </div>
            <div className="flex h-[385px] w-[330px] flex-col items-center">
              <Image
                alt=""
                width={59}
                height={59}
                src={Money}
                className="relative left-[52px] top-[58px] h-[59px] w-[59px]"
              />

              <p className="custo-font relative left-[51px] top-[91px] h-[28px] w-[315px] text-center text-[21px] font-[400] leading-[28px] text-[#002855]">
                Our Values
              </p>
              <p className="jakarta-font relative left-[43px] top-[125px] h-[78px] w-[300px] text-center text-[16px] font-[400] leading-[26px] text-[#52525B] xs:w-auto lg:w-[280px] lg:text-[15px] xl:w-[330px] xl:text-[16px]">
                Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim
                nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.
              </p>
            </div>
            <div className="flex h-[385px] w-[330px] flex-col items-center">
              <Image
                alt=""
                width={59}
                height={59}
                src={Product}
                className="relative left-[52px] top-[58px] h-[59px] w-[59px]"
              />

              <p className="custo-font relative left-[51px] top-[91px] h-[28px] w-[315px] text-center text-[21px] font-[400] leading-[28px] text-[#002855]">
                Product
              </p>
              <p className="jakarta-font relative left-[43px] top-[125px] h-[78px] w-[300px] text-center text-[16px] font-[400] leading-[26px] text-[#52525B] xs:w-auto lg:w-[280px] lg:text-[15px] xl:w-[330px] xl:text-[16px]">
                Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim
                nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.
              </p>
            </div>
            <div className="flex h-[385px] w-[330px] flex-col items-center">
              <Image
                alt=""
                width={59}
                height={59}
                src={Quality}
                className="relative left-[52px] top-[58px] h-[59px] w-[59px]"
              />

              <p className="custo-font relative left-[51px] top-[91px] h-[28px] w-[315px] text-center text-[21px] font-[400] leading-[28px] text-[#002855]">
                Quality
              </p>
              <p className="jakarta-font relative left-[43px] top-[125px] h-[78px] w-[300px] text-center text-[16px] font-[400] leading-[26px] text-[#52525B] xs:w-auto lg:w-[280px] lg:text-[15px] xl:w-[330px] xl:text-[16px]">
                Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim
                nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.
              </p>
            </div>
            <div className="flex h-[385px] w-[330px] flex-col items-center">
              <Image
                alt=""
                width={59}
                height={59}
                src={Candidate}
                className="relative left-[52px] top-[58px] h-[59px] w-[59px]"
              />

              <p className="custo-font relative left-[51px] top-[91px] h-[28px] w-[315px] text-center text-[21px] font-[400] leading-[28px] text-[#002855]">
                Result
              </p>
              <p className="jakarta-font relative left-[43px] top-[125px] h-[78px] w-[300px] text-center text-[16px] font-[400] leading-[26px] text-[#52525B] xs:w-auto lg:w-[280px] lg:text-[15px] xl:w-[330px] xl:text-[16px]">
                Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim
                nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative top-[115rem] flex h-[1096px] flex-col items-center xs:relative xs:top-[100rem] sm:relative sm:top-[90rem] sm:flex sm:w-auto sm:items-center lg:relative lg:top-[-1rem] lg:flex lg:w-auto lg:items-center">
        <div className="h-[342px] gap-[64px] py-[96px]">
          <div className="flex h-[150px] w-[1280px] flex-col items-center gap-[32px] px-[32px]">
            <div className="flex h-[150px] w-[1216px] flex-col items-center gap-[48px]">
              <div className="flex h-[150px] w-[960px] flex-col items-center gap-[24px]">
                <div className="flex h-[96px] w-[960px] flex-col items-center gap-[19px]">
                  <p className="custo-font h-[24px] w-[960px] text-center text-[16px] font-[400] leading-[24px] text-[#002855]">
                    About Us
                  </p>
                  <p className="custo-font h-[60px] w-[960px] text-center text-[24px] font-[400] leading-[60px] tracking-[-2%] text-[#002855] xs:text-[48px]">
                    We’re a distributed team
                  </p>
                </div>
                <p className="custo-font h-[30px] w-[608px] text-center text-[14px] font-[400] leading-[30px] text-[#3D52A0] xs:text-[20px]">
                  We have offices and teams all around the world.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[754px] gap-[64px] pb-[96px]">
          <div className="flex min-h-screen w-full items-center justify-center px-4">
            <div className="flex h-[488px] w-full max-w-[450px] flex-col items-center">
              <VectorMap
                map={worldMill}
                backgroundColor="gray"
                markers={missingCountries}
                markerStyle={{
                  initial: {
                    fill: "red",
                  },
                }}
                containerStyle={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
          </div>

          <div className="relative top-[2rem] h-[1280px] pb-[106px] pt-[50px] sm:w-auto sm:items-center sm:pt-[7rem] lg:relative lg:top-[-1rem] lg:h-[1280px] lg:w-auto">
            <div className="flex flex-col items-center sm:flex sm:flex-row sm:justify-evenly sm:px-[32px]">
              <div className="w-fill mb-[20px] flex h-[106px] w-[384px] flex-col items-center gap-[20px] sm:relative sm:left-0 sm:w-[170px] lg:w-[270px] lg:pr-[15rem] xl:w-[384px]">
                <div className="w-fill flex h-[62px] w-[384px] flex-col items-center gap-[4px]">
                  <p className="custo-font h-[30px] w-[384px] text-center text-[20px] font-[300] leading-[30px] text-[#101828]">
                    Support
                  </p>
                  <p className="custo-font h-[24px] w-[384px] pt-1 text-center text-[16px] font-[400] leading-[24px] text-[#667085] sm:text-[13px] lg:text-[16px]">
                    Our friendly team is here to help.
                  </p>
                </div>
                <button className="h-[24px] w-[197px]">
                  <div className="h-[24x] w-[197px] gap-[8px]">
                    <p className="custo-font h-[24px] w-[197px] text-center text-[16px] font-[500] leading-[24px] text-[#002855]">
                      support@untitledui.com
                    </p>
                  </div>
                </button>
              </div>
              <div className="w-fill mb-[20px] flex h-[106px] w-[384px] flex-col items-center gap-[20px] sm:relative sm:left-[3rem] sm:w-[170px] lg:w-[270px] lg:pr-[7rem] xl:w-[384px]">
                <div className="w-fill flex h-[62px] w-[384px] flex-col items-center gap-[4px]">
                  <p className="custo-font h-[30px] w-[384px] text-center text-[20px] font-[400] leading-[30px] text-[#101828]">
                    Sales
                  </p>
                  <p className="custo-font h-[24px] w-[384px] text-center text-[16px] font-[400] leading-[24px] text-[#667085] sm:text-[13px] lg:text-[16px]">
                    Questions or queries? Get in touch!
                  </p>
                </div>
                <button className="h-[24px] w-[176px]">
                  <div className="h-[24x] w-[176px] gap-[8px]">
                    <p className="custo-font h-[24px] w-[176px] text-center text-[16px] font-[500] leading-[24px] text-[#002855]">
                      sales@untitledui.com
                    </p>
                  </div>
                </button>
              </div>
              <div className="w-fill mb-[20px] flex h-[106px] w-[384px] flex-col items-center gap-[20px] sm:relative sm:left-[10rem] sm:w-[170px] sm:pr-[14rem] lg:w-[270px] lg:pr-[8rem] xl:w-[384px]">
                <div className="w-fill flex h-[62px] w-[384px] flex-col items-center gap-[4px]">
                  <p className="custo-font h-[30px] w-[384px] text-center text-[20px] font-[400] leading-[30px] text-[#101828]">
                    Phone
                  </p>
                  <p className="custo-font h-[24px] w-[384px] text-center text-[16px] font-[400] leading-[24px] text-[#667085] sm:text-[13px] lg:text-[16px]">
                    Mon-Fri from 8am to 5pm.
                  </p>
                </div>
                <button className="h-[24px] w-[153px]">
                  <div className="h-[24x] w-[153px] gap-[8px]">
                    <p className="custo-font h-[24px] w-[153px] text-center text-[16px] font-[500] leading-[24px] text-[#002855]">
                      +1 (555) 000-0000
                    </p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="custo-font relative top-[128rem] h-[64px] text-center text-[40px] font-[400] leading-[64px] text-[#002855] xs:relative xs:left-[4.5rem] xs:top-[113rem] xs:w-[391px] sm:relative sm:left-[20px] sm:top-[91rem] sm:w-auto lg:relative lg:left-[4rem] lg:top-[-1rem] lg:mx-auto lg:h-[64px] lg:w-[391px]">
        Our creative minds
      </p>

      <div className="relative right-[1.2rem] top-[135rem] pb-[96px] xs:relative xs:left-[5.5rem] xs:top-[116rem] lg:relative lg:top-[23rem] lg:h-[80rem]">
        <div className="grid h-[1052px] grid-cols-1 gap-4 sm:relative sm:right-[5.5rem] sm:top-[-20rem] sm:grid sm:h-auto sm:grid-cols-1 sm:items-center lg:my-auto lg:grid lg:grid-cols-4">
          <div className="w-fill h-[494px] w-[340px] flex-col gap-[24x] pl-[40px] sm:flex sm:w-[100%] sm:items-center">
            <Image alt="" height={296} src={Imageg} className="h-[296px]" />
            <div className="h-[174px] w-[280px] gap-[24px] lg:relative lg:left-[2.4rem] xl:mr-[4.1rem]">
              <div className="h-[24px] w-[280px] gap-[20px]">
                <div className="w-fill h-[62px] w-[280px] gap-[4px]">
                  <p className="custom-font h-[48px] w-[280px] text-left text-[20px] font-[400] leading-[30px] text-[#101828]">
                    Olivia Rhye
                  </p>
                  <p className="custom-font h-[48px] w-[280px] text-left text-[18px] font-[400] leading-[28px] text-[#002855]">
                    Founder & CEO
                  </p>
                </div>
                <p className="custom-font h-[48px] w-[280px] pt-5 text-left text-[16px] font-[400] leading-[24px] text-[#667085] lg:w-[230px] lg:text-[12px] xl:w-[280px] xl:text-[16px]">
                  Former co-founder of Opendoor. Early staff at Spotify and
                  Clearbit.
                </p>
              </div>
              <div className="flex h-[24px] w-[280px] gap-[20px] pt-[130px]">
                <button>
                  <Image
                    alt=""
                    width={24}
                    height={24}
                    src={social}
                    className="h-[24px] w-[24px] rounded-full hover:bg-blue-500"
                  />
                </button>
                <button>
                  {" "}
                  <Image
                    alt=""
                    width={24}
                    height={24}
                    src={social1}
                    className="h-[24px] w-[24px] rounded-full hover:bg-blue-500"
                  />
                </button>
                <button>
                  {" "}
                  <Image
                    alt=""
                    width={24}
                    height={24}
                    src={social2}
                    className="h-[24px] w-[24px] rounded-full hover:bg-blue-500"
                  />{" "}
                </button>
              </div>
            </div>
          </div>
          <div className="w-fill h-[494px] w-[340px] flex-col gap-[24x] pl-[40px] sm:flex sm:w-[100%] sm:items-center">
            <Image alt="" height={296} src={Image11} className="h-[296px]" />
            <div className="h-[174px] w-[280px] gap-[24px] lg:relative lg:left-[2.4rem] xl:mr-[4.1rem]">
              <div className="h-[24px] w-[280px] gap-[20px]">
                <div className="w-fill h-[62px] w-[280px] gap-[4px]">
                  <p className="custom-font h-[48px] w-[280px] text-left text-[20px] font-[400] leading-[30px] text-[#101828]">
                    {" "}
                    Phoenix Baker
                  </p>
                  <p className="custom-font h-[48px] w-[280px] text-left text-[18px] font-[400] leading-[28px] text-[#002855]">
                    Engineering Manager
                  </p>
                </div>
                <p className="custom-font h-[48px] w-[280px] pt-5 text-left text-[16px] font-[400] leading-[24px] text-[#667085] lg:w-[230px] lg:text-[12px] xl:w-[280px] xl:text-[16px]">
                  Lead engineering teams at Figma, Pitch, and Protocol Labs.
                </p>
              </div>
              <div className="flex h-[24px] w-[280px] gap-[20px] pt-[130px]">
                <button>
                  <Image
                    alt=""
                    width={24}
                    height={24}
                    src={social}
                    className="h-[24px] w-[24px] rounded-full hover:bg-blue-500"
                  />
                </button>
                <button>
                  {" "}
                  <Image
                    alt=""
                    width={24}
                    height={24}
                    src={social1}
                    className="h-[24px] w-[24px] rounded-full hover:bg-blue-500"
                  />
                </button>
                <button>
                  {" "}
                  <Image
                    alt=""
                    width={24}
                    height={24}
                    src={social2}
                    className="h-[24px] w-[24px] rounded-full hover:bg-blue-500"
                  />{" "}
                </button>
              </div>
            </div>
          </div>
          <div className="w-fill h-[494px] w-[340px] flex-col gap-[24x] pl-[40px] sm:flex sm:w-[100%] sm:items-center">
            <Image alt="" height={296} src={Image12} className="h-[296px]" />
            <div className="h-[174px] w-[280px] gap-[24px] lg:relative lg:left-[2.4rem] xl:mr-[4.1rem]">
              <div className="h-[24px] w-[280px] gap-[20px]">
                <div className="w-fill h-[62px] w-[280px] gap-[4px]">
                  <p className="custom-font h-[48px] w-[280px] text-left text-[20px] font-[400] leading-[30px] text-[#101828]">
                    Lana Steiner
                  </p>
                  <p className="custom-font h-[48px] w-[280px] text-left text-[18px] font-[400] leading-[28px] text-[#002855]">
                    Product Manager
                  </p>
                </div>
                <p className="custom-font h-[48px] w-[280px] pt-5 text-left text-[16px] font-[400] leading-[24px] text-[#667085] lg:w-[230px] lg:text-[12px] xl:w-[280px] xl:text-[16px]">
                  Former PM for Linear, Lambda School, and On Deck.
                </p>
              </div>
              <div className="flex h-[24px] w-[280px] gap-[20px] pt-[130px]">
                <button>
                  <Image
                    alt=""
                    width={24}
                    height={24}
                    src={social}
                    className="h-[24px] w-[24px] rounded-full hover:bg-blue-500"
                  />
                </button>
                <button>
                  {" "}
                  <Image
                    alt=""
                    width={24}
                    height={24}
                    src={social1}
                    className="h-[24px] w-[24px] rounded-full hover:bg-blue-500"
                  />
                </button>
                <button>
                  {" "}
                  <Image
                    alt=""
                    width={24}
                    height={24}
                    src={social2}
                    className="h-[24px] w-[24px] rounded-full hover:bg-blue-500"
                  />{" "}
                </button>
              </div>
            </div>
          </div>
          <div className="w-fill h-[494px] w-[340px] flex-col gap-[24x] pl-[40px] sm:flex sm:w-[100%] sm:items-center">
            <Image alt="" height={296} src={Image13} className="h-[296px]" />
            <div className="h-[174px] w-[280px] gap-[24px] lg:relative lg:left-[2.4rem] xl:mr-[4.1rem]">
              <div className="h-[24px] w-[280px] gap-[20px]">
                <div className="w-fill h-[62px] w-[280px] gap-[4px]">
                  <p className="custom-font h-[48px] w-[280px] text-left text-[20px] font-[400] leading-[30px] text-[#101828]">
                    Demi Wilkinson
                  </p>
                  <p className="custom-font h-[48px] w-[280px] text-left text-[18px] font-[400] leading-[28px] text-[#002855]">
                    Frontend Developer
                  </p>
                </div>
                <p className="custom-font h-[48px] w-[280px] pt-5 text-left text-[16px] font-[400] leading-[24px] text-[#667085] lg:w-[230px] lg:text-[12px]">
                  Former frontend dev for Linear, Coinbase, and Postscript.
                </p>
              </div>
              <div className="flex h-[24px] w-[280px] gap-[20px] pt-[130px]">
                <button>
                  <Image
                    alt=""
                    width={24}
                    height={24}
                    src={social}
                    className="h-[24px] w-[24px] rounded-full hover:bg-blue-500"
                  />
                </button>
                <button>
                  {" "}
                  <Image
                    alt=""
                    width={24}
                    height={24}
                    src={social1}
                    className="h-[24px] w-[24px] rounded-full hover:bg-blue-500"
                  />
                </button>
                <button>
                  {" "}
                  <Image
                    alt=""
                    width={24}
                    height={24}
                    src={social2}
                    className="h-[24px] w-[24px] rounded-full hover:bg-blue-500"
                  />{" "}
                </button>
              </div>
            </div>
          </div>
          <div className="w-fill h-[494px] w-[340px] flex-col gap-[24x] pl-[40px] sm:flex sm:w-[100%] sm:items-center">
            <Image alt="" height={296} src={Image14} className="h-[296px]" />
            <div className="h-[174px] w-[280px] gap-[24px] lg:relative lg:left-[2.4rem] xl:mr-[4.1rem]">
              <div className="h-[24px] w-[280px] gap-[20px]">
                <div className="w-fill h-[62px] w-[280px] gap-[4px]">
                  <p className="custom-font h-[48px] w-[280px] text-left text-[20px] font-[400] leading-[30px] text-[#101828]">
                    Candice Wu
                  </p>
                  <p className="custom-font h-[48px] w-[280px] text-left text-[18px] font-[400] leading-[28px] text-[#002855]">
                    Backend Developer
                  </p>
                </div>
                <p className="custom-font h-[48px] w-[280px] pt-5 text-left text-[16px] font-[400] leading-[24px] text-[#667085] lg:w-[230px] lg:text-[12px] xl:w-[280px] xl:text-[16px]">
                  Lead backend dev at Clearbit. Former Clearbit and Loom.
                </p>
              </div>
              <div className="flex h-[24px] w-[280px] gap-[20px] pt-[130px]">
                <button>
                  <Image
                    alt=""
                    width={24}
                    height={24}
                    src={social}
                    className="h-[24px] w-[24px] rounded-full hover:bg-blue-500"
                  />
                </button>
                <button>
                  {" "}
                  <Image
                    alt=""
                    width={24}
                    height={24}
                    src={social1}
                    className="h-[24px] w-[24px] rounded-full hover:bg-blue-500"
                  />
                </button>
                <button>
                  {" "}
                  <Image
                    alt=""
                    width={24}
                    height={24}
                    src={social2}
                    className="h-[24px] w-[24px] rounded-full hover:bg-blue-500"
                  />{" "}
                </button>
              </div>
            </div>
          </div>
          <div className="w-fill h-[494px] w-[340px] flex-col gap-[24x] pl-[40px] sm:flex sm:w-[100%] sm:items-center">
            <Image alt="" height={296} src={Image15} className="h-[296px]" />
            <div className="h-[174px] w-[280px] gap-[24px] lg:relative lg:left-[2.4rem] xl:mr-[4.1rem]">
              <div className="h-[24px] w-[280px] gap-[20px]">
                <div className="w-fill h-[62px] w-[280px] gap-[4px]">
                  <p className="custom-font h-[48px] w-[280px] text-left text-[20px] font-[400] leading-[30px] text-[#101828]">
                    Natali Craig
                  </p>
                  <p className="custom-font h-[48px] w-[280px] text-left text-[18px] font-[400] leading-[28px] text-[#002855]">
                    Product Designer
                  </p>
                </div>
                <p className="custom-font h-[48px] w-[280px] pt-5 text-left text-[16px] font-[400] leading-[24px] text-[#667085] lg:w-[230px] lg:text-[12px] xl:w-[280px] xl:text-[16px]">
                  Founding design team at Figma. Former Pleo, Stripe, and Tile.
                </p>
              </div>
              <div className="flex h-[24px] w-[280px] gap-[20px] pt-[130px]">
                <button>
                  <Image
                    alt=""
                    width={24}
                    height={24}
                    src={social}
                    className="h-[24px] w-[24px] rounded-full hover:bg-blue-500"
                  />
                </button>
                <button>
                  {" "}
                  <Image
                    alt=""
                    width={24}
                    height={24}
                    src={social1}
                    className="h-[24px] w-[24px] rounded-full hover:bg-blue-500"
                  />
                </button>
                <button>
                  {" "}
                  <Image
                    alt=""
                    width={24}
                    height={24}
                    src={social2}
                    className="h-[24px] w-[24px] rounded-full hover:bg-blue-500"
                  />{" "}
                </button>
              </div>
            </div>
          </div>
          <div className="w-fill h-[494px] w-[340px] flex-col gap-[24x] pl-[40px] sm:flex sm:w-[100%] sm:items-center">
            <Image alt="" height={296} src={Image16} className="h-[296px]" />
            <div className="h-[174px] w-[280px] gap-[24px] lg:relative lg:left-[2.4rem] xl:mr-[4.1rem]">
              <div className="h-[24px] w-[280px] gap-[20px]">
                <div className="w-fill h-[62px] w-[280px] gap-[4px]">
                  <p className="custom-font h-[48px] w-[280px] text-left text-[20px] font-[400] leading-[30px] text-[#101828]">
                    Drew Cano
                  </p>
                  <p className="custom-font h-[48px] w-[280px] text-left text-[18px] font-[400] leading-[28px] text-[#002855]">
                    UX Researcher
                  </p>
                </div>
                <p className="custom-font h-[48px] w-[280px] pt-5 text-left text-[16px] font-[400] leading-[24px] text-[#667085] lg:w-[230px] lg:text-[12px] xl:w-[280px] xl:text-[16px]">
                  Lead user research for Slack. Contractor for Netflix and
                  Udacity.
                </p>
              </div>
              <div className="flex h-[24px] w-[280px] gap-[20px] pt-[130px]">
                <button>
                  <Image
                    alt=""
                    width={24}
                    height={24}
                    src={social}
                    className="h-[24px] w-[24px] rounded-full hover:bg-blue-500"
                  />
                </button>
                <button>
                  {" "}
                  <Image
                    alt=""
                    width={24}
                    height={24}
                    src={social1}
                    className="h-[24px] w-[24px] rounded-full hover:bg-blue-500"
                  />
                </button>
                <button>
                  {" "}
                  <Image
                    alt=""
                    width={24}
                    height={24}
                    src={social2}
                    className="h-[24px] w-[24px] rounded-full hover:bg-blue-500"
                  />{" "}
                </button>
              </div>
            </div>
          </div>
          <div className="w-fill h-[494px] w-[340px] flex-col gap-[24x] pl-[40px] sm:flex sm:w-[100%] sm:items-center">
            <Image alt="" height={296} src={Image17} className="h-[296px]" />
            <div className="h-[174px] w-[280px] gap-[24px] lg:relative lg:left-[2.4rem] xl:mr-[4.1rem]">
              <div className="h-[24px] w-[280px] gap-[20px]">
                <div className="w-fill h-[62px] w-[280px] gap-[4px]">
                  <p className="custom-font h-[48px] w-[280px] text-left text-[20px] font-[400] leading-[30px] text-[#101828]">
                    Orlando Diggs
                  </p>
                  <p className="custom-font h-[48px] w-[280px] text-left text-[18px] font-[400] leading-[28px] text-[#002855]">
                    Customer Success
                  </p>
                </div>
                <p className="inter-font h-[48px] w-[280px] pt-5 text-left text-[16px] font-[400] leading-[24px] text-[#667085] lg:w-[230px] lg:text-[12px] xl:w-[280px] xl:text-[16px]">
                  Lead CX at Wealthsimple. Former PagerDuty and Sqreen.
                </p>
              </div>
              <div className="flex h-[24px] w-[280px] gap-[20px] pt-[130px]">
                <button>
                  <Image
                    alt=""
                    width={24}
                    height={24}
                    src={social}
                    className="h-[24px] w-[24px] rounded-full hover:bg-blue-500"
                  />
                </button>
                <button>
                  {" "}
                  <Image
                    alt=""
                    width={24}
                    height={24}
                    src={social1}
                    className="h-[24px] w-[24px] rounded-full hover:bg-blue-500"
                  />
                </button>
                <button>
                  {" "}
                  <Image
                    alt=""
                    width={24}
                    height={24}
                    src={social2}
                    className="h-[24px] w-[24px] rounded-full hover:bg-blue-500"
                  />{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative top-[320rem] flex h-[977px] flex-col items-center gap-[56px] rounded-[4px] bg-[#F6F9FF] xs:relative xs:top-[300rem] sm:relative sm:top-[92rem] md:relative md:bottom-[1rem] lg:relative lg:top-[-4rem]">
        <div className="flex h-auto flex-col gap-[20px] rounded-[12px] bg-[#3D52A0] px-4 py-[28px] sm:w-auto lg:flex-row lg:gap-[100px]">
          <div className="h-auto w-full gap-[4px] lg:w-[440px] xl:w-[645px]">
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
                <p className="custo-font relative left-[17px] top-[6px] h-[24px] w-[58px] text-[16px] font-[500] leading-[24px] text-[#002855]">
                  Submit
                </p>
              </div>
            </button>
          </div>
        </div>
        <div className="h-[173px] w-[1184px] gap-[24px] sm:h-[250px] sm:w-[100%]">
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

        <div className="relative top-[22rem] flex h-[272px] w-[300px] justify-between sm:relative sm:right-[2rem] sm:top-[0rem] sm:flex sm:w-[900px] sm:justify-evenly md:w-[1100px] lg:flex lg:w-[984px] lg:justify-between lg:pt-4 xl:w-[1100px]">
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
              <p className="custo-font relative h-[42px] w-[80px] text-[15px] font-[500] leading-[24px] text-[#4B5768] sm:relative sm:right-[35px] sm:w-[137.33px]">
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
        <div className="relative top-[22rem] flex flex-col items-center justify-between border-t border-[#D0D5DD] bg-white py-[24px] sm:relative sm:top-[0rem] sm:flex-row lg:w-[1000px]">
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
