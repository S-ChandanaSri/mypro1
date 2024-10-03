import Image from "next/image";
import { svgs } from "@/constants/images";
import { adminRoomsList } from "@/constants/adminDashboardArrays";
import { strings } from "@/constants/strings";
export default function Rooms() {
  return (
    <div className="bg-[#F6F8FF] font-serif xl:w-full">
      <div className="flex flex-row items-center gap-2 p-5 text-xl">
        <Image
          src={svgs.adminHalfMenu}
          alt="employee image"
          width={20}
          height={20}
          className="object-cover"
        />

        {strings.adminDashboard.roomList.roomList}
      </div>
      <div className="flex flex-col gap-8 rounded bg-neutral-50 px-2 md:px-4 md:pb-16 lg:px-10 lg:py-16">
        <div className="flex flex-col justify-between gap-11 lg:flex-row lg:items-center">
          <div className="flex w-full flex-row justify-evenly text-md">
            <p className="border-b-2 border-secondaryWashed-800 p-2 text-secondaryWashed-800">
              {strings.adminDashboard.roomList.allRooms}
            </p>
            <p className="p-2 text-neutral-500">
              {strings.adminDashboard.roomList.activeEmployee}
            </p>
            <p className="p-2 text-neutral-500">
              {strings.adminDashboard.roomList.inactiveEmployee}
            </p>
          </div>
          <div className="flex flex-row-reverse justify-between gap-[10px] text-sm lg:flex-row">
            <button className="flex w-32 flex-row items-center gap-x-2 rounded bg-secondaryWashed-800 px-3 py-2 text-neutral-50">
              <Image
                src={svgs.adminPlus}
                alt="employee image"
                width={16}
                height={16}
                className="object-contain"
              />

              {strings.adminDashboard.roomList.newRoom}
            </button>
            <select className="rounded border border-secondaryWashed-800 px-3 py-2 text-secondaryWashed-800">
              <option>Newest</option>
            </select>
          </div>
        </div>

        <div>
          <div className="flex flex-row flex-wrap justify-center gap-x-9 border-b border-neutral-100 text-sm text-neutral-500 md:flex-nowrap md:justify-evenly xl:justify-around 2xl:justify-evenly">
            <p className="gap-2 p-2">
              {strings.adminDashboard.roomList.roomName}
            </p>
            <p className="gap-2 p-2">
              {strings.adminDashboard.roomList.bedType}
            </p>
            <p className="gap-2 p-2">
              {strings.adminDashboard.roomList.roomFloor}
            </p>
            <p className="gap-2 p-2">
              {strings.adminDashboard.roomList.facilities}
            </p>
            <p className="gap-2 p-2">{strings.adminDashboard.roomList.rate}</p>
            <p className="gap-2 p-2">
              {strings.adminDashboard.roomList.status}
            </p>
          </div>
          {adminRoomsList?.map((room, index) => (
            <div
              key={index}
              className="flex flex-col justify-around border-b border-neutral-100 sm:flex-row"
            >
              <div className="flex flex-row border-b border-neutral-100 md:border-none xl:w-full xl:justify-evenly">
                <div className="flex flex-col items-center gap-2 px-2 py-4 lg:flex-row">
                  <p className="flex flex-row items-center gap-2">
                    <input type="checkbox" />

                    <Image
                      src={room.roomImage}
                      alt="room image"
                      width={112}
                      height={80}
                      className="rounded object-cover"
                    />
                  </p>
                  <div>
                    <p className="text-sm">{room.roomId}</p>
                    <p className="text-lg">{room.roomName}</p>
                  </div>
                </div>
                <p className="gap-2 px-2 py-4 text-md">{room.bedType}</p>
                <p className="gap-2 px-2 py-4 text-md">{room.roomFloor}</p>
              </div>
              <div className="flex flex-col items-center text-xs lg:flex-row xl:w-full xl:justify-evenly">
                <p className="border-b border-neutral-100 px-2 py-4 text-center lg:border-none">
                  {room.facilities}
                </p>
                <div className="flex flex-row justify-between border-b border-neutral-100 sm:flex-col sm:border-none lg:flex-row xl:w-full xl:justify-evenly">
                  <p className="px-2 py-4 text-center text-md sm:border-b md:border-neutral-100 lg:border-none">
                    {room.rate}
                  </p>

                  <button className="rounded bg-neutral-100 px-8 py-2 text-md text-neutral-500">
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
