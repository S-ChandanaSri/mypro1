import { PATHS, VIDEOS } from ".";
import {INFO_IMAGES, svgs, TEAM_IMAGES, testimonialimages} from "./images";
import { strings } from "./strings";
import {
  ICardInfo,
  IFAQ,
  IFooterConnectOption,
  ILinkOption,
  IProfileCard,
  IQuality,
  IStat,
  IVideoTestimonial,
  SocialPlatforms,
  Itestimonial,

} from "./types";

export const linkOptions: ILinkOption[] = [
  { label: strings.navbar.services, page: PATHS.root, comp: "services" },
  { label: strings.navbar.features, page: PATHS.root, comp: "features" },
  { label: strings.navbar.aboutUs, page: PATHS.aboutUs },
];

export const countries = [
  { name: "Singapore", latLng: [1.3521, 103.8198] },
  { name: "BouvetIsland", latLng: [54.4208, 3.3464] },
  { name: "Bermuda", latLng: [32.3078, 64.7505] },
  { name: "Andorra", latLng: [42.5063, 1.5218] },
  { name: "AmericanSamoa", latLng: [14.271, 170.1322] },
  { name: "ÅlandIslands", latLng: [60.1785, 19.9156] },
  { name: "India", latLng: [20.5937, 78.9629] },
];

export const QualitiesInfo: IQuality[] = [
  {
    icon: svgs.mission,
    label: "Our Mission",
    body: "Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.",
  },
  {
    icon: svgs.vision,
    label: "Our Vision",
    body: "Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.",
  },
  {
    icon: svgs.values,
    label: "Our Values",
    body: "Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.",
  },
  {
    icon: svgs.quality,
    label: "Quality",
    body: "Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.",
  },
  {
    icon: svgs.product,
    label: "Product",
    body: "Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.",
  },
  {
    icon: svgs.result,
    label: "Result",
    body: "Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.",
  },
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
    icon: INFO_IMAGES.services1,
    label: "Discover Verified Properties",
    body: "Student accommodation is often located close to campus, saving time on commutes and making it easier to get to classes and activities",
  },
  {
    icon: INFO_IMAGES.services2,
    label: "Complete Short Application",
    body: "Student accommodation is often located close to campus, saving time on commutes and making it easier to get to classes and activities",
  },
  {
    icon: INFO_IMAGES.services3,
    label: "Complete Your Payment",
    body: "Student accommodation is often located close to campus, saving time on commutes and making it easier to get to classes and activities",
  },
  {
    icon: INFO_IMAGES.services4,
    label: "Congratulations! Your Booking Done",
    body: "Student accommodation is often located close to campus, saving time on commutes and making it easier to get to classes and activities",
  },
];

export const WhyChooseUsInfo: ICardInfo[] = [
  {
    icon: INFO_IMAGES.features1,
    label: "Convenience and Social Life",
    body: "Student accommodation is often located close to campus, saving time on commutes and making it easier to get to classes and activities",
  },
  {
    icon: INFO_IMAGES.features2,
    label: "Hassle-free Living",
    body: "Student accommodation is often located close to campus, saving time on commutes and making it easier to get to classes and activities",
  },
  {
    icon: INFO_IMAGES.features3,
    label: "Safety and Security",
    body: "Student accommodation is often located close to campus, saving time on commutes and making it easier to get to classes and activities",
  },
  {
    icon: INFO_IMAGES.features4,
    label: "Support Services",
    body: "Student accommodation is often located close to campus, saving time on commutes and making it easier to get to classes and activities",
  },
];

