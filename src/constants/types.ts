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

export interface IFooterConnectOption {
  icon: StaticImport;
  type: string;
  value: string;
}
