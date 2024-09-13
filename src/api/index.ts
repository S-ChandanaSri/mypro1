import { BACKEND_URLS, Duration } from "@/constants";
import {
  UserLoginSchemaType,
  UserRegisterSchemaType,
} from "@/schema/UserSchema";
import { isLocal } from "@/utils/auth";
import axios from "axios";

const getAPIBaseUrl = (): string => {
  return isLocal() ? BACKEND_URLS.LOCAL : BACKEND_URLS.PRODUCTION;
};

const client = axios.create({
  baseURL: getAPIBaseUrl(),
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
  timeout: Duration.apiTimeout,
  validateStatus: () => true,
});

export async function post_login<T>(payload: UserLoginSchemaType) {
  return await client.post("/auth/login", payload);
}

export async function post_register<T>(payload: UserRegisterSchemaType) {
  return await client.post("/auth/register", payload);
}

export async function refreshToken<T>() {
  const refreshToken = localStorage.getItem("refreshToken");
  try {
    const response = await client.post("/auth/refresh-token", { refreshToken });
    const newAccessToken = response?.data?.accessToken;
    localStorage.setItem("accessToken", newAccessToken);
    return newAccessToken;
  } catch (error: any) {
    if (error.response?.status === 401) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      // redirection to login
    }
  }
}

// every authorized requests
export async function authorized(payload: any) {
  try {
    const response = await client.post("/url", payload);
    return response;
  } catch (error: any) {
    if (error.response?.status === 401) {
      await refreshToken();
      await client.post("/url", payload);
    }
  }
}
