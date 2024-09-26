import { strings } from "@/constants/strings";
import { IAccommodate } from "@/constants/types";
import Service from ".";

interface AccomodateProps {
  accomodates: IAccommodate[];
}

const Accomodates: React.FC<AccomodateProps> = ({ accomodates }) => {
  return (
    <div className="flex flex-1 flex-col gap-6 text-lg text-neutral-950 sm:gap-14 sm:text-xl">
      <h4>{strings.propertyDetails.accomodates}</h4>
      {accomodates.map((item: IAccommodate, idx: number) => (
        <div className="flex flex-row justify-between" key={idx}>
          <Service icon={item.icon} name={item.itemName} />
          <p className="text-neutral-950/70">{item.quantity}</p>
        </div>
      ))}
    </div>
  );
};

export default Accomodates;
