import { IInputValue } from "@/constants/types";
import { z } from "zod";

export function isLocal(): boolean {
  return (
    process.env.NEXT_PUBLIC_ENVIRONMENT === "development" ||
    process.env.NEXT_PUBLIC_ENVIRONMENT === "local"
  );
}

export function isStaging(): boolean {
  return process.env.NEXT_PUBLIC_ENVIRONMENT === "staging";
}

export function isProduction(): boolean {
  return process.env.NEXT_PUBLIC_ENVIRONMENT === "production";
}

export const setErrorsFromZodError = (
  err: z.ZodError,
  setFormState: React.Dispatch<
    React.SetStateAction<{ [key: string]: IInputValue }>
  >,
) => {
  err.errors.forEach((error) => {
    const field = error.path[0];
    const message = error.message;
    setFormState((prev) => ({
      ...prev,
      [field]: { ...prev[field], error: message },
    }));
  });
};
