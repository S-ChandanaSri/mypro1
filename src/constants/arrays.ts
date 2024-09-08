import { PATHS, VIDEOS } from ".";
import { InfoImages, svgs } from "./images";
import { strings } from "./strings";
import {
  ICardInfo,
  IFAQ,
  IFooterConnectOption,
  ILinkOption,
  IVideoTestimonial,
} from "./types";

export const linkOptions: ILinkOption[] = [
  { label: strings.navbar.services, page: PATHS.root, comp: "services" },
  { label: strings.navbar.features, page: PATHS.root, comp: "features" },
  { label: strings.navbar.aboutUs, page: PATHS.aboutUs },
];

export const faqs: IFAQ[] = [
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

export const OurServicesInfo: ICardInfo[] = [
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

export const WhyChooseUsInfo: ICardInfo[] = [
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

export const GetInTouchInfo: ICardInfo[] = [
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

export const Testimonials: IVideoTestimonial[] = [
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

export const FooterConnectOptions: IFooterConnectOption[] = [
  {
    icon: svgs.call,
    type: "Tel",
    value: "310-437-2766",
  },
  {
    icon: svgs.mail,
    type: "Mail",
    value: "unreal@outlook.com",
  },
  {
    icon: svgs.address,
    type: "Address",
    value: "706 Campfire Ave. Meriden, CT 06450",
  },
  {
    icon: svgs.fax,
    type: "Fax",
    value: "+1-000-0000",
  },
];

export const FooterLinks: ILinkOption[][] = [
  [
    {
      label: "About Us",
      page: PATHS.aboutUs,
    },
    {
      label: "About Us",
      page: PATHS.aboutUs,
    },
    {
      label: "About Us",
      page: PATHS.aboutUs,
    },
    {
      label: "About Us",
      page: PATHS.aboutUs,
    },
    {
      label: "About Us",
      page: PATHS.aboutUs,
    },
  ],
  [
    {
      label: "About Us",
      page: PATHS.aboutUs,
    },
    {
      label: "About Us",
      page: PATHS.aboutUs,
    },
    {
      label: "About Us",
      page: PATHS.aboutUs,
    },
    {
      label: "About Us",
      page: PATHS.aboutUs,
    },
    {
      label: "About Us",
      page: PATHS.aboutUs,
    },
  ],
  [
    {
      label: "About Us",
      page: PATHS.aboutUs,
    },
    {
      label: "About Us",
      page: PATHS.aboutUs,
    },
    {
      label: "About Us",
      page: PATHS.aboutUs,
    },
    {
      label: "About Us",
      page: PATHS.aboutUs,
    },
    {
      label: "About Us",
      page: PATHS.aboutUs,
    },
  ],
  [
    {
      label: "About Us",
      page: PATHS.aboutUs,
    },
    {
      label: "About Us",
      page: PATHS.aboutUs,
    },
    {
      label: "About Us",
      page: PATHS.aboutUs,
    },
    {
      label: "About Us",
      page: PATHS.aboutUs,
    },
    {
      label: "About Us",
      page: PATHS.aboutUs,
    },
  ],
];
