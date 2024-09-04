"use client";
import Link from "next/link";
import { BiMenuAltLeft } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { HiOutlineKey } from "react-icons/hi2";
import { FaRegUser } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { CiSettings } from "react-icons/ci";
import { IoLogOutOutline } from "react-icons/io5";
export default function Sidebar() {
  const pathname = usePathname();
  console.log(pathname);
  const sidebar = [
    {
      id: "dashboard",
      name: "Dashboard",
      link: "dashboard",
      icons: <AiOutlineHome />,
    },
    {
      id: "rooms",
      name: "Rooms",
      link: "rooms",
      icons: <HiOutlineKey />,
    },
    {
      id: "bookings",
      name: "Bookings",
      link: "bookings",
      icons: <FaRegUser />,
    },

    {
      id: "concierge",
      name: "Concierge",
      link: "concierge",
      icons: <AiOutlineHome />,
    },
  ];
  return (
    <div className="[#FFFFFF] lg:w-[168.71px]   lg:pt-[32px]  hidden lg:h-[calc(100vh-61px)] lg:flex flex-col  border-b-[1px] justify-between">
      <div className="w-[143px] h-[244px] flex flex-col gap-[40px]">
        {sidebar?.map((item, index) => (
          <div
            className={` ${pathname === `/adminDashboard/${item.id}` ? " border-l-[4px] border-[#002855]" : ""} flex max-w-[143.58px] ps-[13px]  h-[31px] gap-[20px] items-center`}
            key={index}
          >
            <div>{item.icons}</div>
            <div>
              <Link href={item.link}>{item.name}</Link>
            </div>
          </div>
        ))}
      </div>
      <div>
        <div className="flex max-w-[143.58px]  h-[31px] gap-[20px] items-center ps-[13px]">
          <div>
            <CiSettings />
          </div>
          <div>Settings</div>
        </div>
        <div className="flex max-w-[143.58px]  h-[31px] gap-[20px] items-center ps-[13px]">
          <div>
            <IoLogOutOutline />
          </div>
          <div>Logout</div>
        </div>
      </div>
    </div>
  );
}
