import Image from "next/image";
import Interior from "../../_assets/images/int3.jpeg";
import { IoMdCall } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import { adminImages, adminSvgIcons } from "@/constants/images";
export default function Concierge() {
  const roomsList = [
    {
      employeeId: "#1234",
      employeeName: "Julia",
      employeeImage: adminImages.adminEmployee1,
      jobDetails: "Cleaning , Maintainance , Gardenary",
      schedule: "Mon-Fri",
      contact: "+9142XXXX32",
      status: "Available",
    },
    {
      employeeId: "#1234",
      employeeName: "Julia",
      employeeImage: adminImages.adminEmployee1,
      jobDetails: "Cleaning , Maintainance , Gardenary",
      schedule: "Mon-Fri",
      contact: "+9142XXXX32",
      status: "Available",
    },
    {
      employeeId: "#1234",
      employeeName: "Julia",
      employeeImage: adminImages.adminEmployee1,
      jobDetails: "Cleaning , Maintainance , Gardenary",
      schedule: "Mon-Fri",
      contact: "+9142XXXX32",
      status: "Available",
    },
    {
      employeeId: "#1234",
      employeeName: "Julia",
      employeeImage: adminImages.adminEmployee1,
      jobDetails: "Cleaning , Maintainance , Gardenary",
      schedule: "Mon-Fri",
      contact: "+9142XXXX32",
      status: "Available",
    },
    {
      employeeId: "#1234",
      employeeName: "Julia",
      employeeImage: adminImages.adminEmployee1,
      jobDetails: "Cleaning , Maintainance , Gardenary",
      schedule: "Mon-Fri",
      contact: "+9142XXXX32",
      status: "Available",
    },
    {
      employeeId: "#1234",
      employeeName: "Julia",
      employeeImage: adminImages.adminEmployee1,
      jobDetails: "Cleaning , Maintainance , Gardenary",
      schedule: "Mon-Fri",
      contact: "+9142XXXX32",
      status: "Available",
    },
  ];
  return (
    <div className=" bg-[#F6F8FF] font-serif">
      <div className="flex flex-row items-center gap-2 p-5 text-lg">
        <div className="relative w-5 h-5 ">
          <Image
            src={adminSvgIcons.adminHalfMenu}
            alt="employee image"
            fill={true}
            className="object-cover"
          />
        </div>
        Concierge
      </div>
      <div className="    rounded lg:py-16 lg:px-10 px-4 pb-16 flex flex-col gap-8 bg-neutral-50">
        <div className="     flex lg:flex-row flex-col gap-10 justify-between lg:items-center">
          <div className="lg:w-[32.5rem]  text-md flex flex-row justify-evenly">
            <div className="text-[#002855] border-b-2 border-[#002855] p-2">
              All Employee
            </div>
            <div className="p-2 text-neutral-500">Active Employee</div>
            <div className="p-2 text-neutral-500">Inactive Employee</div>
          </div>
          <div className="lg:w-72   flex lg:flex-row justify-between flex-row-reverse gap-2 text-sm">
            <button className="w-32  rounded py-2 px-3 bg-[#002855] text-neutral-50">
              + New Room
            </button>
            <select className="w-28 rounded py-2 px-3 border border-[#002855] text-[#002855]">
              <option>Newest</option>
            </select>
          </div>
        </div>

        <>
          <div className="    rounded">
            <div className="border-b border-[#E7EAEE] text-neutral-500 text-sm flex flex-row flex-wrap md:flex-nowrap  gap-x-9  lg:w-full md:gap-9  lg:gap-0 justify-center md:justify-between">
              <div className="lg:w-80  w-32 p-2 gap-2 ">Employee Name</div>
              <div className="lg:w-[17rem]  w-32    p-2 gap-2">Job Details</div>
              <div className="w-24 p-2 gap-2">Schedule</div>
              <div className="lg:w-60 w-20 p-2 gap-2">Contact</div>
              <div className="lg:w-60 w-20 md:w-32 p-2 lg:flex lg:justify-center">
                Status
              </div>
            </div>
            {roomsList?.map((employee, index) => (
              <div
                key={index}
                className="border-b border-[#E7EAEE] flex md:flex-row flex-col    "
              >
                <div className="flex flex-row border-b border-[#E7EAEE] md:border-none">
                  <div className=" lg:w-80  py-4 px-2 gap-2 flex flex-col lg:flex lg:flex-row items-center">
                    <div className="flex flex-row lg:w-24      gap-2 items-center">
                      <input type="checkbox" />
                      <div className="relative lg:w-[4.6rem] lg:h-20 w-28 h-28 md:h-[6.7rem] ">
                        <Image
                          src={employee.employeeImage}
                          alt="employee image"
                          fill={true}
                          className="object-cover rounded"
                        />
                      </div>
                    </div>
                    <div>
                      <p className="text-lg">{employee.employeeName}</p>
                      <p className="text-sm">{employee.employeeId}</p>
                    </div>
                  </div>
                  <div className="lg:w-[17rem] text-md text-wrap w-44   py-4 px-2 gap-2 content-center">
                    {employee.jobDetails}
                  </div>
                  <div className="lg:w-24 md:w-40 text-sm  text-nowrap w-28   py-4 px-12 lg:px-5 gap-2 content-center">
                    {employee.schedule}
                  </div>
                </div>
                <div className="flex flex-row md:flex-col text-md lg:flex-row justify-center lg:justify-center    ">
                  <div className="lg:w-60    py-4 px-2 gap-2  flex items-center content-center">
                    <div className="relative w-5 h-5 ">
                      <Image
                        src={adminSvgIcons.adminPhone}
                        alt="employee image"
                        fill={true}
                        className="object-cover rounded"
                      />
                    </div>
                    {employee.contact}
                  </div>
                  <div className=" py-2 px-10 gap-2 lg:content-center ">
                    <button className="   rounded px-8 py-2 bg-neutral-300 text-neutral-500 ">
                      InActive
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      </div>
    </div>
  );
}
