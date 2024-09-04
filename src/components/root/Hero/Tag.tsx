import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface TagProps {
  icon: StaticImport;
  label: string;
}

const Tag: React.FC<TagProps> = ({ icon, label }) => {
  return (
    <span className="flex items-center justify-center space-x-3 rounded-full bg-netrual-900 px-6 py-3">
      <Image src={icon} height={20} width={20} alt="" />
      <p className="text-lg text-neutral-50/90">{label}</p>
    </span>
  );
};

export default Tag;
