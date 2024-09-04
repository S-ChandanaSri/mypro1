import Image from "next/image";
import Interior from "../../_assets/images/int3.jpeg";
import { IoMdCall } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
export default function Concierge() {
  const roomsList = [
    {
      employeeId: "#1234",
      employeeName: "Julia",
      employeeImage: Interior,
      jobDetails: "Cleaning , Maintainance , Gardenary",
      schedule: "Mon-Fri",
      contact: "+9142XXXX32",
      status: "Available",
    },
    {
      employeeId: "#1234",
      employeeName: "Julia",
      employeeImage: Interior,
      jobDetails: "Cleaning , Maintainance , Gardenary",
      schedule: "Mon-Fri",
      contact: "+9142XXXX32",
      status: "Available",
    },
    {
      employeeId: "#1234",
      employeeName: "Julia",
      employeeImage: Interior,
      jobDetails: "Cleaning , Maintainance , Gardenary",
      schedule: "Mon-Fri",
      contact: "+9142XXXX32",
      status: "Available",
    },
    {
      employeeId: "#1234",
      employeeName: "Julia",
      employeeImage: Interior,
      jobDetails: "Cleaning , Maintainance , Gardenary",
      schedule: "Mon-Fri",
      contact: "+9142XXXX32",
      status: "Available",
    },
    {
      employeeId: "#1234",
      employeeName: "Julia",
      employeeImage: Interior,
      jobDetails: "Cleaning , Maintainance , Gardenary",
      schedule: "Mon-Fri",
      contact: "+9142XXXX32",
      status: "Available",
    },
    {
      employeeId: "#1234",
      employeeName: "Julia",
      employeeImage: Interior,
      jobDetails: "Cleaning , Maintainance , Gardenary",
      schedule: "Mon-Fri",
      contact: "+9142XXXX32",
      status: "Available",
    },
  ];
  return (
    <div className=" bg-[#F6F8FF]">
      <div className=" flex flex-row items-center gap-[10px] ps-[20px] h-[40px] md:h-[70px]">
        <BiMenuAltLeft />
        Concierge
      </div>
      <div className="lg:w-[1271px] lg:h-[942px] md:w-[768px] md:h-[1132px] w-[480px] h-[1367px]  rounded-[4px] lg:py-[64px] lg:px-[40px] px-[18px] pb-[64px] flex flex-col gap-[32px] bg-[#FFFFFF]">
        {/* <div className="w-[1191px] h-[40px] flex flex-row justify-between items-center">
          <div className="w-[519px] h-[40px] flex flex-row justify-between">
            <div className="text-[#002855] border-b-[2px] border-[#002855] p-[8px]">
              All Employee
            </div>
            <div className="p-[8px] text-[#64748B]">Active Employee</div>
            <div className="p-[8px] text-[#64748B]">Inactive Employee</div>
          </div>
          <div className="w-[288px] h-[40px] flex flex-row gap-[10px]">
            <button className="w-[160px] h-[40px] rounded-[4px] py-[8px] px-[14px] bg-[#002855] text-white border-[1px] border-[#7F56D9]">
              + New Employee
            </button>
            <select className="w-[112px] h-[40px] rounded-[4px] py-[8px] px-[14px]  border-[1px] border-[#002855] text-[#002855] ">
              <option>Newest</option>
            </select>
          </div>
        </div> */}

        <div className="lg:w-[1191px] lg:h-[40px] md:w-[727px] w-[442px] h-[123px] md:h-[123px]  flex lg:flex-row flex-col gap-[43px] justify-between lg:items-center">
          <div className="lg:w-[519px] lg:h-[40px]  md:h-[40px] flex flex-row justify-evenly">
            <div className="text-[#002855] border-b-[2px] border-[#002855] p-[8px]">
              All Employee
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

        <div className="lg:w-[1191px] lg:h-[742px] md:w-[727px] md:h-[1032px] w-[452px] rounded-[4px]">
          <div>
            <div>
              <div className="border-b-[1px] border-[#E7EAEE] text-[#64748B] flex flex-row flex-wrap md:flex-nowrap w-[452px] h-[98px] gap-x-[35px] md:w-[727px] md:h-[62px] lg:w-full lg:h-fit md:gap-[36px] lg:gap-0 justify-center md:justify-between">
                <div className="lg:w-[329px] lg:h-[59.33px] min-w-[117px] h-[49px] md:w-[131px] md:h-[62px] p-[8px] gap-[8px] ">
                  Employee Name
                </div>
                <div className="lg:w-[271px] lg:h-[59.33px] w-[121px] h-[49px] md:w-[121px] md:h-[62px] p-[8px] gap-[8px]">
                  Job Details
                </div>
                <div className="lg:w-[99px] lg:h-[59.33px] w-[99px] h-[49px]  md:w-[99px] md:h-[62px] p-[8px] gap-[8px] ">
                  Schedule
                </div>
                <div className="lg:w-[246px] lg:h-[59.33px] w-[80px] h-[49px] md:w-[80px] md:h-[62px] p-[8px]  gap-[8px]">
                  Contact
                </div>
                <div className="lg:w-[246px]  lg:h-[59.33px] w-[80px] h-[49px] md:w-[131px] md:h-[62px] p-[8px] pl-0  lg:flex lg:justify-center  ">
                  Status
                </div>
              </div>
              {roomsList?.map((employee, index) => (
                <div
                  key={index}
                  className="border-b-[1px] border-[#E7EAEE] flex md:flex-row flex-col w-[452px] max-h-[381px] lg:w-[1191px] lg:h-[113.78px] md:w-[727px] md:h-[178px]"
                >
                  <div className="flex flex-row border-b-[1px] border-[#E7EAEE] md:border-none">
                    <div className=" lg:w-[329px] lg:h-[113.78px] md:w-[166px] w-[156px] min-h-[167px] md:h-[178px] py-[16px] px-[8px] gap-[8px] flex flex-col lg:flex lg:flex-row items-center">
                      <div className="flex flex-row lg:w-[98px] lg:h-[76px] w-[140px] h-[111px]  md:w-[140px] md:h-[107px] gap-[8px] items-center">
                        <input type="checkbox" />
                        <div className="relative lg:w-[74px] lg:h-[76px] w-[116px] h-[111px] md:h-[107px] ">
                          <Image
                            src={employee.employeeImage}
                            alt="employee image"
                            fill={true}
                            className="object-cover rounded-[5px]"
                          />
                        </div>
                      </div>
                      <div>
                        <p>{employee.employeeId}</p>
                        <p>{employee.employeeName}</p>
                      </div>
                    </div>
                    <div className="lg:w-[271px] text-wrap w-[173px]  md:h-[178px] h-[167px] lg:h-[113.78px] py-[16px] px-[8px] gap-[8px] content-center">
                      {employee.jobDetails}
                    </div>
                    <div className="lg:w-[99px] lg:h-[113.78px] md:w-[167px] text-nowrap w-[120px] h-[167px]  md:h-[178px] py-[16px] px-[50px] lg:px-[20px] gap-[8px] content-center">
                      {employee.schedule}
                    </div>
                  </div>
                  <div className="flex flex-row md:flex-col lg:flex-row justify-center lg:justify-center w-[449px] max-h-[71px] md:w-full md:h-full ">
                    <div className="lg:w-[246px] lg:max-h-[113.78px] md:w-[275px] h-[71px] md:h-[90px] py-[16px] px-[8px] gap-[8px]  flex items-center content-center">
                      <IoMdCall />
                      {employee.contact}
                    </div>
                    <div className="lg:w-[246px] lg:h-[113.78px] md:w-[275px] h-[71px] py-[16px] px-[40px] gap-[8px] lg:content-center ">
                      <button className="md:min-w-[123px] w-[104px] h-[36px] rounded-[4px] px-[32px] bg-[#E7EAEE] text-[#64748B] ">
                        InActive
                      </button>
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
