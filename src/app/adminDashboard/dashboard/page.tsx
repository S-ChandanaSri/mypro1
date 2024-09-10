"use client";
import Image from "next/image";
import Interior from "../../_assets/images/int3.jpeg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import Calendar from "react-calendar";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import "react-calendar/dist/Calendar.css";
import { adminSvgIcons, adminImages } from "@/constants/images";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Dashboard() {
  const [date, setDate] = useState(new Date());
  const rooms = [
    {
      name: "The Business Project",
      time: "56 minutes",
      image: adminImages.adminRoom1,
    },
    {
      name: "Living Color",
      time: "40 minutes",
      image: adminImages.adminRoom1,
    },
    {
      name: "The Business Project",
      time: "1hour 12 minutes",
      image: adminImages.adminRoom1,
    },
  ];

  const customers = [
    {
      name: "Jenny Wilson",
      email: "w.lawson@example.com",
      image: Interior,
    },
    {
      name: "Jenny Wilson",
      email: "w.lawson@example.com",
      image: Interior,
    },
    {
      name: "Jenny Wilson",
      email: "w.lawson@example.com",
      image: Interior,
    },
    {
      name: "Jenny Wilson",
      email: "w.lawson@example.com",
      image: Interior,
    },
  ];

  const data = [
    { name: "Jan", cash: 4000, checkOut: 200, checkIn: 3000 },
    { name: "Feb", cash: 3000, checkOut: 1000, checkIn: 1500 },
    { name: "Mar", cash: 3500, checkOut: 2400, checkIn: 2000 },
    { name: "Apr", cash: 5000, checkOut: 2200, checkIn: 3200 },
    { name: "May", cash: 2200, checkOut: 2400, checkIn: 2100 },
    { name: "Jun", cash: 2000, checkOut: 2000, checkIn: 2300 },
    { name: "Jul", cash: 2000, checkOut: 2400, checkIn: 3000 },
  ];

  return (
    <div className=" px-1  lg:w-full  bg-[#F6F8FF]">
      <div className=" flex flex-row items-center gap-2 px-5 h-10 md:h-16">
        <div className="relative w-5 h-5 ">
          <Image
            src={adminSvgIcons.adminHalfMenu}
            alt="employee image"
            fill={true}
            className="object-cover"
          />
        </div>
        Dashboard
      </div>
      <div className="  flex flex-col gap-5 ">
        <div className="flex flex-col lg:flex lg:flex-row lg:w-[77.5rem] md:grid md:grid-cols-2 gap-5 md:grid-rows-2 mx-5">
          <div className="w-72 h-24 rounded-md border p-4 flex flex-col gap-3 bg-neutral-50">
            <div>CHECK IN</div>
            <div className="flex flex-row  justify-between">
              <div>$12,426</div>
              <div className="flex flex-row items-center gap-x-1">
                +36%{" "}
                <div className="relative w-2 h-2 ">
                  <Image
                    src={adminSvgIcons.adminUpArrow}
                    alt="employee image"
                    fill={true}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-72 h-24 rounded-md border p-4 flex flex-col gap-3 bg-neutral-50">
            <div>CHECK OUT</div>
            <div className="flex flex-row  justify-between">
              <div>84,382</div>
              <div className="flex flex-row items-center gap-x-1">
                +36%{" "}
                <div className="relative w-2 h-2 ">
                  <Image
                    src={adminSvgIcons.adminUpArrow}
                    alt="employee image"
                    fill={true}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-72 h-24 rounded-md border p-4 flex flex-col gap-3 bg-neutral-50">
            <div>TOTAL CUSTOMERS</div>
            <div className="flex flex-row   justify-between">
              <div>33,493</div>
              <div className="flex flex-row items-center gap-x-1">
                +36%{" "}
                <div className="relative w-2 h-2 ">
                  <Image
                    src={adminSvgIcons.adminUpArrow}
                    alt="employee image"
                    fill={true}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=" w-72 h-24 rounded-md border p-4 flex flex-col gap-3 bg-neutral-50">
            <div>CASH</div>
            <div className="flex flex-row   justify-between">
              <div>33,493</div>
              <div className="flex flex-row items-center gap-x-1">
                +36%{" "}
                <div className="relative w-2 h-2 ">
                  <Image
                    src={adminSvgIcons.adminUpArrow}
                    alt="employee image"
                    fill={true}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* blocks */}
        <div className="lg:grid lg:grid-rows-2 lg:grid-cols-2 flex flex-col px-5 gap-5">
          <div className="lg:w-[38rem]   rounded p-4 md:hidden lg:flex lg:flex-col gap-4 bg-neutral-50">
            <Calendar
              onChange={setDate}
              value={date}
              className="w-full h-full"
            />
          </div>
          <div className="lg:w-[37.65rem]    rounded-1 py-5  lg:px-10 px-9 md:hidden lg:flex lg:flex-col  lg:gap-4 gap-2 bg-neutral-50">
            <div className="lg:w-[33.3rem]  flex flex-col gap-1">
              <p className="text-neutral-950 text-sm">Reservation stats</p>
              <p className="text-neutral-500 text-xs">
                Your current reservation summary and activity.
              </p>
            </div>
            <div className="  p-1  flex flex-col gap-7 lg:gap-0 lg:flex-row justify-between">
              <div className=" flex gap-6">
                <div className="flex flex-col">
                  <p className="text-xs text-neutral-500">Bitcoin</p>
                  <p className="text-sm text-neutral-950">
                    62% <span className="text-xs ms-[7px]">10.78%</span>
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="text-xs text-neutral-500">Credit</p>
                  <p className="text-sm text-neutral-950">
                    12% <span className="text-xs ms-2">10.78%</span>
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="text-xs text-neutral-500">Cash</p>
                  <p className="text-sm text-neutral-950">
                    30% <span className="text-xs ms-2">10.78%</span>
                  </p>
                </div>
              </div>
              <div className="lg:w-32 lg:h-14 w-[23rem] h-6  flex flex-row lg:flex-col gap-2 justify-between lg:justify-start">
                <div className="flex flex-row w-32  text-xs  rounded-sm border border-neutral-400 gap-1 p-1">
                  <IoIosSearch className="text-black" />{" "}
                  <input
                    value=""
                    placeholder="search"
                    className="w-full outline-none"
                  />
                </div>
                <div className="flex flex-row gap-2">
                  <select className="">
                    <option>Monthly</option>
                  </select>
                  <button className="">Filter</button>
                </div>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend
                  verticalAlign="bottom"
                  align="center"
                  layout="horizontal"
                  iconType="circle" // Rounded indicators
                  iconSize={10}
                />
                <Bar dataKey="checkIn" stackId="a" fill="#002855" />
                <Bar dataKey="checkOut" stackId="a" fill="#3D52A0" />
                <Bar dataKey="cash" stackId="a" fill="#B5B2FF" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="hidden md:flex lg:hidden md:flex-row  md:gap-2">
            <div className=" w-72 h-[24.5rem] rounded p-4 flex flex-col gap-4 bg-neutral-50">
              <Calendar
                onChange={setDate}
                value={date}
                className="w-full h-full"
              />
            </div>
            <div className=" w-[27.6rem] h-96  rounded py-5  md:px-10 flex flex-col  md:gap-5 bg-neutral-50">
              <div className=" flex flex-col gap-1 ">
                <p className="text-neutral-950 text-sm">Reservation stats</p>
                <p className="text-neutral-500 text-xs">
                  Your current reservation summary and activity.
                </p>
              </div>
              <div className="  p-1  flex flex-col gap-7 lg:gap-0 lg:flex-row justify-between">
                <div className=" flex gap-6">
                  <div className="flex flex-col">
                    <p className="text-xs text-neutral-500">Bitcoin</p>
                    <p className="text-sm text-neutral-950">
                      62% <span className="text-xs ms-2">10.78%</span>
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-xs text-neutral-500">Credit</p>
                    <p className="text-sm text-neutral-950">
                      12% <span className="text-xs ms-2">10.78%</span>
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-xs text-neutral-500">Cash</p>
                    <p className="text-sm text-neutral-950">
                      30% <span className="text-xs ms-2">10.78%</span>
                    </p>
                  </div>
                </div>
                <div className=" w-[22.9rem]   flex flex-row lg:flex-col gap-2 justify-between lg:justify-start">
                  <div className="flex text-xs flex-row w-32 h-6 rounded-sm border border-neutral-400 gap-1 p-1 items-center">
                    <div className="relative w-2 h-2 ">
                      <Image
                        src={adminSvgIcons.adminSearch}
                        alt="employee image"
                        fill={true}
                        className="object-cover"
                      />
                    </div>
                    <input
                      value=""
                      placeholder="search"
                      className="w-full outline-none"
                    />
                  </div>
                  <div className="flex flex-row  gap-2">
                    <select className="">
                      <option>Monthly</option>
                    </select>
                    <button className="">Filter</button>
                  </div>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={152}>
                <BarChart
                  data={data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend
                    verticalAlign="bottom"
                    align="center"
                    layout="horizontal"
                    iconType="circle" // Rounded indicators
                    iconSize={10}
                  />
                  <Bar dataKey="checkIn" stackId="a" fill="#002855" />
                  <Bar dataKey="checkOut" stackId="a" fill="#3D52A0" />
                  <Bar dataKey="cash" stackId="a" fill="#B5B2FF" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="lg:w-[37.6rem]     rounded py-8 px-4 flex flex-col lg:gap-4 gap-8 bg-neutral-50">
            {rooms?.map((room, index) => (
              <div
                className="  rounded-lg p-2 gap-2 flex flex-row bg-neutral-50 "
                key={index}
              >
                <div className="relative w-28 h-16 ">
                  <Image
                    src={adminImages.adminRoom1}
                    fill={true}
                    alt="image"
                    className="rounded"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-md">{room.name}</p>
                  <p className="text-sm">{room.time}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:w-[37.7rem]    rounded-2 border py-[18px] px-6 flex flex-col gap-6 bg-neutral-50">
            <div className="lg:w-[34.7rem]    flex flex-col gap-1">
              <p className="text-md">Recent Customers</p>
              <p className="text-xs">Lorem ipsum dolor sit ametis</p>
            </div>
            {customers?.map((customer, index) => (
              <div
                className="  gap-32  flex flex-row lg:gap-72 md:gap-96 text-xs"
                key={index}
              >
                <div className="flex flex-row gap-2 text-xs">
                  <div className="relative w-9 h-9 ">
                    <Image
                      src={adminImages.adminCustomer1}
                      fill={true}
                      alt="image"
                      className=" rounded-full"
                    />
                  </div>
                  <div className="flex flex-col gap-1 ">
                    <p>{customer.name}</p>
                    <p>{customer.email}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-1 ">
                  <p>$11,234</p>
                  <p>Austin</p>
                </div>
              </div>
            ))}
            <div className=" flex flex-row gap-3 text-xs items-center">
              <p>SEE ALL CUSTOMERS</p>

              <div className="relative w-2 h-3 ">
                <Image
                  src={adminSvgIcons.adminRightArrow}
                  alt="employee image"
                  fill={true}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
