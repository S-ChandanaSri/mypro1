import { StaticImport } from "next/dist/shared/lib/get-img-props";


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

export interface propertyinfo{
  icon:StaticImport;
  icon1:StaticImport;
  icon2:StaticImport;
  icon3:StaticImport;
  icon4:StaticImport;
  label:string;
  sublabel:string;
  sublabel1:string;
}
