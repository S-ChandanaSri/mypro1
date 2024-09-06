import { PATHS, VIDEOS } from ".";
import { InfoImages } from "./images";
import { strings } from "./strings";
import { CardInfo, FAQ, LinkOption, VideoTestimonial } from "./types";

export const linkOptions: LinkOption[] = [
  { label: strings.navbar.services, page: PATHS.root, comp: "services" },
  { label: strings.navbar.features, page: PATHS.root, comp: "features" },
  { label: strings.navbar.aboutUs, page: PATHS.aboutUs },
];

export const faqs: FAQ[] = [
  {
    id: 1,
    question: "What types of student accommodation are available?",
    answer:
      "There are several types of student accommodation, including on-campus dormitories, off-campus apartments, shared houses, and homestays with local families.",
  },
  {
    id: 2,
    question: "What is the cost of student accommodation?",
    answer:
      "The cost of student accommodation varies depending on the type, and amenities provided. On-campus dormitories tend to be more affordable.",
  },
  {
    id: 3,
    question: "What types of student accommodation are available?",
    answer:
      "There are several types of student accommodation, including on-campus dormitories, off-campus apartments, shared houses, and homestays with local families.",
  },
  {
    id: 4,
    question: "What types of student accommodation are available?",
    answer:
      "There are several types of student accommodation, including on-campus dormitories, off-campus apartments, shared houses, and homestays with local families.",
  },
  {
    id: 5,
    question: "What types of student accommodation are available?",
    answer:
      "There are several types of student accommodation, including on-campus dormitories, off-campus apartments, shared houses, and homestays with local families.",
  },
];

export const OurServicesInfo: CardInfo[] = [
  {
    icon: InfoImages.services1,
    label: "Discover Verified Properties",
    body: "Student accommodation is often located close to campus, saving time on commutes and making it easier to get to classes and activities",
  },
  {
    icon: InfoImages.services2,
    label: "Complete Short Application",
    body: "Student accommodation is often located close to campus, saving time on commutes and making it easier to get to classes and activities",
  },
  {
    icon: InfoImages.services3,
    label: "Complete Your Payment",
    body: "Student accommodation is often located close to campus, saving time on commutes and making it easier to get to classes and activities",
  },
  {
    icon: InfoImages.services4,
    label: "Congratulations! Your Booking Done",
    body: "Student accommodation is often located close to campus, saving time on commutes and making it easier to get to classes and activities",
  },
];

export const WhyChooseUsInfo: CardInfo[] = [
  {
    icon: InfoImages.features1,
    label: "Convenience and Social Life",
    body: "Student accommodation is often located close to campus, saving time on commutes and making it easier to get to classes and activities",
  },
  {
    icon: InfoImages.features2,
    label: "Hassle-free Living",
    body: "Student accommodation is often located close to campus, saving time on commutes and making it easier to get to classes and activities",
  },
  {
    icon: InfoImages.features3,
    label: "Safety and Security",
    body: "Student accommodation is often located close to campus, saving time on commutes and making it easier to get to classes and activities",
  },
  {
    icon: InfoImages.features4,
    label: "Support Services",
    body: "Student accommodation is often located close to campus, saving time on commutes and making it easier to get to classes and activities",
  },
];

export const GetInTouchInfo: CardInfo[] = [
  {
    icon: InfoImages.getInTouch1,
    label: "Call Us",
  },
  {
    icon: InfoImages.getInTouch2,
    label: "Email Us",
  },
  {
    icon: InfoImages.getInTouch3,
    label: "Chat on Whatsapp",
  },
  {
    icon: InfoImages.getInTouch4,
    label: "Chat on Website",
  },
];

export const VideoTestimonials: VideoTestimonial[] = [
  {
    videoPath: VIDEOS.TestVideo1,
    label: "Albert Flores",
    subText: "Founder of GearUp",
  },
  {
    videoPath: VIDEOS.TestVideo2,
    label: "Jane Doe",
    subText: "CEO of TechWorld",
  },
  {
    videoPath: VIDEOS.TestVideo3,
    label: "John Smith",
    subText: "CTO of Innovate",
  },
];
