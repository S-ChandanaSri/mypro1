import { IStat } from "@/constants/types";

const Stat: React.FC<IStat> = ({ value, label }) => {
  return (
    <div className="text-center">
      <span className="block text-7xl text-secondaryWashed-700">{value}</span>
      <span className="text-md font-medium text-neutral-950">{label}</span>
    </div>
  );
};

export default Stat;
