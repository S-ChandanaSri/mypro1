"use client";
import Link from "next/link";
import { BiMenuAltLeft } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { HiOutlineKey } from "react-icons/hi2";
import { FaRegUser } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { CiSettings } from "react-icons/ci";
import { IoLogOutOutline } from "react-icons/io5";
import { adminImages, adminSvgIcons } from "@/constants/images";
import Image from "next/image";
export default function Sidebar() {
  const pathname = usePathname();
  console.log(pathname);
  const sidebar = [
    {
      id: "dashboard",
      name: "Dashboard",
      link: "dashboard",
      icons: adminSvgIcons.adminHouse,
    },
    {
      id: "rooms",
      name: "Rooms",
      link: "rooms",
      icons: adminSvgIcons.adminRooms,
    },
    {
      id: "bookings",
      name: "Bookings",
      link: "bookings",
      icons: adminSvgIcons.adminBookings,
    },

    {
      id: "concierge",
      name: "Concierge",
      link: "concierge",
      icons: adminSvgIcons.adminHouse,
    },
  ];
  return (
    <div className="bg-neutral-50  w-full  text-lg  hidden lg:h-[calc(100vh-61px)] lg:flex flex-col p-5 ps-0 border-b justify-between">
      <div className="flex flex-col gap-10">
        {sidebar?.map((item, index) => (
          <div
            className={` ${pathname === `/adminDashboard/${item.id}` ? " border-l-4 border-[#002855]" : ""} flex  ps-4    gap-5 items-center`}
            key={index}
          >
            <div
              className={`relative  h-4 ${item.name == "Rooms" ? "w-2" : "w-4"}`}
            >
              <Image
                src={item.icons}
                alt="icons"
                fill={true}
                className="object-cover"
              />
            </div>
            <div>
              <Link href={item.link}>{item.name}</Link>
            </div>
          </div>
        ))}
      </div>
      <div className="ps-4">
        <div className="flex  gap-5 items-center">
          <div className="relative w-4 h-4">
            <Image
              src={adminSvgIcons.adminSettings}
              alt="icons"
              fill={true}
              className="object-cover"
            />
          </div>
          <div>Settings</div>
        </div>
        <div className="flex  gap-5 items-center ">
          <div className="relative w-4 h-4">
            <Image
              src={adminSvgIcons.adminLogout}
              alt="icons"
              fill={true}
              className="object-cover"
            />
          </div>
          <div>Logout</div>
        </div>
      </div>
    </div>
  );
}
