import { NextPage } from "next";
import Stat from "@/components/aboutUs/Stat";
import { Stats } from "@/constants/arrays";
import { IStat } from "@/constants/types";
import { strings } from "@/constants/strings";
import Button from "@/components/common/Button";
import OurCreativeMinds from "@/components/aboutUs/CreativeMinds";
import DistributedTeam from "@/components/aboutUs/DistributedTeam";
import Qualities from "@/components/aboutUs/Qualities";

const AboutUs: NextPage = () => {
  return (
    <div className="flex flex-col items-center space-y-32 px-6 pt-[92px] sm:px-16 md:pt-[72px]">
      <div className="mt-16 space-y-6 text-center">
        <div className="flex flex-col items-center space-y-10 text-secondaryWashed-900">
          <h1 className="text-2xl font-medium">{strings.aboutUs.title}</h1>
          <span className="font-display text-9xl">{strings.appName}</span>
          <h2 className="text-xl font-medium text-secondaryWashed-700">
            {strings.aboutUs.tag}
          </h2>
          <p className="w-[90%] text-xl font-light md:w-3/4">
            {strings.aboutUs.subTitle}
          </p>
        </div>
        <p className="text-xl text-secondaryWashed-700">
          {strings.aboutUs.joinUs}
        </p>
        <Button
          variant="base"
          className="mx-auto w-max rounded-md bg-secondaryWashed-900 px-12 py-4 text-xl hover:bg-secondaryWashed-900/80"
        >
          {strings.aboutUs.join}
        </Button>
        <ul className="flex w-full justify-between py-24">
          {Stats.map((stat: IStat, idx: number) => (
            <Stat key={idx} value={stat.value} label={stat.label} />
          ))}
        </ul>
      </div>
      <Qualities />
      <DistributedTeam />
      <OurCreativeMinds />
    </div>
  );
};

export default AboutUs;
