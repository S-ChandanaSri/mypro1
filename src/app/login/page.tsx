"use client";

import { useEffect, useState } from "react";
import { NextPage } from "next";
import Link from "next/link";
import { z } from "zod";
import BackgroundImageContainer from "@/components/common/BackgroundImageContainer";
import Button from "@/components/common/Button";
import Checkbox from "@/components/common/Checkbox";
import FormContainer from "@/components/common/FormContainer";
import Input from "@/components/auth/Input";
import Typography from "@/components/common/Typography";
import { useForm } from "@/hooks/useForm";
import { BACKGROUNDS, svgs } from "@/constants/images";
import { UserLoginSchema } from "@/schema/UserSchema";
import { post_login } from "@/api";
import { PATHS } from "@/constants";
import { strings } from "@/constants/strings";
import { setErrorsFromZodError } from "@/utils/auth";
import { loginReducers } from "@/redux/features/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

const Login: NextPage = () => {
  const { formState, setFormState, handleInputChange } = useForm();
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { isauthenticate, user } = useAuth();
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
      const res: any = await post_login(data);
      if (res?.status == 200) {
        dispatch(loginReducers(res?.data?.data?.user));
        localStorage.setItem("accessToken", res?.data?.data?.accessToken);
        localStorage.setItem("refreshToken", res?.data?.data?.refreshToken);
        router.push("/");
      }
    } catch (err) {
      if (err instanceof z.ZodError) {
        setErrorsFromZodError(err, setFormState);
      }
    }
  };

  return (
    <BackgroundImageContainer
      className="flex flex-col items-center justify-center space-y-5 bg-gradient-to-b from-black/50 to-transparent"
      backgroundImage={BACKGROUNDS.AUTH_IMAGE}
    >
      <Typography className="text-center font-serif text-3xl font-semibold text-neutral-50">
        {strings.signup.signIntoAccount}
      </Typography>
      <Typography className="max-w-[480px] pb-10 text-center font-serif text-lg font-normal text-[#D9D9D9]">
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
        <div className="flex justify-between font-serif text-sm text-neutral-500">
          <Checkbox
            label={strings.signup.rememberMe}
            value={rememberMe}
            setValue={setRememberMe}
          />
          <Link
            className="hover:text-blue-600 hover:underline"
            href={PATHS.forgotPassword}
          >
            {strings.signup.forgotPassword}
          </Link>
        </div>
        <div className="space-y-6 pt-8">
          <Button variant="auth" disabled={disabled} type="submit">
            {strings.signup.login}
          </Button>
          <Button variant="google" preIconNode={svgs.google} iconSize={20}>
            {strings.signup.loginWithGoogle}
          </Button>
          <span className="flex justify-center pt-4 text-sm text-neutral-500">
            {strings.signup.signUpFirst}&nbsp;
            <Link className="font-semibold text-blue-600" href={PATHS.signUp}>
              {strings.signup.register}
            </Link>
          </span>
        </div>
      </FormContainer>
    </BackgroundImageContainer>
  );
};

export default Login;
