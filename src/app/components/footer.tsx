"use client";
import Image from "next/image";
export default function Footer() {
  return (
    <div className="bg-[#F6F9FF]lg:w-[1440px] lg:h-[954px] md:w-[768px] md:h-[1036px] flex flex-col items-center rounded-[4px] py-[92px] lg:px-[128px] md:px-[32px] gap-[56px] ">
      <div className="flex flex-col md:flex-row  lg:w-[1184px] h-auto lg:h-[108px] md:w-[704px] md:h-[166px]  rounded-[12px] lg:py-[16px] md:py-[28px] lg:px-[20px] md:px-[36px] gap-[10px] bg-[#3D52A0] ">
        <div className="w-full md:w-[640px] h-auto md:h-[52px] gap-[4px]">
          <p className="w-full md:w-[86px] h-[24px] custo-font font-[500] text-[16px] leading-[24px] text-[#FFFFFF]">
            Newsletter
          </p>
          <p className="w-full md:w-[470px] h-[24px] custo-font font-[400] text-[16px] leading-[24px] text-[#FFFFFF]">
            Be the first one to know about discounts, offers and events
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center w-full md:w-[457px] rounded-[12px] pr-[6px] pl-[24px] md:pl-0 h-auto md:h-[48px] gap-[8px] bg-[#4A61B5] ">
          <div className="flex items-center w-full md:w-auto">
            <Image
              width={16}
              height={16}
              alt=""
              src="assests/coloricon.svg"
              className="w-[16px] h-[16px]"
            />
            <input
              placeholder="Enter your email"
              className="focus:border-0 w-full md:w-[160px] h-[24px] custo-font font-[400] text-[16px] leading-[24px] focus:outline-none pl-2 cursor-pointer bg-[#4A61B5]"
            />
          </div>
          <button className="w-full md:w-[265px] h-[36px] mt-2 md:mt-0 gap-[10px] pl-0 md:pl-[163px]">
            <div className="w-full md:w-[94px] h-[36px] gap-[8px] rounded-[10px] bg-[#FFFFFFDB]">
              <p className="text-center md:relative md:top-[6px] md:left-[17px] w-full md:w-[58px] h-[24px] custo-font font-[500] text-[16px] leading-[24px] text-[#002855]">
                Submit
              </p>
            </div>
          </button>
        </div>
      </div>

      <div className="w-[1184px] h-[173px] gap-[24px]  ">
        <div className="w-[1184px] h-[98px] gap-[16px] ">
          <div className="flex items-center justify-start">
            <Image
              width={40}
              height={40}
              src="assests/logo-1.svg"
              alt=""
              className="mb-[5px] "
            />
            <span className="text-[#3D52A0]">ZENDEN</span>
          </div>
          <p className="text-left w-[1184px] h-[48px] custo-font font-[400] text-[16px] leading-[24px] ">
            We ara a lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat...
            <span className="text-[#4A61B5]">Read More</span>
          </p>
        </div>
        <div className="flex items-center w-[1184px] h-[51px] gap-[80px] pt-[30px] ">
          <div className="flex w-[236px] w-fill h-fill h-[51px] gap-[12px] ">
            <Image
              width={32}
              height={32}
              src="assests/icons-6.svg"
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
              src="assests/icons-7.svg"
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
              src="assests/icons-8.svg"
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
              src="assests/icons-61.svg"
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
  );
}
