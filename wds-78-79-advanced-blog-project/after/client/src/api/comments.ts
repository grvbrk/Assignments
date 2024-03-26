import { baseApi } from "./base";
import { FetchOptionType } from "../../types";

export function getComments(postId: string, options: FetchOptionType) {
  return baseApi
    .get(`posts/${postId}/comments`, options)
    .then((res) => res.data);
}
