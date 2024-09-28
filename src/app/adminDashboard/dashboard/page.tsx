"use client";
import Image from "next/image";
import Calendar from "react-calendar";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import { svgs, adminImages } from "@/constants/images";
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
import {
  adminCustomers,
  adminData,
  adminRooms,
} from "@/constants/adminDashboardArrays";
import { strings } from "@/constants/strings";
export default function Dashboard() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="bg-[#F6F8FF] px-1 w-full  ">
      <div className=" flex flex-row items-center gap-2 px-5 h-10 md:h-16 text-xl">
        <Image
          src={svgs.adminHalfMenu}
          alt="employee image"
          width={20}
          height={20}
          className="object-cover"
        />

        <p>{strings.adminDashboard.dashboard.dashboard}</p>
      </div>
      <div className="  flex flex-col gap-5 w-full ">
        <div className="flex flex-col lg:flex lg:flex-row   md:grid md:grid-cols-2 gap-5 md:grid-rows-2 mx-5">
          <div className="w-72 lg:w-full h-24 rounded-md border p-4 flex flex-col gap-3 bg-neutral-50">
            <p className="text-xs">
              {strings.adminDashboard.dashboard.checkIn}
            </p>
            <div className="flex flex-row  justify-between">
              <p className="text-xl">$12,426</p>
              <div className="flex flex-row items-center gap-x-1 text-xs">
                +36%
                <Image
                  src={svgs.adminUpArrow}
                  alt="employee image"
                  width={8}
                  height={8}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          <div className="w-72 lg:w-full h-24 rounded-md border p-4 flex flex-col gap-3 bg-neutral-50">
            <p className="text-xs">
              {strings.adminDashboard.dashboard.checkOut}
            </p>
            <div className="flex flex-row  justify-between">
              <p className="text-xl">84,382</p>
              <div className="flex flex-row items-center gap-x-1">
                <p className="text-xs">+36%</p>
                <Image
                  src={svgs.adminUpArrow}
                  alt="employee image"
                  width={8}
                  height={8}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          <div className="w-72 lg:w-full h-24 rounded-md border p-4 flex flex-col gap-3 bg-neutral-50">
            <div className="text-xs">
              {strings.adminDashboard.dashboard.totalCustomers}
            </div>
            <div className="flex flex-row   justify-between">
              <p className="text-xl">33,493</p>
              <div className="flex flex-row items-center gap-x-1">
                <p className="text-xs">+36%</p>
                <Image
                  src={svgs.adminUpArrow}
                  alt="employee image"
                  width={8}
                  height={8}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          <div className=" w-72 lg:w-full h-24 rounded-md border p-4 flex flex-col gap-3 bg-neutral-50">
            <p className="text-xs">{strings.adminDashboard.dashboard.cash}</p>
            <div className="flex flex-row   justify-between">
              <p className="text-xl">33,493</p>
              <div className="flex flex-row items-center gap-x-1">
                <p className="text-xs">+36%</p>
                <Image
                  src={svgs.adminUpArrow}
                  alt="employee image"
                  width={8}
                  height={8}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        {/* blocks */}
        <div className="lg:grid lg:grid-rows-2 lg:grid-cols-2 flex flex-col px-5 gap-5">
          {/* Calendar Section */}
          <div className=" w-full h-auto rounded p-4 bg-neutral-50">
            <Calendar
              onChange={setDate}
              value={date}
              className="w-full h-full"
            />
          </div>
          <div className="w-full lg:flex lg:flex-row gap-2">
            {/* Stats and Chart Section */}
            <div className=" w-full h-auto rounded py-5 px-5 flex flex-col gap-4 bg-neutral-50">
              {/* Reservation Stats */}
              <div className="w-full  flex flex-col gap-1">
                <p className="text-neutral-950 text-sm">
                  {
                    strings.adminDashboard.dashboard.reservation
                      .reservationStats
                  }
                </p>
                <p className="text-neutral-500 text-xs">
                  {
                    strings.adminDashboard.dashboard.reservation
                      .reservationDescription
                  }
                </p>
              </div>

              {/* Payment Stats */}
              <div className="p-1 flex flex-col lg:flex-row justify-between">
                <div className="flex gap-6">
                  <div className="flex flex-col">
                    <p className="text-xs text-neutral-500">
                      {strings.adminDashboard.dashboard.reservation.bitcoin}
                    </p>
                    <p className="text-sm text-neutral-950">
                      62% <span className="text-xs ms-2">10.78%</span>
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-xs text-neutral-500">
                      {strings.adminDashboard.dashboard.reservation.credit}
                    </p>
                    <p className="text-sm text-neutral-950">
                      12% <span className="text-xs ms-2">10.78%</span>
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-xs text-neutral-500">
                      {strings.adminDashboard.dashboard.reservation.cash}
                    </p>
                    <p className="text-sm text-neutral-950">
                      30% <span className="text-xs ms-2">10.78%</span>
                    </p>
                  </div>
                </div>

                {/* Search and Filter */}
                <div className="lg:w-32 lg:h-14 w-full h-10 flex flex-row lg:flex-col gap-2 justify-between lg:justify-start">
                  <div className="flex flex-row text-xs rounded-sm border border-neutral-400 gap-1 p-1 w-full">
                    <Image
                      src={svgs.adminSearch}
                      alt="search icon"
                      width={8}
                      height={8}
                      className="object-contain"
                    />
                    <input
                      value=""
                      placeholder="Search"
                      className="w-full outline-none"
                    />
                  </div>
                  <div className="flex flex-row gap-2">
                    <select className="border border-neutral-300 p-1">
                      <option>Monthly</option>
                    </select>
                    <button className="border border-neutral-300 p-1">
                      Filter
                    </button>
                  </div>
                </div>
              </div>

              {/* Bar Chart */}
              <ResponsiveContainer width="100%" height={200}>
                <BarChart
                  data={adminData}
                  margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis fontSize={12} />
                  <Tooltip />
                  <Legend
                    verticalAlign="top"
                    align="center"
                    layout="horizontal"
                    iconType="circle"
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
            {adminRooms?.map((room, index) => (
              <div
                className="  rounded-lg p-2 gap-2 flex flex-row bg-neutral-50 "
                key={index}
              >
                <Image
                  src={adminImages.adminRoom1}
                  width={112}
                  height={64}
                  alt="image"
                  className="rounded object-cover"
                />

                <div className="flex flex-col gap-2">
                  <p className="text-md">{room.name}</p>
                  <p className="text-sm">{room.time}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="    rounded-2 border py-5 px-6 flex flex-col gap-6 bg-neutral-50">
            <div className="    flex flex-col gap-1">
              <p className="text-md">
                {strings.adminDashboard.dashboard.recentCustomers}
              </p>
              <p className="text-xs">
                {strings.adminDashboard.dashboard.recentCustomersText}
              </p>
            </div>
            {adminCustomers?.map((customer, index) => (
              <div
                className="  gap-32  flex flex-row justify-between   text-xs"
                key={index}
              >
                <div className="flex flex-row gap-2 text-xs">
                  <Image
                    src={adminImages.adminCustomer1}
                    width={36}
                    height={36}
                    alt="image"
                    className=" rounded-full"
                  />

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
              <p>{strings.adminDashboard.dashboard.seeAllCustomers}</p>

              <Image
                src={svgs.adminRightArrow}
                alt="employee image"
                width={8}
                height={12}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
