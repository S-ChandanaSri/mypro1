

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import {
  StaticImageData,
  StaticImport,
} from "next/dist/shared/lib/get-img-props";

export interface IInputValue {


  value?: string;
  error?: string;
}



export interface ILinkOption {


  label: string;
  page: string;
  comp?: string;
}


export interface IFAQ {
  id: number;
  question: string;
  answer: string;
}



export interface ICardInfo {
  icon: StaticImport;
  label: string;
  body?: string;
}


export interface IVideoTestimonial {
  videoPath: string;
  label: string;
  subText: string;
}

export interface IStat {
  value: string;
  label: string;
}

export interface IQuality {
  icon: StaticImport;
  label: string;
  body: string;
}

export interface IProfileCard {
  profileImg: string;
  name: string;
  title: string;
  body: string;
  links: {
    [SocialPlatforms.TWITTER]: string;
    [SocialPlatforms.LINKEDIN]: string;
    [SocialPlatforms.INSTAGRAM]: string;
  };
}

export interface IFooterConnectOption {
  icon: StaticImport;
  type: string;
  value: string;
}

export enum SocialPlatforms {
  TWITTER = "TWITTER",
  FACEBOOK = "FACEBOOK",
  INSTAGRAM = "INSTAGRAM",
  LINKEDIN = "LINKEDIN",
}

export interface ICarouselImages {
  images: {
    url: StaticImageData;
    alt: string;
  }[];
}

export interface IAccommodate {
  icon: string;
  itemName: string;
  quantity: number;
}

export interface IOpeningHours {
  days: string;
  hours: string;
}

export interface IAmenity {
  icon: string;
  itemName: string;
}

export interface IPropertyDetails {
  location: string[];
  address: string;
  overallRating: number;
  noOfRatings: number;
  roomServices: string;
  accomodates: IAccommodate[];
  openingHours: IOpeningHours[];
  ammenities: IAmenity[];

}

export interface Itestimonial {
  icon1: string;
  label: string;
  icon2: string;
  sublabel: string;
  label1: string;
  sublabel1: string;
}

export interface propertyinfo {
  icon: StaticImport;
  icon1: StaticImport;
  icon2: StaticImport;
  icon3: StaticImport;
  icon4: StaticImport;
  label: string;
  sublabel: string;
  sublabel1: string;
}

export interface propertyinfoimages {
  image: StaticImport;
  image1: StaticImport;
  image2: StaticImport;
  image3: StaticImport;
}

export interface CardProps {
  title?: string;
  content?: string;
  leftButtonLabel?: string;
  image?: { src: string } | null;
  images?: { src: string }[] | null;
  locate?: string;
  km?: string;
  location?: string;
  placestyle?: string;
  icons?: string[];
  sublabels?: string[];
  buttonLabel?: string;
  buttonVariant?: string;
  imageStyles?: string[];
  fullStyles?: string;
  detailsstyle?: string;
  titlestyle?: string;
  locationstyle?: string;
  amenitystyle?: string;
  buttonstyle?: string;
  butonstyle?: string;
  price?: string;
  pricestyle?: string;
  star?: string;
  rating?: string;
  rate?: string;
  ratepoint?: string;
  wrapstyle?: string;
  ratepointstyle?: string;
  multiImage?: boolean;
}


export interface CardInfo {
  icon: StaticImport;
  label: string;
  body?: string;
}


export interface CardInfo1 {
  icon: StaticImport;
  label: string;
  sublabel: string;
  body?: string;
}

export interface CardInfo2 {
  icon: StaticImport;
  icon2: StaticImport;
  label: string;
  body?: string;
}

