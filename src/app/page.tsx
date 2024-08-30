'use client'
import React,{useRef,useState} from 'react';
import Image from 'next/image';
import img1  from '../app/_assets/images/Logo1.png';
import backgroundImg from '../../public/background.jpg';
import material from '../app/_assets/images/material.png';
import user from '../app/_assets/images/mdi_user.png';
import quill from '../app/_assets/images/quill.png';
import homeverify from '../app/_assets/images/homeverify.png';
import bxsupport from '../app/_assets/images/bxsupport.png';
import akar from '../app/_assets/images/akar.png';
import searchline from '../app/_assets/images/searchline.png';
import image6 from '../app/_assets/images/image6.png';
import image7 from '../app/_assets/images/image7.png';
import image5 from '../app/_assets/images/image5.png';
import image4 from '../app/_assets/images/image4.png';
import image3 from '../app/_assets/images/image3.png';
import image2 from '../app/_assets/images/image2.png';
import Frame39907 from '../app/_assets/images/Frame39907.png';
import Frame39908 from '../app/_assets/images/Frame39908.png';
import makiarrow from '../app/_assets/images/makiarrow.png';
import view1 from '../app/_assets/images/view1.jpg';
import mingcute from '../app/_assets/images/mingcute.png';
import mdibed from '../app/_assets/images/mdibed.png';
import mdigraphbox from '../app/_assets/images/mdigraphbox.png';
import mdigraphline from '../app/_assets/images/mdigraphline.png';
import quillblack from '../app/_assets/images/quillblack.png';
import view2 from '../app/_assets/images/view2.jpg';
import view3 from '../app/_assets/images/view3.jpg';
import view4 from '../app/_assets/images/view4.jpg';
import view5 from '../app/_assets/images/view5.jpg';
import view6 from '../app/_assets/images/view6.jpg';
import view7 from '../app/_assets/images/view7.jpg';
import view8 from '../app/_assets/images/view8.jpg';
import Arrow3 from '../app/_assets/images/Arrow3.png';
import ellipse1 from '../app/_assets/images/ellipse1.png';
import ellipse2 from '../app/_assets/images/ellipse2.png';
import ellipse3 from '../app/_assets/images/ellipse3.png';
import ellipse4 from '../app/_assets/images/ellipse4.png';
import ellipse11 from '../app/_assets/images/ellipse11.png';
import ellipse12 from '../app/_assets/images/ellipse12.png';
import ellipse13 from '../app/_assets/images/ellipse13.png';
import ellipse14 from '../app/_assets/images/ellipse14.png';
import ellipse15 from '../app/_assets/images/ellipse15.png';
import ellipse16 from '../app/_assets/images/ellipse16.png';
import ellipse17 from '../app/_assets/images/ellipse17.png';
import ellipse18 from '../app/_assets/images/ellipse18.png';
import icon from  '../app/_assets/images/Icon.png';
import pluscircle from '../app/_assets/images/pluscircle.png';
import minuscircle from '../app/_assets/images/minuscircle.png';
import Avatar from  '../app/_assets/images/Avatar.png';
import Avatar1 from  '../app/_assets/images/Avatar1.png';
import Avatar2 from  '../app/_assets/images/Avatar2.png';
import sms from '../app/_assets/images/sms.png'
import icons from '../app/_assets/images/Icons.png';
import mail from '../app/_assets/images/mail.png';
import address from '../app/_assets/images/address.png';
import fax from '../app/_assets/images/fax.png';
import Logoz from '../app/_assets/images/Logoz.png';
import VideoPlayer from './Video/page';





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
    id:1,
    question: "What types of student accommodation are available?",
    answer: "There are several types of student accommodation, including on-campus dormitories, off-campus apartments, shared houses, and homestays with local families."
  },
  {
    id:2,
    question: "What is the cost of student accommodation?",
    answer: "The cost of student accommodation varies depending on the type, and amenities provided. On-campus dormitories tend to be more affordable."
  },
  {
    id:3,
    question: "What types of student accommodation are available?",
    answer: "There are several types of student accommodation, including on-campus dormitories, off-campus apartments, shared houses, and homestays with local families."
  },
  {
    id:4,
    question: "What types of student accommodation are available?",
    answer: "There are several types of student accommodation, including on-campus dormitories, off-campus apartments, shared houses, and homestays with local families."
  },
  {
    id:5,
    question: "What types of student accommodation are available?",
    answer: "There are several types of student accommodation, including on-campus dormitories, off-campus apartments, shared houses, and homestays with local families."
  },
];

const backgroundImgUrl = backgroundImg.src; 

