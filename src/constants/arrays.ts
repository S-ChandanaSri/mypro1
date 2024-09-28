import { PATHS, VIDEOS } from ".";

import {
  INFO_IMAGES,
  roomViewImages,
  svgs,
  TEAM_IMAGES,
  testimonialimages,
} from "./images";

import { strings } from "./strings";
import { cardproperty, InfoImages } from "./images";
import {
  CardInfo,
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
import roomViewinterior1 from "../../public/res/images/roomViewinterior1.png";

export const linkOptions: ILinkOption[] = [
  { label: strings.navbar.services, page: PATHS.root, comp: "services" },
  { label: strings.navbar.features, page: PATHS.root, comp: "features" },
  { label: strings.navbar.aboutUs, page: PATHS.aboutUs },
];
export const menuOptions: ILinkOption[] = [
  {
    label: strings.navbar.listYourProperty,
    page: "",
    comp: "list your property",
  },
  { label: strings.navbar.notifcations, page: "", comp: "notifications" },
  { label: strings.navbar.trips, page: "" },
  { label: strings.navbar.wishlist, page: "" },
  { label: strings.navbar.account, page: "" },
  { label: strings.navbar.help, page: "" },
  { label: strings.navbar.logout, page: "" },
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

export const testimonial: Itestimonial[] = [
  {
    icon1: testimonialimages.sam,
    label: "Samantha Payne",
    sublabel: "@Sam.Payne90",
    icon2: testimonialimages.star,
    label1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel",
    sublabel1: "23 Nov 2021",
  },
  {
    icon1: testimonialimages.sam,
    label: "Samantha Payne",
    sublabel: "@Sam.Payne90",
    icon2: testimonialimages.star,
    label1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,",
    sublabel1: "23 Nov 2021",
  },
  {
    icon1: testimonialimages.sam,
    label: "Samantha Payne",
    sublabel: "@Sam.Payne90",
    icon2: testimonialimages.star,
    label1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel",
    sublabel1: "23 Nov 2021",
  },
  {
    icon1: testimonialimages.sam,
    label: "Samantha Payne",
    sublabel: "@Sam.Payne90",
    icon2: testimonialimages.star,
    label1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,",
    sublabel1: "23 Nov 2021",
  },
  {
    icon1: testimonialimages.sam,
    label: "Samantha Payne",
    sublabel: "@Sam.Payne90",
    icon2: testimonialimages.star,
    label1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,",
    sublabel1: "23 Nov 2021",
  },
  {
    icon1: testimonialimages.sam,
    label: "Samantha Payne",
    sublabel: "@Sam.Payne90",
    icon2: testimonialimages.star,
    label1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,",
    sublabel1: "23 Nov 2021",
  },
  {
    icon1: testimonialimages.sam,
    label: "Samantha Payne",
    sublabel: "@Sam.Payne90",
    icon2: testimonialimages.star,
    label1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,",
    sublabel1: "23 Nov 2021",
  },
  {
    icon1: testimonialimages.sam,
    label: "Samantha Payne",
    sublabel: "@Sam.Payne90",
    icon2: testimonialimages.star,
    label1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,",
    sublabel1: "23 Nov 2021",
  },
  {
    icon1: testimonialimages.sam,
    label: "Samantha Payne",
    sublabel: "@Sam.Payne90",
    icon2: testimonialimages.star,
    label1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,",
    sublabel1: "23 Nov 2021",
  },
  {
    icon1: testimonialimages.sam,
    label: "Samantha Payne",
    sublabel: "@Sam.Payne90",
    icon2: testimonialimages.star,
    label1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,",
    sublabel1: "23 Nov 2021",
  },
  {
    icon1: testimonialimages.sam,
    label: "Samantha Payne",
    sublabel: "@Sam.Payne90",
    icon2: testimonialimages.star,
    label1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,",
    sublabel1: "23 Nov 2021",
  },
  {
    icon1: testimonialimages.sam,
    label: "Samantha Payne",
    sublabel: "@Sam.Payne90",
    icon2: testimonialimages.star,
    label1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,",
    sublabel1: "23 Nov 2021",
  },
];

export const Propertcardinfo: propertyinfo[] = [
  {
    icon: cardproperty.view1,
    icon1: cardproperty.mingcute,
    icon2: cardproperty.mdibed,
    icon3: cardproperty.mdigraphbox,
    icon4: cardproperty.mdigraphline,
    label: "Banaras Island, Lagos",
    sublabel: "4 Bed",
    sublabel1: "Book Now",
  },
  {
    icon: cardproperty.view2,
    icon1: cardproperty.mingcute,
    icon2: cardproperty.mdibed,
    icon3: cardproperty.mdigraphbox,
    icon4: cardproperty.mdigraphline,
    label: "Banaras Island, Lagos",
    sublabel: "4 Bed",
    sublabel1: "Book Now",
  },
  {
    icon: cardproperty.view3,
    icon1: cardproperty.mingcute,
    icon2: cardproperty.mdibed,
    icon3: cardproperty.mdigraphbox,
    icon4: cardproperty.mdigraphline,
    label: "Banaras Island, Lagos",
    sublabel: "4 Bed",
    sublabel1: "Book Now",
  },
  {
    icon: cardproperty.view4,
    icon1: cardproperty.mingcute,
    icon2: cardproperty.mdibed,
    icon3: cardproperty.mdigraphbox,
    icon4: cardproperty.mdigraphline,
    label: "Banaras Island, Lagos",
    sublabel: "4 Bed",
    sublabel1: "Book Now",
  },
  {
    icon: cardproperty.view5,
    icon1: cardproperty.mingcute,
    icon2: cardproperty.mdibed,
    icon3: cardproperty.mdigraphbox,
    icon4: cardproperty.mdigraphline,
    label: "Banaras Island, Lagos",
    sublabel: "4 Bed",
    sublabel1: "Book Now",
  },
  {
    icon: cardproperty.view6,
    icon1: cardproperty.mingcute,
    icon2: cardproperty.mdibed,
    icon3: cardproperty.mdigraphbox,
    icon4: cardproperty.mdigraphline,
    label: "Banaras Island, Lagos",
    sublabel: "4 Bed",
    sublabel1: "Book Now",
  },
  {
    icon: cardproperty.view7,
    icon1: cardproperty.mingcute,
    icon2: cardproperty.mdibed,
    icon3: cardproperty.mdigraphbox,
    icon4: cardproperty.mdigraphline,
    label: "Banaras Island, Lagos",
    sublabel: "4 Bed",
    sublabel1: "Book Now",
  },
  {
    icon: cardproperty.view8,
    icon1: cardproperty.mingcute,
    icon2: cardproperty.mdibed,
    icon3: cardproperty.mdigraphbox,
    icon4: cardproperty.mdigraphline,
    label: "Banaras Island, Lagos",
    sublabel: "4 Bed",
    sublabel1: "Book Now",
  },
];

{
  /*export const Propertcardimages: propertyinfo[] = [

  {
    image1: roomViewImages.roomViewImages,
    image2: roomViewImages.roomViewinterior1,
    image3: roomViewImages.roomViewinterior2,
    image4: roomViewImages.roomViewinterior3,
  }
]*/
}

export const OurAmenitiesnfo: CardInfo[] = [
  { label: "WiFi", icon: InfoImages.wifi },
  { label: "TV", icon: InfoImages.tv },
  { label: "Kitchen", icon: InfoImages.kitchen },
  { label: "Washer", icon: InfoImages.washer },
  { label: "Free Parking", icon: InfoImages.free },
  { label: "Paid parking", icon: InfoImages.park },
  { label: "Air Conditioning", icon: InfoImages.ac },
  { label: "Workplace", icon: InfoImages.workplace },
];

export const ouramenitiesinfo3: CardInfo[] = [
  { label: "Fire kit", icon: InfoImages.wifi },
  { label: "Smoke alarm", icon: InfoImages.tv },
  { label: "Fire extinguisher", icon: InfoImages.kitchen },
  { label: "Carbon monoxide alarm", icon: InfoImages.washer },
];

export const ouramenitiesinfo2: CardInfo[] = [
  { label: "Pool", icon: InfoImages.pool },
  { label: "Patio", icon: InfoImages.patio },
  { label: "Hot tub", icon: InfoImages.tub },
  { label: "Piano", icon: InfoImages.piano },
  { label: "Pool table", icon: InfoImages.table },
  { label: "Exercise equipment", icon: InfoImages.exercise },
  { label: "Beach access", icon: InfoImages.beach },
  { label: "Indoor fireplace", icon: InfoImages.indoor },
  { label: "Outdoor dining area", icon: InfoImages.outdoor },
];

export const placetypeinfo: CardInfo1[] = [
  {
    label: "An entire place",
    sublabel: "Guest will have whole place to live or enjoy",
    icon: InfoImages.house,
  },
  {
    label: "A room",
    sublabel: "Guest will have only a small part of the house to live or enjoy",
    icon: InfoImages.cilroom,
  },
  {
    label: "A shared room",
    sublabel: "Guest will have a shared place to live or enjoy",
    icon: InfoImages.room,
  },
];

export const peopletypeinfo: CardInfo[] = [
  { label: "Me", icon: InfoImages.People },
  { label: "My family", icon: InfoImages.peopleline },
  { label: "Other guests", icon: InfoImages.peoplesharp },
  { label: "Roomates", icon: InfoImages.peoplesharp },
];

export const amenitiesinfo: CardInfo2[] = [
  { label: "Guests", icon: InfoImages.plus1, icon2: InfoImages.subt1 },
  { label: "Bedrooms", icon: InfoImages.plus1, icon2: InfoImages.subt1 },
  { label: "Beds", icon: InfoImages.plus1, icon2: InfoImages.subt1 },
];

export const Describeinfo: CardInfo[] = [
  { label: "Peaceful", icon: InfoImages.peace },
  { label: "Central", icon: InfoImages.peace },
  { label: "Unique", icon: InfoImages.peace },
  { label: "Family-friendly", icon: InfoImages.peace },
  { label: "Spacious", icon: InfoImages.peace },
  { label: "Stylish", icon: InfoImages.peace },
];

export const Optionsinfo: CardInfo1[] = [
  {
    label: "1.Tell us about your place",
    sublabel:
      "Share some basic info, like where it is and how many guest can stay",
    icon: InfoImages.mattress1,
  },
  {
    label: "2.Make it stand out",
    sublabel: "Add 5 or more photos plus title and little description",
    icon: InfoImages.mattress3,
  },
  {
    label: "3.Finish up and publish",
    sublabel:
      "Choose if you like to start with an experienced guest ,set up starting price and publish your listing",
    icon: InfoImages.mattress2,
  },
];
