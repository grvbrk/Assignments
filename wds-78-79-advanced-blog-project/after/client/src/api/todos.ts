import { FetchOptionType } from "../../types";
import { baseApi } from "./base";

export function getTodos(options: FetchOptionType) {
  return baseApi.get("todos", options).then((res) => res.data);
}
