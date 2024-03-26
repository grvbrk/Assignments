import { FetchOptionType } from "../../types";
import { baseApi } from "./base";

export function getPosts(options: FetchOptionType) {
  return baseApi.get("posts", options).then((res) => res.data);
}

export function getPost(postId: string, options: FetchOptionType) {
  return baseApi.get(`posts/${postId}`, options).then((res) => res.data);
}
