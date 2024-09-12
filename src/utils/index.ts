import { IInputValue } from "@/constants/types";
import { z, ZodSchema } from "zod";

interface HandleInputChangeProps {
  schema: ZodSchema<any>;
  setState: React.Dispatch<React.SetStateAction<IInputValue | undefined>>;
}

export const handleInputChange =
  ({ schema, setState }: HandleInputChangeProps) =>
  (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value.length > 0 ? e.target.value : undefined;
    try {
      schema.parse(newValue ?? "");
      setState({ value: newValue, error: undefined });
    } catch (error) {
      if (error instanceof z.ZodError) {
        setState({ value: newValue, error: error.errors[0].message });
      }
    }
  };
