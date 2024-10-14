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
    <div className="flex h-[1110px] w-[479px] flex-col gap-[56px] rounded-[4px] bg-[#F6F9FF] px-[32px] py-[92px] md:h-[1036px] md:w-[768px] lg:h-[954px] lg:w-[1440px] lg:px-[128px]">
      {/*news letter*/}
      <div className="h-[190px] w-[411px] gap-[10px] rounded-[12px] bg-[#3D52A0] px-[32px] py-[28px] md:h-[166px] md:w-[704px] md:px-[36px] lg:flex lg:h-[104px] lg:w-[1184px] lg:flex-row">
        <div className="flex h-[76px] w-[347px] flex-col items-center text-white md:h-[52px] md:w-[640px] md:gap-[4px] lg:h-[46px] lg:w-[645px] lg:items-start">
          <p>Newsletter</p>
          <p className="text-center">
            Be the first one to know about discounts, offers and events
          </p>
        </div>
        <div className="flex h-[48px] min-w-[347px] flex-row items-center justify-between gap-[4px] rounded-[12px] bg-[#4A61B5] pl-[9px] pr-[6px] md:h-[48px] md:w-[630px] lg:h-[48px] lg:w-[457px] lg:gap-[8px] lg:pl-[24px]">
          <div className="flex flex-row items-center bg-[#4A61B5]">
            <Image
              width={16}
              height={16}
              alt=""
              src="assests/coloricon.svg"
              className="h-[16px] w-[16px]"
            />
            <input
              placeholder="Enter your email"
              className="h-[24px] w-full cursor-pointer bg-[#4A61B5] pl-2 focus:border-0 focus:outline-none"
            />
          </div>
          <button className="flex h-[36px] w-[94px] items-center justify-center rounded-[8px] bg-[#FFFFFF] px-[38px] text-[#002855]">
            Submit
          </button>
        </div>
      </div>

      <div className="flex h-[214px] w-[415px] flex-col gap-[17px] md:h-[197px] md:w-[704px] md:gap-[24px] lg:h-[189px] lg:w-[1184px]">
        <div className="h-[146px] w-[415px] gap-[16px] md:h-[122px] md:w-[704px] lg:flex lg:h-[98px] lg:w-[1184px] lg:flex-col lg:items-start">
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
        <div className="flex h-[51px] w-[415px] flex-row gap-[10px] md:w-[704px] lg:h-[67px] lg:w-[1184px] lg:gap-[80px]">
          <div className="flex h-[51px] w-[131.6px] flex-row gap-[6px] md:w-[228px] md:gap-[12px] lg:h-[67px] lg:w-[236px]">
            <Image
              width={32}
              height={32}
              src="assests/icons-6.svg"
              alt=""
              className="h-[32px] w-[32px]"
            />
            <div className="h-[48px] w-[93.67px] gap-[2px] lg:h-[45px] lg:w-[192px]">
              <p>Tel</p>
              <p>310-437-2766</p>
            </div>
          </div>
          <div className="flex h-[51px] w-[131.6px] flex-row gap-[6px] md:w-[228px] md:gap-[12px] lg:h-[67px] lg:w-[236px]">
            <Image
              width={32}
              height={32}
              src="assests/icons-7.svg"
              alt=""
              className="h-[32px] w-[32px]"
            />
            <div className="h-[48px] w-[93.67px] gap-[2px] overflow-hidden lg:h-[45px] lg:w-[192px]">
              <p>Mail</p>
              <p>unreal@outlook.com</p>
            </div>
          </div>
          <div className="flex h-[51px] w-[131.6px] flex-row gap-[6px] md:w-[228px] md:gap-[12px] lg:h-[67px] lg:w-[236px]">
            <Image
              width={32}
              height={32}
              src="assests/icons-8.svg"
              alt=""
              className="h-[32px] w-[32px]"
            />
            <div className="max-h-[48px] w-[93.67px] gap-[2px] overflow-hidden md:w-full lg:h-[45px] lg:w-[192px]">
              <p>Address</p>
              <p>706 Campfire Ave. Meriden, CT 06450</p>
            </div>
          </div>
          <div className="w-fill h-fill hidden h-[51px] w-[236px] justify-evenly gap-[18px] lg:flex lg:h-[67px] lg:w-[236px]">
            <Image
              width={32}
              height={32}
              src="assests/icons-61.svg"
              alt=""
              className="h-[32px] w-[32px]"
            />
            <div className="h-[48px] w-[93.67px] gap-[2px] lg:h-[45px] lg:w-[192px]">
              <p>Fax</p>
              <p>+1-000-0000</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex h-[272px] w-[415px] justify-between md:w-[704px] lg:h-[230px] lg:w-[1184px]">
        <div className="flex h-[248px] w-[137.33px] flex-col gap-[24px] lg:h-[230px]">
          <div className="h-[24px] w-[137.33px] lg:h-[21px]">About</div>
          {about.map((item, index) => (
            <div className="h-[24px] w-[137.33px] lg:h-[21px]" key={index}>
              {item}
            </div>
          ))}
        </div>
        <div className="flex h-[248px] w-[137.33px] flex-col gap-[24px] lg:h-[230px]">
          <div className="h-[24px] w-[137.33px] lg:h-[21px]">Support</div>
          {support.map((item, index) => (
            <div className="h-[24px] w-[137.33px] lg:h-[21px]" key={index}>
              {item}
            </div>
          ))}
        </div>
        <div className="flex h-[272px] w-[97px] flex-col gap-[24px] lg:h-[230px]">
          <div className="w-[97px] md:w-[137.33px] lg:h-[21px]">FAQ</div>
          {faq.map((item, index) => (
            <div className="w-[97px] lg:h-[21px]" key={index}>
              {item}
            </div>
          ))}
        </div>
        <div className="hidden h-[248px] w-[137.33px] flex-col gap-[24px] md:flex lg:h-[230px]">
          <div className="h-[24px] w-[137.33px] lg:h-[21px]">About</div>
          {about.map((item, index) => (
            <div className="h-[24px] w-[137.33px] lg:h-[21px]" key={index}>
              {item}
            </div>
          ))}
        </div>
        <div className="hidden h-[248px] w-[137.33px] flex-col gap-[24px] lg:flex lg:h-[230px]">
          <div className="h-[24px] w-[137.33px] lg:h-[21px]">Support</div>
          {support.map((item, index) => (
            <div className="h-[24px] w-[137.33px] lg:h-[21px]" key={index}>
              {item}
            </div>
          ))}
        </div>
        <div className="hidden h-[272px] w-[97px] flex-col gap-[24px] lg:flex lg:h-[230px]">
          <div className="w-[97px] md:w-[137.33px] lg:h-[21px]">FAQ</div>
          {faq.map((item, index) => (
            <div className="w-[97px] lg:h-[21px]" key={index}>
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="flex h-[119px] w-[411px] flex-col items-center gap-[10px] border-t-[1px] py-[24px] md:h-[106px] md:w-[704px] lg:h-[69px] lg:w-[1184px] lg:flex-row lg:justify-between">
        <div className="flex flex-row gap-[47px] md:h-[24px] md:w-[594px] md:gap-[40px] lg:h-[21px] lg:w-[935px]">
          <p className="hidden md:block">About us</p>
          <p>Contact</p>
          <p>Privacy policy</p>
          <p>Sitemap</p>
          <p className="hidden md:block">Terms of Use</p>
        </div>
        <div className="lg:h-[21px] lg:w-[249px]">
          © 2000-2021, All Rights Reserved
        </div>
      </div>
    </div>
  );
}
