import { strings } from "@/constants/strings";
import { z } from "zod";

export const UserLoginSchema = z.object({
  email: z.string().email(strings.signup.errors.invalidEmail),
  password: z
    .string()
    .regex(/[a-z]/, strings.signup.errors.invalidPassword.lowerCaseCharacter)
    .regex(/[A-Z]/, strings.signup.errors.invalidPassword.upperCaseCharacter)
    .regex(/\d/, strings.signup.errors.invalidPassword.number)
    .max(16, strings.signup.errors.invalidPassword.maxLength)
    .min(8, strings.signup.errors.invalidPassword.minLength),
  rememberMe: z.boolean(),
});

const UserLoginSchemaWithoutRememberMe = UserLoginSchema.omit({
  rememberMe: true,
});

export const UserRegisterSchema = UserLoginSchemaWithoutRememberMe.extend({
  firstName: z.string().min(1, strings.signup.errors.invalidFirstName),
  lastName: z.string().min(1, strings.signup.errors.invalidLastName),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: strings.signup.errors.nonMatchingPassword,
  path: ["confirmPassword"],
});

export type UserRegisterSchemaType = z.infer<typeof UserRegisterSchema>;
export type UserLoginSchemaType = z.infer<typeof UserLoginSchema>;
