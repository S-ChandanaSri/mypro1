'use client'
import React from 'react';
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
  return (
    <div className='bg-[#FFFFFF] '>
    <div className='flex justify-between items-center  h-[72px]  pt-[15px] pr-[45px] pb-[15px] pl-[55px] shadow-[0px_-1px_1px_0px_#0000001A_inset] bg-[#3D52A0]'>
        <div className='w-[134px] h-[34px] flex'>
          <Image alt='' width={44} height={44} src={img1} className='w-[44px] h-[44px] relative bottom-2.5 ' />
          <p className=' text-white w-[99px] h-[29px] top-[2px] left-[39px] custom-font text-[24px] font-normal leading-[34.34px] text-left '  >ZENDEN</p>
        </div>
        <div className='w-[239px] h-[18px] gap-[30px] flex'>
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
        <div className='flex w-[215px] h-[42px] gap-[20px]'>
            <button className='flex bg-[#FFFFFF] w-[123px]  h-[40px] gap-[10px] pt-[7px] pr-[22px] pb-[8px] pl-[14px] border-[1px] rounded-[5px] border-[#FFFFFF] '>
                <Image alt='' width={24} height={24} src={materialblack} className='w-[24px] h-[24px] ' />
                <p className='text-black '>Login</p>
            </button>
            <button className='flex bg-[#FFFFFF] w-[106px]  h-[42px] gap-[10px] pt-[8px] pr-[22px] pb-[8px] pl-[16px] border-[1px] rounded-[5px] border-[#FFFFFF] '>
                <Image alt='' width={28} height={26} src={userblack}  className='w-[28px] h-[26px]' />
                <Image alt='' width={24} height={24} src={quillblack} className='w-[24px] h-[24px]' />

            </button>
        </div>
    </div>

    <div className='flex flex-col items-center h-[1024px] '>
        <div className='w-[1066px] h-[449px] top-[140px]  '>
            <div className='flex flex-col items-center w-[1066px] h-[449px] relative top-[140px] gap-[11px] '>
                <div className='flex flex-col items-center w-[773px] h-[361px] w-fixed '>
                    <p className='w-[204px] h-[68px] custo-font font-[500] text-[45px] leading-[67.5px] text-[#002855] '>About Us</p>
                    <p className='w-[670px] h-[233px] custom-font font-[400] text-[163px] leading-[233.2px] text-[#002855] '>ZENDEN</p>
                    <div className='flex justify-between w-[439px] h-[60px] text-[#3D52A0] '>
                        <p  className='w-[180px] h-[60px] top[301px] left-[167px] custo-font font-[500] text-[40px] leading-[60px] text-[#3D52A0] '>Live Easy</p>
                        <Image alt='' src={Line4} className=' top-[315px] left-[368px] '/> 
                        <p  className='w-[211px] h-[60px] top[301px] left-[395px] custo-font font-[500] text-[40px] leading-[60px] text-[#3D52A0] '>Feel Home</p>
                    </div>
                </div>
                <p className='w-[1066px] h-[77px] custo-font font-[300] text-[26px] leading-[39px] text-[#000000] pt-[4px] relative text-center '> ZenDen is reshaping student accommodation by offering affordable, comfortable and luxurious living spaces.</p>
            </div>
        </div>
        <div className='flex flex-col items-center w-[842px] h-[144x] relative top-[180px]  gap-[46px] '>
            <p className='w-[852px] h-[39x] custo-font font-[400] text-[26px] leading-[39px] text-[#3D52A0] relative text-center '>Join us in creating a home away from home for you across India.</p>
            <button className='w-[268px] h-[59x] rounded-[6px] '>
                <div className='bg-[#002855] w-[268px] h-[59x] top-[85px] left-[297px] rounded-[6px] '>
                    <p className='w-[268px] h-[48px] custo-font font-[400] text-[26px] leading-[39px] px-[2px] py-1  text-[#FFFFFF] '>Join Now</p>
                </div>
            </button>
        </div>
        <div className='flex  items-center relative top-[257px] left-[10px] w-[1186px] h-[118px]  gap-[336px] '>
            <div className='flex flex-col items-center w-[181px] h-[118px] '>
                <p className='w-[181px] h-[113x] custo-font font-[400] text-[75px] leading-[112.5px] text-[#3D52A0] '>2024</p>
                <p className='w-[119px] h-[26px]  custo-font font-[500] text-[17px] leading-[25.5px] text-[#000000] '>Join Now</p>
            </div>
            <div className= ' flex flex-col items-center w-[193px] h-[113px] '>
            <p className='w-[193px] h-[113x] left-[517px] custo-font font-[400] text-[75px] leading-[112.5px] text-[#3D52A0] '> 500+</p>
            <p className='w-[84px] h-[23px]  custo-font font-[500] text-[15px] leading-[22.5px] text-[#000000]'>Customers</p>
            </div>
            <div className='flex flex-col items-center w-[140px] h-[113px] '>
            <p className='w-[140px] h-[113px] left-[1046px] custo-font font-[400] text-[75px] leading-[112.5px] text-[#3D52A0] '>70+</p>
            <p className='w-[119px] h-[23px] custo-font font-[500] text-[15px] leading-[22.5px] text-[#000000]'>House rented</p>
            </div>
        </div>
    </div>



    <div className='h-[996px] top-[1024px]'>
        <div className='h-[996px] flex flex-col items-center '>
            <div className='w-[554.4px] h-[103px] relative top-[55px]  gap-[27px] text-center '>
            <p className='w-[554.4px] h-[48px] custo-font font-[400] text-[42px] leading-[48px] text-[#002855] '>Why Us</p>
            <p className='w-[554.4px] h-[28px] jakarta-font font-[400] pt-5 text-[18px] leading-[28px] text-[#002855] '>Lorem ipsum dolor sit amet, consectetur adipis elit</p>
            </div>
            <div className='grid grid-cols-3 gap-4 w-[1303px] h-[550px] relative top-[70px] py-[4px] px-[43px]   '>
                <div className='flex flex-col items-center w-[330px] h-[385px]  '>
                    <Image alt='' width={59} height={59} src={octicon} className='w-[59px] h-[59px] relative  left-[52px] top-[58px] ' />

                    <p className='w-[315px] h-[28px] relative top-[91px] left-[51px] custo-font font-[400] text-[21px] leading-[28px] text-[#002855] text-center '>Our Mission</p>
                    <p className='w-[330px] h-[78px] relative top-[125px] left-[43px] jakarta-font font-[400] text-[16px] leading-[26px] text-[#52525B] text-center '>Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.</p>
                </div>
                <div className='flex flex-col items-center w-[330px] h-[385px] '>
                    <Image alt='' width={59} height={59} src={chartbar} className='w-[59px] h-[59px] relative  left-[52px] top-[58px] ' />

                    <p className='w-[315px] h-[28px] relative top-[91px] left-[51px] custo-font font-[400] text-[21px] leading-[28px] text-[#002855] text-center '>Our Vision</p>
                    <p className='w-[330px] h-[78px] relative top-[125px] left-[43px] jakarta-font font-[400] text-[16px] leading-[26px] text-[#52525B] text-center '>Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.</p>
                </div>
                <div className='flex flex-col items-center w-[330px] h-[385px] '>
                    <Image alt='' width={59} height={59} src={Money} className='w-[59px] h-[59px] relative  left-[52px] top-[58px] ' />

                    <p className='w-[315px] h-[28px] relative top-[91px] left-[51px] custo-font font-[400] text-[21px] leading-[28px] text-[#002855] text-center '>Our Values</p>
                    <p className='w-[330px] h-[78px] relative top-[125px] left-[43px] jakarta-font font-[400] text-[16px] leading-[26px] text-[#52525B] text-center '>Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.</p>
                </div>
                <div className='flex flex-col items-center w-[330px] h-[385px] '>
                    <Image alt='' width={59} height={59} src={Product} className='w-[59px] h-[59px] relative  left-[52px] top-[58px] ' />

                    <p className='w-[315px] h-[28px] relative top-[91px] left-[51px] custo-font font-[400] text-[21px] leading-[28px] text-[#002855] text-center'>Product</p>
                    <p className='w-[330px] h-[78px] relative top-[125px] left-[43px] jakarta-font font-[400] text-[16px] leading-[26px] text-[#52525B] text-center'>Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.</p>
                </div>
                <div className='flex flex-col items-center w-[330px] h-[385px] '>
                    <Image alt='' width={59} height={59} src={Quality} className='w-[59px] h-[59px] relative  left-[52px] top-[58px] ' />

                    <p className='w-[315px] h-[28px] relative top-[91px] left-[51px] custo-font font-[400] text-[21px] leading-[28px] text-[#002855] text-center'>Quality</p>
                    <p className='w-[330px] h-[78px] relative top-[125px] left-[43px] jakarta-font font-[400] text-[16px] leading-[26px] text-[#52525B] text-center'>Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.</p>
                </div>
                <div className='flex flex-col items-center w-[330px] h-[385px] '>
                    <Image alt='' width={59} height={59} src={Candidate} className='w-[59px] h-[59px] relative  left-[52px] top-[58px] ' />

                    <p className='w-[315px] h-[28px] relative top-[91px] left-[51px] custo-font font-[400] text-[21px] leading-[28px] text-[#002855] text-center'>Result</p>
                    <p className='w-[330px] h-[78px] relative top-[125px] left-[43px] jakarta-font font-[400] text-[16px] leading-[26px] text-[#52525B] text-center'>Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.</p>
                </div>
            </div>
        </div>
    </div>




    <div className='flex flex-col items-center h-[1096px] relative top-[10px]  '>
        <div className='h-[342px] py-[96px] gap-[64px]  '>
            <div className='flex flex-col items-center w-[1280px] h-[150px] px-[32px] gap-[32px]  '>
                <div className='flex flex-col items-center w-[1216px] h-[150px] gap-[48px]  '>
                <div className='flex flex-col items-center w-[960px] h-[150px] gap-[24px]  '>
                <div className='flex flex-col items-center w-[960px] h-[96px] gap-[19px]  '>
                <p className='w-[960px] h-[24px] custo-font font-[400] text-[16px] leading-[24px]  text-[#002855] text-center'>About Us</p>
                <p className='w-[960px] h-[60px] custo-font font-[400] text-[48px] leading-[60px]  text-[#002855] tracking-[-2%] text-center '>We’re a distributed team</p>
                </div>
                <p className='w-[768px] h-[30px] custo-font font-[400] text-[20px] leading-[30px]  text-[#3D52A0] text-center '>We have offices and teams all around the world.</p>
                </div>

                </div>
            </div>
        </div>
        <div className='h-[754px] pb-[96px] gap-[64px]  '>
        <div className='w-[1280px] w-fixed h-[488px] px-[32px] '>
            <div className='flex flex-col items-center w-[1216px] h-[488px] gap-[32px] '>
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
        <div className='h-[1280px] pb-[106px] px-[32px] pt-[50px] '>
            <div className='flex h-[1216px] pb-[106px] px-[32px]  '>
                <div className='flex flex-col items-center w-[384px] w-fill h-[106px] gap-[20px]  '>
                    <div  className='flex flex-col items-center w-[384px] w-fill h-[62px] gap-[4px]  '> 
                        <p className='w-[384px] h-[30px] custo-font font-[300] text-[20px] leading-[30px]  text-[#101828] text-center'>Support</p>
                        <p className='w-[384px] h-[24px] custo-font font-[400] text-[16px] leading-[24px]  text-[#667085] text-center pt-1 '>Our friendly team is here to help.</p>
                    </div>
                    <button className='w-[197px] h-[24px] '>
                        <div className='w-[197px] h-[24x] gap-[8px] '>
                            <p className='w-[197px] h-[24px] custo-font font-[500] text-[16px] leading-[24px]  text-[#002855] text-center '>support@untitledui.com</p>
                        </div>
                    </button>
                </div>
                <div className='flex flex-col items-center w-[384px] w-fill h-[106px] gap-[20px]  '>
                <div  className='flex flex-col items-center  w-[384px] w-fill h-[62px] gap-[4px]  '> 
                        <p className='w-[384px] h-[30px] custo-font font-[400] text-[20px] leading-[30px]  text-[#101828] text-center '>Sales</p>
                        <p className='w-[384px] h-[24px] custo-font font-[400] text-[16px] leading-[24px]  text-[#667085] text-center'>Questions or queries? Get in touch!</p>
                </div>
                <button className='w-[176px] h-[24px] '>
                        <div className='w-[176px] h-[24x] gap-[8px] '>
                            <p className='w-[176px] h-[24px] custo-font font-[500] text-[16px] leading-[24px]  text-[#002855] text-center'>sales@untitledui.com</p>
                        </div>
                </button>
                </div>
                <div className='flex flex-col items-center w-[384px] w-fill h-[106px] gap-[20px]  '>
                <div  className='flex flex-col items-center w-[384px] w-fill h-[62px] gap-[4px]  '> 
                        <p className='w-[384px] h-[30px] custo-font font-[400] text-[20px] leading-[30px]  text-[#101828] text-center'>Phone</p>
                        <p className='w-[384px] h-[24px] custo-font font-[400] text-[16px] leading-[24px]  text-[#667085] text-center'>Mon-Fri from 8am to 5pm.</p>
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




    <p className='w-[391px] h-[64px] relative top-[10px] left-[530px] custo-font font-[400] text-[40px] leading-[64px] text-[#002855] text-center '>Our creative minds</p>



    <div className='h-[1092px] relative top-[80px] pb-[96px] gap-[64px] '>
        <div className=' grid grid-cols-4 gap-4 h-[1052px] px-[32px] '>
         
                <div className='w-[340px] w-fill  h-[494px] pl-[40px] gap-[24x] '>
                    <Image alt='' height={296} src={Imageg} className='h-[296px] ' />
                    <div className='w-[280px] h-[174px] gap-[24px]' >
                        <div className='w-[280px] h-[24px] gap-[20px]'>
                            <div className=' w-[280px] w-fill h-[62px] gap-[4px] '>
                                <p className='text-left w-[280px] h-[48px]  custom-font font-[400] text-[20px] leading-[30px] text-[#101828] '>Olivia Rhye</p>
                                <p className='text-left w-[280px] h-[48px]  custom-font font-[400] text-[18px] leading-[28px] text-[#002855]'>Founder & CEO</p>
                            </div>
                            <p className='text-left w-[280px] h-[48px] pt-5 custom-font font-[400] text-[16px] leading-[24px] text-[#667085] '>Former co-founder of Opendoor. Early staff at Spotify and Clearbit.</p>
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
                <div className='w-[340px] w-fill  h-[494px] pl-[40px] gap-[24x] '>
                    <Image alt=''height={296} src={Image11} className='h-[296px] ' />
                    <div className='w-[280px] h-[174px] gap-[24px]' >
                        <div className='w-[280px] h-[24px] gap-[20px]'>
                            <div className=' w-[280px] w-fill h-[62px] gap-[4px] '>
                                <p className='text-left w-[280px] h-[48px]  custom-font font-[400] text-[20px] leading-[30px] text-[#101828] '> Phoenix Baker</p>
                                <p className='text-left w-[280px] h-[48px]  custom-font font-[400] text-[18px] leading-[28px] text-[#002855]'>Engineering Manager</p>
                            </div>
                            <p className='text-left w-[280px] h-[48px] pt-5 custom-font font-[400] text-[16px] leading-[24px] text-[#667085] '>Lead engineering teams at Figma, Pitch, and Protocol Labs.</p>
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
                <div className='w-[340px] w-fill  h-[494px] pl-[40px] gap-[24x] '>
                    <Image alt='' height={296} src={Image12} className='h-[296px] ' />
                    <div className='w-[280px] h-[174px] gap-[24px]' >
                        <div className='w-[280px] h-[24px] gap-[20px]'>
                            <div className=' w-[280px] w-fill h-[62px] gap-[4px] '>
                                <p className='text-left w-[280px] h-[48px]  custom-font font-[400] text-[20px] leading-[30px] text-[#101828] '>Lana Steiner</p>
                                <p className='text-left w-[280px] h-[48px]  custom-font font-[400] text-[18px] leading-[28px] text-[#002855]'>Product Manager</p>
                            </div>
                            <p className='text-left w-[280px] h-[48px] pt-5 custom-font font-[400] text-[16px] leading-[24px] text-[#667085] '>Former PM for Linear, Lambda School, and On Deck.</p>
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
                <div className='w-[340px] w-fill  h-[494px] pl-[40px] gap-[24x] '>
                    <Image alt='' height={296} src={Image13} className='h-[296px] ' />
                    <div className='w-[280px] h-[174px] gap-[24px]' >
                        <div className='w-[280px] h-[24px] gap-[20px]'>
                            <div className=' w-[280px] w-fill h-[62px] gap-[4px] '>
                                <p className='text-left w-[280px] h-[48px]  custom-font font-[400] text-[20px] leading-[30px] text-[#101828] '>Demi Wilkinson</p>
                                <p className='text-left w-[280px] h-[48px]  custom-font font-[400] text-[18px] leading-[28px] text-[#002855]'>Frontend Developer</p>
                            </div>
                            <p className='text-left w-[280px] h-[48px] pt-5 custom-font font-[400] text-[16px] leading-[24px] text-[#667085] '>Former frontend dev for Linear, Coinbase, and Postscript.</p>
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
                <div className='w-[340px] w-fill  h-[494px] pl-[40px] gap-[24x] '>
                    <Image alt=''  height={296} src={Image14} className='h-[296px] ' />
                    <div className='w-[280px] h-[174px] gap-[24px]' >
                        <div className='w-[280px] h-[24px] gap-[20px]'>
                            <div className=' w-[280px] w-fill h-[62px] gap-[4px] '>
                                <p className='text-left w-[280px] h-[48px]  custom-font font-[400] text-[20px] leading-[30px] text-[#101828] '>Candice Wu</p>
                                <p className='text-left w-[280px] h-[48px]  custom-font font-[400] text-[18px] leading-[28px] text-[#002855]'>Backend Developer</p>
                            </div>
                            <p className='text-left w-[280px] h-[48px] pt-5 custom-font font-[400] text-[16px] leading-[24px] text-[#667085] '>Lead backend dev at Clearbit. Former Clearbit and Loom.</p>
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
                <div className='w-[340px] w-fill  h-[494px] pl-[40px] gap-[24x] '>
                    <Image alt='' height={296} src={Image15} className='h-[296px] ' />
                    <div className='w-[280px] h-[174px] gap-[24px]' >
                        <div className='w-[280px] h-[24px] gap-[20px]'>
                            <div className=' w-[280px] w-fill h-[62px] gap-[4px] '>
                                <p className='text-left w-[280px] h-[48px]  custom-font font-[400] text-[20px] leading-[30px] text-[#101828] '>Natali Craig</p>
                                <p className='text-left w-[280px] h-[48px]  custom-font font-[400] text-[18px] leading-[28px] text-[#002855]'>Product Designer</p>
                            </div>
                            <p className='text-left w-[280px] h-[48px] pt-5 custom-font font-[400] text-[16px] leading-[24px] text-[#667085] '>Founding design team at Figma. Former Pleo, Stripe, and Tile.</p>
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
                <div className='w-[340px] w-fill  h-[494px] pl-[40px] gap-[24x] '>
                    <Image alt='' height={296} src={Image16} className='h-[296px] ' />
                    <div className='w-[280px] h-[174px] gap-[24px]' >
                        <div className='w-[280px] h-[24px] gap-[20px]'>
                            <div className=' w-[280px] w-fill h-[62px] gap-[4px] '>
                                <p className='text-left w-[280px] h-[48px]  custom-font font-[400] text-[20px] leading-[30px] text-[#101828] '>Drew Cano</p>
                                <p className='text-left w-[280px] h-[48px]  custom-font font-[400] text-[18px] leading-[28px] text-[#002855]'>UX Researcher</p>
                            </div>
                            <p className='text-left w-[280px] h-[48px] pt-5 custom-font font-[400] text-[16px] leading-[24px] text-[#667085] '>Lead user research for Slack. Contractor for Netflix and Udacity.</p>
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
                <div className='w-[340px] w-fill  h-[494px] pl-[40px] gap-[24x] '>
                    <Image alt=''  height={296} src={Image17} className='h-[296px] ' />
                    <div className='w-[280px] h-[174px] gap-[24px]' >
                        <div className='w-[280px] h-[24px] gap-[20px]'>
                            <div className=' w-[280px] w-fill h-[62px] gap-[4px] '>
                                <p className='text-left w-[280px] h-[48px]  custom-font font-[400] text-[20px] leading-[30px] text-[#101828] '>Orlando Diggs</p>
                                <p className='text-left w-[280px] h-[48px]  custom-font font-[400] text-[18px] leading-[28px] text-[#002855]'>Customer Success</p>
                            </div>
                            <p className='text-left w-[280px] h-[48px] pt-5 inter-font font-[400] text-[16px] leading-[24px] text-[#667085] '>Lead CX at Wealthsimple. Former PagerDuty and Sqreen.</p>
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



    <div className='bg-[#F6F9FF] h-[977px] flex flex-col items-center rounded-[4px] py-[92px] px-[128px] gap-[56px] '>
      <div className='flex w-[1184px] h-[108px] rounded-[12px] py-[28px] px-[36px] gap-[100px] bg-[#3D52A0] '>
        <div className='w-[645px] w-fill  h-[52px] gap-[4px] '>
          <p className='w-[86px] h-[24px] custo-font font-[500] text-[16px] leading-[24px] text-[#FFFFFF]'>Newsletter</p>
          <p className='w-[470px] h-[24px] custo-font font-[400] text-[16px] leading-[24px] text-[#FFFFFF]'>Be the first one to know  about discounts, offers and events</p>
        </div>
        <div className='flex items-center w-[457px] w-fixed rounded-[12px] pr-[6px] pl-[24px] h-[48px] h-fixed gap-[8px] bg-[#4A61B5] '>
          <div className='flex items-center'>
          <Image alt='' width={16} height={16} src={sms} className='w-[16px] h-[16px] '  />
          <input placeholder="Enter your email" className='focus:border-0 w-[160px] h-[24px] custo-font font-[400] text-[16px] leading-[24px] focus:outline-none pl-2 cursor-pointer  bg-[#4A61B5] '/>
          </div>
          <button className='w-[265px] h-[36px] gap-[10px] pl-[163px] '>
            <div  className='w-[94px] h-[36px] gap-[8px] rounded-[10px] bg-[#FFFFFFDB]  '>
              <p className='relative top-[6px] left-[17px] w-[58px] h-[24px] custo-font font-[500] text-[16px] leading-[24px] text-[#002855]'>Submit</p>
            </div>
          </button>
        </div>
      </div>
      <div className='w-[1184px] h-[173px] gap-[24px]  '>
        <div className='w-[1184px] h-[98px] gap-[16px] '>
          <Image alt='' width={134} height={34} src={Logoz} className='w-[134px] h-[34px] pb-2 '   />
          <p className='text-left w-[1184px] h-[48px] custo-font font-[400] text-[16px] leading-[24px] '>We ara a lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat... <span className='text-[#4A61B5]'>Read More</span></p>
        </div>
        <div className='flex items-center w-[1184px] h-[51px] gap-[80px] pt-[30px] '>
          <div className='flex w-[236px] w-fill h-fill h-[51px] gap-[12px] '>
            <Image alt='' width={32} height={32} src={icons} className='w-[32px] h-[32px] ' />
            <div className='w-[192px] h-[48px] gap-[2px] '>
              <p className='flex text-[#4B5768] w-[192px] h-[24px] custo-font font-[400] text-[16px] leading-[24px]  '>Tel</p>
              <p className='flex text-[#3D52A0] w-[192px] h-[22px] custo-font font-[500] text-[16px] leading-[20.83px]  '>310-437-2766</p>
            </div>
          </div>
          <div className='flex w-[236px] w-fill h-fill h-[51px] gap-[12px] '>
          <Image alt='' width={32} height={32} src={mail} className='w-[32px] h-[32px] ' />
          <div className='w-[192px] h-[48px] gap-[2px] '>
              <p className='flex text-[#4B5768] w-[192px] h-[24px] custo-font font-[400] text-[16px] leading-[24px]  '>Mail</p>
              <button className='flex text-[#3D52A0] w-[192px] h-[22px] custo-font font-[500] text-[16px] leading-[20.83px]'>unreal@outlook.com</button>
            </div>
          </div>
          <div className='flex w-[236px] w-fill h-fill h-[51px] gap-[12px] '>
          <Image alt='' width={32} height={32} src={address} className='w-[32px] h-[32px] ' />
          <div className='w-[192px] h-[48px] gap-[2px] '>
              <p className='flex text-[#4B5768] w-[192px] h-[24px] custo-font font-[400] text-[16px] leading-[24px]  '>Address</p>
              <p className='flex text-[#3D52A0] w-[262px] h-[22px] custo-font font-[500] text-[16px] leading-[20.83px]  '>706 Campfire Ave. Meriden, CT 06450</p>
            </div>
          </div>
          <div className='flex justify-evenly w-[236px] w-fill h-fill h-[51px] gap-[18px] pl-8'>
          <Image alt='' width={32} height={32} src={fax} className='w-[32px] h-[32px] ' />
          <div className='w-[192px] h-[48px] gap-[2px]  '>
              <p className='flex text-[#4B5768] w-[192px] h-[24px] custo-font font-[400] text-[16px] leading-[24px]  '>Fax</p>
              <p className='flex text-[#3D52A0] w-[192px] h-[22px] custo-font font-[500] text-[16px] leading-[20.83px]  '>+1-000-0000</p>
            </div>
          </div>
        </div>
      </div>



      <div className='flex w-[1184px] h-[272px] justify-between  '>

        <div className='w-[137.33px] h-[248px] flex flex-col gap-[24px]'>
          <p className='flex text-[#191D23]  w-[137.33px] h-[24px] custo-font font-[500] text-[16px] leading-[24px] '>About</p>
          <div className=' w-[137.33px] h-[200px] flex flex-col gap-[20px] '>
            <p className='flex w-[137.33px] h-[24px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px] text-left '>About us</p>
            <p className='flex w-[137.33px] h-[24px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px] text-left '>Blog</p>
            <p className='flex w-[137.33px] h-[24px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px] text-left '>Careers</p>
            <p className='flex w-[137.33px] h-[24px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px] text-left '>Jobs</p>
            <p className='flex w-[137.33px] h-[24px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px] text-left '>In Press</p>
          </div>
        </div>
        <div className='w-[137.33px] h-[248px] flex flex-col gap-[24px]'>
        <p className='flex text-[#191D23]  w-[137.33px] h-[24px] custo-font font-[500] text-[16px] leading-[24px] '>Support</p>
        <div className=' w-[137.33px] h-[200px] flex flex-col gap-[20px] '>
        <p className='flex w-[137.33px] h-[24px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px] text-left '>Contact us</p>
        <p className='flex w-[137.33px] h-[24px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px] text-left '>Contact us</p>
        <p className='flex w-[137.33px] h-[24px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px] text-left '>Whatsapp</p>
        <p className='flex w-[137.33px] h-[24px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px] text-left '>Telegram</p>
        <p className='flex w-[137.33px] h-[24px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px] text-left '>Ticketing</p>
        </div>
        </div>
        <div className='w-[137.33px] h-[272px] flex flex-col  gap-[24px]'>
        <p className='flex text-[#191D23]  w-[137.33px] h-[24px] custo-font font-[500] text-[16px] leading-[24px] '>FAQ</p>
        <div className=' w-[137.33px] h-[200px] flex flex-col gap-[20px] '>
        <p className='flex w-[137.33px] h-[24px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px] text-left '>Account</p>
        <p className='relative right-[35px] w-[137.33px] h-[42px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px] text-left '>Manage Deliveries</p>
        <p className='flex w-[137.33px] h-[24px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px] text-left '>Orders</p>
        <p className='flex w-[137.33px] h-[24px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px] text-left '>Orders</p>
        <p className='flex w-[137.33px] h-[24px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px] text-left '>Returns</p>
        </div>
        </div>
        <div className='w-[137.33px] h-[248px] flex flex-col  gap-[24px]'>
        <p className='flex text-[#191D23]  w-[137.33px] h-[24px] custo-font font-[500] text-[16px] leading-[24px] '>About</p>
        <div className=' w-[137.33px] h-[200px] flex flex-col gap-[20px] '>
        <p className='flex w-[137.33px] h-[24px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px] text-left '>About us</p>
        <p className='flex w-[137.33px] h-[24px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px] text-left '>Blog</p>
        <p className='flex w-[137.33px] h-[24px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px] text-left '>Careers</p>
        <p className='flex w-[137.33px] h-[24px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px] text-left '>Jobs</p>
        <p className='flex w-[137.33px] h-[24px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px] text-left '>In Press</p>
        </div>
        </div>
        <div className='w-[137.33px] h-[248px] flex flex-col gap-[24px]'>
        <p className='flex text-[#191D23]  w-[137.33px] h-[24px] custo-font font-[500] text-[16px] leading-[24px] '>Support</p>
        <div className=' w-[137.33px] h-[200px] flex flex-col gap-[20px] '>
        <p className='flex w-[137.33px] h-[24px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px] text-left '>Contact us</p>
        <p className='flex w-[137.33px] h-[24px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px] text-left '>Online Chat</p>
        <p className='flex w-[137.33px] h-[24px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px] text-left '>Whatsapp</p>
        <p className='flex w-[137.33px] h-[24px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px] text-left '>Telegram</p>
        <p className='flex w-[137.33px] h-[24px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px] text-left '>Ticketing</p>
        </div>
        </div>
        <div className='w-[137.33px] h-[272px] flex flex-col gap-[24px]'>
        <p className='flex text-[#191D23]  w-[137.33px] h-[24px] custo-font font-[500] text-[16px] leading-[24px] '>FAQ</p>
        <div className=' w-[137.33px] h-[200px] flex flex-col gap-[20px] '>
        <p className='flex w-[137.33px] h-[24px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px]  text-left'>Account</p>
        <p className='relative right-[35px] w-[137.33px] h-[40px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px]  text-left'>Manage Deliveries</p>

        <p className='relative right-[35px] w-[137.33px] h-[40px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px] text-left '>Manage Deliveries</p>
        <p className='flex w-[137.33px] h-[24px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px] text-left '>Payments</p>
        <p className='flex w-[137.33px] h-[24px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px] text-left '>Returns</p>

        </div>
        </div>
      </div>
      <div className='flex justify-between w-[1184px] h-[72px] py-[24px] border-[1px] border-[#D0D5DD] '>
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
