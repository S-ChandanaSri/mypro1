import { ProfileCards } from "@/constants/arrays";
import { IProfileCard } from "@/constants/types";
import ProfileCard from "./ProfileCard";
import { strings } from "@/constants/strings";

const OurCreativeMinds: React.FC = () => {
  return (
    <div className="flex flex-col items-center space-y-16 px-6 sm:px-24">
      <h3 className="text-2xl font-medium">{strings.aboutUs.teamHeading}</h3>
      <div className="grid grid-cols-1 gap-x-9 gap-y-16 md:grid-cols-2 lg:grid-cols-4">
        {ProfileCards.map((card: IProfileCard, idx: number) => (
          <ProfileCard key={idx} {...card} />
        ))}
      </div>
    </div>
  );
};

export default OurCreativeMinds;
