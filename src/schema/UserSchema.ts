import { strings } from "@/constants/strings";
import { z } from "zod";

export const UserLoginSchema = z.object({
  email: z.string().email(strings.signup.errors.invalidEmail),
  password: z
    .string()
    .min(8, strings.signup.errors.invalidPassword.minLength)
    .regex(/[a-z]/, strings.signup.errors.invalidPassword.lowerCaseCharacter)
    .regex(/[A-Z]/, strings.signup.errors.invalidPassword.upperCaseCharacter)
    .regex(/\d/, strings.signup.errors.invalidPassword.number),
  rememberMe: z.boolean(),
});

export type UserLoginSchemaType = z.infer<typeof UserLoginSchema>;
