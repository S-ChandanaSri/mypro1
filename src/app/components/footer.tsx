"use client";
import Image from "next/image";
export default function Footer() {
  const about = ["About Us", "Blog", "Careers", "Jobs", "In Press"];

  const support = [
    "Contact Us",
    "Online Chat",
    "Whatsapp",
    "Telegram",
    "Ticketing",
  ];

  const faq = ["Account", "Manage Deliveries", "Orders", "Payments", "Returns"];
  return (
    <div className="bg-[#F6F9FF] flex flex-col w-[479px] h-[1110px] md:w-[768px] md:h-[1036px] lg:w-[1440px] lg:h-[954px]  rounded-[4px]  py-[92px] px-[32px] lg:px-[128px] gap-[56px]">
      {/*news letter*/}
      <div className="lg:flex lg:flex-row w-[411px] h-[190px] md:w-[704px] md:h-[166px] lg:w-[1184px] lg:h-[104px] rounded-[12px] py-[28px] px-[32px] md:px-[36px] gap-[10px] bg-[#3D52A0]">
        <div className="w-[347px] h-[76px] md:w-[640px] md:h-[52px]  md:gap-[4px] lg:w-[645px] lg:h-[46px] text-white flex flex-col items-center lg:items-start">
          <p>Newsletter</p>
          <p className="text-center">
            Be the first one to know about discounts, offers and events
          </p>
        </div>
        <div className="flex flex-row justify-between items-center min-w-[347px] h-[48px] md:w-[630px] md:h-[48px] lg:w-[457px] lg:h-[48px] rounded-[12px] pr-[6px] pl-[9px] lg:pl-[24px] gap-[4px] lg:gap-[8px] bg-[#4A61B5]">
          <div className=" flex flex-row bg-[#4A61B5] items-center">
            <Image
              width={16}
              height={16}
              alt=""
              src="assests/coloricon.svg"
              className="w-[16px] h-[16px]"
            />
            <input
              placeholder="Enter your email"
              className="focus:border-0 w-full  h-[24px] bg-[#4A61B5] focus:outline-none pl-2 cursor-pointer "
            />
          </div>
          <button className="bg-[#FFFFFF] flex items-center justify-center text-[#002855] w-[94px] h-[36px] rounded-[8px] px-[38px]">
            Submit
          </button>
        </div>
      </div>

      <div className="flex flex-col w-[415px]  h-[214px] md:w-[704px] md:h-[197px] lg:w-[1184px] lg:h-[189px] gap-[17px] md:gap-[24px]">
        <div className="lg:flex lg:flex-col  lg:items-start w-[415px] h-[146px] md:w-[704px] md:h-[122px] lg:w-[1184px] lg:h-[98px] gap-[16px]">
          <div className="flex items-center justify-center">
            <Image width={40} height={40} src="assests/logo-1.svg" alt="" />
            <span className="text-[#3D52A0]">ZENDEN</span>
          </div>
          <div className="text-center lg:text-start">
            We ara a lorem ipsum dolor sit amet,vmokandhk kdfhdj sidt dkfdk
            jdnmehkdktkfj consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat... Read More
          </div>
        </div>
        <div className=" flex flex-row w-[415px] h-[51px] md:w-[704px]  gap-[10px] lg:w-[1184px] lg:h-[67px] lg:gap-[80px]">
          <div className="flex flex-row w-[131.6px]  h-[51px] gap-[6px] md:w-[228px] md:gap-[12px] lg:w-[236px] lg:h-[67px] ">
            <Image
              width={32}
              height={32}
              src="assests/icons-6.svg"
              alt=""
              className="w-[32px] h-[32px] "
            />
            <div className="w-[93.67px] h-[48px] lg:w-[192px] lg:h-[45px] gap-[2px]">
              <p>Tel</p>
              <p>310-437-2766</p>
            </div>
          </div>
          <div className="flex flex-row w-[131.6px] h-[51px] gap-[6px] md:w-[228px] md:gap-[12px] lg:w-[236px] lg:h-[67px] ">
            <Image
              width={32}
              height={32}
              src="assests/icons-7.svg"
              alt=""
              className="w-[32px] h-[32px] "
            />
            <div className="w-[93.67px] h-[48px] lg:w-[192px] lg:h-[45px] overflow-hidden gap-[2px] ">
              <p>Mail</p>
              <p>unreal@outlook.com</p>
            </div>
          </div>
          <div className="flex flex-row w-[131.6px] h-[51px] gap-[6px] md:w-[228px] md:gap-[12px] lg:w-[236px] lg:h-[67px]">
            <Image
              width={32}
              height={32}
              src="assests/icons-8.svg"
              alt=""
              className="w-[32px] h-[32px] "
            />
            <div className="w-[93.67px] max-h-[48px] md:w-full gap-[2px] lg:w-[192px] lg:h-[45px] overflow-hidden">
              <p>Address</p>
              <p>706 Campfire Ave. Meriden, CT 06450</p>
            </div>
          </div>
          <div className="hidden lg:flex justify-evenly w-[236px] w-fill h-fill h-[51px] gap-[18px]  lg:w-[236px] lg:h-[67px]">
            <Image
              width={32}
              height={32}
              src="assests/icons-61.svg"
              alt=""
              className="w-[32px] h-[32px] "
            />
            <div className="w-[93.67px] h-[48px] gap-[2px]  lg:w-[192px] lg:h-[45px]">
              <p>Fax</p>
              <p>+1-000-0000</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[415px] h-[272px] md:w-[704px] lg:w-[1184px] lg:h-[230px]  flex justify-between">
        <div className="flex flex-col w-[137.33px] h-[248px] lg:h-[230px] gap-[24px]">
          <div className="w-[137.33px] h-[24px] lg:h-[21px]">About</div>
          {about.map((item, index) => (
            <div className="w-[137.33px] h-[24px] lg:h-[21px]" key={index}>
              {item}
            </div>
          ))}
        </div>
        <div className=" flex flex-col w-[137.33px] h-[248px] gap-[24px] lg:h-[230px]">
          <div className="w-[137.33px] h-[24px] lg:h-[21px]">Support</div>
          {support.map((item, index) => (
            <div className="w-[137.33px] h-[24px] lg:h-[21px]" key={index}>
              {item}
            </div>
          ))}
        </div>
        <div className=" flex flex-col w-[97px] h-[272px] gap-[24px] lg:h-[230px]">
          <div className="w-[97px] md:w-[137.33px] lg:h-[21px]">FAQ</div>
          {faq.map((item, index) => (
            <div className="w-[97px] lg:h-[21px]" key={index}>
              {item}
            </div>
          ))}
        </div>
        <div className="hidden md:flex flex-col w-[137.33px] h-[248px] gap-[24px] lg:h-[230px]">
          <div className="w-[137.33px] h-[24px] lg:h-[21px]">About</div>
          {about.map((item, index) => (
            <div className="w-[137.33px] h-[24px] lg:h-[21px]" key={index}>
              {item}
            </div>
          ))}
        </div>
        <div className="hidden lg:flex flex-col w-[137.33px] h-[248px] gap-[24px] lg:h-[230px]">
          <div className="w-[137.33px] h-[24px] lg:h-[21px]">Support</div>
          {support.map((item, index) => (
            <div className="w-[137.33px] h-[24px] lg:h-[21px]" key={index}>
              {item}
            </div>
          ))}
        </div>
        <div className=" hidden lg:flex flex-col w-[97px] h-[272px] gap-[24px] lg:h-[230px]">
          <div className="w-[97px] md:w-[137.33px] lg:h-[21px]">FAQ</div>
          {faq.map((item, index) => (
            <div className="w-[97px] lg:h-[21px]" key={index}>
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row  items-center lg:justify-between w-[411px] h-[119px] md:w-[704px] md:h-[106px] lg:w-[1184px] lg:h-[69px] border-t-[1px] py-[24px] gap-[10px]">
        <div className="flex flex-row gap-[47px] md:w-[594px] md:h-[24px] md:gap-[40px] lg:w-[935px] lg:h-[21px]">
          <p className="hidden md:block">About us</p>
          <p>Contact</p>
          <p>Privacy policy</p>
          <p>Sitemap</p>
          <p className="hidden md:block">Terms of Use</p>
        </div>
        <div className="lg:w-[249px] lg:h-[21px]">
          © 2000-2021, All Rights Reserved
        </div>
      </div>
    </div>
  );
}
