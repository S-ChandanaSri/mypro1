import Image from "next/image";
import BackgroundImageContainer from "../../common/BackgroundImageContainer";
import { BACKGROUNDS, svgs } from "@/constants/images";
import Tag from "./Tag";
import { strings } from "@/constants/strings";

const Hero: React.FC = () => {
  return (
    <BackgroundImageContainer
      className="flex flex-col items-center justify-center bg-gradient-to-t from-black/80 to-transparent"
      backgroundImage={BACKGROUNDS.HERO_IMAGE}
    >
      <div
        className="space-y-5 text-center text-neutral-50"
        style={{ textShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)" }}
      >
        <h2 className="text-4xl font-semibold">
          Reserve Your Ideal <br /> Holiday
        </h2>
        <p className="text-xl">
          We&apos;re thrilled to have you! Let&apos;s find you the ideal place
          to stay.
        </p>
        <div className="flex items-center justify-center space-x-14">
          <Tag icon={svgs.homeVerify} label={strings.landing.tags.verified} />
          <Tag icon={svgs.support} label={strings.landing.tags.support} />
          <Tag icon={svgs.money} label={strings.landing.tags.price} />
        </div>
      </div>

      <div className="w-fixed h-fixed relative right-[27rem] top-[5rem] ml-[2rem] mt-12 flex h-[66px] w-[301px] items-center gap-[7px] rounded-[61.05px] bg-[#FFFFFF] p-[18px] transition-all duration-500 ease-in-out xxs:ml-[9rem] xs:ml-[13rem] sm:mx-auto sm:ml-[27rem] sm:w-[501px] md:relative md:left-[5rem] md:mx-auto lg:relative lg:left-[5rem] lg:mx-auto">
        <Image src={svgs.search} alt="" className="h-[24px] w-[24px]" />
        <div className="flex h-[30px] w-[313px] items-center pt-2">
          <div className="font-poppins relative bottom-[4px] h-[30px] w-[81px] text-[15px] font-normal leading-[30px] text-black sm:text-[20px]">
            Search by
          </div>
          <input
            placeholder=" city, college, property"
            className="font-poppins text-blue-custom relative bottom-[4px] h-[30px] w-[163px] text-[18px] font-normal leading-[30px] text-opacity-80 focus:outline-none sm:text-[20px]"
          />
        </div>
      </div>
    </BackgroundImageContainer>
  );
};

export default Hero;
