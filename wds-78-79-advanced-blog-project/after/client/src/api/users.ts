import { FetchOptionType } from "../../types";
import { baseApi } from "./base";

export function getUsers(options: FetchOptionType) {
  return baseApi.get("users", options).then((res) => res.data);
}

export function getUser(userId: string, options: FetchOptionType) {
  return baseApi.get(`users/${userId}`, options).then((res) => res.data);
}
