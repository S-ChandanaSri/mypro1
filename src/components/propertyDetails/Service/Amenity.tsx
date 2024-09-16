import { strings } from "@/constants/strings";
import { IAmenity } from "@/constants/types";
import Service from ".";

interface AmenityProps {
  amenities: IAmenity[];
}

const Amenity: React.FC<AmenityProps> = ({ amenities }) => {
  return (
    <div className="flex flex-col space-y-6 py-7 text-lg sm:space-y-14 sm:text-xl">
      <h4>{strings.propertyDetails.ammenities}</h4>
      <div className="grid grid-cols-1 gap-6 sm:gap-14 md:grid-cols-2 xl:grid-cols-3">
        {amenities.map((item: IAmenity, idx: number) => (
          <Service key={idx} icon={item.icon} name={item.itemName} />
        ))}
      </div>
    </div>
  );
};

export default Amenity;