export const GetInTouchInfo: ICardInfo[] = [
  {
    icon: INFO_IMAGES.getInTouch1,
    label: "Call Us",
  },
  {
    icon: INFO_IMAGES.getInTouch2,
    label: "Email Us",
  },
  {
    icon: INFO_IMAGES.getInTouch3,
    label: "Chat on Whatsapp",
  },
  {
    icon: INFO_IMAGES.getInTouch4,
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

export const Stats: IStat[] = [
  {
    value: "2024",
    label: "Join now",
  },
  {
    value: "500+",
    label: "Customers",
  },
  {
    value: "70+",
    label: "Houses rented",
  },
];

export const ProfileCards: IProfileCard[] = [
  {
    profileImg: TEAM_IMAGES.NAME1,
    name: "Olivia Rhye",
    title: "Founder & CEO",
    body: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    links: {
      [SocialPlatforms.TWITTER]: "https://x.com/home",
      [SocialPlatforms.LINKEDIN]: "https://linkedin.com",
      [SocialPlatforms.INSTAGRAM]: "https://instagram.io",
    },
  },
  {
    profileImg: TEAM_IMAGES.NAME2,
    name: "Olivia Rhye",
    title: "Founder & CEO",
    body: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    links: {
      [SocialPlatforms.TWITTER]: "https://x.com/home",
      [SocialPlatforms.LINKEDIN]: "https://linkedin.com",
      [SocialPlatforms.INSTAGRAM]: "https://instagram.io",
    },
  },
  {
    profileImg: TEAM_IMAGES.NAME3,
    name: "Olivia Rhye",
    title: "Founder & CEO",
    body: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    links: {
      [SocialPlatforms.TWITTER]: "https://x.com/home",
      [SocialPlatforms.LINKEDIN]: "https://linkedin.com",
      [SocialPlatforms.INSTAGRAM]: "https://instagram.io",
    },
  },
  {
    profileImg: TEAM_IMAGES.NAME4,
    name: "Olivia Rhye",
    title: "Founder & CEO",
    body: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    links: {
      [SocialPlatforms.TWITTER]: "https://x.com/home",
      [SocialPlatforms.LINKEDIN]: "https://linkedin.com",
      [SocialPlatforms.INSTAGRAM]: "https://instagram.io",
    },
  },
  {
    profileImg: TEAM_IMAGES.NAME5,
    name: "Olivia Rhye",
    title: "Founder & CEO",
    body: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    links: {
      [SocialPlatforms.TWITTER]: "https://x.com/home",
      [SocialPlatforms.LINKEDIN]: "https://linkedin.com",
      [SocialPlatforms.INSTAGRAM]: "https://instagram.io",
    },
  },
  {
    profileImg: TEAM_IMAGES.NAME6,
    name: "Olivia Rhye",
    title: "Founder & CEO",
    body: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    links: {
      [SocialPlatforms.TWITTER]: "https://x.com/home",
      [SocialPlatforms.LINKEDIN]: "https://linkedin.com",
      [SocialPlatforms.INSTAGRAM]: "https://instagram.io",
    },
  },
  {
    profileImg: TEAM_IMAGES.NAME6,
    name: "Olivia Rhye",
    title: "Founder & CEO",
    body: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    links: {
      [SocialPlatforms.TWITTER]: "https://x.com/home",
      [SocialPlatforms.LINKEDIN]: "https://linkedin.com",
      [SocialPlatforms.INSTAGRAM]: "https://instagram.io",
    },
  },
  {
    profileImg: TEAM_IMAGES.NAME8,
    name: "Olivia Rhye",
    title: "Founder & CEO",
    body: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    links: {
      [SocialPlatforms.TWITTER]: "https://x.com/home",
      [SocialPlatforms.LINKEDIN]: "https://linkedin.com",
      [SocialPlatforms.INSTAGRAM]: "https://instagram.io",
    },
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

export const testimonial : Itestimonial[] = [
  {
    icon1:testimonialimages.sam,
    label:"Samantha Payne",
    sublabel:"@Sam.Payne90",
    icon2:testimonialimages.star,
    label1:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel",
    sublabel1:'23 Nov 2021',
  },
  {
    icon1:testimonialimages.sam,
    label:"Samantha Payne",
    sublabel:"@Sam.Payne90",
    icon2:testimonialimages.star,
    label1:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,",
    sublabel1:'23 Nov 2021',
  },
  {
    icon1:testimonialimages.sam,
    label:"Samantha Payne",
    sublabel:"@Sam.Payne90",
    icon2:testimonialimages.star,
    label1:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel",
    sublabel1:'23 Nov 2021',
  },
  {
    icon1:testimonialimages.sam,
    label:"Samantha Payne",
    sublabel:"@Sam.Payne90",
    icon2:testimonialimages.star,
    label1:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,",
    sublabel1:'23 Nov 2021',
  },
  {
    icon1:testimonialimages.sam,
    label:"Samantha Payne",
    sublabel:"@Sam.Payne90",
    icon2:testimonialimages.star,
    label1:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,",
    sublabel1:'23 Nov 2021',
  },
  {
    icon1:testimonialimages.sam,
    label:"Samantha Payne",
    sublabel:"@Sam.Payne90",
    icon2:testimonialimages.star,
    label1:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,",
    sublabel1:'23 Nov 2021',
  },
  {
    icon1:testimonialimages.sam,
    label:"Samantha Payne",
    sublabel:"@Sam.Payne90",
    icon2:testimonialimages.star,
    label1:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,",
    sublabel1:'23 Nov 2021',
  },
  {
    icon1:testimonialimages.sam,
    label:"Samantha Payne",
    sublabel:"@Sam.Payne90",
    icon2:testimonialimages.star,
    label1:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,",
    sublabel1:'23 Nov 2021',
  },
  {
    icon1:testimonialimages.sam,
    label:"Samantha Payne",
    sublabel:"@Sam.Payne90",
    icon2:testimonialimages.star,
    label1:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,",
    sublabel1:'23 Nov 2021',
  },
  {
    icon1:testimonialimages.sam,
    label:"Samantha Payne",
    sublabel:"@Sam.Payne90",
    icon2:testimonialimages.star,
    label1:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,",
    sublabel1:'23 Nov 2021',
  },
  {
    icon1:testimonialimages.sam,
    label:"Samantha Payne",
    sublabel:"@Sam.Payne90",
    icon2:testimonialimages.star,
    label1:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,",
    sublabel1:'23 Nov 2021',
  },
  {
    icon1:testimonialimages.sam,
    label:"Samantha Payne",
    sublabel:"@Sam.Payne90",
    icon2:testimonialimages.star,
    label1:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,",
    sublabel1:'23 Nov 2021',
  },
]


