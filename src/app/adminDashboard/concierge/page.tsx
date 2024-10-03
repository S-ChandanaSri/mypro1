import Image from "next/image";
import { svgs } from "@/constants/images";
import { adminEmployeeList } from "@/constants/adminDashboardArrays";
import { strings } from "@/constants/strings";
export default function Concierge() {
  return (
    <div className="w-full bg-[#F6F8FF] font-serif">
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
      <div className="flex flex-col gap-8 rounded bg-neutral-50 px-4 pb-16 lg:px-10 lg:py-16">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-center">
          <div className="flex flex-row justify-evenly text-md">
            <p className="border-b-2 border-secondaryWashed-800 p-2 text-secondaryWashed-800">
              {strings.adminDashboard.conciergeList.allRooms}
            </p>
            <p className="p-2 text-neutral-500">
              {strings.adminDashboard.conciergeList.activeEmployee}
            </p>
            <p className="p-2 text-neutral-500">
              {strings.adminDashboard.conciergeList.inactiveEmployee}
            </p>
          </div>
          <div className="flex flex-row-reverse justify-between gap-2 text-sm lg:flex-row">
            <button className="flex flex-row items-center gap-x-2 rounded bg-secondaryWashed-800 px-3 py-2 text-neutral-50">
              <Image
                src={svgs.adminPlus}
                alt="employee image"
                width={16}
                height={16}
                className="object-cover"
              />

              {strings.adminDashboard.conciergeList.newRoom}
            </button>
            <select className="rounded border border-secondaryWashed-800 px-3 py-2 text-secondaryWashed-800">
              <option>Newest</option>
            </select>
          </div>
        </div>

        <div className="rounded">
          <div className="flex flex-row flex-wrap justify-center gap-x-9 border-b border-neutral-100 text-sm text-neutral-500 md:flex-nowrap md:justify-between md:gap-9 lg:gap-0 xl:w-full xl:justify-evenly">
            <p className="gap-2 p-2">
              {strings.adminDashboard.conciergeList.EmployeeName}
            </p>
            <p className="gap-2 p-2">
              {strings.adminDashboard.conciergeList.jobDetails}
            </p>
            <p className="gap-2 p-2">
              {strings.adminDashboard.conciergeList.schedule}
            </p>
            <p className="gap-2 p-2">
              {strings.adminDashboard.conciergeList.contact}
            </p>
            <p className="p-2 lg:flex lg:justify-center">
              {strings.adminDashboard.conciergeList.status}
            </p>
          </div>
          {adminEmployeeList?.map((employee, index) => (
            <div
              key={index}
              className="flex flex-col border-b border-neutral-100 md:flex-row xl:w-full xl:justify-evenly"
            >
              <div className="flex flex-row border-b border-neutral-100 md:border-none xl:w-full xl:justify-evenly">
                <div className="flex flex-col items-center gap-2 px-2 py-4 lg:flex lg:flex-row">
                  <p className="flex flex-row items-center gap-2">
                    <input type="checkbox" />

                    <Image
                      src={employee.employeeImage}
                      alt="employee image"
                      width={112}
                      height={100}
                      className="rounded object-cover"
                    />
                  </p>
                  <div>
                    <p className="text-lg">{employee.employeeName}</p>
                    <p className="text-sm">{employee.employeeId}</p>
                  </div>
                </div>
                <p className="content-center gap-2 text-wrap px-2 py-4 text-md">
                  {employee.jobDetails}
                </p>
                <p className="content-center gap-2 text-nowrap px-12 py-4 text-sm lg:px-5">
                  {employee.schedule}
                </p>
              </div>

              <div className="flex flex-row text-md md:flex-col lg:flex-row xl:w-full xl:justify-evenly">
                <div className="flex content-center items-center gap-2 px-2 py-4">
                  <Image
                    src={svgs.adminPhone}
                    alt="employee image"
                    width={20}
                    height={20}
                    className="rounded object-cover"
                  />

                  <p>{employee.contact}</p>
                </div>
                <div className="gap-2 px-10 py-2 lg:content-center">
                  <button className="rounded bg-neutral-300 px-8 py-2 text-neutral-500">
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
