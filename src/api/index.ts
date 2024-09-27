import { BACKEND_URLS, Duration } from "@/constants";
import {
  UserLoginSchemaType,
  UserRegisterSchemaType,
} from "@/schema/UserSchema";
import { isLocal } from "@/utils/auth";
import axios from "axios";
import { z } from "zod";

const getAPIBaseUrl = (): string => {
  return isLocal() ? BACKEND_URLS.LOCAL : BACKEND_URLS.PRODUCTION;
};

const client = axios.create({
  baseURL: getAPIBaseUrl(),
  responseType: "json",
  headers: { "Content-Type": "application/json" },
  timeout: Duration.apiTimeout,
  validateStatus: () => true,
});

export async function post_login<T>(payload: UserLoginSchemaType) {
  return await client.post("/auth/login", payload);
}

export async function post_register<T>(payload: UserRegisterSchemaType) {
  return await client.post("/auth/register", payload);
}

const PhoneNumberSchema = z.object({
  phoneNumber: z.string().min(10).max(15), // Adjust validation based on your requirements
});

type PhoneNumberSchemaType = z.infer<typeof PhoneNumberSchema>;

export async function postPhoneNumber(payload: PhoneNumberSchemaType) {
  try {
    const response = await client.post("/user/phone", payload);
    return response.data;
  } catch (error) {
    console.error("Error sending phone number:", error);
    throw error;
  }
}

const OTPSchema = z.object({
  otp: z.string().min(4).max(4), //length assuming 4
});

type OTPSchemaType = z.infer<typeof OTPSchema>;
export async function postOTP(payload: OTPSchemaType) {
  try {
    const response = await client.post("/user/otp", payload);
    return response.data;
  } catch (error) {
    console.error("Error sending OTP:", error);
    throw error;
  }
}

const ImageSchema = z.object({
  image: z.instanceof(File), // Assuming image is a file object
});

type ImageSchemaType = z.infer<typeof ImageSchema>;

export async function postImage(payload: ImageSchemaType) {
  try {
    const formData = new FormData();
    formData.append("image", payload.image);

    const response = await client.post("/user/image", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
}
