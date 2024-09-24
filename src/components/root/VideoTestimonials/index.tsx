import Button from "@/components/common/Button";
import VideoPlayer from "./VideoPlayer";
import Slider from "react-slick";
import { strings } from "@/constants/strings";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { PATHS } from "@/constants";
import { svgs } from "@/constants/images";
import { Testimonials } from "@/constants/arrays";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const VideoTestimonials = () => {
  const router = useRouter();
  const [activeTestimonial, setActiveTestimonial] = useState<number>(-1);
  const [isManuallyPlaying, setIsManuallyPlaying] = useState<boolean>(false);

  const handleManualPlaying = (index: number) => {
    setActiveTestimonial((prev) => (prev === index ? -1 : index));
    setIsManuallyPlaying(true);
  };

  const TestimonialSettings = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: Testimonials.length,
    slidesToScroll: 1,
    afterChange: (index: number) => {
      if (!isManuallyPlaying) {
        const newActiveIndex =
          (index + Math.floor(Testimonials.length / 2)) % Testimonials.length;
        setActiveTestimonial(newActiveIndex);
      }
    },
  };
  return (
    <div className="flex flex-col items-center space-y-16 text-center">
      {/* <h3 className="text-2xl font-medium">
        {strings.landing.testimonials.heading}
        <p className="text-md font-light md:w-[50rem]">
          {strings.landing.testimonials.subHeading}
        </p>
      </h3>
      <div className="hidden w-full lg:block">
        <Slider {...TestimonialSettings}>
          {Testimonials.map((testimonial, idx) => (
            <VideoPlayer
              key={idx}
              isPlaying={idx === activeTestimonial}
              togglePlaying={() => handleManualPlaying(idx)}
              {...testimonial}
            />
          ))}
        </Slider>
      </div>
      <ul className="block space-y-12 lg:hidden">
        {Testimonials.map((testimonial, idx) => (
          <VideoPlayer
            key={idx}
            isPlaying={idx === activeTestimonial}
            togglePlaying={() => handleManualPlaying(idx)}
            {...testimonial}
          />
        ))}
      </ul>

      <Button
        className="font-semibold"
        size="md"
        postIconNode={svgs.chevronRightUp}
        variant="link"
        link={PATHS.testimonials}
      >
        {strings.landing.testimonials.seeAllReviews}
      </Button> */}
    </div>
  );
};

export default VideoTestimonials;
