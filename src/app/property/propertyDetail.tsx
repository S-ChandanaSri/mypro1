import { FcLike } from "react-icons/fc";
import { FaStar } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
export default function PropertyDetail() {
  return (
    <div className="max-w-[481px] max-h-[1317px] md:max-w-[765px] md:h-[873px] lg:max-w-[1072px] lg:h-auto flex flex-col gap-[27px]  ">
      <div className="flex flex-row justify-between w-full lg:p-0 lg:pl-[47px] h-[118px] lg:min-h-[121px] px-[23px] py-[0px]">
        <div className="lg:w-[1011px] lg:min-h-[121px] md:w-[765px] md:min-h-[118px] flex flex-col justify-between ">
          <p className="flex text-[#3D52A0] items-center gap-[2px]">
            London &gt; soho{" "}
            <IoLocationSharp
              className="w-[13.5px] h-[15.12px] "
              style={{ color: "#3D52A0" }}
            />{" "}
            view on map
          </p>
          <p className="flex">21 Poland Street,#2</p>
          <p className="flex items-center gap-[4px] text-[#3D52A0] ">
            4.8
            <FaStar
              className="w-[17.21px] h-[16.47px] "
              style={{ color: "#3D52A0" }}
            />{" "}
            83 Ratings
          </p>
        </div>
        <FcLike
          className="w-[37.5px] h-[34.41px] "
          style={{ color: "#DD0F0F" }}
        />
      </div>
      <hr className="bg-[#000000]" />
      <div className="px-[25px] md:px-0  flex md:flex-row flex-col justify-between max-w-[481px] max-h-[490px] lg:w-[981px] lg:min-h-[277px] md:w-[697.32px] md:h-[277px]  md:gap-[55px] md:ml-[32px] lg:ml-[41px]">
        <div className="flex flex-col  justify-between max-w-[318px] min-h-[277px] lg:min-w-[318px] lg:max-h-[277px] md:min-w-[318px] md:max-h-[277px]">
          <p className="flex">Accomodates</p>
          <div className="flex flex-row w-full justify-between">
            <p>All tables</p>
            <p>12</p>
          </div>
          <div className="flex flex-row w-full justify-between">
            <p>All tables</p>
            <p>12</p>
          </div>
          <div className="flex flex-row w-full justify-between">
            <p>All tables</p>
            <p>12</p>
          </div>
          <div className="flex flex-row w-full justify-between">
            <p>All tables</p>
            <p>12</p>
          </div>
        </div>
        <div className="flex flex-col justify-between max-w-[343px] min-h-[213px]   lg:min-w-[344px] lg:h-[213px] md:min-w-[344px] md:h-[213px]">
          <p className="flex">Opening hours</p>
          <div className="flex  flex-row  justify-between">
            <p>Mon-Fri</p>
            <div>8:00-9:00</div>
          </div>
          <div className="flex flex-row w-full justify-between">
            <p>Sat</p>
            <div>8:00-9:00</div>
          </div>
          <div className="flex flex-row w-full justify-between">
            <p>Sun</p>
            <div>8:00-9:00</div>
          </div>
        </div>
      </div>
      <hr className="bg-[#000000]" />
      <div className=" px-[25px] md:p-0 flex flex-col gap-y-[20px] justify-between max-w-[441px] max-h-[269px] lg:w-[876px] lg:gap-[20px]  lg:min-h-[179px]  lg:ml-[41px] md:max-w-[736px] md:h-[179px] md:ml-[30px] ">
        <div>Ammenities</div>
        <div className=" flex flex-row justify-between md:max-w-[736px] md:mr-[10px]">
          <p>Ac</p>
          <p>TV</p>
          <p>Widescreen Tv</p>
        </div>
        <div className=" flex flex-row justify-between md:max-w-[736px] md:mr-[10px]">
          <p>Skylight</p>
          <p>whiteboards</p>
          <p>Ensuite Kitchen</p>
        </div>
      </div>
      <hr className="bg-[#000000]" />
      <div className="flex flex-col justify-between max-w-[481px] max-h-[290px]  lg:w-[826px] lg:min-h-[163px] lg:gap-[20px] lg:p-0 py-0 px-[25px] gap-[15px]   lg:ml-[41px] md:w-[765px] md:h-[193px] md:px-[25px] md:my-[0px] md:gap-[15px]">
        <p>Additional In-room Services</p>
        <p>
          Lorem ipsum dolor sit amet consectetur. Lacus et integer enim vitae
          odio sed. Aliquam volutpat neque accumsan tincidunt velit quam.
          Condimentum integer sed in scelerisque sit in quis et.
        </p>
      </div>
      <hr className="bg-[#000000]" />
    </div>
  );
}
