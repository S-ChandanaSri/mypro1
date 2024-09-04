import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

type ServiceCardProps = {
  iconNode: StaticImport;
  label: string;
  body?: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ iconNode, label, body }) => {
  return (
    <div className="flex min-h-[300px] flex-col items-center justify-center space-y-8 rounded-3xl border-4 border-secondaryWashed-200 px-8 py-12">
      <Image width={120} height={120} src={iconNode} alt={label ?? ""} />
      <p className="text-xl font-medium">{label}</p>
      {body && <p className="pt-6 text-md">{body}</p>}
    </div>
  );
};

export default ServiceCard;
