"use client";
import Image from "next/image";
import { useState } from "react";
import { adminImages, svgs } from "@/constants/images";

export default function Header() {
  const [search, setSearch] = useState("");
  return (
    <div className="bg-secondaryWashed-800 flex  text-neutral-50 w-full  items-center justify-between p-2 md:p-5 h-[92px] md:h-[72px]">
      <div className="flex  items-center gap-2 ">
        <Image
          alt="profile image"
          width={36}
          height={36}
          src={svgs.adminLogo}
        />
        <p className="text-2xl">ZENDEN</p>
      </div>
      <div className="hidden lg:flex   h-8 gap-2 bg-neutral-50 items-center rounded px-1 text-xs">
        <Image
          src={svgs.adminSearch}
          alt="search icon"
          width={16}
          height={16}
          className="object-cover"
        />

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Type to search"
          className=" outline-none w-[20rem]  text-neutral-950"
        />
      </div>
      <div className="hidden lg:flex felx-row items-center gap-5">
        <Image
          src={svgs.adminEmail}
          alt="search icon"
          width={28}
          height={24}
          className="object-cover"
        />

        <Image
          src={svgs.adminNotifications}
          alt="search icon"
          width={20}
          height={24}
          className="object-contain"
        />

        <Image
          alt="profile image"
          width={32}
          height={32}
          src={adminImages.adminEmployee1}
          className="object-contain rounded-full"
        />
      </div>
      <div className="p-2 lg:hidden">
        <Image
          src={svgs.adminHamburger}
          alt="search icon"
          width={28}
          height={28}
          className="object-contain"
        />
      </div>
    </div>
  );
}
