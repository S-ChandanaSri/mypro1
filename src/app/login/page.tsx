"use client";

import { post_login } from "@/api";
import BackgroundImageContainer from "@/components/common/BackgroundImageContainer";
import Button from "@/components/common/Button";
import Checkbox from "@/components/common/Checkbox";
import FormContainer from "@/components/common/FormContainer";
import Input from "@/components/common/Input";
import Typography from "@/components/common/Typography";
import { paths } from "@/constants";
import { BACKGROUNDS } from "@/constants/images";
import { strings } from "@/constants/strings";
import { InputValue } from "@/constants/types";
import { UserLoginSchema } from "@/schema/UserSchema";
import Link from "next/link";
import { useEffect, useState } from "react";
import { z } from "zod";

type Props = {};

const Login = (props: Props) => {
  const [formEmail, setFormEmail] = useState<InputValue>();
  const [formPassword, setFormPassword] = useState<InputValue>();
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);

  useEffect(() => {
    if (formEmail?.error || formPassword?.error) {
      console.log(formEmail?.error, formPassword?.error);
      setDisabled(true);
      return;
    }
    setDisabled(false);
  }, [formEmail, formPassword]);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newEmail = e.target.value;
    try {
      UserLoginSchema.shape.email.parse(newEmail);
      setFormEmail({ value: newEmail, error: undefined });
    } catch (error) {
      if (error instanceof z.ZodError) {
        setFormEmail({ value: newEmail, error: error.errors[0].message });
      }
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newPassword = e.target.value;

    try {
      UserLoginSchema.shape.password.parse(newPassword);
      setFormPassword({ value: newPassword, error: undefined });
    } catch (error) {
      if (error instanceof z.ZodError) {
        setFormPassword({ value: newPassword, error: error.errors[0].message });
      }
    }
  };

  const onLoginAsync = async (e: any) => {
    e.preventDefault();
    try {
      if (formEmail?.value && formPassword?.value) {
        const payload = {
          email: formEmail?.value,
          password: formPassword?.value,
          rememberMe,
        };
        const res = await post_login(payload);
        console.log(res);
      }
    } catch (err) {
      console.error(`Error connecting to path: ${err}`);
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
      <FormContainer variant="login" onSubmit={onLoginAsync}>
        <Input
          name="email"
          type="email"
          placeholder={strings.signup.emailPlaceholder}
          onChange={handleEmailChange}
        />
        <Input
          name="password"
          type="password"
          placeholder={strings.signup.passwordPlaceholder}
          onChange={handlePasswordChange}
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
          <Button variant="light" disabled={disabled} type="submit">
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
