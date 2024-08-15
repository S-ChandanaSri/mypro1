import BackgroundImageContainer from "@/components/common/BackgroundImageContainer";
import { BACKGROUNDS } from "@/constants/images";

type Props = {};

const page = (props: Props) => {
  console.log(BACKGROUNDS.AUTH_IMAGE);
  return (
    <BackgroundImageContainer
      className="bg-gradient-to-b from-black/50 to-transparent"
      backgroundImage={BACKGROUNDS.AUTH_IMAGE}
    ></BackgroundImageContainer>
  );
};

export default page;
