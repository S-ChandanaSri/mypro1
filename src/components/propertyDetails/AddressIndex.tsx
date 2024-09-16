import { svgs } from "@/constants/images";
import Image from "next/image";

const AddressIndex: React.FC<{ label: string }> = ({ label }) => {
  return (
    <span className="text-lg text-secondary-800">
      {label}
      <Image
        src={svgs.propertyRightArrow}
        width={8}
        height={8}
        alt="stars"
        className="mx-3 inline"
      />
    </span>
  );
};

export default AddressIndex;
