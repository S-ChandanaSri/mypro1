import Image from "next/image";
import { svgs } from "@/constants/images";
import { adminRoomsList } from "@/constants/adminDashboardArrays";
import { strings } from "@/constants/strings";
export default function Rooms() {
  return (
    <div className=" bg-[#F6F8FF] font-serif xl:w-full">
      <div className=" flex flex-row items-center gap-2 p-5 text-xl">
        <Image
          src={svgs.adminHalfMenu}
          alt="employee image"
          width={20}
          height={20}
          className="object-cover"
        />

        {strings.adminDashboard.roomList.roomList}
      </div>
      <div className="   rounded lg:py-16 lg:px-10 md:px-4 px-2 md:pb-16  flex flex-col gap-8 bg-neutral-50">
        <div className="   flex lg:flex-row flex-col gap-11 justify-between lg:items-center">
          <div className=" text-md  flex flex-row w-full justify-evenly">
            <p className="text-secondaryWashed-800 border-b-2 border-secondaryWashed-800 p-2">
              {strings.adminDashboard.roomList.allRooms}
            </p>
            <p className="p-2 text-neutral-500">
              {strings.adminDashboard.roomList.activeEmployee}
            </p>
            <p className="p-2 text-neutral-500">
              {strings.adminDashboard.roomList.inactiveEmployee}
            </p>
          </div>
          <div className=" text-sm   flex lg:flex-row justify-between flex-row-reverse gap-[10px]">
            <button className="w-32  rounded py-2 px-3 bg-secondaryWashed-800 flex flex-row items-center gap-x-2 text-neutral-50">
              <Image
                src={svgs.adminPlus}
                alt="employee image"
                width={16}
                height={16}
                className="object-contain"
              />

              {strings.adminDashboard.roomList.newRoom}
            </button>
            <select className="  rounded py-2 px-3 border border-secondaryWashed-800 text-secondaryWashed-800">
              <option>Newest</option>
            </select>
          </div>
        </div>

        <div>
          <div className="border-b border-neutral-100 text-neutral-500 text-sm flex flex-row flex-wrap md:flex-nowrap   gap-x-9      justify-center md:justify-evenly xl:justify-around 2xl:justify-evenly">
            <p className="    p-2 gap-2 ">
              {strings.adminDashboard.roomList.roomName}
            </p>
            <p className="    p-2 gap-2">
              {strings.adminDashboard.roomList.bedType}
            </p>
            <p className="     p-2 gap-2">
              {strings.adminDashboard.roomList.roomFloor}
            </p>
            <p className="    p-2 gap-2">
              {strings.adminDashboard.roomList.facilities}
            </p>
            <p className="    p-2 gap-2">
              {strings.adminDashboard.roomList.rate}
            </p>
            <p className="   p-2 gap-2">
              {strings.adminDashboard.roomList.status}
            </p>
          </div>
          {adminRoomsList?.map((room, index) => (
            <div
              key={index}
              className=" border-b border-neutral-100 flex flex-col sm:flex-row justify-around  "
            >
              <div className=" flex flex-row border-b border-neutral-100 md:border-none xl:justify-evenly xl:w-full ">
                <div className="flex lg:flex-row flex-col      py-4 px-2 gap-2 items-center ">
                  <p className="flex flex-row    gap-2 items-center">
                    <input type="checkbox" />

                    <Image
                      src={room.roomImage}
                      alt="room image"
                      width={112}
                      height={80}
                      className="object-cover rounded "
                    />
                  </p>
                  <div>
                    <p className="text-sm">{room.roomId}</p>
                    <p className="text-lg">{room.roomName}</p>
                  </div>
                </div>
                <p className="  text-md py-4 px-2 gap-2">{room.bedType}</p>
                <p className="    text-md py-4 px-2 gap-2">{room.roomFloor}</p>
              </div>
              <div className="  flex text-xs lg:flex-row flex-col items-center xl:w-full xl:justify-evenly ">
                <p className="   border-b border-neutral-100 lg:border-none py-4 px-2 text-center">
                  {room.facilities}
                </p>
                <div className="  flex flex-row sm:flex-col lg:flex-row   border-b border-neutral-100 sm:border-none justify-between xl:w-full xl:justify-evenly">
                  <p className="     text-md   sm:border-b md:border-neutral-100 lg:border-none py-4 px-2 text-center ">
                    {room.rate}
                  </p>

                  <button className="  text-md  rounded py-2 px-8 bg-neutral-100  text-neutral-500 ">
                    Available
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
