'use client'
import React,{useState} from 'react';
import Image from 'next/image';
import img1 from '../../_assets/images/Logo1.png';
import materialblack from '../../_assets/images/materialblack.png';
import userblack from '../../_assets/images/userblack.png';
import quillblack from '../../_assets/images/quillblack.png';
import octicon from '../../_assets/images/octicon.png';
import chartbar from '../../_assets/images/chartbar.png';
import Money from '../../_assets/images/Money.png';
import Product from '../../_assets/images/Product.png';
import Quality from '../../_assets/images/Quality.png';
import Candidate from '../../_assets/images/Candidate.png';
import Imageg from'../../_assets/images/Imageg.png';
import social from'../../_assets/images/social.png';
import social1 from'../../_assets/images/social1.png';
import social2 from'../../_assets/images/social2.png';
import Image11 from'../../_assets/images/Image11.png';
import Image12 from'../../_assets/images/Image12.png';
import Image13 from'../../_assets/images/Image13.png';
import Image14 from'../../_assets/images/Image14.png';
import Image15 from'../../_assets/images/Image15.png';
import Image16 from'../../_assets/images/Image16.png';
import Image17 from'../../_assets/images/Image17.png';
import icons from '../../_assets/images/Icons.png';
import mail from '../../_assets/images/mail.png';
import address from '../../_assets/images/address.png';
import fax from '../../_assets/images/fax.png';
import Logoz from '../../_assets/images/Logoz.png';
import sms from '../../_assets/images/sms.png';
import Line4 from '../../_assets/images/Line4.png';
import Mapwrap from '../../_assets/images/Mapwrap.png';
import { VectorMap } from '@react-jvectormap/core';
import {worldMill} from '@react-jvectormap/world';
import { colorScale, countries, missingCountries } from "../Countries/page.js"

