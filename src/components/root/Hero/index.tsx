import Image from "next/image";
import BackgroundImageContainer from "../../common/BackgroundImageContainer";
import { BACKGROUNDS, svgs } from "@/constants/images";
import Tag from "./Tag";
import { strings } from "@/constants/strings";

const Hero: React.FC = () => {
  return (
    <BackgroundImageContainer
      className="flex flex-col items-center justify-end bg-gradient-to-t from-black/80 to-transparent pb-12 md:pb-32"
      backgroundImage={BACKGROUNDS.HERO_IMAGE}
    >
      <div
        className="mb-16 flex flex-col items-center space-y-5 text-center text-neutral-50"
        style={{ textShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)" }}
      >
        <h2 className="text-2xl font-semibold sm:text-3xl md:w-[70%] md:text-4xl">
          {strings.landing.heading}
        </h2>
        <p className="text-md sm:text-lg md:text-xl">
          {strings.landing.subHeading}
        </p>
        <div className="grid grid-cols-1 place-items-center gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-14">
          <Tag icon={svgs.homeVerify} label={strings.landing.tags.verified} />
          <Tag icon={svgs.support} label={strings.landing.tags.support} />
          <Tag icon={svgs.money} label={strings.landing.tags.price} />
        </div>
      </div>

      <div className="flex items-center space-x-2 rounded-full bg-neutral-50 p-4 text-md sm:space-x-3 sm:text-lg">
        <Image src={svgs.search} width={24} height={24} alt="" />
        <span className="whitespace-nowrap">Search by</span>
        <input
          placeholder="city, college, property"
          className="w-[18rem] text-secondary-800/80 placeholder:text-secondary-800/30 md:w-[30rem]"
        />
      </div>
    </BackgroundImageContainer>
  );
};

export default Hero;
