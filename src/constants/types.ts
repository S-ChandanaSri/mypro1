import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface InputValue {
  value?: string;
  error?: string;
}

export interface LinkOption {
  label: string;
  page: string;
  comp?: string;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export interface CardInfo {
  icon: StaticImport;
  label: string;
  body?: string;
}
