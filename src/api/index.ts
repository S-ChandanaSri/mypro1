import { BACKEND_URLS, Duration } from "@/constants";
import { UserLoginSchemaType } from "@/schema/UserSchema";
import { isLocal } from "@/utils/auth";
import axios from "axios";

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
