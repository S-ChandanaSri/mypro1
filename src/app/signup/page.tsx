"use client";

import BackgroundImageContainer from "@/components/common/BackgroundImageContainer";
import Button from "@/components/common/Button";
import FormContainer from "@/components/common/FormContainer";
import Input from "@/components/auth/Input";
import { BACKGROUNDS, svgs } from "@/constants/images";
import { strings } from "@/constants/strings";
import { UserRegisterSchema } from "@/schema/UserSchema";
import { useEffect, useState } from "react";
import { z } from "zod";
import { useForm } from "@/hooks/useForm";
import { post_register } from "@/api";
import { setErrorsFromZodError } from "@/utils/auth";
import { NextPage } from "next";

const SignUp: NextPage = () => {
  const { formState, setFormState, handleInputChange } = useForm();
  const [disabled, setDisabled] = useState<boolean>(false);

  useEffect(() => {
    const hasError = Object.values(formState).some((input) => input?.error);
    setDisabled(hasError);
  }, [formState]);

  const onSignUpAsync = async (e: any) => {
    e.preventDefault();

    const payload = {
      firstName: formState.firstName?.value ?? "",
      lastName: formState.lastName?.value ?? "",
      email: formState.email?.value ?? "",
      password: formState.password?.value ?? "",
      confirmPassword: formState.confirmPassword?.value ?? "",
    };

    try {
      const data = UserRegisterSchema.parse(payload);
      const res = await post_register(data);
      console.log(res);
    } catch (err) {
      if (err instanceof z.ZodError) {
        setErrorsFromZodError(err, setFormState);
      }
    }
  };
  return (
    <BackgroundImageContainer
      className="flex items-center justify-center bg-gradient-to-b from-black/50 to-transparent"
      backgroundImage={BACKGROUNDS.AUTH_IMAGE}
    >
      <FormContainer variant="auth" onSubmit={onSignUpAsync}>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Input
            name="first-name"
            type="text"
            error={formState.firstName?.error}
            variant={formState.firstName?.error ? "error" : null}
            placeholder={strings.signup.firstName}
            onChange={handleInputChange(
              "firstName",
              UserRegisterSchema.innerType().shape.firstName,
            )}
          />
          <Input
            name="last-name"
            type="text"
            error={formState.lastName?.error}
            variant={formState.lastName?.error ? "error" : null}
            placeholder={strings.signup.lastName}
            onChange={handleInputChange(
              "lastName",
              UserRegisterSchema.innerType().shape.lastName,
            )}
          />
        </div>
        <Input
          name="email"
          type="email"
          error={formState.email?.error}
          variant={formState.email?.error ? "error" : null}
          placeholder={strings.signup.emailPlaceholder}
          onChange={handleInputChange(
            "email",
            UserRegisterSchema.innerType().shape.email,
          )}
        />
        <Input
          name="password"
          type="password"
          error={formState.password?.error}
          variant={formState.password?.error ? "error" : null}
          placeholder={strings.signup.passwordPlaceholder}
          className="tracking-widest"
          onChange={handleInputChange(
            "password",
            UserRegisterSchema.innerType().shape.password,
          )}
        />
        <Input
          name="confirm-password"
          type="password"
          error={formState.confirmPassword?.error}
          variant={formState.confirmPassword?.error ? "error" : null}
          placeholder={strings.signup.confirmPasswordPlaceholder}
          className="tracking-widest"
          onChange={handleInputChange(
            "confirmPassword",
            UserRegisterSchema.innerType().shape.confirmPassword,
          )}
        />
        <div className="space-y-6 pt-8">
          <Button variant="auth" disabled={disabled} type="submit">
            {strings.signup.register}
          </Button>
          <Button variant="google" iconNode={svgs.google} iconSize={20}>
            {strings.signup.loginWithGoogle}
          </Button>
        </div>
      </FormContainer>
    </BackgroundImageContainer>
  );
};

export default SignUp;
