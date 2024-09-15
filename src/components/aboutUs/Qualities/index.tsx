import { QualitiesInfo } from "@/constants/arrays";
import { strings } from "@/constants/strings";
import { IQuality } from "@/constants/types";
import Quality from "./Quality";

const Qualities: React.FC = () => {
  return (
    <div className="space-y-16">
      <div className="text-center">
        <h3 className="text-2xl font-medium text-neutral-950">
          {strings.aboutUs.whyUs}
        </h3>
        <p className="text-lg text-neutral-500">
          {strings.aboutUs.whyUsSubheading}
        </p>
      </div>
      <div className="grid grid-cols-1 outline outline-2 -outline-offset-2 outline-white md:grid-cols-2 lg:grid-cols-3">
        {QualitiesInfo.map((quality: IQuality, idx: number) => (
          <Quality key={idx} {...quality} />
        ))}
      </div>
    </div>
  );
};

export default Qualities;
