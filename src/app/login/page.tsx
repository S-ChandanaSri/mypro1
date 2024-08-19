"use client";

import { post_login } from "@/api";
import BackgroundImageContainer from "@/components/common/BackgroundImageContainer";
import Button from "@/components/common/Button";
import Checkbox from "@/components/common/Checkbox";
import FormContainer from "@/components/common/FormContainer";
import Input from "@/components/auth/Input";
import Typography from "@/components/common/Typography";
import { paths } from "@/constants";
import { BACKGROUNDS, svgs } from "@/constants/images";
import { strings } from "@/constants/strings";
import { UserLoginSchema } from "@/schema/UserSchema";
import Link from "next/link";
import { useEffect, useState } from "react";
import { z } from "zod";
import { useForm } from "@/hooks";
import { setErrorsFromZodError } from "@/utils/auth";

type Props = {};

const Login = (props: Props) => {
  const { formState, setFormState, handleInputChange } = useForm();
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);

  useEffect(() => {
    const hasError = Object.values(formState).some((input) => input?.error);
    setDisabled(hasError);
  }, [formState]);

  const onLoginAsync = async (e: any) => {
    e.preventDefault();

    const payload = {
      email: formState.email?.value ?? "",
      password: formState.password?.value ?? "",
      rememberMe,
    };

    try {
      const data = UserLoginSchema.parse(payload);
      const res = await post_login(data);
      console.log(res);
    } catch (err) {
      if (err instanceof z.ZodError) {
        setErrorsFromZodError(err, setFormState);
      }
    }
  };

  return (
    <BackgroundImageContainer
      className="bg-gradient-to-b from-black/50 to-transparent flex flex-col justify-center items-center space-y-5"
      backgroundImage={BACKGROUNDS.AUTH_IMAGE}
    >
      <Typography className="font-serif text-3xl font-semibold text-white text-center">
        {strings.signup.signIntoAccount}
      </Typography>
      <Typography className="font-serif text-[#D9D9D9] max-w-[480px] text-lg font-normal text-center pb-10">
        {strings.signup.subHeading}
      </Typography>
      <FormContainer variant="auth" onSubmit={onLoginAsync}>
        <Input
          name="email"
          type="email"
          error={formState.email?.error}
          variant={formState.email?.error ? "error" : null}
          placeholder={strings.signup.emailPlaceholder}
          onChange={handleInputChange("email", UserLoginSchema.shape.email)}
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
            UserLoginSchema.shape.password,
          )}
        />
        <div className="font-serif text-sm text-neutral-900 flex justify-between">
          <Checkbox
            label={strings.signup.rememberMe}
            value={rememberMe}
            setValue={setRememberMe}
          />
          <Link
            className="hover:text-blue-600 hover:underline"
            href={paths.forgotPassword}
          >
            {strings.signup.forgotPassword}
          </Link>
        </div>
        <div className="space-y-6 pt-8">
          <Button variant="auth" disabled={disabled} type="submit">
            {strings.signup.login}
          </Button>
          <Button variant="google" iconNode={svgs.google}>
            {strings.signup.loginWithGoogle}
          </Button>
          <span className="flex justify-center text-sm text-neutral-500 pt-4">
            {strings.signup.signUpFirst}&nbsp;
            <Link className="text-blue-600 font-semibold" href={paths.signUp}>
              {strings.signup.register}
            </Link>
          </span>
        </div>
      </FormContainer>
    </BackgroundImageContainer>
  );
};

export default Login;
