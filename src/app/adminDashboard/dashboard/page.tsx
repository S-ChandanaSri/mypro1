"use client";
import Image from "next/image";
import Interior from "../../_assets/images/int3.jpeg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { BiMenuAltLeft } from "react-icons/bi";
import Calendar from "react-calendar";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import "react-calendar/dist/Calendar.css";
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
      image: Interior,
    },
    {
      name: "Living Color",
      time: "40 minutes",
      image: Interior,
    },
    {
      name: "The Business Project",
      time: "1hour 12 minutes",
      image: Interior,
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
    <div className=" pl-[5px] w-[480px] min-h-[1804px] md:min-w-[768px] lg:w-full md:h-[1712px] bg-[#F6F8FF]">
      <div className=" flex flex-row items-center gap-[10px] ps-[20px] h-[40px] md:h-[70px]">
        <BiMenuAltLeft />
        Dashboard
      </div>
      <div className="lg:w-[1244.5px] lg:h-[917px] flex flex-col gap-[20px] ">
        <div className="flex flex-col lg:flex lg:flex-row lg:w-[1239.36px] md:grid md:grid-cols-2 gap-[22px] md:grid-rows-2 lg:h-[91px] ms-[21px]">
          <div className="w-[291px] h-[91px] rounded-[10px] border-[1px] p-[15px] flex flex-col gap-[11px] bg-[#FFFFFF]">
            <div>CHECK IN</div>
            <div className="flex flex-row lg:w-[249px] lg:h-[32px] justify-between">
              <div>$12,426</div>
              <div>+36% ^</div>
            </div>
          </div>
          <div className="w-[291px] h-[91px] rounded-[10px] border-[1px] p-[15px] flex flex-col gap-[11px] bg-[#FFFFFF]">
            <div>CHECK OUT</div>
            <div className="flex flex-row lg:w-[249px] lg:h-[32px] justify-between">
              <div>84,382</div>
              <div>+36% ^</div>
            </div>
          </div>
          <div className="w-[291px] h-[91px] rounded-[10px] border-[1px] p-[15px] flex flex-col gap-[11px] bg-[#FFFFFF]">
            <div>TOTAL CUSTOMERS</div>
            <div className="flex flex-row lg:w-[249px] lg:h-[32px] justify-between">
              <div>33,493</div>
              <div>+36% ^</div>
            </div>
          </div>
          <div className="w-[291px] h-[91px] rounded-[10px] border-[1px] p-[15px] flex flex-col gap-[11px] bg-[#FFFFFF]">
            <div>CASH</div>
            <div className="flex flex-row lg:w-[249px] lg:h-[32px] justify-between">
              <div>33,493</div>
              <div>+36% ^</div>
            </div>
          </div>
        </div>

        {/* blocks */}
        <div className="lg:grid lg:grid-rows-2 lg:grid-cols-2 flex flex-col ms-[21px] gap-[20px]">
          <div className="lg:w-[606.32px] w-[435px] h-[390px]  rounded-[4px] p-[16px] md:hidden lg:flex lg:flex-col gap-[16px] bg-[#FFFFFF]">
            <Calendar
              onChange={setDate}
              value={date}
              className="w-full h-full"
            />
          </div>
          <div className="lg:w-[609px] lg:h-[352px] w-[435px] h-[384.6px]  rounded-[4px] py-[19.23px]  lg:px-[38.45px] px-[38px] md:hidden lg:flex lg:flex-col  lg:gap-[16px] gap-[10px] bg-[#FFFFFF]">
            <div className="lg:w-[532.09px] w-[374.09px] h-[41.81px] flex flex-col gap-[4.81px] ">
              <p className="text-[#191D23] text-[14px]">Reservation stats</p>
              <p className="text-[#64748B] text-[10px]">
                Your current reservation summary and activity.
              </p>
            </div>
            <div className="lg:w-[532px] lg:h-[62px] w-[416px] h-[94.65px] p-[4.81px]  flex flex-col gap-[30px] lg:gap-0 lg:flex-row justify-between">
              <div className="w-[289.6px] h-[31px] flex gap-[24.03px]">
                <div className="flex flex-col">
                  <p className="text-[9.61px] text-[#64748B]">Bitcoin</p>
                  <p className="text-[13.22px] text-[#191D23]">
                    62% <span className="text-xs ms-[7px]">10.78%</span>
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="text-[9.61px] text-[#64748B]">Credit</p>
                  <p className="text-[13.22px] text-[#191D23]">
                    12% <span className="text-xs ms-[7px]">10.78%</span>
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="text-[9.61px] text-[#64748B]">Cash</p>
                  <p className="text-[13.22px] text-[#191D23]">
                    30% <span className="text-xs ms-[7px]">10.78%</span>
                  </p>
                </div>
              </div>
              <div className="lg:w-[129.18px] lg:h-[52.87px] w-[366px] h-[24.03px]  flex flex-row lg:flex-col gap-[7px] justify-between lg:justify-start">
                <div className="flex flex-row w-[129.18px] h-[24.03px] rounded-[2.4px] border-[0.6px] border-[#E7EAEE] gap-[4.81px] p-[4.81px]">
                  <IoIosSearch className="text-black" />{" "}
                  <input
                    value=""
                    placeholder="search"
                    className="w-full outline-none"
                  />
                </div>
                <div className="flex flex-row w-[129.18px] h-[21.63px] gap-[7px]">
                  <select className="min-w-[60.98px] h-[21.63px]">
                    <option>Monthly</option>
                  </select>
                  <button className="w-[60.98px] h-[21.63px]">Filter</button>
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

          <div className="hidden md:flex lg:hidden md:flex-row md:max-w-[747px] md:h-[390px] md:gap-[8px]">
            <div className="lg:w-[606.32px] lg:h-[390px] md:w-[288px] md:h-[390px] rounded-[4px] p-[16px] flex flex-col gap-[16px] bg-[#FFFFFF]">
              <Calendar
                onChange={setDate}
                value={date}
                className="w-full h-full"
              />
            </div>
            <div className="lg:w-[609px] lg:h-[352px] md:w-[441px] md:h-[384.6px]  rounded-[4px] py-[19.23px]  md:px-[38.45px] flex flex-col  md:gap-[19px] bg-[#FFFFFF]">
              <div className="lg:w-[532.09px] w-[374.09px] h-[41.81px] flex flex-col gap-[4.81px] ">
                <p className="text-[#191D23] text-[14px]">Reservation stats</p>
                <p className="text-[#64748B] text-[10px]">
                  Your current reservation summary and activity.
                </p>
              </div>
              <div className="lg:w-[532px] lg:h-[62px] w-[416px] h-[94.65px] p-[4.81px]  flex flex-col gap-[30px] lg:gap-0 lg:flex-row justify-between">
                <div className="w-[289.6px] h-[31px] flex gap-[24.03px]">
                  <div className="flex flex-col">
                    <p className="text-[9.61px] text-[#64748B]">Bitcoin</p>
                    <p className="text-[13.22px] text-[#191D23]">
                      62% <span className="text-xs ms-[7px]">10.78%</span>
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[9.61px] text-[#64748B]">Credit</p>
                    <p className="text-[13.22px] text-[#191D23]">
                      12% <span className="text-xs ms-[7px]">10.78%</span>
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[9.61px] text-[#64748B]">Cash</p>
                    <p className="text-[13.22px] text-[#191D23]">
                      30% <span className="text-xs ms-[7px]">10.78%</span>
                    </p>
                  </div>
                </div>
                <div className="lg:w-[129.18px] lg:h-[52.87px] w-[366px] h-[24.03px]  flex flex-row lg:flex-col gap-[7px] justify-between lg:justify-start">
                  <div className="flex flex-row w-[129.18px] h-[24.03px] rounded-[2.4px] border-[0.6px] border-[#E7EAEE] gap-[4.81px] p-[4.81px]">
                    <IoIosSearch className="text-black" />{" "}
                    <input
                      value=""
                      placeholder="search"
                      className="w-full outline-none"
                    />
                  </div>
                  <div className="flex flex-row w-[129.18px] h-[21.63px] gap-[7px]">
                    <select className="min-w-[60.98px] h-[21.63px]">
                      <option>Monthly</option>
                    </select>
                    <button className="w-[60.98px] h-[21.63px]">Filter</button>
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
          <div className="lg:w-[602px] md:w-[734px] w-[435px] h-[352px]   rounded-[4px] py-[32px] px-[16px] flex flex-col lg:gap-[16px] gap-[32px] bg-[#FFFFFF]">
            {rooms?.map((room, index) => (
              <div
                className="lg:w-[570px]  md:w-[702px] w-[403px] h-[80px] rounded-[10px] p-[8px] gap-[10px] flex flex-row bg-[#FFFFFF] "
                key={index}
              >
                <div className="relative w-[112px] h-[64px] ">
                  <Image
                    src={room.image}
                    fill={true}
                    alt="image"
                    className="rounded-[4px]"
                  />
                </div>
                <div className="flex flex-col gap-[10px]">
                  <p>{room.name}</p>
                  <p>{room.time}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:w-[603px] md:w-[710px] w-[435px] h-[420px]  rounded-[10px] border-[1px] py-[18px] px-[24px] flex flex-col gap-[24px] bg-[#FFFFFF]">
            <div className="lg:w-[555px] md:w-[662px] w-[387px] h-[50px] flex flex-col gap-[4px]">
              <p>Recent Customers</p>
              <p>Lorem ipsum dolor sit ametis</p>
            </div>
            {customers?.map((customer, index) => (
              <div
                className="lg:w-[555px] md:w-[662px] w-[387px] gap-[128px] h-[47px] flex flex-row lg:gap-[296px] md:gap-[400px] text-[12px]"
                key={index}
              >
                <div className="flex flex-row gap-[10px]">
                  <div className="relative w-[37px] h-[36px] ">
                    <Image
                      src={customer.image}
                      fill={true}
                      alt="image"
                      className="rounded-[50%]"
                    />
                  </div>
                  <div className="flex flex-col justify-between h-[36px]">
                    <p>{customer.name}</p>
                    <p>{customer.email}</p>
                  </div>
                </div>
                <div className="flex flex-col justify-between h-[36px]">
                  <p>$11,234</p>
                  <p>Austin</p>
                </div>
              </div>
            ))}
            <div className="w-[161.98px] h-[18px] flex flex-row gap-[14px] text-[12px]">
              <p>SEE ALL CUSTOMERS</p>
              <p>
                <MdOutlineKeyboardArrowRight />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
