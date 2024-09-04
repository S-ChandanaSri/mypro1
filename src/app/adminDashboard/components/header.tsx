"use client";
import Image from "next/image";
import { useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";
import Profile from "../../_assets/images/Avatar.png";
import Logo from "../../_assets/images/Logo1.png";
import { IoIosSearch } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
  const [search, setSearch] = useState("");
  return (
    <div className="bg-[#002855] flex flex-row text-white lg:w-[1440px] md:min-w-full md:h-[92px] lg:h-[61px] items-center justify-between p-[20px]">
      <div className="flex flex-row items-center gap-[10px]">
        <div className="relative w-[32.4px] h-[36px]">
          <Image alt="profile image" fill={true} src={Logo} />
        </div>
        ZENDEN
      </div>
      <div className="hidden lg:flex flex-row w-[819px] h-[40px] gap-[10px] bg-white items-center rounded-[5px] px-[5px]">
        <IoIosSearch className="text-black w-[18px] h-[18px]" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Type to search"
          className="w-full outline-none  text-black"
        />
      </div>
      <div className="hidden lg:flex felx-row items-center gap-[20px]">
        <MdOutlineMail className="w-[27px] h-[28px]" />
        <IoNotificationsOutline className="w-[22.5px] h-[25px]" />
        <div className="relative w-[32.4px] h-[36px]">
          <Image alt="profile image" fill={true} src={Profile} />
        </div>
      </div>
      <div className="w-[68px] h-[62px] py-[8px] px-[16px]">
        <GiHamburgerMenu className="w-[46px] h-[46px]" />
      </div>
    </div>
  );
}
