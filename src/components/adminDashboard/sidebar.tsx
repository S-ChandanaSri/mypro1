"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { svgs } from "@/constants/images";
import Image from "next/image";
export default function Sidebar() {
  const pathname = usePathname();
  console.log(pathname);
  const sidebar = [
    {
      id: "dashboard",
      name: "Dashboard",
      link: "dashboard",
      icons: svgs.adminHouse,
    },
    {
      id: "rooms",
      name: "Rooms",
      link: "rooms",
      icons: svgs.adminRooms,
    },
    {
      id: "bookings",
      name: "Bookings",
      link: "bookings",
      icons: svgs.adminBookings,
    },

    {
      id: "concierge",
      name: "Concierge",
      link: "concierge",
      icons: svgs.adminHouse,
    },
  ];
  return (
    <div className="hidden flex-col justify-between border-b bg-neutral-50 p-5 ps-0 text-lg lg:flex lg:h-[calc(100vh-72px)]">
      <div className="flex flex-col gap-10">
        {sidebar?.map((item, index) => (
          <div
            className={` ${pathname === `/adminDashboard/${item.id}` ? "border-l-4 border-secondaryWashed-800" : ""} flex items-center gap-5 ps-4`}
            key={index}
          >
            <Image
              src={item.icons}
              alt="icons"
              width={16}
              height={16}
              className="object-contain"
            />

            <Link href={item.link}>{item.name}</Link>
          </div>
        ))}
      </div>
      <div className="ps-4">
        <div className="flex items-center gap-5">
          <Image
            src={svgs.adminSettings}
            alt="icons"
            width={16}
            height={16}
            className="object-contain"
          />

          <p>Settings</p>
        </div>
        <div className="flex items-center gap-5">
          <Image
            src={svgs.adminLogout}
            alt="icons"
            width={16}
            height={16}
            className="object-contain"
          />

          <p>Logout</p>
        </div>
      </div>
    </div>
  );
}
