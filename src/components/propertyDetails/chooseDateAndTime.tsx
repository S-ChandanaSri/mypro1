import { svgs } from "@/constants/images";
import { strings } from "@/constants/strings";
import Image from "next/image";
export default function ChooseDateAndTime() {
  return (
    <div className="h-fit min-w-[19rem] rounded-md border border-neutral-400 bg-neutral-50">
      <div className="p-5">
        <div className="flex flex-row gap-2">
          <div className="relative h-7 w-7">
            <Image
              src={svgs.propertyCalendar}
              fill={true}
              alt="calendar"
              className="object-cover"
            />
          </div>
          <div className="text-lg">
            {strings.propertyDetails.reservation.dateTime}
          </div>
        </div>
      </div>
      <hr />

      <div className="p-5">
        <div className="flex flex-row justify-center gap-10 text-lg">
          <div className="text-lg">
            <p className="text-neutral-700">
              {strings.propertyDetails.reservation.hourly}
            </p>
            <p className="text-neutral-950">Rs100/hr</p>
          </div>
          <div className="text-lg">
            <p className="text-neutral-700">
              {strings.propertyDetails.reservation.daily}
            </p>
            <p className="text-neutral-950">Rs1000/day</p>
          </div>
        </div>
      </div>
      <hr />

      <div className="flex flex-col gap-5 p-5 text-neutral-700">
        <button className="h-12 rounded-md border border-neutral-400 bg-secondaryWashed-800 text-lg text-neutral-50">
          {strings.propertyDetails.reservation.reserve}
        </button>
        <p className="text-xs">
          {strings.propertyDetails.reservation.instruction1}
        </p>
        <p className="text-xs">
          {strings.propertyDetails.reservation.instruction2}
        </p>
        <button className="h-9 rounded-sm border-2 border-neutral-400 text-xs text-neutral-800">
          {strings.propertyDetails.reservation.request}
        </button>
      </div>
    </div>
  );
}
