import Image from "next/image";
import { svgs } from "@/constants/images";
import { adminEmployeeList } from "@/constants/adminDashboardArrays";
import { strings } from "@/constants/strings";
export default function Concierge() {
  return (
    <div className=" bg-[#F6F8FF] font-serif w-full">
      <div className="flex flex-row items-center gap-2 p-5 text-lg">
        <Image
          src={svgs.adminHalfMenu}
          alt="employee image"
          width={20}
          height={20}
          className="object-cover"
        />

        {strings.adminDashboard.conciergeList.conciergeList}
      </div>
      <div className="    rounded lg:py-16 lg:px-10 px-4 pb-16 flex flex-col gap-8 bg-neutral-50">
        <div className="     flex lg:flex-row flex-col gap-10 justify-between lg:items-center">
          <div className="  text-md flex flex-row justify-evenly">
            <p className="text-secondaryWashed-800 border-b-2 border-secondaryWashed-800 p-2">
              {strings.adminDashboard.conciergeList.allRooms}
            </p>
            <p className="p-2 text-neutral-500">
              {strings.adminDashboard.conciergeList.activeEmployee}
            </p>
            <p className="p-2 text-neutral-500">
              {strings.adminDashboard.conciergeList.inactiveEmployee}
            </p>
          </div>
          <div className="   flex lg:flex-row justify-between  flex-row-reverse gap-2 text-sm">
            <button className="  rounded py-2 px-3 bg-secondaryWashed-800 flex flex-row items-center gap-x-2 text-neutral-50">
              <Image
                src={svgs.adminPlus}
                alt="employee image"
                width={16}
                height={16}
                className="object-cover"
              />

              {strings.adminDashboard.conciergeList.newRoom}
            </button>
            <select className="rounded py-2 px-3 border border-secondaryWashed-800 text-secondaryWashed-800">
              <option>Newest</option>
            </select>
          </div>
        </div>

        <div className="    rounded">
          <div className="border-b border-neutral-100 text-neutral-500 text-sm flex flex-row flex-wrap md:flex-nowrap  gap-x-9   md:gap-9  lg:gap-0 justify-center md:justify-between xl:w-full xl:justify-evenly">
            <p className="  p-2 gap-2 ">
              {strings.adminDashboard.conciergeList.EmployeeName}
            </p>
            <p className="    p-2 gap-2">
              {strings.adminDashboard.conciergeList.jobDetails}
            </p>
            <p className=" p-2 gap-2">
              {strings.adminDashboard.conciergeList.schedule}
            </p>
            <p className=" p-2 gap-2">
              {strings.adminDashboard.conciergeList.contact}
            </p>
            <p className=" p-2 lg:flex lg:justify-center">
              {strings.adminDashboard.conciergeList.status}
            </p>
          </div>
          {adminEmployeeList?.map((employee, index) => (
            <div
              key={index}
              className="border-b border-neutral-100 flex md:flex-row flex-col   xl:w-full xl:justify-evenly "
            >
              <div className="flex flex-row border-b border-neutral-100 md:border-none xl:w-full xl:justify-evenly">
                <div className="  py-4 px-2 gap-2 flex flex-col lg:flex lg:flex-row items-center">
                  <p className="flex flex-row      gap-2 items-center">
                    <input type="checkbox" />

                    <Image
                      src={employee.employeeImage}
                      alt="employee image"
                      width={112}
                      height={100}
                      className="object-cover rounded"
                    />
                  </p>
                  <div>
                    <p className="text-lg">{employee.employeeName}</p>
                    <p className="text-sm">{employee.employeeId}</p>
                  </div>
                </div>
                <p className="text-md text-wrap     py-4 px-2 gap-2 content-center">
                  {employee.jobDetails}
                </p>
                <p className=" text-sm  text-nowrap   py-4 px-12 lg:px-5 gap-2 content-center">
                  {employee.schedule}
                </p>
              </div>

              <div className="flex flex-row md:flex-col text-md lg:flex-row  xl:w-full xl:justify-evenly">
                <div className="    py-4 px-2 gap-2  flex items-center content-center">
                  <Image
                    src={svgs.adminPhone}
                    alt="employee image"
                    width={20}
                    height={20}
                    className="object-cover rounded"
                  />

                  <p>{employee.contact}</p>
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
      </div>
    </div>
  );
}