export default function Aboutus() {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className='bg-[#FFFFFF]  overflow-x-hidden overflow-y-auto  '>
    <div className='flex justify-between items-center  h-[72px]  pt-[15px] pr-[45px] pb-[15px] pl-[55px] shadow-[0px_-1px_1px_0px_#0000001A_inset]  bg-[#3D52A0] lg:w-100% '>
        <div className='w-[134px] h-[34px] flex '>
          <Image alt='' width={44} height={44} src={img1} className='w-[44px] h-[44px] relative bottom-2.5 ' />
          <p className=' text-white w-[99px] h-[29px] top-[2px] left-[39px] custom-font text-[24px] font-normal leading-[34.34px] text-left '  >ZENDEN</p>
        </div>
        <div className='hidden md:flex w-[239px] h-[18px] gap-[30px] flex'>
            <div className='w-[58px] h-[18px] '>
                <p className='text-[#FFFFFF] w-[60.15px] h-[21px] top-[-1px] custo-font text-[14px] font-medium leading-[21px] tracking-[0.2px] text-left '>Services</p>
            </div>
            <div className='w-[63px] h-[18px]'>
                <p className='text-[#FFFFFF] w-[91.26px] h-[21px] top-[-2px] custo-font text-[14px] font-medium leading-[21px] tracking-[0.2px] text-left'>Features</p>
            </div>
            <div className='w-[58px] h-[18px]'>
                <p className='text-[#FFFFFF] w-[65px] h-[21px] top-[-1px] custo-font text-[14px] font-medium leading-[21px] tracking-[0.2px] text-left'>
                About Us
                </p>
            </div>
        </div>
        <div className='hidden md:flex flex w-[215px] h-[42px] gap-[20px]'>
            <button className='flex bg-[#FFFFFF] w-[123px]  h-[40px] gap-[10px] pt-[7px] pr-[22px] pb-[8px] pl-[14px] border-[1px] rounded-[5px] border-[#FFFFFF] '>
                <Image alt='' width={24} height={24} src={materialblack} className='w-[24px] h-[24px] ' />
                <p className='text-black '>Login</p>
            </button>
            <button className='flex bg-[#FFFFFF] w-[106px]  h-[42px] gap-[10px] pt-[8px] pr-[22px] pb-[8px] pl-[16px] border-[1px] rounded-[5px] border-[#FFFFFF] '>
                <Image alt='' width={28} height={26} src={userblack}  className='w-[28px] h-[26px]' />
                <Image alt='' width={24} height={24} src={quillblack} className='w-[24px] h-[24px]' />

            </button>
        </div>


        <button 
        className="md:hidden absolute top-0 right-0 p-4 z-50"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <Image alt="Menu" width={24} height={24} src={quillblack} className='pt-2' />
      </button>
      {menuOpen && (
        <div className="md:hidden fixed top-[72px] right-0 bg-[#3D52A0] w-[168px] p-[15px] shadow-[0px_-1px_1px_0px_#0000001A_inset] z-40 ">
          <div className="flex flex-col gap-4">
          <button className="flex bg-[#FFFFFF] w-[123px] h-[40px] gap-[10px] pt-[7px] pr-[22px] pb-[8px] pl-[14px] border-[1px] rounded-[5px] border-[#FFFFFF]">
              <Image alt="Login Icon" width={24} height={24} src={materialblack} className="w-[24px] h-[24px]" />
              <p className="text-black">Login</p>
            </button>
            <p className="text-[#FFFFFF] text-[14px] font-medium pl-2">Services</p>
            <p className="text-[#FFFFFF] text-[14px] font-medium pl-2">Features</p>
            <p className="text-[#FFFFFF] text-[14px] font-medium pl-2">About Us</p>
            
          </div>
        </div>
      )}


    </div>

    <div className='flex flex-col items-center h-[1024px] sm:w-auto sm:h-[934px] '>
        <div className='w-[1066px] h-[449px] top-[140px]  '>
            <div className='flex flex-col items-center w-[1066px] h-[449px] relative top-[140px] gap-[11px] '>
                <div className='flex flex-col items-center w-[773px] h-[361px] w-fixed sm:w-auto  '>
                    <p className='w-[204px] h-[68px] custo-font font-[500] text-[45px] leading-[67.5px] text-[#002855] '>About Us</p>
                    <p className='w-[670px] h-[233px] relative left-[12rem] custom-font font-[400] text-[73px] xs:relative xs:mr-[6rem] xs:text-[97px] xl:text-[163px] leading-[233.2px] text-[#002855] sm:w-[150px] sm:text-[140px] sm:relative sm:mr-[50rem] md:text-[150px] md:w-auto md:relative md:mr-[22rem] md:mx-auto lg:text-[140px] lg:relative lg:left-[13rem]  lg:w-[670px] xl:relative xl:mr-[25rem] '>ZENDEN</p>
                    <div className='flex justify-between w-[439px] h-[60px] text-[#3D52A0] sm:w-auto lg:w-auto xs:w-auto xs:relative xs:left-[3rem] '>
                        <p  className='w-[180px] h-[60px] top[301px] relative left-[5rem] custo-font font-[500] text-[25px] xs:w-[420px] xs:pl-[9rem] xs:text-[40px] xs:relative xs:right-[1rem] sm:text-[40px] leading-[60px] text-[#3D52A0] '>Live Easy</p>
                        <Image alt='' src={Line4} className=' top-[315px] left-[368px] '/> 
                        <p  className='w-[211px] h-[60px] relative right-[0.5rem]  custo-font font-[500] text-[25px] xs:text-[40px] xs:relative xs:left-[1rem] xs:w-[500px]  sm:text-[40px] leading-[60px] text-[#3D52A0] sm:relative sm:left-[1rem]  lg:relative lg:left-[10px]  '>Feel Home</p>
                    </div>
                </div>
                <p className='lg:w-[1066px] h-[77px] custo-font font-[300] w-[350px] text-[12px] xl:text-[26px] leading-[39px] text-[#000000] pt-[4px] relative text-center xs:w-[450px] xs:text-[19px] sm:px-[48px] sm:w-[800px] sm:text-[20px] lg:text-[26px] '> ZenDen is reshaping student accommodation by offering affordable, comfortable and luxurious living spaces.</p>
            </div>
        </div>
        <div className='flex flex-col items-center lg:w-[842px] h-[144x] relative top-[180px]  gap-[46px]  sm:w-auto sm:h-[150px] '>
            <p className='lg:w-[852px] h-[39x] custo-font font-[400] text-[26px] leading-[39px] text-[#3D52A0] relative text-center sm:w-auto  sm:px-[15px] '>Join us in creating a home away from home for you across India.</p>
            <button className='w-[268px] h-[59x] rounded-[6px] '>
                <div className='bg-[#002855] w-[268px] h-[59x] top-[85px] left-[297px] rounded-[6px] '>
                    <p className='w-[268px] h-[48px] custo-font font-[400] text-[26px] leading-[39px] px-[2px] py-1  text-[#FFFFFF] '>Join Now</p>
                </div>
            </button>
        </div>
        <div className='flex items-center justify-center flex-wrap gap-8 relative top-[16rem]  sm:gap-[50px]  sm:w-auto  sm:h-auto p-4 sm:relative sm:top-[230px] sm:left-[3rem]   '>
        <div className='flex flex-col items-center w-[181px] h-[118px] sm:w-[150px] sm:h-[100px] lg:w-[160px] lg:relative lg:right-[3rem] '>
          <p className='w-[181px] h-[113px] custo-font font-[400] text-[75px] leading-[112.5px] text-[#3D52A0] sm:text-[50px] sm:leading-[75px]'>2024</p>
          <p className='w-[119px] h-[26px] custo-font font-[500] text-[17px] leading-[25.5px] text-[#000000] sm:text-[15px] sm:leading-[22.5px] sm:relative right-[1rem]'>Join Now</p>
        </div>
        <div className='flex flex-col items-center w-[193px] h-[113px] sm:w-[160px] sm:h-[100px] lg:w-[160px] lg:right-[18rem]'>
          <p className='w-[193px] h-[113px] custo-font font-[400] text-[75px] leading-[112.5px] text-[#3D52A0] sm:text-[50px] sm:leading-[75px]'>500+</p>
          <p className='w-[84px] h-[23px] custo-font font-[500] text-[15px] leading-[22.5px] text-[#000000] sm:text-[13px] sm:leading-[20px] sm:relative right-[2rem] '>Customers</p>
        </div>
        <div className='flex flex-col items-center w-[140px] h-[113px] sm:w-[120px] sm:h-[100px] lg:w-[160px] lg:right-[20rem]'>
          <p className='w-[140px] h-[113px] custo-font font-[400] text-[75px] leading-[112.5px] text-[#3D52A0] sm:text-[50px] sm:leading-[75px]'>70+</p>
          <p className='w-[119px] h-[23px] custo-font font-[500] text-[15px] leading-[22.5px] text-[#000000] sm:text-[13px] sm:leading-[20px] sm:relative right-[1rem]'>House rented</p>
        </div>
      </div>
      
    </div>



    <div className='relative top-[23rem] xs:relative xs:top-[9rem] sm:relative sm:top-[2rem] '>
        <div className='h-[996px] flex flex-col items-center '>
            <div className='w-[554.4px] h-[103px] relative top-[55px]  gap-[27px] text-center sm:w-auto   '>
            <p className='w-[554.4px] h-[48px] custo-font font-[400] text-[42px] leading-[48px] text-[#002855] '>Why Us</p>
            <p className='w-[454.4px] h-[28px] jakarta-font font-[400] pt-5 relative left-[3rem] text-[14px] xs:text-[18px] leading-[28px] text-[#002855] lg:text-[19px] '>Lorem ipsum dolor sit amet, consectetur adipis elit</p>
            </div>
            <div className='grid grid-cols-1 gap-4 relative right-[3rem] h-[550px] top-[70px] py-[4px] sm:grid sm:grid-cols-1 sm:w-auto sm:h-[100%] sm:place-items-center  lg:grid lg:grid-cols-3    '>
                <div className='flex flex-col items-center w-[330px] h-[385px] sm:w-[330px] '>
                    <Image alt='' width={59} height={59} src={octicon} className='w-[59px] h-[59px] relative  left-[52px] top-[58px] ' />

                    <p className='w-[315px] h-[28px] relative top-[91px] left-[51px] custo-font font-[400] text-[21px] leading-[28px] text-[#002855] text-center '>Our Mission</p>
                    <p className='w-[300px] h-[78px] relative top-[125px] left-[43px] jakarta-font font-[400] text-[16px] leading-[26px] text-[#52525B] text-center xs:w-auto lg:text-[15px] lg:w-[280px] xl:w-[330px] xl:text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.</p>
                </div>
                <div className='flex flex-col items-center w-[330px] h-[385px] '>
                    <Image alt='' width={59} height={59} src={chartbar} className='w-[59px] h-[59px] relative  left-[52px] top-[58px] ' />

                    <p className='w-[315px] h-[28px] relative top-[91px] left-[51px] custo-font font-[400] text-[21px] leading-[28px] text-[#002855] text-center '>Our Vision</p>
                    <p className='w-[300px] h-[78px] relative top-[125px] left-[43px] jakarta-font font-[400] text-[16px] leading-[26px] text-[#52525B] text-center xs:w-auto lg:w-[280px] lg:text-[15px] xl:w-[330px] xl:text-[16px] '>Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.</p>
                </div>
                <div className='flex flex-col items-center w-[330px] h-[385px] '>
                    <Image alt='' width={59} height={59} src={Money} className='w-[59px] h-[59px] relative  left-[52px] top-[58px] ' />

                    <p className='w-[315px] h-[28px] relative top-[91px] left-[51px] custo-font font-[400] text-[21px] leading-[28px] text-[#002855] text-center '>Our Values</p>
                    <p className='w-[300px] h-[78px] relative top-[125px] left-[43px] jakarta-font font-[400] text-[16px] leading-[26px] text-[#52525B] text-center xs:w-auto lg:w-[280px] lg:text-[15px] xl:w-[330px] xl:text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.</p>
                </div>
                <div className='flex flex-col items-center w-[330px] h-[385px] '>
                    <Image alt='' width={59} height={59} src={Product} className='w-[59px] h-[59px] relative  left-[52px] top-[58px] ' />

                    <p className='w-[315px] h-[28px] relative top-[91px] left-[51px] custo-font font-[400] text-[21px] leading-[28px] text-[#002855] text-center'>Product</p>
                    <p className='w-[300px] h-[78px] relative top-[125px] left-[43px] jakarta-font font-[400] text-[16px] leading-[26px] text-[#52525B] text-center xs:w-auto lg:w-[280px] lg:text-[15px] xl:w-[330px] xl:text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.</p>
                </div>
                <div className='flex flex-col items-center w-[330px] h-[385px] '>
                    <Image alt='' width={59} height={59} src={Quality} className='w-[59px] h-[59px] relative  left-[52px] top-[58px] ' />

                    <p className='w-[315px] h-[28px] relative top-[91px] left-[51px] custo-font font-[400] text-[21px] leading-[28px] text-[#002855] text-center'>Quality</p>
                    <p className='w-[300px] h-[78px] relative top-[125px] left-[43px] jakarta-font font-[400] text-[16px] leading-[26px] text-[#52525B] text-center xs:w-auto lg:w-[280px] lg:text-[15px] xl:w-[330px] xl:text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.</p>
                </div>
                <div className='flex flex-col items-center w-[330px] h-[385px] '>
                    <Image alt='' width={59} height={59} src={Candidate} className='w-[59px] h-[59px] relative  left-[52px] top-[58px] ' />

                    <p className='w-[315px] h-[28px] relative top-[91px] left-[51px] custo-font font-[400] text-[21px] leading-[28px] text-[#002855] text-center'>Result</p>
                    <p className='w-[300px] h-[78px] relative top-[125px] left-[43px] jakarta-font font-[400] text-[16px] leading-[26px] text-[#52525B] text-center xs:w-auto lg:w-[280px] lg:text-[15px] xl:w-[330px] xl:text-[16px] '>Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.</p>
                </div>
            </div>
        </div>
    </div>




    <div className='flex flex-col items-center h-[1096px] relative top-[115rem] xs:relative xs:top-[100rem] sm:w-auto sm:flex sm:items-center sm:relative sm:top-[90rem] lg:w-auto lg:flex lg:items-center lg:relative lg:top-[-1rem] '>
        <div className='h-[342px] py-[96px] gap-[64px]  '>
            <div className='flex flex-col items-center w-[1280px] h-[150px] px-[32px] gap-[32px]  '>
                <div className='flex flex-col items-center w-[1216px] h-[150px] gap-[48px]  '>
                <div className='flex flex-col items-center w-[960px] h-[150px] gap-[24px]  '>
                <div className='flex flex-col items-center w-[960px] h-[96px] gap-[19px]  '>
                <p className='w-[960px] h-[24px] custo-font font-[400] text-[16px] leading-[24px]  text-[#002855] text-center'>About Us</p>
                <p className='w-[960px] h-[60px] custo-font font-[400] text-[24px] xs:text-[48px] leading-[60px]  text-[#002855] tracking-[-2%] text-center '>We’re a distributed team</p>
                </div>
                <p className='w-[608px] h-[30px] custo-font font-[400] text-[14px] xs:text-[20px] leading-[30px]  text-[#3D52A0] text-center '>We have offices and teams all around the world.</p>
                </div>

                </div>
            </div>
        </div>
        <div className='h-[754px] pb-[96px] gap-[64px]  '>
        <div className='w-[1280px] w-fixed h-[488px] px-[32px] sm:w-[100%] sm:h-auto  sm:flex sm:items-center lg:w-auto  '>
            <div className='flex flex-col items-center w-[1216px] h-[488px] gap-[32px] sm:w-auto  '>
                <VectorMap map={worldMill}  backgroundColor='gray'
                
                markers={missingCountries}
                markerStyle={{
                    initial: {
                      fill: "red",
                    },
                  }}
                
                />
            </div>
        </div>
        <div className='h-[1280px] pb-[106px] relative top-[2rem] pt-[50px] sm:pt-[7rem] sm:w-auto sm:items-center lg:h-[1280px] lg:relative lg:top-[-1rem] lg:w-auto'>
    <div className='flex flex-col items-center sm:flex sm:flex-row sm:px-[32px] sm:justify-evenly'>
        <div className='flex flex-col items-center mb-[20px] w-[384px] w-fill h-[106px] gap-[20px] sm:w-[170px] sm:relative sm:left-0 lg:pr-[15rem] lg:w-[270px] xl:w-[384px]'>
                    <div  className='flex flex-col items-center w-[384px] w-fill h-[62px] gap-[4px]  '> 
                        <p className='w-[384px] h-[30px] custo-font font-[300] text-[20px] leading-[30px]  text-[#101828] text-center'>Support</p>
                        <p className='w-[384px] h-[24px] custo-font font-[400] text-[16px] leading-[24px]  text-[#667085] text-center pt-1 sm:text-[13px] lg:text-[16px] '>Our friendly team is here to help.</p>
                    </div>
                    <button className='w-[197px] h-[24px] '>
                        <div className='w-[197px] h-[24x] gap-[8px] '>
                            <p className='w-[197px] h-[24px] custo-font font-[500] text-[16px] leading-[24px]  text-[#002855] text-center '>support@untitledui.com</p>
                        </div>
                    </button>
                </div>
                <div className='flex flex-col items-center mb-[20px] w-[384px] w-fill h-[106px] gap-[20px]  lg:pr-[7rem] sm:w-[170px] sm:relative sm:left-[3rem] lg:w-[270px] xl:w-[384px]'>
                <div  className='flex flex-col items-center  w-[384px] w-fill h-[62px] gap-[4px]  '> 
                        <p className='w-[384px] h-[30px] custo-font font-[400] text-[20px] leading-[30px]  text-[#101828] text-center '>Sales</p>
                        <p className='w-[384px] h-[24px] custo-font font-[400] text-[16px] leading-[24px]  text-[#667085] text-center sm:text-[13px] lg:text-[16px] '>Questions or queries? Get in touch!</p>
                </div>
                <button className='w-[176px] h-[24px] '>
                        <div className='w-[176px] h-[24x] gap-[8px] '>
                            <p className='w-[176px] h-[24px] custo-font font-[500] text-[16px] leading-[24px]  text-[#002855] text-center'>sales@untitledui.com</p>
                        </div>
                </button>
                </div>
                <div className='flex flex-col items-center mb-[20px] w-[384px] w-fill h-[106px] gap-[20px] sm:pr-[14rem] lg:pr-[8rem] sm:w-[170px] sm:relative sm:left-[10rem] lg:w-[270px] xl:w-[384px]'>
                <div  className='flex flex-col items-center w-[384px] w-fill h-[62px] gap-[4px]  '> 
                        <p className='w-[384px] h-[30px] custo-font font-[400] text-[20px] leading-[30px]  text-[#101828] text-center'>Phone</p>
                        <p className='w-[384px] h-[24px] custo-font font-[400] text-[16px] leading-[24px]  text-[#667085] text-center sm:text-[13px] lg:text-[16px] '>Mon-Fri from 8am to 5pm.</p>
                </div>
                <button className='w-[153px] h-[24px] '>
                        <div className='w-[153px] h-[24x] gap-[8px] '>
                            <p className='w-[153px] h-[24px] custo-font font-[500] text-[16px] leading-[24px]  text-[#002855] text-center'>+1 (555) 000-0000</p>
                        </div>
                </button>
                </div>
            </div>
        </div>
        </div>
    </div>




    <p className='xs:w-[391px] h-[64px] relative top-[128rem]  custo-font font-[400] text-[40px] leading-[64px] text-[#002855] text-center xs:relative xs:top-[113rem] xs:left-[4.5rem]  sm:relative sm:left-[20px] sm:w-auto sm:top-[91rem] lg:w-[391px] lg:h-[64px] lg:relative lg:top-[-1rem] lg:left-[4rem] lg:mx-auto '>Our creative minds</p>



    <div className=' relative top-[135rem] right-[1.2rem] pb-[96px] xs:relative xs:top-[116rem] xs:left-[5.5rem] lg:h-[80rem]  lg:relative lg:top-[23rem] '>
        <div className=' grid grid-cols-1 gap-4 h-[1052px] sm:grid sm:grid-cols-1 sm:items-center sm:h-auto sm:relative sm:top-[-20rem] sm:right-[5.5rem] lg:grid lg:grid-cols-4 lg:my-auto  '>
         
                <div className='w-[340px] w-fill  h-[494px] pl-[40px]  gap-[24x] sm:flex flex-col sm:items-center sm:w-[100%] '>
                    <Image alt='' height={296} src={Imageg} className='h-[296px] ' />
                    <div className='w-[280px] h-[174px] gap-[24px] lg:relative lg:left-[2.4rem] xl:mr-[4.1rem]' >
                        <div className='w-[280px] h-[24px] gap-[20px]'>
                            <div className=' w-[280px] w-fill h-[62px] gap-[4px] '>
                                <p className='text-left w-[280px] h-[48px]  custom-font font-[400] text-[20px] leading-[30px] text-[#101828] '>Olivia Rhye</p>
                                <p className='text-left w-[280px] h-[48px]  custom-font font-[400] text-[18px] leading-[28px] text-[#002855]'>Founder & CEO</p>
                            </div>
                            <p className='text-left w-[280px] h-[48px] pt-5 custom-font font-[400] text-[16px] leading-[24px] text-[#667085] lg:text-[12px] lg:w-[230px] xl:text-[16px] xl:w-[280px]'>Former co-founder of Opendoor. Early staff at Spotify and Clearbit.</p>
                        </div>
                        <div className='flex pt-[130px] w-[280px] h-[24px] gap-[20px] '>
                            <button  >
                            <Image alt='' width={24} height={24} src={social} className='w-[24px] h-[24px] hover:bg-blue-500 rounded-full '  />
                            </button>
                            <button  >  <Image alt='' width={24} height={24} src={social1} className='w-[24px] h-[24px] hover:bg-blue-500 rounded-full'  /></button>
                            <button>  <Image alt='' width={24} height={24} src={social2} className='w-[24px] h-[24px] hover:bg-blue-500 rounded-full '  /> </button>
                        </div>
                    </div>
                </div>
                <div className='w-[340px] w-fill  h-[494px] pl-[40px] gap-[24x] sm:flex flex-col sm:items-center sm:w-[100%] '>
                    <Image alt=''height={296} src={Image11} className='h-[296px] ' />
                    <div className='w-[280px] h-[174px] gap-[24px] lg:relative lg:left-[2.4rem] xl:mr-[4.1rem]' >
                        <div className='w-[280px] h-[24px] gap-[20px]'>
                            <div className=' w-[280px] w-fill h-[62px] gap-[4px] '>
                                <p className='text-left w-[280px] h-[48px]  custom-font font-[400] text-[20px] leading-[30px] text-[#101828] '> Phoenix Baker</p>
                                <p className='text-left w-[280px] h-[48px]  custom-font font-[400] text-[18px] leading-[28px] text-[#002855]'>Engineering Manager</p>
                            </div>
                            <p className='text-left w-[280px] h-[48px] pt-5 custom-font font-[400] text-[16px] leading-[24px] text-[#667085] lg:text-[12px] lg:w-[230px] xl:text-[16px] xl:w-[280px]'>Lead engineering teams at Figma, Pitch, and Protocol Labs.</p>
                        </div>
                        <div className='flex pt-[130px] w-[280px] h-[24px] gap-[20px] '>
                        <button  >
                            <Image alt='' width={24} height={24} src={social} className='w-[24px] h-[24px] hover:bg-blue-500 rounded-full '  />
                            </button>
                            <button  >  <Image alt='' width={24} height={24} src={social1} className='w-[24px] h-[24px] hover:bg-blue-500 rounded-full '  /></button>
                            <button>  <Image alt='' width={24} height={24} src={social2} className='w-[24px] h-[24px] hover:bg-blue-500 rounded-full '  /> </button>

                        </div>
                    </div>
                </div>
                <div className='w-[340px] w-fill  h-[494px] pl-[40px] gap-[24x] sm:flex flex-col sm:items-center sm:w-[100%] '>
                    <Image alt='' height={296} src={Image12} className='h-[296px] ' />
                    <div className='w-[280px] h-[174px] gap-[24px] lg:relative lg:left-[2.4rem] xl:mr-[4.1rem]' >
                        <div className='w-[280px] h-[24px] gap-[20px]'>
                            <div className=' w-[280px] w-fill h-[62px] gap-[4px] '>
                                <p className='text-left w-[280px] h-[48px]  custom-font font-[400] text-[20px] leading-[30px] text-[#101828] '>Lana Steiner</p>
                                <p className='text-left w-[280px] h-[48px]  custom-font font-[400] text-[18px] leading-[28px] text-[#002855]'>Product Manager</p>
                            </div>
                            <p className='text-left w-[280px] h-[48px] pt-5 custom-font font-[400] text-[16px] leading-[24px] text-[#667085] lg:text-[12px] lg:w-[230px] xl:text-[16px] xl:w-[280px]'>Former PM for Linear, Lambda School, and On Deck.</p>
                        </div>
                        <div className='flex pt-[130px] w-[280px] h-[24px] gap-[20px] '>
                        <button  >
                            <Image alt='' width={24} height={24} src={social} className='w-[24px] h-[24px] hover:bg-blue-500 rounded-full '  />
                            </button>
                            <button  >  <Image alt='' width={24} height={24} src={social1} className='w-[24px] h-[24px] hover:bg-blue-500 rounded-full '  /></button>
                            <button>  <Image alt='' width={24} height={24} src={social2} className='w-[24px] h-[24px] hover:bg-blue-500 rounded-full '  /> </button>

                        </div>
                    </div>
                </div>
                <div className='w-[340px] w-fill  h-[494px] pl-[40px] gap-[24x] sm:flex flex-col sm:items-center sm:w-[100%] '>
                    <Image alt='' height={296} src={Image13} className='h-[296px] ' />
                    <div className='w-[280px] h-[174px] gap-[24px] lg:relative lg:left-[2.4rem] xl:mr-[4.1rem]' >
                        <div className='w-[280px] h-[24px] gap-[20px]'>
                            <div className=' w-[280px] w-fill h-[62px] gap-[4px] '>
                                <p className='text-left w-[280px] h-[48px]  custom-font font-[400] text-[20px] leading-[30px] text-[#101828] '>Demi Wilkinson</p>
                                <p className='text-left w-[280px] h-[48px]  custom-font font-[400] text-[18px] leading-[28px] text-[#002855]'>Frontend Developer</p>
                            </div>
                            <p className='text-left w-[280px] h-[48px] pt-5 custom-font font-[400] text-[16px] leading-[24px] text-[#667085] lg:text-[12px] lg:w-[230px]'>Former frontend dev for Linear, Coinbase, and Postscript.</p>
                        </div>
                        <div className='flex pt-[130px] w-[280px] h-[24px] gap-[20px] '>
                        <button  >
                            <Image alt='' width={24} height={24} src={social} className='w-[24px] h-[24px] hover:bg-blue-500 rounded-full '  />
                            </button>
                            <button  >  <Image alt='' width={24} height={24} src={social1} className='w-[24px] h-[24px] hover:bg-blue-500 rounded-full '  /></button>
                            <button>  <Image alt='' width={24} height={24} src={social2} className='w-[24px] h-[24px] hover:bg-blue-500 rounded-full '  /> </button>

                        </div>
                    </div>
                </div>
                <div className='w-[340px] w-fill  h-[494px] pl-[40px] gap-[24x] sm:flex flex-col sm:items-center sm:w-[100%] '>
                    <Image alt=''  height={296} src={Image14} className='h-[296px] ' />
                    <div className='w-[280px] h-[174px] gap-[24px] lg:relative lg:left-[2.4rem] xl:mr-[4.1rem]' >
                        <div className='w-[280px] h-[24px] gap-[20px]'>
                            <div className=' w-[280px] w-fill h-[62px] gap-[4px] '>
                                <p className='text-left w-[280px] h-[48px]  custom-font font-[400] text-[20px] leading-[30px] text-[#101828] '>Candice Wu</p>
                                <p className='text-left w-[280px] h-[48px]  custom-font font-[400] text-[18px] leading-[28px] text-[#002855]'>Backend Developer</p>
                            </div>
                            <p className='text-left w-[280px] h-[48px] pt-5 custom-font font-[400] text-[16px] leading-[24px] text-[#667085] lg:text-[12px] lg:w-[230px] xl:text-[16px] xl:w-[280px]'>Lead backend dev at Clearbit. Former Clearbit and Loom.</p>
                        </div>
                        <div className='flex pt-[130px] w-[280px] h-[24px] gap-[20px] '>
                        <button  >
                            <Image alt='' width={24} height={24} src={social} className='w-[24px] h-[24px] hover:bg-blue-500 rounded-full '  />
                            </button>
                            <button  >  <Image alt='' width={24} height={24} src={social1} className='w-[24px] h-[24px] hover:bg-blue-500 rounded-full '  /></button>
                            <button>  <Image alt='' width={24} height={24} src={social2} className='w-[24px] h-[24px] hover:bg-blue-500 rounded-full '  /> </button>

                        </div>
                    </div>
                </div>
                <div className='w-[340px] w-fill  h-[494px] pl-[40px] gap-[24x] sm:flex flex-col sm:items-center sm:w-[100%] '>
                    <Image alt='' height={296} src={Image15} className='h-[296px] ' />
                    <div className='w-[280px] h-[174px] gap-[24px] lg:relative lg:left-[2.4rem] xl:mr-[4.1rem]' >
                        <div className='w-[280px] h-[24px] gap-[20px]'>
                            <div className=' w-[280px] w-fill h-[62px] gap-[4px] '>
                                <p className='text-left w-[280px] h-[48px]  custom-font font-[400] text-[20px] leading-[30px] text-[#101828] '>Natali Craig</p>
                                <p className='text-left w-[280px] h-[48px]  custom-font font-[400] text-[18px] leading-[28px] text-[#002855]'>Product Designer</p>
                            </div>
                            <p className='text-left w-[280px] h-[48px] pt-5 custom-font font-[400] text-[16px] leading-[24px] text-[#667085] lg:text-[12px] lg:w-[230px] xl:text-[16px] xl:w-[280px]'>Founding design team at Figma. Former Pleo, Stripe, and Tile.</p>
                        </div>
                        <div className='flex pt-[130px] w-[280px] h-[24px] gap-[20px] '>
                        <button  >
                            <Image alt='' width={24} height={24} src={social} className='w-[24px] h-[24px] hover:bg-blue-500 rounded-full '  />
                            </button>
                            <button  >  <Image alt='' width={24} height={24} src={social1} className='w-[24px] h-[24px] hover:bg-blue-500 rounded-full '  /></button>
                            <button>  <Image alt='' width={24} height={24} src={social2} className='w-[24px] h-[24px] hover:bg-blue-500 rounded-full '  /> </button>

                        </div>
                    </div>
                </div>
                <div className='w-[340px] w-fill  h-[494px] pl-[40px] gap-[24x] sm:flex flex-col sm:items-center sm:w-[100%] '>
                    <Image alt='' height={296} src={Image16} className='h-[296px] ' />
                    <div className='w-[280px] h-[174px] gap-[24px] lg:relative lg:left-[2.4rem] xl:mr-[4.1rem]' >
                        <div className='w-[280px] h-[24px] gap-[20px]'>
                            <div className=' w-[280px] w-fill h-[62px] gap-[4px] '>
                                <p className='text-left w-[280px] h-[48px]  custom-font font-[400] text-[20px] leading-[30px] text-[#101828] '>Drew Cano</p>
                                <p className='text-left w-[280px] h-[48px]  custom-font font-[400] text-[18px] leading-[28px] text-[#002855]'>UX Researcher</p>
                            </div>
                            <p className='text-left w-[280px] h-[48px] pt-5 custom-font font-[400] text-[16px] leading-[24px] text-[#667085] lg:text-[12px] lg:w-[230px] xl:text-[16px] xl:w-[280px]'>Lead user research for Slack. Contractor for Netflix and Udacity.</p>
                        </div>
                        <div className='flex pt-[130px] w-[280px] h-[24px] gap-[20px] '>
                        <button  >
                            <Image alt='' width={24} height={24} src={social} className='w-[24px] h-[24px] hover:bg-blue-500 rounded-full '  />
                            </button>
                            <button  >  <Image alt='' width={24} height={24} src={social1} className='w-[24px] h-[24px] hover:bg-blue-500 rounded-full  '  /></button>
                            <button>  <Image alt='' width={24} height={24} src={social2} className='w-[24px] h-[24px] hover:bg-blue-500 rounded-full '  /> </button>

                        </div>
                    </div>
                </div>
                <div className='w-[340px] w-fill  h-[494px] pl-[40px] gap-[24x] sm:flex flex-col sm:items-center sm:w-[100%] '>
                    <Image alt=''  height={296} src={Image17} className='h-[296px] ' />
                    <div className='w-[280px] h-[174px] gap-[24px] lg:relative lg:left-[2.4rem] xl:mr-[4.1rem]' >
                        <div className='w-[280px] h-[24px] gap-[20px]'>
                            <div className=' w-[280px] w-fill h-[62px] gap-[4px] '>
                                <p className='text-left w-[280px] h-[48px]  custom-font font-[400] text-[20px] leading-[30px] text-[#101828] '>Orlando Diggs</p>
                                <p className='text-left w-[280px] h-[48px]  custom-font font-[400] text-[18px] leading-[28px] text-[#002855]'>Customer Success</p>
                            </div>
                            <p className='text-left w-[280px] h-[48px] pt-5 inter-font font-[400] text-[16px] leading-[24px] text-[#667085] lg:text-[12px] lg:w-[230px] xl:text-[16px] xl:w-[280px] '>Lead CX at Wealthsimple. Former PagerDuty and Sqreen.</p>
                        </div>
                        <div className='flex pt-[130px] w-[280px] h-[24px] gap-[20px] '>
                        <button  >
                            <Image alt='' width={24} height={24} src={social} className='w-[24px] h-[24px] hover:bg-blue-500 rounded-full '  />
                            </button>
                            <button  >  <Image alt='' width={24} height={24} src={social1} className='w-[24px] h-[24px] hover:bg-blue-500 rounded-full '  /></button>
                            <button>  <Image alt='' width={24} height={24} src={social2} className='w-[24px] h-[24px] hover:bg-blue-500 rounded-full '  /> </button>

                        </div>
                    </div>
                </div>
            


        </div>

    </div>



    <div className='bg-[#F6F9FF] h-[977px] flex flex-col items-center relative top-[320rem] rounded-[4px] gap-[56px] xs:relative xs:top-[300rem] sm:relative sm:top-[92rem] md:relative md:bottom-[1rem] lg:relative lg:top-[-4rem] '>
    <div className='flex flex-col lg:flex-row h-auto rounded-[12px] py-[28px] px-4 gap-[20px] lg:gap-[100px] bg-[#3D52A0] sm:w-auto  '>
  <div className='w-full lg:w-[440px] xl:w-[645px] h-auto gap-[4px]'>
    <p className='w-auto h-[24px] custo-font font-[500] text-[16px] leading-[24px] text-[#FFFFFF]'>Newsletter</p>
    <p className='w-auto h-[24px] custo-font font-[400] text-[16px] leading-[24px] text-[#FFFFFF]'>Be the first one to know about discounts, offers and events</p>
  </div>
  <div className='flex items-center w-full lg:w-[457px] rounded-[12px] pr-[6px] pl-[24px] h-[48px] bg-[#4A61B5]'>
    <div className='flex items-center'>
      <Image width={16} height={16} alt='' src={sms} className='w-[16px] h-[16px]' />
      <input placeholder="Enter your email" className='focus:border-0 w-full lg:w-[160px] h-[24px] custo-font font-[400] text-[16px] leading-[24px] focus:outline-none pl-2 cursor-pointer bg-[#4A61B5]' />
    </div>
    <button className='w-full lg:w-[265px] h-[36px] gap-[10px] flex justify-end'>
      <div className='w-[94px] h-[36px] rounded-[10px] bg-[#FFFFFFDB]'>
        <p className='relative top-[6px] left-[17px] w-[58px] h-[24px] custo-font font-[500] text-[16px] leading-[24px] text-[#002855]'>Submit</p>
      </div>
    </button>
  </div>
</div>
<div className='w-[1184px] h-[173px] gap-[24px] sm:w-[100%] sm:h-[250px] '>
        <div className='lg:w-[1184px] h-[98px] gap-[16px] sm:w-[100%] sm:flex flex-col sm:items-center lg:flex lg:items-start  '>
          <Image alt='' width={134} height={34} src={Logoz} className='w-[134px] h-[34px] pb-2  sm:h-[100%] xl:relative left-[13.5rem]  '   />
          <p className='text-center h-[48px] custo-font font-[400] w-[750px] pl-[27rem] text-[9px] sm:w-[1100px] sm:relative sm:right-[13rem] sm:text-[16px] leading-[24px] sm:text-center lg:text-left lg:relative lg:w-[1450px] lg:right-[26rem] xl:relative xl:right-[13rem] '>We ara a lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat... <span className='text-[#4A61B5]'>Read More</span></p>
        </div>
        <div className='flex flex-col items-center w-[1184px] h-[51px] gap-[80px] pt-[30px] sm:pt-[110px] sm:flex sm:flex-row sm:items-center sm:w-[700px] md:w-[900px] md:relative md:right-[2rem] sm:relative sm:left-[2rem] xl:flex xl:relative xl:left-[11rem]'>
          <div className='flex w-[236px] w-fill h-fill h-[51px] gap-[12px] sm:flex sm:items-center sm:pr-[130px]  sm:w-[180px] md:w-[200px] md:pl-[30px] '>
            <Image alt='' width={32} height={32} src={icons} className='w-[32px] h-[32px]  ' />
            <div className='w-[192px] h-[48px] gap-[2px] '>
              <p className='flex text-[#4B5768] w-[192px] h-[24px] custo-font font-[400] text-[16px] leading-[24px]  '>Tel</p>
              <p className='flex text-[#3D52A0] w-[192px] h-[22px] custo-font font-[500] text-[16px] leading-[20.83px]  '>310-437-2766</p>
            </div>
          </div>
          <div className='flex w-[236px] w-fill h-fill h-[51px] gap-[12px] sm:flex sm:items-center sm:relative sm:right-[100px] sm:w-[180px] lg:relative lg:right-[6rem] md:w-[200px] md:pl-[60px] '>
          <Image alt='' width={32} height={32} src={mail} className='w-[32px] h-[32px] ' />
          <div className='w-[192px] h-[48px] gap-[2px] '>
              <p className='flex text-[#4B5768] w-[192px] h-[24px] custo-font font-[400] text-[16px] leading-[24px]  '>Mail</p>
              <button className='flex text-[#3D52A0] w-[192px] h-[22px] custo-font font-[500] text-[16px] leading-[20.83px]'>unreal@outlook.com</button>
            </div>
          </div>
          <div className='flex w-[236px] w-fill h-fill h-[51px] gap-[12px] sm:flex sm:items-center sm:relative sm:right-[170px] sm:w-[180px] lg:relative lg:right-[8rem] md:w-[200px] md:pl-[60px]  xl:mr-[2rem]  '>
          <Image alt='' width={32} height={32} src={address} className='w-[32px] h-[32px] ' />
          <div className='w-[192px] h-[48px] gap-[2px] '>
              <p className='flex text-[#4B5768] w-[192px] h-[24px] custo-font font-[400] text-[16px] leading-[24px]  '>Address</p>
              <p className='flex text-[#3D52A0] w-[262px] h-[22px] custo-font font-[500] text-[16px] leading-[20.83px]  '>706 Campfire Ave. Meriden, CT 06450</p>
            </div>
          </div>
          <div className='flex justify-evenly w-[236px] w-fill h-fill h-[51px] gap-[18px] pl-8 sm:hidden lg:block  lg:flex  lg:relative lg:right-[5rem] '>
          <Image alt='' width={32} height={32} src={fax} className='w-[32px] h-[32px] ' />
          <div className='w-[192px] h-[48px] gap-[2px]  '>
              <p className='flex text-[#4B5768] w-[192px] h-[24px] custo-font font-[400] text-[16px] leading-[24px]  '>Fax</p>
              <p className='flex text-[#3D52A0] w-[192px] h-[22px] custo-font font-[500] text-[16px] leading-[20.83px]  '>+1-000-0000</p>
            </div>
          </div>
        </div>
      </div>


      <div className='flex w-[300px] xl:w-[1100px] lg:w-[984px] h-[272px] relative top-[22rem] justify-between sm:flex sm:justify-evenly sm:w-[900px] sm:relative sm:top-[0rem] sm:right-[2rem] md:w-[1100px] lg:flex lg:justify-between lg:pt-4  '>

<div className='sm:w-[137.33px]  h-[248px] flex flex-col gap-[24px] sm:relative sm:left-[9rem] lg:relative lg:left-[3rem]'>
<p className='flex text-[#191D23] w-[80px] sm:w-[137.33px] h-[24px] custo-font font-[500] text-[16px] leading-[24px] '>About</p>
    <div className=' sm:w-[137.33px] w-[80px] h-[200px] flex flex-col gap-[20px] '>
      <p className='flex sm:w-[137.33px] w-[80px] h-[24px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px]  '>About us</p>
      <p className='flex sm:w-[137.33px] w-[80px] h-[24px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px]  '>Blog</p>
      <p className='flex sm:w-[137.33px] w-[80px] h-[24px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px]  '>Careers</p>
      <p className='flex sm:w-[137.33px] w-[80px] h-[24px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px]  '>Jobs</p>
      <p className='flex sm:w-[137.33px] w-[80px] h-[24px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px]  '>In Press</p>
    </div>
  </div>
  <div className='sm:w-[137.33px] h-[248px] flex flex-col gap-[24px] sm:relative sm:left-[5.3rem] lg:relative lg:left-[3rem] '>
  <p className='flex text-[#191D23] w-[80px]  sm:w-[137.33px] h-[24px] custo-font font-[500] text-[16px] leading-[24px] '>Support</p>
  <div className=' sm:w-[137.33px] h-[200px] flex flex-col gap-[20px] '>
  <p className='flex sm:w-[137.33px] w-[80px]  h-[24px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px]  '>Contact us</p>
  <p className='flex sm:w-[137.33px] w-[80px]  h-[24px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px]  '>Contact us</p>
  <p className='flex sm:w-[137.33px] w-[80px]  h-[24px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px]  '>Whatsapp</p>
  <p className='flex sm:w-[137.33px] w-[80px]  h-[24px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px]  '>Telegram</p>
  <p className='flex sm:w-[137.33px] w-[80px]  h-[24px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px]  '>Ticketing</p>
  </div>
  </div>
  <div className='sm:w-[137.33px]  h-[272px] flex flex-col  gap-[24px] sm:relative sm:left-[3.8rem] lg:relative lg:left-[3rem]'>
  <p className='flex text-[#191D23]  sm:w-[137.33px] w-[80px]  h-[24px] custo-font font-[500] text-[16px] leading-[24px] '>FAQ</p>
  <div className=' sm:w-[137.33px]   h-[200px] flex flex-col gap-[20px] '>
  <p className='flex sm:w-[137.33px] w-[80px]  h-[24px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px]  '>Account</p>
  <p className='sm:relative sm:right-[35px] relative right-[11px] sm:w-[137.33px] w-[80px]  h-[42px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px]  '>Manage Deliveries</p>
  <p className='flex sm:w-[137.33px] w-[80px]  h-[24px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px]  '>Orders</p>
  <p className='flex sm:w-[137.33px] w-[80px]  h-[24px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px]  '>Orders</p>
  <p className='flex sm:w-[137.33px] w-[80px]  h-[24px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px]  '>Returns</p>
  </div>
  </div>
  <div className='sm:w-[137.33px] h-[248px] flex flex-col  gap-[24px] sm:relative sm:left-[1rem] lg:relative lg:left-[2rem]'>
  <p className='flex text-[#191D23]  sm:w-[137.33px] w-[80px]  h-[24px] custo-font font-[500] text-[16px] leading-[24px] '>About</p>
  <div className=' sm:w-[137.33px] h-[200px] flex flex-col gap-[20px] '>
  <p className='flex sm:w-[137.33px] w-[80px]  h-[24px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px]  '>About us</p>
  <p className='flex sm:w-[137.33px] w-[80px]  h-[24px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px]  '>Blog</p>
  <p className='flex sm:w-[137.33px] w-[80px]  h-[24px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px]  '>Careers</p>
  <p className='flex sm:w-[137.33px] w-[80px]  h-[24px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px]  '>Jobs</p>
  <p className='flex sm:w-[137.33px] w-[80px]  h-[24px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px]  '>In Press</p>
  </div>
  </div>
  <div className='hidden lg:block sm:w-[137.33px] h-[248px] flex flex-col gap-[24px] sm:relative sm:right-[3.2rem] lg:relative lg:right-[2rem]'>
  <p className='flex text-[#191D23]  sm:w-[137.33px] w-[80px]  h-[24px] custo-font font-[500] text-[16px] leading-[24px] '>Support</p>
  <div className=' sm:w-[137.33px] h-[200px] flex flex-col gap-[20px] lg:mt-[1.5rem] '>
  <p className='flex sm:w-[137.33px] w-[80px]  h-[24px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px]  '>Contact us</p>
  <p className='flex sm:w-[137.33px] w-[80px]  h-[24px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px]  '>Online Chat</p>
  <p className='flex sm:w-[137.33px] w-[80px]  h-[24px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px]  '>Whatsapp</p>
  <p className='flex sm:w-[137.33px] w-[80px]  h-[24px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px]  '>Telegram</p>
  <p className='flex sm:w-[137.33px] w-[80px]  h-[24px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px]  '>Ticketing</p>
  </div>
  </div>
  <div className='hidden lg:block sm:w-[137.33px] h-[272px] flex flex-col gap-[24px] sm:relative sm:right-[5rem] lg:relative lg:left-[1rem]'>
  <p className='flex text-[#191D23]  sm:w-[137.33px] w-[80px]  h-[24px] custo-font font-[500] text-[16px] leading-[24px] '>FAQ</p>
  <div className=' sm:w-[137.33px] h-[200px] flex flex-col gap-[20px] lg:mt-[1.5rem]'>
  <p className='flex sm:w-[137.33px] w-[80px]  h-[24px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px]  '>Account</p>
  <p className='relative right-[35px] sm:w-[137.33px] w-[80px]  h-[40px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px]  '>Manage Deliveries</p>

  <p className='relative right-[35px] sm:w-[137.33px] w-[80px]  h-[40px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px]  '>Manage Deliveries</p>
  <p className='flex sm:w-[137.33px] w-[80px]  h-[24px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px]  '>Payments</p>
  <p className='flex sm:w-[137.33px] w-[80px]  h-[24px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px]  '>Returns</p>

  </div>
  </div>
</div>
<div className='flex justify-between sm:w-[1184px] h-[72px] sm:relative sm:top-[2rem] py-[24px] border-[1px] relative top-[25rem] border-[#D0D5DD]  '>
  <div className='flex w-[928px] h-[24px] gap-[40px] '>
    <p className='flex w-[73px] h-[24px] text-[#4B5768] custo-font font-[400] text-[16px] leading-[24px] '>About us</p>
    <p className='flex w-[71px] h-[24px] text-[#4B5768] custo-font font-[400] text-[16px] leading-[24px] '>Contact</p>
    <p className='flex h-[24px] text-[#4B5768] custo-font font-[400] text-[16px] leading-[24px] '>Privacy policy</p>
    <p className='flex w-[71px] h-[24px] text-[#4B5768] custo-font font-[400] text-[16px] leading-[24px] '>Sitemap</p>
    <p className='flex  h-[24px] text-[#4B5768] custo-font font-[400] text-[16px] leading-[24px] '>Terms of Use</p>
    </div>
    <p className='flex w-[266px] h-[24px] text-[#4B5768] custo-font font-[400] text-[16px] leading-[24px] '>© 2000-2021, All Rights Reserved</p>


  
</div>
</div>



    </div>
   
  )
}
