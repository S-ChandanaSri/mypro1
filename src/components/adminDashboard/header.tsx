"use client";
import Image from "next/image";
import { useState } from "react";
import { adminImages, adminSvgIcons } from "@/constants/images";

export default function Header() {
  const [search, setSearch] = useState("");
  return (
    <div className="bg-[#002855] flex flex-row text-neutral-50 w-full lg:w-[1440px] xl:w-full items-center justify-between p-2 md:p-5">
      <div className="flex flex-row items-center gap-2 text-2xl">
        <div className="relative w-8 h-9">
          <Image
            alt="profile image"
            fill={true}
            src={adminSvgIcons.adminLogo}
          />
        </div>
        ZENDEN
      </div>
      <div className="hidden lg:flex flex-row w-[51rem] h-8 gap-2 bg-neutral-50 items-center rounded px-1 text-xs">
        <div className="relative w-4 h-4">
          <Image
            src={adminSvgIcons.adminSearch}
            alt="search icon"
            fill={true}
            className="object-cover"
          />
        </div>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Type to search"
          className="w-full outline-none  text-neutral-950"
        />
      </div>
      <div className="hidden lg:flex felx-row items-center gap-5">
        <div className="relative w-7 h-6">
          <Image
            src={adminSvgIcons.adminEmail}
            alt="search icon"
            fill={true}
            className="object-cover"
          />
        </div>
        <div className="relative w-5 h-6">
          <Image
            src={adminSvgIcons.adminNotifications}
            alt="search icon"
            fill={true}
            className="object-cover"
          />
        </div>

        <div className="relative w-8 h-9 rounded-full">
          <Image
            alt="profile image"
            fill={true}
            src={adminImages.adminEmployee1}
            className="object-cover rounded-full"
          />
        </div>
      </div>
      <div className="p-2 lg:hidden">
        <div className="relative w-7 h-6">
          <Image
            src={adminSvgIcons.adminHamburger}
            alt="search icon"
            fill={true}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
