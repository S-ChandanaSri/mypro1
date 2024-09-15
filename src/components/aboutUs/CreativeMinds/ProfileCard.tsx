import Image from "next/image";
import { IProfileCard } from "@/constants/types";
import Button from "@/components/common/Button";
import { SOCIAL_ICONS } from "@/constants/images";

const ProfileCard: React.FC<IProfileCard> = ({
  profileImg,
  name,
  title,
  body,
  links,
}) => {
  return (
    <div className="flex flex-col">
      <Image
        alt=""
        width={0}
        height={0}
        sizes="100vw"
        src={profileImg}
        className="w-full"
      />
      <span className="mt-6 text-xl">{name}</span>
      <span className="mt-1 text-lg text-secondaryWashed-900">{title}</span>
      <p className="mt-4 font-sans text-md">{body}</p>
      <div className="mt-6 flex w-max space-x-10">
        {Object.entries(links).map(([key, value]) => (
          <Button
            key={key}
            className="h-12 rounded-none"
            variant="link"
            link={value}
            postIconNode={SOCIAL_ICONS[key as keyof typeof SOCIAL_ICONS]}
          />
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;
