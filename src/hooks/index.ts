import { InputValue } from "@/constants/types";
import { useState } from "react";
import { z, ZodSchema } from "zod";

export const useForm = () => {
  const [formState, setFormState] = useState<{ [key: string]: InputValue }>({});

  const handleInputChange =
    (field: string, schema: ZodSchema) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      try {
        schema.parse(value);
        setFormState((prev) => ({
          ...prev,
          [field]: { value, error: undefined },
        }));
      } catch (error) {
        if (error instanceof z.ZodError) {
          setFormState((prev) => ({
            ...prev,
            [field]: { value, error: error.errors[0]?.message },
          }));
        }
      }
    };
  return { formState, setFormState, handleInputChange };
};
