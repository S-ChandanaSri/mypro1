"use client";
import Image from "next/image";
import { useState } from "react";
import { adminImages, svgs } from "@/constants/images";

export default function Header() {
  const [search, setSearch] = useState("");
  return (
    <div className="flex h-[92px] w-full items-center justify-between bg-secondaryWashed-800 p-2 text-neutral-50 md:h-[72px] md:p-5">
      <div className="flex items-center gap-2">
        <Image
          alt="profile image"
          width={36}
          height={36}
          src={svgs.adminLogo}
        />
        <p className="text-2xl">ZENDEN</p>
      </div>
      <div className="hidden h-8 items-center gap-2 rounded bg-neutral-50 px-1 text-xs lg:flex">
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
          className="w-[20rem] text-neutral-950 outline-none"
        />
      </div>
      <div className="felx-row hidden items-center gap-5 lg:flex">
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
          className="rounded-full object-contain"
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
