import Image from "next/image";
import Interior from "../../_assets/images/int3.jpeg";
import { BiMenuAltLeft } from "react-icons/bi";
export default function Rooms() {
  const roomsList = [
    {
      roomId: "#006548465",
      roomName: "Deluxe-A",
      roomImage: Interior,
      bedType: "Double Bed",
      roomFloor: "Floor A-1",
      facilities: "Ac,Shower,Double Bed,Wifi Tv,Coffee Set",
      rate: "$500.00/night",
      status: "Available",
    },
    {
      roomId: "#006548465",
      roomName: "Deluxe-A",
      roomImage: Interior,
      bedType: "Double Bed",
      roomFloor: "Floor A-1",
      facilities: "Ac,Shower,Double Bed,Wifi Tv,Coffee Set",
      rate: "$500.00/night",
      status: "Available",
    },
    {
      roomId: "#006548465",
      roomName: "Deluxe-A",
      roomImage: Interior,
      bedType: "Double Bed",
      roomFloor: "Floor A-1",
      facilities: "Ac,Shower,Double Bed,Wifi Tv,Coffee Set",
      rate: "$500.00/night",
      status: "Available",
    },
    {
      roomId: "#006548465",
      roomName: "Deluxe-A",
      roomImage: Interior,
      bedType: "Double Bed",
      roomFloor: "Floor A-1",
      facilities: "Ac,Shower,Double Bed,Wifi Tv,Coffee Set",
      rate: "$500.00/night",
      status: "Available",
    },
    {
      roomId: "#006548465",
      roomName: "Deluxe-A",
      roomImage: Interior,
      bedType: "Double Bed",
      roomFloor: "Floor A-1",
      facilities: "Ac,Shower,Double Bed,Wifi Tv,Coffee Set",
      rate: "$500.00/night",
      status: "Available",
    },
    {
      roomId: "#006548465",
      roomName: "Deluxe-A",
      roomImage: Interior,
      bedType: "Double Bed",
      roomFloor: "Floor A-1",
      facilities: "Ac,Shower,Double Bed,Wifi Tv,Coffee Set",
      rate: "$500.00/night",
      status: "Available",
    },
    {
      roomId: "#006548465",
      roomName: "Deluxe-A",
      roomImage: Interior,
      bedType: "Double Bed",
      roomFloor: "Floor A-1",
      facilities: "Ac,Shower,Double Bed,Wifi Tv,Coffee Set",
      rate: "$500.00/night",
      status: "Available",
    },
  ];
  return (
    <div className=" bg-[#F6F8FF] md:w-[768px] md:h-[1367px] w-[480px] h-[1367px] lg:w-full lg:h-fit">
      <div className=" flex flex-row items-center gap-[10px] ps-[20px] h-[40px] md:h-[70px]">
        <BiMenuAltLeft />
        Room List
      </div>
      <div className="lg:w-[1271px] md:w-[768px] w-[480px] md:h-[1208px]  lg:h-[942px] rounded-[4px] lg:py-[64px] lg:px-[40px] md:px-[18px] px-[10px] md:pb-[64px]  flex flex-col gap-[32px] bg-[#FFFFFF]">
        <div className="lg:w-[1191px] lg:h-[40px] md:w-[727px] w-[442px] h-[123px] md:h-[123px]  flex lg:flex-row flex-col gap-[43px] justify-between lg:items-center">
          <div className="lg:w-[519px] lg:h-[40px]  md:h-[40px] flex flex-row justify-evenly">
            <div className="text-[#002855] border-b-[2px] border-[#002855] p-[8px]">
              All Rooms
            </div>
            <div className="p-[8px] text-[#64748B]">Active Employee</div>
            <div className="p-[8px] text-[#64748B]">Inactive Employee</div>
          </div>
          <div className="lg:w-[288px] md:w-[727px] h-[40px] flex lg:flex-row justify-between flex-row-reverse gap-[10px]">
            <button className="w-[133px] h-[40px] rounded-[4px] py-[8px] px-[14px] bg-[#002855] text-white">
              + New Room
            </button>
            <select className="w-[111px] h-[40px] rounded-[4px] py-[8px] px-[14px] border-[1px] border-[#002855] text-[#002855]">
              <option>Newest</option>
            </select>
          </div>
        </div>

        <div className="lg:w-[1191px] lg:h-[742px] md:w-[727px] md:h-[978px] w-[452px]  rounded-[4px]">
          <div>
            {/* <tbody>
              <tr className="border-b-[1px] border-[#E7EAEE] text-[#64748B]">
                <td className="w-[329px] h-[59.33px] p-[8px] gap-[8px] ">
                  Room Name
                </td>
                <td className="w-[121px] h-[59.33px] p-[8px] gap-[8px]">
                  Bed Type
                </td>
                <td className="w-[124px] h-[59.33px] p-[8px] gap-[8px]">
                  Room Floor
                </td>
                <td className="w-[205.67px] h-[59.33px] p-[8px] gap-[8px]">
                  Facilities
                </td>
                <td className="w-[205.67px] h-[59.33px] p-[8px] gap-[8px]">
                  Rate
                </td>
                <td className="w-[205.67px] h-[59.33px] p-[8px] gap-[8px]">
                  Status
                </td>
              </tr>
              {roomsList?.map((room, index) => (
                <tr key={index} className="border-b-[1px] border-[#E7EAEE]">
                  <td className="flex flex-row w-[329px] h-[133.78px] py-[16px] px-[8px] gap-[8px] items-center">
                    <div className="flex flex-row w-[140px] h-[76px] gap-[8px] items-center">
                      <input type="checkbox" />
                      <div className="relative w-[116px] h-[76px]">
                        <Image
                          src={room.roomImage}
                          alt="room image"
                          fill={true}
                          className="object-cover rounded-[5px]"
                        />
                      </div>
                    </div>
                    <div>
                      <p>{room.roomId}</p>
                      <p>{room.roomName}</p>
                    </div>
                  </td>
                  <td className="w-[121px] h-[113.78px] py-[16px] px-[8px] gap-[8px]">
                    {room.bedType}
                  </td>
                  <td className="w-[124px] h-[113.78px] py-[16px] px-[8px] gap-[8px]">
                    {room.roomFloor}
                  </td>
                  <td className="w-[205.67px] h-[113.78px] py-[16px] px-[8px] gap-[8px]">
                    {room.facilities}
                  </td>
                  <td className="w-[205.67px] h-[113.78px] py-[16px] px-[8px] gap-[8px]">
                    {room.rate}
                  </td>
                  <td className="w-[205.67px] h-[113.78px] py-[16px] px-[40px] gap-[8px]">
                    <button className="w-[129px] h-[36px] rounded-[4px] px-[32px] bg-[#E7EAEE] text-[#64748B]">
                      Available
                    </button>
                  </td>
                </tr>
              ))}
            </tbody> */}
            {/* <div>
              <div className="border-b-[1px] border-[#E7EAEE] text-[#64748B] flex flex-row">
                <div className="lg:w-[329px] lg:h-[59.33px] md:w-[117px] md:h-[62px] p-[8px] gap-[8px] ">
                  Room Name
                </div>
                <div className="w-[121px] h-[59.33px] p-[8px] gap-[8px]">
                  Bed Type
                </div>
                <div className="w-[124px] h-[59.33px] p-[8px] gap-[8px]">
                  Room Floor
                </div>
                <div className="w-[205.67px] h-[59.33px] p-[8px] gap-[8px]">
                  Facilities
                </div>
                <div className="w-[205.67px] h-[59.33px] p-[8px] gap-[8px]">
                  Rate
                </div>
                <div className="w-[205.67px] h-[59.33px] p-[8px] gap-[8px]">
                  Status
                </div>
              </div>
              {roomsList?.map((room, index) => (
                <div
                  key={index}
                  className="border-b-[1px] border-[#E7EAEE] flex flex-row "
                >
                  <div className="flex flex-row w-[329px] h-[133.78px] py-[16px] px-[8px] gap-[8px] items-center">
                    <div className="flex flex-row w-[140px] h-[76px] gap-[8px] items-center">
                      <input type="checkbox" />
                      <div className="relative w-[116px] h-[76px]">
                        <Image
                          src={room.roomImage}
                          alt="room image"
                          fill={true}
                          className="object-cover rounded-[5px]"
                        />
                      </div>
                    </div>
                    <div>
                      <p>{room.roomId}</p>
                      <p>{room.roomName}</p>
                    </div>
                  </div>
                  <div className="w-[121px] h-[113.78px] py-[16px] px-[8px] gap-[8px] content-center">
                    {room.bedType}
                  </div>
                  <div className="w-[124px] h-[113.78px] py-[16px] px-[8px] gap-[8px] content-center">
                    {room.roomFloor}
                  </div>
                  <div className="w-[205.67px] h-[113.78px] py-[16px] px-[8px] gap-[8px] content-center">
                    {room.facilities}
                  </div>
                  <div className="w-[205.67px] h-[113.78px] py-[16px] px-[8px] gap-[8px] content-center">
                    {room.rate}
                  </div>
                  <div className="w-[205.67px] h-[113.78px] py-[16px] px-[40px] gap-[8px] content-center">
                    <button className="w-[129px] h-[36px] rounded-[4px] px-[32px] bg-[#E7EAEE] text-[#64748B]">
                      Available
                    </button>
                  </div>
                </div>
              ))}
            </div> */}
            <div>
              <div className="border-b-[1px] border-[#E7EAEE] text-[#64748B] flex flex-row flex-wrap md:flex-nowrap w-[452px] max-h-[98px] gap-x-[35px]  md:gap-0 md:w-[727px] md:h-[62px] lg:w-full lg:h-[59.33px] justify-center md:justify-between">
                <div className="w-[117px] h-[49px] lg:w-[329px] lg:h-[59.33px] md:w-[117px] md:h-[62px] p-[8px] gap-[8px] ">
                  Room Name
                </div>
                <div className=" w-[121px] h-[49px] md:w-[121px] lg:h-[59.33px] md:h-[62px] p-[8px] gap-[8px]">
                  Bed Type
                </div>
                <div className="w-[117px] h-[49px] md:w-[121px] lg:h-[59.33px] md:h-[62px] p-[8px] gap-[8px]">
                  Room Floor
                </div>
                <div className="w-[80px] h-[49px] lg:w-[205.67px] lg:h-[59.33px] md:w-[80px] md:h-[62px] p-[8px] gap-[8px]">
                  Facilities
                </div>
                <div className="w-[80px] h-[49px] lg:w-[205.67px] lg:h-[59.33px] md:w-[80px] md:h-[62px] p-[8px] gap-[8px]">
                  Rate
                </div>
                <div className="w-[99px] h-[49px] lg:w-[205.67px] lg:h-[59.33px] md:w-[80px] md:h-[62px] p-[8px] gap-[8px]">
                  Status
                </div>
              </div>
              {roomsList?.map((room, index) => (
                <div
                  key={index}
                  className="border-b-[1px] border-[#E7EAEE] flex flex-col md:flex-row md:w-[727px] lg:w-full lg:h-[113.78px] md:h-[229px] w-[452px] max-h-[381px] "
                >
                  <div className="flex flex-row border-b-[1px] border-[#E7EAEE] md:border-none">
                    <div className="flex lg:flex-row flex-col lg:w-[329px] lg:h-[133.78px] md:w-[166px] w-[156px] h-[177px] md:h-[229px] py-[16px] px-[8px] gap-[8px] items-center">
                      <div className="flex flex-row md:w-[140px] md:h-[76px] gap-[8px] items-center">
                        <input type="checkbox" />
                        <div className="relative w-[116px] h-[76px]">
                          <Image
                            src={room.roomImage}
                            alt="room image"
                            fill={true}
                            className="object-cover rounded-[5px]"
                          />
                        </div>
                      </div>
                      <div>
                        <p>{room.roomId}</p>
                        <p>{room.roomName}</p>
                      </div>
                    </div>
                    <div className="lg:w-[121px] w-[119px] h-[177px] lg:h-[113.78px] md:w-[119px] md:h-[137px] py-[16px] px-[8px] gap-[8px] content-center">
                      {room.bedType}
                    </div>
                    <div className="lg:w-[124px] lg:h-[113.78px] w-[167px] h-[178px] md:w-[167px] md:h-[178px] py-[16px] px-[8px] gap-[8px] content-center">
                      {room.roomFloor}
                    </div>
                  </div>
                  <div className="flex lg:flex-row flex-col md:w-[275px] lg:w-fit md:h-[251px] ">
                    <div className="lg:min-w-[205.67px] lg:h-[113.78px] max-w-[449px] h-[71px] md:w-[275px] md:h-[104px] border-b-[1px] border-[#E7EAEE] lg:border-none py-[16px] px-[8px] gap-[8px] content-center text-center md:text-start ">
                      {room.facilities}
                    </div>
                    <div className="flex flex-row md:flex-col lg:flex-row w-[456px] max-h-[147px] md:w-full md:h-full border-b-[1px] border-[#E7EAEE] md:border-none">
                      <div className="lg:w-[205.67px] w-[240px] h-[66px] lg:h-[113.78px] md:w-[275px] md:h-[66px] md:border-b-[1px] md:border-[#E7EAEE] lg:border-none py-[16px] px-[8px] gap-[8px] content-center text-center lg:text-start">
                        {room.rate}
                      </div>
                      <div className="lg:w-[205.67px] w-[230px] h-[71px] lg:h-[113.78px] md:w-[275px] md:h-[71px] py-[16px] px-[40px] gap-[8px] content-center  md:text-center lg:text-start ">
                        <button className="lg:w-[129px] w-[104px] h-[36px] md:w-[104px] md:h-[36px] rounded-[4px] px-[32px] bg-[#E7EAEE]  text-[#64748B] ">
                          Available
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
