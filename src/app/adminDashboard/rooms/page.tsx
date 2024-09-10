import Image from "next/image";
import Interior from "../../_assets/images/int3.jpeg";
import { BiMenuAltLeft } from "react-icons/bi";
import { adminImages, adminSvgIcons } from "@/constants/images";
export default function Rooms() {
  const roomsList = [
    {
      roomId: "#006548465",
      roomName: "Deluxe-A",
      roomImage: adminImages.adminRoom1,
      bedType: "Double Bed",
      roomFloor: "Floor A-1",
      facilities: "Ac,Shower,Double Bed,Wifi Tv,Coffee Set",
      rate: "$500.00/night",
      status: "Available",
    },
    {
      roomId: "#006548465",
      roomName: "Deluxe-A",
      roomImage: adminImages.adminRoom1,
      bedType: "Double Bed",
      roomFloor: "Floor A-1",
      facilities: "Ac,Shower,Double Bed,Wifi Tv,Coffee Set",
      rate: "$500.00/night",
      status: "Available",
    },
    {
      roomId: "#006548465",
      roomName: "Deluxe-A",
      roomImage: adminImages.adminRoom1,
      bedType: "Double Bed",
      roomFloor: "Floor A-1",
      facilities: "Ac,Shower,Double Bed,Wifi Tv,Coffee Set",
      rate: "$500.00/night",
      status: "Available",
    },
    {
      roomId: "#006548465",
      roomName: "Deluxe-A",
      roomImage: adminImages.adminRoom1,
      bedType: "Double Bed",
      roomFloor: "Floor A-1",
      facilities: "Ac,Shower,Double Bed,Wifi Tv,Coffee Set",
      rate: "$500.00/night",
      status: "Available",
    },
    {
      roomId: "#006548465",
      roomName: "Deluxe-A",
      roomImage: adminImages.adminRoom1,
      bedType: "Double Bed",
      roomFloor: "Floor A-1",
      facilities: "Ac,Shower,Double Bed,Wifi Tv,Coffee Set",
      rate: "$500.00/night",
      status: "Available",
    },
    {
      roomId: "#006548465",
      roomName: "Deluxe-A",
      roomImage: adminImages.adminRoom1,
      bedType: "Double Bed",
      roomFloor: "Floor A-1",
      facilities: "Ac,Shower,Double Bed,Wifi Tv,Coffee Set",
      rate: "$500.00/night",
      status: "Available",
    },
    {
      roomId: "#006548465",
      roomName: "Deluxe-A",
      roomImage: adminImages.adminRoom1,
      bedType: "Double Bed",
      roomFloor: "Floor A-1",
      facilities: "Ac,Shower,Double Bed,Wifi Tv,Coffee Set",
      rate: "$500.00/night",
      status: "Available",
    },
  ];
  return (
    <div className=" bg-[#F6F8FF] font-serif">
      <div className=" flex flex-row items-center gap-2 p-5 text-lg">
        <div className="relative w-5 h-5 ">
          <Image
            src={adminSvgIcons.adminHalfMenu}
            alt="employee image"
            fill={true}
            className="object-cover"
          />
        </div>
        Room List
      </div>
      <div className="   rounded lg:py-16 lg:px-10 md:px-4 px-2 md:pb-16  flex flex-col gap-8 bg-[#FFFFFF]">
        <div className="  w-full  flex lg:flex-row flex-col gap-11 justify-between lg:items-center">
          <div className="lg:w-[32.5rem] text-md  flex flex-row justify-evenly">
            <div className="text-[#002855] border-b-2 border-[#002855] p-2">
              All Rooms
            </div>
            <div className="p-2 text-[#64748B]">Active Employee</div>
            <div className="p-2 text-[#64748B]">Inactive Employee</div>
          </div>
          <div className="lg:w-72 text-sm   flex lg:flex-row justify-between flex-row-reverse gap-[10px]">
            <button className="w-32  rounded py-2 px-3 bg-[#002855] text-neutral-50 gap-x-1 flex items-center">
              <div className="relative w-2 h-2 ">
                <Image
                  src={adminSvgIcons.adminPlus}
                  alt="employee image"
                  fill={true}
                  className="object-cover"
                />
              </div>{" "}
              New Room
            </button>
            <select className="w-28  rounded py-2 px-3 border border-[#002855] text-[#002855]">
              <option>Newest</option>
            </select>
          </div>
        </div>

        <div className="  rounded">
          <>
            <div>
              <div className="border-b border-[#E7EAEE] text-[#64748B] text-sm flex flex-row flex-wrap md:flex-nowrap   gap-x-9  md:gap-0    justify-center md:justify-between">
                <div className="w-28  lg:w-80  p-2 gap-2 ">Room Name</div>
                <div className=" w-[7.5rem]   p-2 gap-2">Bed Type</div>
                <div className="w-28  md:w-[7.5rem]   p-2 gap-2">
                  Room Floor
                </div>
                <div className="w-20  lg:w-52    p-2 gap-2">Facilities</div>
                <div className="w-20  lg:w-52    p-2 gap-2">Rate</div>
                <div className=" lg:w-52  w-20  p-2 gap-2">Status</div>
              </div>
              {roomsList?.map((room, index) => (
                <div
                  key={index}
                  className="border-b border-[#E7EAEE] flex flex-col md:flex-row   "
                >
                  <div className="flex flex-row border-b border-[#E7EAEE] md:border-none">
                    <div className="flex lg:flex-row flex-col lg:w-80  w-40   py-4 px-2 gap-2 items-center">
                      <div className="flex flex-row md:w-36  gap-2 items-center">
                        <input type="checkbox" />
                        <div className="relative w-28 h-20">
                          <Image
                            src={room.roomImage}
                            alt="room image"
                            fill={true}
                            className="object-cover rounded"
                          />
                        </div>
                      </div>
                      <div>
                        <p className="text-sm">{room.roomId}</p>
                        <p className="text-lg">{room.roomName}</p>
                      </div>
                    </div>
                    <div className="lg:w-32 w-28 text-md py-4 px-2 gap-2">
                      {room.bedType}
                    </div>
                    <div className="lg:w-32  w-40  text-md py-4 px-2 gap-2">
                      {room.roomFloor}
                    </div>
                  </div>
                  <div className="flex text-xs lg:flex-row flex-col md:w-[17rem] lg:w-fit  ">
                    <div className="  border-b border-[#E7EAEE] lg:border-none py-4 px-2">
                      {room.facilities}
                    </div>
                    <div className="flex flex-row md:flex-col lg:flex-row   border-b border-[#E7EAEE] md:border-none">
                      <div className="lg:w-52  w-60  text-md md:w-[17rem]  md:border-b md:border-[#E7EAEE] lg:border-none py-4 px-2 ">
                        {room.rate}
                      </div>
                      <div className="lg:w-52 w-56 md:w-[17rem]  py-4 px-10 gap-2">
                        <button className=" text-md  rounded py-2 px-8 bg-[#E7EAEE]  text-[#64748B] ">
                          Available
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        </div>
      </div>
    </div>
  );
}
