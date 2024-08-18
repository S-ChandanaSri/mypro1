import { Duration } from "@/constants";
import { UserLoginSchemaType } from "@/schema/UserSchema";
import axios from "axios";

const getAPIBaseUrl = (): string => {
  return "";
};

const client = axios.create({
  baseURL: getAPIBaseUrl(),
  responseType: "json",
  headers: { "Content-Type": "application/json" },
  timeout: Duration.apiTimeout,
  validateStatus: () => true,
});
export async function post_login<T>(payload: UserLoginSchemaType) {
  const reponse = await client.post("/auth/login", payload);
}
