import Image from "next/image";

interface Service {
  icon: string;
  name: string;
}

const Service: React.FC<Service> = ({ icon, name }) => {
  return (
    <div className="flex flex-row gap-4 text-lg text-neutral-950/70 sm:text-xl">
      <Image src={icon} width={24} height={24} alt="service" />
      <span>{name}</span>
    </div>
  );
};

export default Service;
