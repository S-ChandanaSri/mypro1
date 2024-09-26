import { strings } from "@/constants/strings";
import { IOpeningHours } from "@/constants/types";

interface OpenHoursProps {
  openingHours: IOpeningHours[];
}

const OpenHours: React.FC<OpenHoursProps> = ({ openingHours }) => {
  return (
    <div className="flex flex-1 flex-col gap-6 text-lg text-neutral-950 sm:gap-14 sm:text-xl">
      <h4>{strings.propertyDetails.openingHours}</h4>
      {openingHours.map((item: IOpeningHours, idx: number) => (
        <div
          className="flex flex-row justify-between text-neutral-950/70"
          key={idx}
        >
          <p>{item.days}</p>
          <span>{item.hours}</span>
        </div>
      ))}
    </div>
  );
};

export default OpenHours;
