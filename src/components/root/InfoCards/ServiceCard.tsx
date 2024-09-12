import { ICardInfo } from "@/constants/types";
import Image from "next/image";

const ServiceCard: React.FC<ICardInfo> = ({ icon, label, body }) => {
  return (
    <div className="flex min-h-[20rem] max-w-[26rem] flex-col items-center justify-center space-y-8 rounded-3xl border-4 border-secondaryWashed-200 px-8 py-12">
      <Image width={120} height={120} src={icon} alt={label ?? ""} />
      <p className="text-xl font-medium">{label}</p>
      {body && <p className="pt-6 text-md">{body}</p>}
    </div>
  );
};

export default ServiceCard;