const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='bg-[#FFFFFF]  overflow-x-hidden overflow-y-auto  '>
        <div 
      className='w-full h-full bg-cover bg-no-repeat '
      style={{ backgroundImage: `url(${backgroundImgUrl})` }}
      >
         


      <div className='flex justify-between items-center  h-[72px]  pt-[15px] pr-[45px] pb-[15px] pl-[55px] shadow-[0px_-1px_1px_0px_#0000001A_inset]  md:h-[92px]  '>
        <div className='w-[134px] h-[34px] flex relative right-[3rem] '>
          <Image src={img1} alt="Description of image" width={44} height={44} className='w-[44px] h-[44px] relative bottom-2.5 ' />
          <p className=' text-white w-[99px] h-[29px] top-[2px] left-[39px] custom-font text-[24px] font-normal leading-[34.34px] text-left '  >ZENDEN</p>
        </div>
        <div className='w-[239px] h-[18px] gap-[30px] flex hidden md:flex'>
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
        <div className='flex w-[215px] h-[42px] gap-[20px] hidden md:flex'>
            <button className='flex w-[123px]  h-[40px] gap-[10px] pt-[8px] pr-[22px] pb-[8px] pl-[22px] border-[1px] rounded-[5px] border-[#FFFFFF] '>
                <Image src={material} alt="material" className='w-[24px] h-[24px] ' />
                <p className='text-white'>Login</p>
            </button>
            <button className='flex w-[106px]  h-[42px] gap-[10px] pt-[8px] pr-[22px] pb-[8px] pl-[22px] border-[1px] rounded-[5px] border-[#FFFFFF] '>
                <Image src={user} alt='user' className='w-[28px] h-[26px]' />
                <Image src={quill} alt='quill' className='w-[24px] h-[24px]' />

            </button>
        </div>



        <button 
        className="md:hidden md:fixed md:relative md:top-0 md:right-0 p-4 z-50"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <Image alt="Menu" width={24} height={24} src={quillblack} className='pt-2' />
      </button>
      {menuOpen && (
        <div className="md:hidden fixed top-[72px] right-0 bg-[transparent] border-[2px] border-white w-[168px] p-[15px] shadow-[0px_-1px_1px_0px_#0000001A_inset] z-40">
          <div className="flex flex-col gap-4">
          <button className='flex w-[123px]  h-[40px] gap-[10px] pt-[8px] pr-[22px] pb-[8px] pl-[22px] border-[1px] rounded-[5px] border-[#FFFFFF] '>
                <Image src={material} alt="material" className='w-[24px] h-[24px] ' />
                <p className='text-white'>Login</p>
            </button>
            <p className="text-[#FFFFFF] text-[14px] font-medium pl-2">Services</p>
            <p className="text-[#FFFFFF] text-[14px] font-medium pl-2">Features</p>
            <p className="text-[#FFFFFF] text-[14px] font-medium pl-2">About Us</p>
            
          </div>
        </div>
      )}






        
      </div>


      <div className=' h-auto py-[156px] px-[418px]  gap-[40px] bg-[linear-gradient(180deg,_rgba(248,_247,_255,_0.02)_0%,_rgba(5,_7,_13,_0.48)_57.76%,_rgba(0,_0,_0,_0.82)_92.61%)] sm:py-[150px] sm:px-[80px] lg:py-[130px]'>
        <div className='w-full max-w-[638px] h-[281x] h-fixed gap-[19px] mx-auto md:flex md:flex-col md:items-center'>
            <p className='text-[#E3F2FD] transition-all duration-500 ease-in-out  xxs:relative xxs:right-[16rem] xxs:mx-auto xs:w-full xs:relative xs:right-[9rem] xs:mx-auto relative right-[21rem] bottom-[4rem] foundation-blue-light w-full h-[141px] custo-font font-[400] text-[56px] leading-[61.6px] items-center shadow-[5px_5px_10px_0px_#0000004D] text-center sm:top-[2rem] sm:text-[30px] sm:relative sm:left-[0rem] pl-[2rem] sm:mx-auto sm:leading-[40px] sm:w-full sm:flex sm:items-center sm:text-center md:mx-auto md:relative md:left-[3rem] md:pl-[7rem] lg:text-[48px] lg:leading-[55px] sm:pt-8 sm:shadow-[1px_3px_6px_0px_#0000004D] lg:relative lg:right-[5rem] lg:pl-[3rem] lg:w-[678px] '>Reserve <span className='custo-font font-[400] text-[56px] leading-[61.6px] items-center sm:text-[36px] lg:text-[48px] sm:flex sm:items-center lg:text-center lg:w-auto '>your Ideal Holiday</span> </p>
            <p className=' w-[390px] transition-all duration-500 ease-in-out text-center text-[13px] relative right-[29rem] mx-auto  top-[2rem] xxs:relative xxs:pr-8 xxs:right-[23rem] xxs:text-[13px] xxs:text-center xs:relative xs:right-[20rem] xs:text-center xs:mx-auto mt-3 h-[61.4px] custo-font font-[400] text-[22px] leading-[27px] text-[#FFFFFF] items-center shadow-[5px_5px_10px_0px_#0000004D] pt-2  sm:flex sm:text-[19px] sm:items-center sm:relative sm:right-[4rem] sm:shadow-[3px_3px_6px_0px_#0000004D] pl-[5rem] md:relative md:left-[3rem]'>We're thrilled to have you! Let's find you the ideal place to stay.</p>
            <div className=' transition-all duration-300 ease-in-out flex flex-col gap-[10px] relative right-[21rem] top-[1rem] xxs:relative xxs:right-[15rem] xxs:mx-auto xs:relative xs:right-[10rem] xs:mx-auto mt-9 w-Fill [638px] h-[41px] h-fixed sm:flex sm:flex-row sm:pt-4 sm:ml-[9rem] sm:items-center sm:relative sm:mx-auto md:flex md:items-center md:right-[3rem] '>
                <div className='bg-black w-[208.21px] h-[40.94px] rounded-[31px] '>
                    <div className='flex items-center justify-evenly w-full h-full pl-5'>
                    <Image src={homeverify}  alt="home" className='w-[18.93px] h-[19.33px]   ' />
                    <p className='w-[161.45px]  top-[12.54px] left-[36.08px] custo-font font-[400] text-[16px] leading-[61.6px] items-center text-white bg--10-90'>verified properties</p>

                    </div>
                    
                </div>
                <div className='bg-black rounded-[31px] w-[171.47px] h-[40.94px] pl-5 ml-5 '>
                   <div className='flex items-center justify-evenly w-full h-full'>
                    <Image src={bxsupport}  alt='' className='w-[22.27px] h-[22.74px] top-[9.13px] left-[275.02px] ' />
                    <p className='w-[114.68px]  top-[13.68px] left-[308.42px] custo-font font-[400] text-[16px] leading-[61.6px] text-white bg-opacity-90'>24/7 support</p>
                    </div>
                </div>
                <div className='bg-black rounded-[31px] w-[154.43px] h-[40.94px] pl-4 ml-7 '>
                <div className='flex items-center justify-evenly w-full h-full'>
                    <Image src={akar}  alt='' className='w-[18.93px] h-[19.33px] top-[10.27px] left-[498.38px] ' />
                    <p className='w-[108px] top-[12.54px] left-[525.76px] pl-2 custo-font font-[400] text-[16px] leading-[61.6px]  text-white bg-opacity-90'>Pricematch</p>
                    </div>

                </div>
            </div>
        </div>



        <div className='transition-all duration-500 ease-in-out flex mt-12 ml-[2rem] items-center w-[301px] w-fixed h-[66px] h-fixed gap-[7px] p-[18px] relative right-[27rem] top-[5rem] rounded-[61.05px] bg-[#FFFFFF] xxs:ml-[9rem] xs:ml-[13rem] sm:mx-auto sm:ml-[27rem] sm:w-[501px] md:relative md:mx-auto md:left-[5rem] lg:relative lg:left-[5rem] lg:mx-auto '> 
            <Image src={searchline} alt='' className='w-[24px] h-[24px] ' />
            
            <div className='flex w-[313px] h-[30px] items-center pt-2 '>
            <div className="relative  bottom-[4px] w-[81px] h-[30px] font-poppins font-normal text-[15px] leading-[30px] text-black sm:text-[20px]">
                Search by
            </div>
             <input placeholder=" city, college, property" className="relative focus:outline-none  bottom-[4px] w-[163px] h-[30px] font-poppins font-normal text-[18px] sm:text-[20px] leading-[30px] text-blue-custom text-opacity-80"/>
              
            
            </div>
        </div>


      </div>
    </div>




    <div className='flex items-center h-[157px] top-[730px] border-[1px] py-[15px] px-[47px] gap-[105px] bg-[#FFFFFF] border-[#0000004D] sm:gap-2 lg:gap-10'>
      <div className=' w-[1066.33px] w-fill h-[127px] h-fill gap-[82px] '>
        <div className='flex w-[1066.89px] h-[126.82px] gap-[77px] sm:w-[400px] sm:mx-auto md:w-[500px] md:relative md:right-5 md:flex md:justify-between md:mx-auto  lg:w-auto lg:mx-auto  '>
          <div className='w-[86.46px] h-[121.78px] flex flex-col items-center sm:w-[70px] md:mx-auto md:flex md:flex-col md:justify-between '>
            <Image width={113} height={113}  src={image6} alt=''  className='w-[86.31px] h-[85.97px] top-[2.52px] left-[980.58px]  '  />
            <p className='w-[86.02px] h-[30.24px] pl-2 top-[94.06px] left-[980.4px] custo-font font-[500] text-[20px] leading-[30px] items-center text-black'>Bombay</p>
          </div>
          <div className='w-[86.46px] h-[121.78px] top-[2.52px] left-[980.42px] sm:w-[70px] md:flex md:flex-col md:justify-between'>
            <Image width={86.31} height={85.97} src={image7} alt=''  className='w-[86.31px] h-[85.97px] top-[2.52px] left-[980.58px] '  />
            <p className='w-[86.02px] h-[30.24px] top-[94.06px] pl-6 left-[980.4px] custo-font font-[500] text-[20px] leading-[30px] items-center text-black'>Pune</p>
          </div>
          <div className='w-[86.46px] h-[121.78px] top-[2.52px] left-[980.42px] sm:w-[70px]'>
            <Image  width={86.31} height={85.97} src={image6} alt=''  className='w-[86.31px] h-[85.97px] top-[2.52px] left-[980.58px] '  />
            <p className='w-[86.02px] h-[30.24px] top-[94.06px] pl-2 left-[980.4px] custo-font font-[500] text-[20px] leading-[30px] items-center text-black'>Bombay</p>
          </div>
          <div className='w-[86.46px] h-[121.78px] top-[2.52px] left-[980.42px] sm:hidden md:block lg:block'>
            <Image  width={86.31} height={85.97} src={image5} alt=''  className='w-[86.31px] h-[85.97px] top-[2.52px] left-[980.58px] '  />
            <p className='w-[86.02px] h-[30.24px] top-[94.06px] pl-3 left-[980.4px] custo-font font-[500] text-[20px] leading-[30px] items-center text-black'>Kolkata</p>
          </div>
          <div className='w-[86.46px] h-[121.78px] top-[2.52px] left-[980.42px] sm:hidden md:hidden lg:block'>
            <Image  width={86.31} height={85.97} src={image4} alt=''  className='w-[86.31px] h-[85.97px] top-[2.52px] left-[980.58px] '  />
            <p className='w-[86.02px] h-[30.24px] top-[94.06px] pl-2 left-[980.4px] custo-font font-[500] text-[20px] leading-[30px] items-center text-black'>Bombay</p>
          </div>
          <div className='w-[86.46px] h-[121.78px] top-[2.52px] left-[980.42px] sm:hidden lg:block'>
            <Image  width={86.31} height={85.97} src={image3} alt=''   className='w-[86.31px] h-[85.97px] top-[2.52px] left-[980.58px] '  />
            <p className='w-[86.02px] h-[30.24px] top-[94.06px] pl-2 left-[980.4px] custo-font font-[500] text-[20px] leading-[30px] items-center text-black'>Bombay</p>
          </div>
          <div className='w-[86.46px] h-[121.78px] top-[2.52px] left-[980.42px] sm:hidden lg:block'>
            <Image  width={86.31} height={85.97} src={image2} alt=''  className='w-[86.31px] h-[85.97px] top-[2.52px] left-[980.58px] '  />
            <p className='w-[86.02px] h-[30.24px] top-[94.06px] pl-2 left-[980.4px] custo-font font-[500] text-[20px] leading-[30px] items-center text-black'>Bombay</p>
          </div>

        </div>
      </div>
      <div className='w-[36px] h-[36px] sm:block lg:hidden lg:relative lg:left-[3rem] sm:mx-auto md:mx-auto md:relative md:right-1 '>
        <button className='w-[36px] h-[36px] border-[1.04px] border-[#000000]'>
          <Image width={36} height={36} src={Frame39907} alt=''/>
        </button>
      </div>
      <div className='w-[101.67px] h-[50.16px] sm:relative sm:left-[3rem] lg:relative sm:mx-auto md:mx-auto md:relative md:right-5 lg:w-auto lg:mx-autolg:right-4 '>
        <button className='w-[101.67px] h-[50.16px] border-mixed border-[#000000]'>
        <Image width={80} height={40} src={Frame39908} alt='' /> 
        </button>
      </div>
    </div>




    <div className='h-[950px] top-[887px] px-[37px] py-[3px] gap-[32px] bg-[#C1C7DC] bg-opacity-10 sm:h-auto sm:mx-auto '>

    <div className='flex justify-between items-center  sm:flex sm:justify-around sm:items-center sm:relative sm:mx-auto sm:left-3 md:flex md:justify-between '>

       <div className=' h-[100px ] flex-col justify-between  sm:mx-auto md:mx-2 '>
         <p className='w-[281px] h-[38px] top-[2px] custo-font font-normal text-[13px] leading-[37.8px] text-[#000000] xxs:text-[15px] xxs:ml-6 xs:text-[16px] xs:ml-9 sm:relative sm:text-left sm:text-[16px] lg:text-[28px] transition-all duration-300 '>Our Popular Homes</p>
          <div className='w-[530px] h-[30px] '>
             <p className='w-[540px] h-[30px] custo-font font-[300] text-[12px] leading-[29.7px] text-[#000000] xxs:text-[14px] xxs:ml-6 xs:text-[15px] xs:ml-9 sm:h-auto sm:relative sm:text-left sm:text-[16px] lg:text-[22px] transition-all duration-300 '>Book student acomodation across popular cities</p>
          </div>
       </div>

       <div className='flex items-center sm:relative sm:flex top-[0.5rem] sm:right-[3rem] sm:mx-auto  md:mx-2 '>
        <p className='w-[134px] h-[38px] custo-font font-[300] text-[28px] leading-[37.8px] items-center text-black  sm:h-auto sm:relative sm:text-left sm:text-[16px] lg:text-[22px] transition-all duration-300  '>Explore All</p>
        <button>
        <Image width={31} height={31} src={makiarrow} alt='' className='w-[31px] h-[31px] relative right-0 '   />
        </button>
       </div>

    </div>

      

      <div className='  sm:flex sm:flex-col sm:items-center '>
        <div className=' grid grid-cols-1 gap-4 xxs:grid xxs:grid-cols-1 xxs:items-center xxs:justify-center sm:grid sm:grid-cols-2 sm:h-auto sm:mx-auto sm:justify-start lg:grid lg:grid-cols-4 lg:justify-between  lg:h-auto md:mx-auto md:grid-cols-2 md:justify-between  '>
         


            
            <div className='w-[270px] h-[341px] rounded-[13px] pt-4 pl-2 xxs:ml-[4rem] xs:ml-[8rem] xs:w-[306px] xxs:w-[300px] sm:relative sm:right-[5rem] lg:w-[250px] xl:w-[306px]  '>
             
              <Image width={306} height={228} alt='' src={view1} className='w-[306px] h-[228px] rounded-[13px] ' /> 
              <div className='w-[284.11px] h-[97.96px] pt-2 '>
                <div className='w-[284.11px] h-[57.14px] rounded-[13px]'>
                  <div className='flex items-center w-[167px] h-[26.37px] rounded-[13px]'>
                    <Image width={26.37} height={26.37} alt='' src={mingcute} className='w-[26.37px] h-[26.37px] rounded-[13px] ' />
                    <p className='w-[136px] h-[18px] font-inter text-[13.19px] font-semibold leading-[17.8px] text-[#3D52A0]'>Banaras Island,Lagos</p>
                  </div>
                  <div className='flex justify-between pl-2 w-[280.11px] h-[20.88px] rounded-[13px]'>
                    <div className='flex w-[61.47px] h-[18.68px] rounded-[13px] '>
                      <Image width={18.68} height={18.68} alt='' src={mdibed} className='w-[18.68px] h-[18.68px] rounded-[13px] ' />
                      <p className='w-[34px] h-[16px] font-inter text-[12.09px] font-[600] leading-[16.32px] '>4 Bed</p>
                    </div>
                    <div className='flex w-[71.37px] h-[17.58px] rounded-[13px] '>
                    <Image width={17.58} height={17.58} alt='' src={mdigraphbox} className='w-[17.58px] h-[17.58px] rounded-[13px] ' />
                    <p className='w-[45px] h-[16px] font-inter text-[12.09px] font-[600] leading-[16.32px] '>4 Bed</p>
                    </div>
                    <div className='flex w-[69.27px] h-[16.48px] rounded-[13px] '>
                    <Image width={16.48} height={16.48} alt='' src={mdigraphline} className='w-[16.48px] h-[16.48px] rounded-[13px] ' />
                    <p className='w-[44px] h-[16px] font-inter text-[12.09px] font-[600] leading-[16.32px] '>4 Bed</p>
                    </div>
                  </div>
                </div>
                <div className='pr-[170px]'>
                <button className='w-[94.49px] h-[32.96px] rounded-[5px] bg-[#3D52A0] text-white font-inter text-[13.19px] font-[500] leading-[17.8px] '>
                  Book Now

                </button>
                </div>
              
              </div>

            </div>
            <div className='w-[270px] h-[341px] rounded-[13px] pt-4 pl-2 xxs:ml-[4rem] xs:ml-[8rem] xs:w-[306px] xxs:w-[300px] sm:relative sm:right-[5rem] lg:w-[250px] xl:w-[306px]  '>
             
              <Image width={306} height={228} alt='' src={view2} className='w-[306px] h-[228px] rounded-[13px] ' /> 
              <div className='w-[284.11px] h-[97.96px] pt-2 '>
                <div className='w-[284.11px] h-[57.14px] rounded-[13px]'>
                  <div className='flex items-center w-[167px] h-[26.37px] rounded-[13px]'>
                    <Image width={26.37} height={26.37} alt='' src={mingcute} className='w-[26.37px] h-[26.37px] rounded-[13px] ' />
                    <p className='w-[136px] h-[18px] font-inter text-[13.19px] font-semibold leading-[17.8px] text-[#3D52A0]'>Banaras Island,Lagos</p>
                  </div>
                  <div className='flex justify-between pl-2 w-[280.11px] h-[20.88px] rounded-[13px]'>
                    <div className='flex w-[61.47px] h-[18.68px] rounded-[13px] '>
                      <Image width={18.68} height={18.68} alt='' src={mdibed} className='w-[18.68px] h-[18.68px] rounded-[13px] ' />
                      <p className='w-[34px] h-[16px] font-inter text-[12.09px] font-[600] leading-[16.32px] '>4 Bed</p>
                    </div>
                    <div className='flex w-[71.37px] h-[17.58px] rounded-[13px] '>
                    <Image width={17.58} height={17.58} alt='' src={mdigraphbox} className='w-[17.58px] h-[17.58px] rounded-[13px] ' />
                    <p className='w-[45px] h-[16px] font-inter text-[12.09px] font-[600] leading-[16.32px] '>4 Bed</p>
                    </div>
                    <div className='flex w-[69.27px] h-[16.48px] rounded-[13px] '>
                    <Image width={16.48} height={16.48} alt='' src={mdigraphline} className='w-[16.48px] h-[16.48px] rounded-[13px] ' />
                    <p className='w-[44px] h-[16px] font-inter text-[12.09px] font-[600] leading-[16.32px] '>4 Bed</p>
                    </div>
                  </div>
                </div>
                <div className='pr-[170px]'>
                <button className='w-[94.49px] h-[32.96px] rounded-[5px] bg-[#3D52A0] text-white font-inter text-[13.19px] font-[500] leading-[17.8px] '>
                  Book Now

                </button>
                </div>
              
              </div>

            </div>
            <div className='w-[270px] h-[341px] rounded-[13px] pt-4 pl-2 xxs:ml-[4rem] xs:ml-[8rem] xs:w-[306px] xxs:w-[300px] sm:relative sm:right-[5rem] lg:w-[250px] xl:w-[306px]  '>
             
              <Image width={306} height={228} alt='' src={view3} className='w-[306px] h-[228px] rounded-[13px] ' /> 
              <div className='w-[284.11px] h-[97.96px] pt-2 '>
                <div className='w-[284.11px] h-[57.14px] rounded-[13px]'>
                  <div className='flex items-center w-[167px] h-[26.37px] rounded-[13px]'>
                    <Image width={26.37} height={26.37} alt='' src={mingcute} className='w-[26.37px] h-[26.37px] rounded-[13px] ' />
                    <p className='w-[136px] h-[18px] font-inter text-[13.19px] font-semibold leading-[17.8px] text-[#3D52A0]'>Banaras Island,Lagos</p>
                  </div>
                  <div className='flex justify-between pl-2 w-[280.11px] h-[20.88px] rounded-[13px]'>
                    <div className='flex w-[61.47px] h-[18.68px] rounded-[13px] '>
                      <Image width={18.68} height={18.68} alt='' src={mdibed} className='w-[18.68px] h-[18.68px] rounded-[13px] ' />
                      <p className='w-[34px] h-[16px] font-inter text-[12.09px] font-[600] leading-[16.32px] '>4 Bed</p>
                    </div>
                    <div className='flex w-[71.37px] h-[17.58px] rounded-[13px] '>
                    <Image width={17.58} height={17.58} alt='' src={mdigraphbox} className='w-[17.58px] h-[17.58px] rounded-[13px] ' />
                    <p className='w-[45px] h-[16px] font-inter text-[12.09px] font-[600] leading-[16.32px] '>4 Bed</p>
                    </div>
                    <div className='flex w-[69.27px] h-[16.48px] rounded-[13px] '>
                    <Image width={16.48} height={16.48} alt='' src={mdigraphline} className='w-[16.48px] h-[16.48px] rounded-[13px] ' />
                    <p className='w-[44px] h-[16px] font-inter text-[12.09px] font-[600] leading-[16.32px] '>4 Bed</p>
                    </div>
                  </div>
                </div>
                <div className='pr-[170px]'>
                <button className='w-[94.49px] h-[32.96px] rounded-[5px] bg-[#3D52A0] text-white font-inter text-[13.19px] font-[500] leading-[17.8px] '>
                  Book Now

                </button>
                </div>
              
              </div>

            </div>
            <div className='w-[270px] h-[341px] rounded-[13px] pt-4 pl-2 xxs:ml-[4rem] xs:ml-[8rem] xs:w-[306px] xxs:w-[300px] sm:relative sm:right-[5rem] lg:w-[250px] xl:w-[306px]  '>
             
              <Image width={306} height={228} src={view4} alt='' className='w-[306px] h-[228px] rounded-[13px] ' /> 
              <div className='w-[284.11px] h-[97.96px] pt-2 '>
                <div className='w-[284.11px] h-[57.14px] rounded-[13px]'>
                  <div className='flex items-center w-[167px] h-[26.37px] rounded-[13px]'>
                    <Image width={26.37} height={26.37} src={mingcute} alt='' className='w-[26.37px] h-[26.37px] rounded-[13px] ' />
                    <p className='w-[136px] h-[18px] font-inter text-[13.19px] font-semibold leading-[17.8px] text-[#3D52A0]'>Banaras Island,Lagos</p>
                  </div>
                  <div className='flex justify-between pl-2 w-[280.11px] h-[20.88px] rounded-[13px]'>
                    <div className='flex w-[61.47px] h-[18.68px] rounded-[13px] '>
                      <Image width={18.68} height={18.68} src={mdibed} alt='' className='w-[18.68px] h-[18.68px] rounded-[13px] ' />
                      <p className='w-[34px] h-[16px] font-inter text-[12.09px] font-[600] leading-[16.32px] '>4 Bed</p>
                    </div>
                    <div className='flex w-[71.37px] h-[17.58px] rounded-[13px] '>
                    <Image width={17.58} height={17.58} src={mdigraphbox} alt='' className='w-[17.58px] h-[17.58px] rounded-[13px] ' />
                    <p className='w-[45px] h-[16px] font-inter text-[12.09px] font-[600] leading-[16.32px] '>4 Bed</p>
                    </div>
                    <div className='flex w-[69.27px] h-[16.48px] rounded-[13px] '>
                    <Image width={16.48} height={16.48} src={mdigraphline} alt='' className='w-[16.48px] h-[16.48px] rounded-[13px] ' />
                    <p className='w-[44px] h-[16px] font-inter text-[12.09px] font-[600] leading-[16.32px] '>4 Bed</p>
                    </div>
                  </div>
                </div>
                <div className='pr-[170px]'>
                <button className='w-[94.49px] h-[32.96px] rounded-[5px] bg-[#3D52A0] text-white font-inter text-[13.19px] font-[500] leading-[17.8px] '>
                  Book Now

                </button>
                </div>
              
              </div>

            </div>
            
            
        
      
          <div className='w-[270px] h-[341px] rounded-[13px] pt-4 pl-2 xxs:ml-[4rem] xs:ml-[8rem] xs:w-[306px] xxs:w-[300px] sm:relative sm:right-[5rem] lg:w-[250px] xl:w-[306px]  '>
             
             <Image width={306} height={228} src={view5} alt='' className='w-[306px] h-[228px] rounded-[13px] ' /> 
             <div className='w-[284.11px] h-[97.96px] pt-2 '>
               <div className='w-[284.11px] h-[57.14px] rounded-[13px]'>
                 <div className='flex items-center w-[167px] h-[26.37px] rounded-[13px]'>
                   <Image width={26.37} height={26.37} src={mingcute} alt='' className='w-[26.37px] h-[26.37px] rounded-[13px] ' />
                   <p className='w-[136px] h-[18px] font-inter text-[13.19px] font-semibold leading-[17.8px] text-[#3D52A0]'>Banaras Island,Lagos</p>
                 </div>
                 <div className='flex justify-between pl-2 w-[280.11px] h-[20.88px] rounded-[13px]'>
                   <div className='flex w-[61.47px] h-[18.68px] rounded-[13px] '>
                     <Image width={18.68} height={18.68} src={mdibed} alt='' className='w-[18.68px] h-[18.68px] rounded-[13px] ' />
                     <p className='w-[34px] h-[16px] font-inter text-[12.09px] font-[600] leading-[16.32px] '>4 Bed</p>
                   </div>
                   <div className='flex w-[71.37px] h-[17.58px] rounded-[13px] '>
                   <Image width={17.58} height={17.58} src={mdigraphbox} alt='' className='w-[17.58px] h-[17.58px] rounded-[13px] ' />
                   <p className='w-[45px] h-[16px] font-inter text-[12.09px] font-[600] leading-[16.32px] '>4 Bed</p>
                   </div>
                   <div className='flex w-[69.27px] h-[16.48px] rounded-[13px] '>
                   <Image width={16.48} height={16.48} src={mdigraphline} alt='' className='w-[16.48px] h-[16.48px] rounded-[13px] ' />
                   <p className='w-[44px] h-[16px] font-inter text-[12.09px] font-[600] leading-[16.32px] '>4 Bed</p>
                   </div>
                 </div>
               </div>
               <div className='pr-[170px]'>
               <button className='w-[94.49px] h-[32.96px] rounded-[5px] bg-[#3D52A0] text-white font-inter text-[13.19px] font-[500] leading-[17.8px] '>
                 Book Now

               </button>
               </div>
             
             </div>

           </div>
           <div className='w-[270px] h-[341px] rounded-[13px] pt-4 pl-2 xxs:ml-[4rem] xs:ml-[8rem] xs:w-[306px] xxs:w-[300px] sm:relative sm:right-[5rem] lg:w-[250px] xl:w-[306px]  '>
             
              <Image width={306} height={228} src={view6} alt='' className='w-[306px] h-[228px] rounded-[13px] ' /> 
              <div className='w-[284.11px] h-[97.96px] pt-2 '>
                <div className='w-[284.11px] h-[57.14px] rounded-[13px]'>
                  <div className='flex items-center w-[167px] h-[26.37px] rounded-[13px]'>
                    <Image width={26.37} height={26.37} src={mingcute} alt='' className='w-[26.37px] h-[26.37px] rounded-[13px] ' />
                    <p className='w-[136px] h-[18px] font-inter text-[13.19px] font-semibold leading-[17.8px] text-[#3D52A0]'>Banaras Island,Lagos</p>
                  </div>
                  <div className='flex justify-between pl-2 w-[280.11px] h-[20.88px] rounded-[13px]'>
                    <div className='flex w-[61.47px] h-[18.68px] rounded-[13px] '>
                      <Image width={18.68} height={18.68} src={mdibed} alt='' className='w-[18.68px] h-[18.68px] rounded-[13px] ' />
                      <p className='w-[34px] h-[16px] font-inter text-[12.09px] font-[600] leading-[16.32px] '>4 Bed</p>
                    </div>
                    <div className='flex w-[71.37px] h-[17.58px] rounded-[13px] '>
                    <Image width={17.58} height={17.58} src={mdigraphbox} alt='' className='w-[17.58px] h-[17.58px] rounded-[13px] ' />
                    <p className='w-[45px] h-[16px] font-inter text-[12.09px] font-[600] leading-[16.32px] '>4 Bed</p>
                    </div>
                    <div className='flex w-[69.27px] h-[16.48px] rounded-[13px] '>
                    <Image width={16.48} height={16.48} src={mdigraphline} alt='' className='w-[16.48px] h-[16.48px] rounded-[13px] ' />
                    <p className='w-[44px] h-[16px] font-inter text-[12.09px] font-[600] leading-[16.32px] '>4 Bed</p>
                    </div>
                  </div>
                </div>
                <div className='pr-[170px]'>
                <button className='w-[94.49px] h-[32.96px] rounded-[5px] bg-[#3D52A0] text-white font-inter text-[13.19px] font-[500] leading-[17.8px] '>
                  Book Now

                </button>
                </div>
              
              </div>

            </div>
            <div className='w-[270px] h-[341px] rounded-[13px] pt-4 pl-2 xxs:ml-[4rem] xs:ml-[8rem] xs:w-[306px] xxs:w-[300px] sm:relative sm:right-[5rem] lg:w-[250px] xl:w-[306px]  '>
             
              <Image width={306} height={228} src={view7} alt='' className='w-[306px] h-[228px] rounded-[13px] ' /> 
              <div className='w-[284.11px] h-[97.96px] pt-2 '>
                <div className='w-[284.11px] h-[57.14px] rounded-[13px]'>
                  <div className='flex items-center w-[167px] h-[26.37px] rounded-[13px]'>
                    <Image width={26.37} height={26.37} src={mingcute} alt='' className='w-[26.37px] h-[26.37px] rounded-[13px] ' />
                    <p className='w-[136px] h-[18px] font-inter text-[13.19px] font-semibold leading-[17.8px] text-[#3D52A0]'>Banaras Island,Lagos</p>
                  </div>
                  <div className='flex justify-between pl-2 w-[280.11px] h-[20.88px] rounded-[13px]'>
                    <div className='flex w-[61.47px] h-[18.68px] rounded-[13px] '>
                      <Image width={18.68} height={18.68} src={mdibed} alt='' className='w-[18.68px] h-[18.68px] rounded-[13px] ' />
                      <p className='w-[34px] h-[16px] font-inter text-[12.09px] font-[600] leading-[16.32px] '>4 Bed</p>
                    </div>
                    <div className='flex w-[71.37px] h-[17.58px] rounded-[13px] '>
                    <Image width={17.58} height={17.58} src={mdigraphbox} alt='' className='w-[17.58px] h-[17.58px] rounded-[13px] ' />
                    <p className='w-[45px] h-[16px] font-inter text-[12.09px] font-[600] leading-[16.32px] '>4 Bed</p>
                    </div>
                    <div className='flex w-[69.27px] h-[16.48px] rounded-[13px] '>
                    <Image width={16.48} height={16.48} src={mdigraphline} alt='' className='w-[16.48px] h-[16.48px] rounded-[13px] ' />
                    <p className='w-[44px] h-[16px] font-inter text-[12.09px] font-[600] leading-[16.32px] '>4 Bed</p>
                    </div>
                  </div>
                </div>
                <div className='pr-[170px]'>
                <button className='w-[94.49px] h-[32.96px] cursor-pointer rounded-[5px] bg-[#3D52A0] text-white font-inter text-[13.19px] font-[500] leading-[17.8px] '>
                  Book Now

                </button>
                </div>
              
              </div>

            </div>
            <div className='w-[270px] h-[341px] rounded-[13px] pt-4 pl-2 xxs:ml-[4rem] xs:ml-[8rem] xs:w-[306px] xxs:w-[300px] sm:relative sm:right-[5rem] lg:w-[250px] xl:w-[306px] '>
             
              <Image width={284.11} height={97.96} src={view8} alt='' className='w-[306px] h-[228px] rounded-[13px] ' /> 
              <div className='w-[284.11px] h-[97.96px] pt-2 '>
                <div className='w-[284.11px] h-[57.14px] rounded-[13px]'>
                  <div className='flex items-center w-[167px] h-[26.37px] rounded-[13px]'>
                    <Image width={26.37} height={26.37} src={mingcute} alt='' className='w-[26.37px] h-[26.37px] rounded-[13px] ' />
                    <p className='w-[136px] h-[18px] font-inter text-[13.19px] font-semibold leading-[17.8px] text-[#3D52A0]'>Banaras Island,Lagos</p>
                  </div>
                  <div className='flex justify-between pl-2 w-[280.11px] h-[20.88px] rounded-[13px]'>
                    <div className='flex w-[61.47px] h-[18.68px] rounded-[13px] '>
                      <Image width={18.68} height={18.68} src={mdibed} alt='' className='w-[18.68px] h-[18.68px] rounded-[13px] ' />
                      <p className='w-[34px] h-[16px] font-inter text-[12.09px] font-[600] leading-[16.32px] '>4 Bed</p>
                    </div>
                    <div className='flex w-[71.37px] h-[17.58px] rounded-[13px] '>
                    <Image width={17.58} height={17.58} src={mdigraphbox} alt='' className='w-[17.58px] h-[17.58px] rounded-[13px] ' />
                    <p className='w-[45px] h-[16px] font-inter text-[12.09px] font-[600] leading-[16.32px] '>4 Bed</p>
                    </div>
                    <div className='flex w-[69.27px] h-[16.48px] rounded-[13px] '>
                    <Image width={16.48} height={16.48} src={mdigraphline} alt='' className='w-[16.48px] h-[16.48px] rounded-[13px] ' />
                    <p className='w-[44px] h-[16px] font-inter text-[12.09px] font-[600] leading-[16.32px] '>4 Bed</p>
                    </div>
                  </div>
                </div>
                <div className='pr-[170px]'>
                <button className='w-[94.49px] h-[32.96px] rounded-[5px] bg-[#3D52A0] text-white font-inter text-[13.19px] font-[500] leading-[17.8px] ' >
                  Book Now

                </button>
                </div>
              
              </div>

            </div>

        
        </div>
      </div>




      <button className='h-[48px] pt-10 relative left-[3rem] top-[1rem] xxs:relative xxs:left-[7rem] xxs:top-[1rem] xs:left-[11rem] xs:top-[1rem] sm:relative sm:right-[10rem] sm:top-[3rem] sm:flex sm:justify-center sm:w-full lg:relative lg:mb-[1rem] left-[2rem] '>
      <div className='w-[170.43px] h-[48px] rounded-[4.17px]  text-[#000000] border border-[#4A61B5] sm:relative sm:right-[10rem] sm:top-[0.6rem]'>
          <div className='flex items-center w-[145.91px] h-[15px] pt-[23px] pl-2'>
            <p className='w-[149px] h-[15px] custo-font text-[11.13px] font-[500] leading-[15.03px] text-black'>View All the Cities</p>
            <Image  src={Arrow3} alt='' className=' pl-2' />
          </div>
        </div>
      </button>
    </div>




    <div className='h-[613px]  py-[20px] gap-[29px] relative top-[132rem] flex flex-col items-center sm:relative sm:top-[7rem] lg:relative lg:top-[4rem]  '>
      <div className='h-[77px] w-fixed flex flex-col items-center pl-[150px]  '>
        <p className='w-[440px] h-[57px] custo-font font-[400] text-[28px] pr-[11rem] leading-[57px] items-center xs:relative xs:left-[5rem] xs:text-[32px] xs:w-[600px] sm:text-[38px] sm:w-[638px] sm:mr-[2rem] lg:text-[38px] lg:mr-[0rem] xl:text-[38px] xl:mr-[0rem]  '>Book in 4 easy steps</p>
        <p className='w-[320px] h-[20px] custo-font font-[400] text-[12px] leading-[19.5px] items-center mr-[8rem] xs:text-[11px] xs:relative xs:left-[1rem] xs:w-auto xs:pr-[4rem] pt-2 sm:ml-3 sm:text-[15px] sm:w-[638px] lg:text-[15px] lg:mr-[2rem] xl:text-[15px] xl:mr-[6rem]'>Hassle free booking with prioritize 1 on 1 support ,and peace of mind for students</p>
      </div>
      <div className='grid grid-cols-1 gap-[10px]   pt-[30px] sm:grid sm:grid-cols-2 sm:gap-4 sm:w-auto lg:grid lg:grid-cols-4 sm:place-items-center '>
        <div className='w-[310px] h-[467px] rounded-[20px] border-[3px] border-[#C1C7DC] sm:w-[260px] md:w-[310px] lg:w-[245px]  lg:mx-auto  xl:w-[310px]   '>
          <div className='w-[113px] h-[113px] relative top-[35px] left-[100px]  '>
            <Image width={94} height={94} src={ellipse1} alt='' className='w-[94px] h-[94px]  '  />
          </div>
          <p className='w-[279px] h-[64px] top-[30px] custo-font font-[500] text-[21px] leading-[31.5px] relative pl-[38px] pb-[15px] text-center sm:pr-[3rem] md:ml-[1rem] lg:mr-[4rem] xl:pl-[4rem] xl:w-auto '>Discover verified properties</p>
          <p className='w-[290px] h-[119px] top-[30px] custo-font font-[400] text-[16px] leading-[24px] relative pt-[30px] pl-[6px] text-center sm:w-[240px] md:ml-[2rem] lg:relative lg:right-[2rem] lg:w-[240px] xl:w-[290px]'>Student accommodation is often located close to campus, saving time on commutes and making it easier to get to classes and activities</p>
        </div>

        <div className='w-[310px] h-[467px] rounded-[20px] border-[3px] border-[#C1C7DC] sm:w-[260px] sm:ml-[4rem] md:w-[310px] lg:w-[245px] lg:mx-auto xl:w-[310px] '>
          <div className='w-[113px] h-[113px] relative top-[35px] left-[100px] '>
            <Image width={94} height={94} src={ellipse2} alt='' className='w-[94px] h-[94px]  '  />
          </div>
          <p className='w-[268px] h-[64px] top-[30px] custo-font font-[500] text-[21px] leading-[31.5px] relative pl-[38px] pb-[15px] text-center sm:pr-[3rem] md:ml-[1rem] lg:pr-[3rem] xl:pl-[4rem] xl:w-auto'>Discover verified properties</p>
          <p className='w-[290px] h-[119px] top-[30px] custo-font font-[400] text-[16px] leading-[24px] relative pt-[30px] pl-[6px] text-center sm:w-[240px] md:ml-[2rem] lg:relative lg:right-[2rem] lg:w-[240px] xl:w-[290px]'>Student accommodation is often located close to campus, saving time on commutes and making it easier to get to classes and activities</p>
        </div>
        <div className='w-[310px] h-[467px] rounded-[20px] border-[3px] border-[#C1C7DC] sm:w-[260px] md:w-[310px] lg:w-[245px] lg:mx-auto xl:w-[310px] '>
          <div className='w-[113px] h-[113px] relative top-[35px] left-[100px] '>
            <Image width={94} height={94} src={ellipse3} alt='' className='w-[94px] h-[94px]  '  />
          </div>
          <p className='w-[268px] h-[64px] top-[30px] custo-font font-[500] text-[21px] leading-[31.5px] relative pl-[38px] pb-[15px] text-center sm:pr-[3rem] md:ml-[1rem] lg:pr-[3rem] xl:pl-[4rem] xl:w-auto'>Discover verified properties</p>
          <p className='w-[290px] h-[119px] top-[30px] custo-font font-[400] text-[16px] leading-[24px] relative pt-[30px] pl-[6px] text-center sm:w-[240px] md:ml-[2rem] lg:relative lg:right-[2rem] lg:w-[240px] xl:w-[290px]'>Student accommodation is often located close to campus, saving time on commutes and making it easier to get to classes and activities</p>
        </div>
        <div className='w-[310px] h-[467px] rounded-[20px] border-[3px] border-[#C1C7DC] sm:w-[260px] sm:ml-[4rem] md:w-[310px] lg:w-[245px] lg:mx-auto xl:w-[310px]  '>
          <div className='w-[113px] h-[113px] relative top-[35px] left-[100px] '>
            <Image width={94} height={94} src={ellipse4} alt='' className='w-[94px] h-[94px]  '  />
          </div>
          <p className='w-[268px] h-[64px] top-[30px] custo-font font-[500] text-[21px] leading-[31.5px] relative pl-[38px] pb-[15px] text-center sm:pr-[3rem] md:ml-[1rem] lg:pr-[3rem] xl:pl-[4rem] xl:w-auto'>Discover verified properties</p>
          <p className='w-[290px] h-[119px] top-[30px] custo-font font-[400] text-[16px] leading-[24px] relative pt-[30px] pl-[6px] text-center sm:w-[240px] md:ml-[2rem] lg:w-[240px] lg:relative lg:right-[2rem] xl:w-[290px] '>Student accommodation is often located close to campus, saving time on commutes and making it easier to get to classes and activities</p>
        </div>
      </div>
    </div>



    <div className=' w-fill h-[402px] gap-[57px] pt-9  relative top-[222rem] flex flex-col items-center sm:items-center sm:relative sm:top-[40rem] lg:relative lg:top-[3rem] '>
      <p className='h-[50px] custo-font font-[400] text-[33px] leading-[49.5px] pt-7 '>Our services</p>
      <div className='grid grid-cols-1 gap-[10px]  pt-3 pl-3 sm:grid sm:grid-cols-2 sm:gap-4 sm:w-auto lg:grid lg:grid-cols-4 '>
        <div className=' h-[295px]  rounded-[20px] border-[2px] border-[#C1C7DC] sm:w-[260px] md:w-[310px] lg:w-[245px]  lg:mx-auto xl:w-[310px]  '>
          <Image width={113} height={113} src={ellipse11} alt='' className='w-[113px] h-[113px] relative left-[79px] top-[50px] sm:pr-[1rem] md:ml-[1rem] lg:left-auto lg:right-[-4rem] xl:pl-[1rem] xl:w-auto' />
          <p className='w-[205px] h-[38px] custo-font font-[400] text-[25px] leading-[37.5px] text-center relative left-[38px] top-[65px] sm:pr-[3rem] md:ml-[1rem] lg:left-auto lg:right-[-2rem] xl:pl-[0.1rem] xl:w-auto'>Communication</p>
        </div>
        <div className=' h-[295px] rounded-[20px] border-[2px] border-[#C1C7DC] sm:w-[260px] md:w-[310px] lg:w-[245px]  lg:mx-auto xl:w-[310px] '>
          <Image width={113} height={113} src={ellipse12} alt='' className='w-[113px] h-[113px] pl-2 relative left-[70px] top-[50px] sm:left-auto sm:right-[-4rem] md:ml-[2rem] lg:relative lg:left-[1.5rem] xl:pl-[2.5rem] xl:w-auto' />
          <p className='w-[205px] h-[38px] custo-font font-[400] text-[25px] text-center leading-[37.5px] relative left-[35px] top-[65px] sm:pr-[3rem] md:ml-[2rem] lg:relative lg:left-[1rem] xl:pl-[0.1rem] xl:w-auto'>Realibility</p>
        </div>
        <div className=' h-[295px] rounded-[20px] border-[2px] border-[#C1C7DC] sm:w-[260px] md:w-[310px] lg:w-[245px]  lg:mx-auto xl:w-[310px] '>
          <Image width={113} height={113} src={ellipse13} alt='' className='w-[125px] h-[113px] pl-3 relative left-[75px] top-[50px] sm:left-auto sm:right-[-3rem] md:ml-[2rem] lg:relative lg:left-[1.5rem] xl:pl-[2.5rem] xl:w-auto' />
          <p className='w-[205px] h-[38px] custo-font font-[400] text-[25px] leading-[37.5px] text-center relative left-[40px] top-[65px] sm:pr-[3rem] md:ml-[2rem] lg:relative lg:left-[1rem] xl:pl-[0.1rem] xl:w-auto'>Quality First</p>
        </div>
        <div className='w-[260px] h-[295px] rounded-[20px] border-[2px] border-[#C1C7DC] sm:w-[260px] md:w-[310px] lg:w-[245px]  lg:mx-auto xl:w-[310px] '>
          <Image width={113} height={113} src={ellipse14} alt='' className='w-[140px] h-[113px] relative pl-2 left-[59px] top-[50px] sm:left-auto sm:right-[-3rem] md:ml-[2rem]  lg:relative lg:left-[1.5rem] xl:pl-[2.5rem] xl:w-auto' />
          <p className='w-[205px] h-[38px] custo-font font-[400] text-center text-[25px] leading-[37.5px] relative left-[29px] top-[65px] sm:pr-[3rem] md:ml-[2rem] lg:relative lg:left-[1rem] xl:pl-[0.1rem] xl:w-auto'>Student Friendly</p>
        </div>
      </div>
      

    </div>


    <div className='h-[613px] px-[52px] py-[20px] gap-[29px] relative top-[283rem] flex flex-col items-center xxs:relative xxs:left-[4rem] sm:relative sm:flex sm:items-center sm:mt-[-217rem] lg:relative lg:mt-[-275rem] '>
      <div className='h-[77px] w-fixed pl-[430px] flex flex-col items-center xxs:relative xxs:right-[3rem]   '>
        <p className='w-[570px] h-[57px] custo-font font-[400] text-[28px] relative right-[2rem] leading-[57px] xs:text-[32px] xs:mr-8 items-center sm:flex sm:items-center lg:mr-[0rem] lg:text-[36px] '>Why Choose Us</p>
        <p className='w-[355px] h-[20px] custo-font font-[400] text-[11px] relative right-[12rem] text-center leading-[19.5px] xs:text-[15px] items-center pr-[50px] pt-2 sm:flex sm:items-center sm:relative sm:right-[11rem] sm:w-[600px] lg:text-[15px] '>Hassle free with prioritize security,and peace of mind for students and their parents</p>
      </div>
      <div className='grid grid-cols-1 gap-[10px] pt-[30px] relative right-[3rem] sm:grid sm:grid-cols-2 sm:gap-4 sm:w-auto sm:relative sm:right-[2.5rem] lg:grid lg:grid-cols-4 '>
        <div className='w-[310px] h-[467px] rounded-[20px] border-[3px] border-[#C1C7DC] sm:w-[260px] md:w-[310px] lg:w-[245px]  lg:mx-auto  xl:w-[310px]'>
          <div className='w-[113px] h-[113px] relative top-[35px] left-[100px] sm:relative sm:left-[5rem] md:relative md:left-[7rem]'>
            <Image  src={ellipse11} width={94} height={94} alt='' className='w-[94px] h-[94px] sm:'  />
          </div>
          <p className='w-[258px] h-[64px] top-[30px] custo-font font-[500] text-[21px] text-center leading-[31.5px] relative pl-[38px] pb-[15px] sm:pr-[3rem] md:ml-[1rem] lg:mr-[4rem] xl:pl-[4rem] xl:w-auto '>Convenience and Social Life</p>
          <p className='w-[290px] h-[119px] top-[30px] custo-font font-[400] text-[16px] text-center leading-[24px] relative pt-[30px] pl-[6px] sm:w-[240px] md:ml-[2rem] lg:relative lg:right-[2rem] lg:w-[240px] xl:w-[290px]'>Student accommodation is often located close to campus, saving time on commutes and making it easier to get to classes and activities</p>
        </div>
        <div className='w-[310px] h-[467px] rounded-[20px] border-[3px] border-[#C1C7DC] sm:w-[260px] md:w-[310px] lg:w-[245px]  lg:mx-auto  xl:w-[310px]'>
          <div className='w-[113px] h-[113px] relative top-[35px] left-[100px] md:relative md:left-[7rem]'>
            <Image width={94} height={94} src={ellipse12} alt='' className='w-[94px] h-[94px] sm:relative sm:right-[1rem] '  />
          </div>
          <p className='w-[258px] h-[64px] top-[30px] custo-font font-[500] text-[21px] text-center leading-[31.5px] relative pl-[38px] pb-[15px] sm:pr-[3rem] md:ml-[1rem] lg:mr-[4rem] xl:pl-[4rem] xl:w-auto '>Hassle-free living</p>
          <p className='w-[290px] h-[119px] top-[30px] custo-font font-[400] text-[16px] text-center leading-[24px] relative pt-[30px] pl-[6px] sm:w-[240px] md:ml-[2rem] lg:relative lg:right-[2rem] lg:w-[240px] xl:w-[290px]'>Student accommodation is often located close to campus, saving time on commutes and making it easier to get to classes and activities</p>
        </div>
        <div className='w-[310px] h-[467px] rounded-[20px] border-[3px] border-[#C1C7DC] sm:w-[260px] md:w-[310px] lg:w-[245px]  lg:mx-auto  xl:w-[310px]'>
          <div className='w-[113px] h-[113px] relative top-[35px] left-[100px] sm:relative sm:left-[5rem] md:relative md:left-[6rem]'>
            <Image width={94} height={94} src={ellipse13} alt='' className='w-[94px] h-[94px]  '  />
          </div>
          <p className='w-[258px] h-[64px] top-[30px] custo-font font-[500] text-[21px] text-center leading-[31.5px] relative pl-[38px] pb-[15px] sm:pr-[3rem] md:ml-[1rem] lg:mr-[4rem] xl:pl-[4rem] xl:w-auto '>Safety and Security</p>
          <p className='w-[290px] h-[119px] top-[30px] custo-font font-[400] text-[16px] text-center leading-[24px] relative pt-[30px] pl-[6px] sm:w-[240px] md:ml-[2rem] lg:relative lg:right-[2rem] lg:w-[240px] xl:w-[290px]'>Student accommodation is often located close to campus, saving time on commutes and making it easier to get to classes and activities</p>
        </div>
        <div className='w-[310px] h-[467px] rounded-[20px] border-[3px] border-[#C1C7DC] sm:w-[260px] md:w-[310px] lg:w-[245px]  lg:mx-auto  xl:w-[310px]'>
          <div className='w-[113px] h-[113px] relative top-[35px] left-[100px] sm:relative sm:left-[5rem] md:relative md:left-[6rem]'>
            <Image width={94} height={94} src={ellipse14} alt='' className='w-[94px] h-[94px]  '  />
          </div>
          <p className='w-[258px] h-[64px] top-[30px]  custo-font font-[500] text-[21px] text-center leading-[31.5px] relative  pl-[38px] pb-[15px] sm:pr-[3rem] md:ml-[1rem] lg:mr-[4rem] xl:pl-[4rem] xl:w-auto '>Support Services</p>
          <p className='w-[290px] h-[119px] top-[30px] custo-font font-[400] text-[16px] text-center leading-[24px] relative pt-[30px] pl-[6px] sm:w-[240px] md:ml-[2rem] lg:relative lg:right-[2rem] lg:w-[240px] xl:w-[290px]'>Student accommodation is often located close to campus, saving time on commutes and making it easier to get to classes and activities</p>
        </div>
      </div>
    </div>





    <div className='w-auto relative top-[375rem] flex flex-col items-center left-[3rem] sm:left-[5rem] xxs:relative xxs:left-[4rem] sm:relative sm:mt-[-57rem] lg:relative lg:mt-[-87rem] mr-[8rem] '>
      <div className='h-[83px] flex flex-col items-center '>
      <p className=' w-[300px] h-[50px] custo-font font-[400] text-[23px] relative left-[4rem] sm:mr-[5rem] leading-[49.5px] sm:text-[33px] lg:text-[33px] '>Get in touch with Us</p>
      <p className='h-[33px] custo-font font-[400] text-[14px] leading-[33px] sm:text-[22px] lg:text-[22px] relative left-[1rem] '>If you have any query feel free to contact us</p>

      </div>
      <div className='grid grid-cols-1 gap-[10px]  pt-9 relative right-[2.5rem] sm:grid sm:grid-cols-2 xxs:relative xxs:left-[1rem]  sm:w-auto sm:relative sm:right-[1rem]  lg:grid lg:grid-cols-4'>
        
        <div className='w-[310px] h-[295px] rounded-[20px] border-[2px] border-[#C1C7DC] sm:w-[260px] md:w-[310px] lg:w-[245px]  lg:mx-auto xl:w-[310px] '>
          <Image width={113} height={113} src={ellipse15} alt='' className='w-[113px] h-[113px] relative left-[85px] top-[50px] sm:left-auto sm:right-[-4rem] md:ml-[2rem] lg:relative lg:left-[1.5rem] xl:pl-[2.5rem] xl:w-auto ' />
          <p className='w-[205px] h-[38px] custo-font font-[400] text-[25px] leading-[37.5px] relative left-[110px] top-[65px] sm:relative sm:left-[5rem] md:ml-[2rem] lg:left-[3rem] xl:pl-[2rem]'>call us</p>
        </div>
        <div className='w-[310px] h-[295px] rounded-[20px] border-[2px] border-[#C1C7DC] sm:w-[260px] md:w-[310px] lg:w-[245px]  lg:mx-auto xl:w-[310px] '>
          <Image width={113} height={113}  src={ellipse16} alt='' className='w-[113px] h-[113px] relative left-[100px] top-[50px] sm:left-auto sm:right-[-4rem] md:ml-[2rem] lg:relative lg:left-[1.5rem] xl:pl-[2.5rem] xl:w-auto' />
          <p className='w-[205px] h-[38px] custo-font font-[400] text-[25px] leading-[37.5px] relative left-[110px] top-[65px] sm:left-[5rem]  md:ml-[1rem]  lg:left-[3rem] xl:pl-[2hrem] xl:w-auto '>Email Us</p>
        </div>
        <div className='w-[310px] h-[295px] rounded-[20px] border-[2px] border-[#C1C7DC] sm:w-[260px] md:w-[310px] lg:w-[245px]  lg:mx-auto xl:w-[310px] '>
          <Image width={113} height={113}  src={ellipse17} alt='' className='w-[113px] h-[113px] relative left-[100px] top-[50px] sm:left-auto sm:right-[-4rem] md:ml-[2rem] lg:relative lg:left-[1.5rem] xl:pl-[2.5rem] xl:w-auto' />
          <p className='w-[205px] h-[38px] custo-font font-[400] text-[25px] leading-[37.5px] relative left-[70px] top-[65px] sm:left-[2rem] sm:w-auto md:ml-[1 rem]  lg:right-[1rem] xl:pl-[1.5rem]'>Chat on Whatsapp</p>
        </div>
        <div className='w-[310px] h-[295px] rounded-[20px] border-[2px] border-[#C1C7DC] sm:w-[260px] md:w-[310px] lg:w-[245px]  lg:mx-auto xl:w-[310px] '>
          <Image width={113} height={113}  src={ellipse18} alt='' className='w-[113px] h-[113px] relative left-[100px] top-[50px] sm:left-auto sm:right-[-4rem] md:ml-[2rem] lg:relative lg:left-[1.5rem] xl:pl-[2.5rem] xl:w-auto' />
          <p className='w-[205px] h-[38px] custo-font font-[400] text-[25px] leading-[37.5px] relative left-[70px] top-[65px] sm:left-[3rem]  md:ml-[1rem] lg:left-auto lg:right-[-1rem] xl:pl-[1.5rem] xl:w-auto  '>Chat on Website</p>
        </div>
      </div>
      

    </div>



    <div className=' h-[1099x] py-[106px] gap-[71px] pt-[125px] relative top-[375rem] sm:relative sm:flex sm:flex-col sm:items-center sm:mt-[-5rem]  lg:relative lg:mt-[-7rem] '>
      <div className=' h-[145px] gap-[23px] pt-11 flex flex-col items-center sm:mr-[29rem] lg:ml-[5rem] '>
        <p className=' h-[62px] custo-font font-[400] text-[28px] leading-[62px] relative right-[0rem] tracking-[-2px] text-[#090914] pt-2 sm:w-[600px] sm:relative sm:left-[14rem] sm:text-[52px] sm:ml-10  xl:relative xl:mr-[5rem] '>Over 1000+ people trust us</p>
        <p className=' h-[60px] custo-font font-[400] text-[13px] leading-[30px] text-gray-900 relative top-[20px] text-center sm:text-[18px] sm:w-[600px] sm:relative sm:left-[15rem] lg:right-[10rem] xl:relative xl:mr-[5rem]'>Clarity gives you the blocks & components you need to create a truly professional website, landing page or admin panel for your SaaS.</p>
      </div>
      <div className='flex flex-col w-[696px] h-[568px] gap-[90px] xxs:ml-[5rem] xs:ml-[5rem] sm:flex-col sm:gap-[20px]  sm:items-center lg:flex-row lg:mr-[25rem] xl:relative xl:mr-[24rem]  '>
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



      <button className='h-[32px] rounded-[50px] relative top-[84rem] left-[1rem] xxs:relative xxs:top-[84rem] xxs:left-[5.5rem] xs:relative xs:top-[84rem] xs:left-[9.5rem] gap-[10px] cursor-pointer sm:flex sm:justify-center sm:top-[74rem] sm:relative sm:mr-[14rem]  sm:items-center sm:w-full lg:relative lg:top-[-4rem] '>
        <div className='flex h-[28px] gap-[9px] relative top-[120px]  pt-5 '>
          <p className='text-blue-600 w-[267px] h-[28px] custo-font font-[600] text-[16px] leading-[22px]  '>See all reviews by our customers</p>
          <Image width={18} height={18} src={icon} alt='' className='w-[18px] h-[18px] gap-[10px] pt-0.5 '  />
        </div>
      </button>

    </div>




    <div className=' bg-white    ' >
      <div className='w-[1280px] relative top-[461rem] xxs:relative xxs:left-[4rem] xs:relative xs:left-[8rem]   xl:relative xl:left-[22rem] flex flex-col items-center h-[94x] px-[32px] gap-[32px] sm:relative sm:top-[455rem] lg:relative lg:top-[378rem] lg:left-[15rem] '>
        <div className='w-[1216px] h-[94px] gap-[48px] '>
          <div className='w-[768px] h-[94px] gap-[20px] relative pl-[50px] '>
            <p className=' h-[44px] relative right-[4rem] custo-font font-[400] text-[13px] leading-[44px] tracking-[-2%] xs:text-[25px] xs:relative xs:right-[8rem] sm:text-left sm:mx-auto sm:text-[26px] lg:text-left lg:mx-auto lg:text-[30px] xl:text-left xl:mx-auto xl:text-[36px] transition-all duration-300'>Frequently asked questions</p>
            <p className='pt-[13px] relative right-[4rem] h-[30px] custo-font font-[400] text-[9px] leading-[28px] text-[#667085] xs:text-[12px] xs:relative xs:right-[8rem] sm:text-left sm:mx-auto sm:text-[16px] lg:text-left lg:mx-auto lg:text-[18px] transition-all duration-300 xl:text-left xl:mx-auto xl:text-[20px]'>Everything you need to know about the student Accomodation and Housing</p>
          </div>
        </div>
      </div>
      <div className='w-[1280px] relative top-[461rem] h-[513px] px-[32px] gap-[64px] xxs:relative xxs:left-[4rem] xs:relative xs:left-[8rem]   xl:relative xl:left-[22rem] sm:relative sm:top-[455rem] lg:relative lg:left-[16rem] lg:top-[378rem] '>
        <div className='w-[768px] h-[513px] gap-[32px] pl-[40px] pt-[50px] '>
          
          {data.map((item, index) => (
        <div key={item.id} className='w-[768px] h-[84px] gap-[24px]'>
          <div className='flex w-[768px] h-[84px] gap-[24px] justify-between '>
            <div className='w-[720px] w-fill h-[84px] gap-[18px] sm:text-center sm:mx-auto  transition-all duration-300'>
              <p className='flex text-[#101828] h-[px] custo-font font-[500] text-[11px] relative right-[3.5rem] leading-[28px] pr-[210px] xs:text-[15px] xs:relative xs:right-[8rem] sm:text-left sm:mx-auto sm:text-[18px] lg:text-left lg:mx-auto lg:text-[18px] xl:text-left xl:mx-auto xl:text-[18px] transition-all duration-300 '>
                {item.question}
              </p>
              {isOpen[index] && (
                <p className='flex text-left  text-[#667085] w-[335px] h-[48px] custo-font font-[400] relative right-[3.5rem] text-[8px] leading-[24px] xs:w-[470px] xs:relative xs:right-[8rem] xs:text-[12px]  sm:mr-[11rem] sm:mx-auto sm:text-[12px] sm:w-[580px] lg:w-[580px] lg:mr-[11rem] lg:text-left lg:mx-auto lg:text-[14px] xl:w-[720px] xl:mr-[11rem] xl:text-left xl:mx-auto xl:text-[16px] transition-all duration-300 '>
                  {item.answer}
                </p>
              )}
            </div>
            <Image width={24} height={24}
              src={isOpen[index] ? minuscircle : pluscircle}
              onClick={() => handleToggle(index)}
              className='w-[24px] h-[24px] cursor-pointer relative right-[33rem]  xs:relative xs:right-[30rem] sm:mx-auto sm:relative sm:right-[12rem] xl:relative xl:left-[1rem]  '
              alt={isOpen[index] ? 'Collapse' : 'Expand'}
              
            />
          </div>
        </div>
      ))}

        </div>
      </div>
      <div className='h-[294px]  gap-[32px] relative top-[460rem] xxs:relative xxs:right-[0rem] xs:relative xs:right-[0rem] sm:flex sm:items-center lg:flex lg:items-center lg:relative lg:top-[380rem] lg:right-[1rem] xl:relative xl:right-[1rem] md:ml-[9rem]  sm:relative sm:top-[455rem] '>
      <div className='flex flex-col items-center  h-[294px] rounded-[16px] p-[32px] gap-[32px] bg-[#F9FAFB]  sm:flex sm:items-center sm:mx-auto '>
        <div className='flex w-[120px] h-[56px] '>
          <Image width={48} height={48} src={Avatar} alt='' className='w-[48px] h-[48px] w-fixed rounded-[200px] border-[1.5px] border-[#ABB677] h-fixed'   />
          <Image width={48} height={48} src={Avatar1} alt='' className='w-[48px] h-[48px] w-fixed rounded-[200px] border-[1.5px] border-[#C7B9DA] h-fixed'  />
          <Image width={48} height={48} src={Avatar2} alt='' className='w-[48px] h-[48px] w-fixed rounded-[200px] border-[1.5px] border-[#D9B9BB] h-fixed'  />
        </div>
        <div className='w-[768px] w-fixed h-[66px] text-center'>
          <p className='w-[768px] h-[30px] custo-font font-[400] text-[20px] leading-[30px] text-[#101828] '>Still have questions?</p>
          <p className='w-[320px] h-[28px] custo-font font-[400] text-[12px] relative left-[14rem] leading-[28px] text-[#667085] '>Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
        </div>
        
        <div className='w-[134px] h-[44px] gap-[8px] '>
          <div className='w-[134px] h-[44x] rounded-[8px] border-[1px] gap-[8px] py-[10px] px-[18px] bg-[#002855] '>
            <button className='w-[98px] h-[24px] cursor-pointer custo-font font-[500] text-[16px] leading-[24px] text-[#FFFFFF] '>Get in touch</button>
          </div>
        </div>
      </div>
      </div>
    </div>






    <div className='bg-[#F6F9FF] h-[977px] flex flex-col items-center rounded-[4px] relative top-[465rem] gap-[56px] sm:relative sm:top-[460rem] lg:relative lg:top-[385rem] '>
    <div className='flex flex-col lg:flex-row h-auto rounded-[12px] px-4 py-[28px] w-auto gap-[20px] lg:gap-[100px] bg-[#3D52A0] sm:w-auto  '>
  <div className='w-full lg:w-[645px] h-auto gap-[4px]'>
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



