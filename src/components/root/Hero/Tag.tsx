import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface TagProps {
  icon: StaticImport;
  label: string;
}

const Tag: React.FC<TagProps> = ({ icon, label }) => {
  return (
    <span className="flex w-max items-center justify-center space-x-3 whitespace-nowrap rounded-full bg-netrual-900 px-6 py-3">
      <Image src={icon} height={20} width={20} alt="" />
      <p className="text-sm text-neutral-50/90 md:text-lg">{label}</p>
    </span>
  );
};

export default Tag;
