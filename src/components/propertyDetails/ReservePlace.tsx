import { svgs } from "@/constants/images";
import { strings } from "@/constants/strings";
import Image from "next/image";
import Button from "../common/Button";

const ReservePlace: React.FC = () => {
  return (
    <div className="col-start-1 row-start-3 min-w-[27rem] space-y-7 rounded-md border border-neutral-950/40 bg-neutral-50 p-6 lg:col-start-2 lg:row-start-1">
      <p className="flex items-center justify-center space-x-3">
        <Image
          src={svgs.propertyCalendar}
          width={24}
          height={24}
          alt="calendar"
        />
        <span className="text-lg">
          {strings.propertyDetails.reservation.dateTime}
        </span>
      </p>

      <hr className="-mx-6" />

      <div className="grid grid-cols-2 text-lg text-neutral-950">
        <span className="text-neutral-950/70">
          {strings.propertyDetails.reservation.hourly}
        </span>
        <span className="text-neutral-950/70">
          {strings.propertyDetails.reservation.daily}
        </span>
        <p>Rs100/hr</p>
        <p>Rs1000/day</p>
      </div>

      <hr className="-mx-6" />

      <div className="flex flex-col items-center space-y-6 text-xs font-light text-neutral-950/70">
        <Button
          variant="base"
          className="rounded-md bg-secondaryWashed-700 px-3 py-4 text-lg font-normal hover:bg-secondaryWashed-800"
        >
          {strings.propertyDetails.reservation.reserve}
        </Button>
        <p>&#10004; {strings.propertyDetails.reservation.instruction1}</p>
        <p>&#10004; {strings.propertyDetails.reservation.instruction2}</p>
      </div>
      <Button
        variant="baseDark"
        className="relative rounded-md border border-neutral-950/40 bg-transparent px-3 py-4 text-xs font-normal hover:bg-neutral-100"
      >
        {strings.propertyDetails.reservation.request}
      </Button>
    </div>
  );
};

export default ReservePlace;