<div className='w-[1184px] gap-[24px] sm:w-[100%] sm:h-[250px] '>
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


      <div className='flex w-[300px] xl:w-[1100px] lg:w-[984px] h-[272px] relative top-[24rem] justify-between sm:flex sm:justify-evenly sm:w-[900px] sm:relative sm:top-[0rem] sm:right-[2rem] md:w-[1100px] lg:flex lg:justify-between lg:pt-4  '>

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
  <p className='sm:relative sm:right-[35px] relative sm:w-[137.33px] w-[80px]  h-[42px] text-[#4B5768] custo-font font-[500] text-[16px] leading-[24px]  '>Manage Deliveries</p>
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
<div className='flex flex-col sm:flex-row justify-between items-center py-[24px] lg:w-[1000px] border-t border-[#D0D5DD] bg-white relative top-[22rem] sm:relative sm:top-[0rem] '>
  <div className='flex flex-wrap gap-[20px] text-[#4B5768] custo-font font-[400] text-[16px] leading-[24px]'>
    <p className='w-auto'>About us</p>
    <p className='w-auto'>Contact</p>
    <p className='w-auto'>Privacy policy</p>
    <p className='w-auto'>Sitemap</p>
    <p className='w-auto'>Terms of Use</p>
  </div>
  <p className='text-[#4B5768] custo-font font-[400] text-[16px] leading-[24px] mt-[16px] sm:mt-0'>
    © 2000-2021, All Rights Reserved
  </p>
</div>

    </div>










  </div>
  )
}

export default Home
