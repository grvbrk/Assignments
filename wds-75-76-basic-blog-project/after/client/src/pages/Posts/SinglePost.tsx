import { Link, useLoaderData, useNavigation } from "react-router-dom";
import type { Comments, LoaderType, Post, User } from "../../../types.d.ts";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// export function wait(ms: number) {
//   return new Promise<void>((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, ms * 1000);
//   });
// }

function SinglePost() {
  const { post, user, comments } = useLoaderData() as {
    post: Post;
    user: User;
    comments: Comments[];
  };

  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="container">
      <h1 className="page-title">{post.title}</h1>
      <span className="page-subtitle">
        By: <Link to={`/users/${post.userId}`}>{user.name}</Link>
      </span>
      <div>{post.body}</div>
      <h3 className="mt-4 mb-2">Comments</h3>
      <div className="card-stack">
        {isLoading ? (
          <Skeleton height={100} count={5} className="skeleton-load" />
        ) : (
          comments.map((comment) => {
            return (
              <div key={comment.id} className="card">
                <div className="card-body">
                  <div className="text-sm mb-1">{comment.name}</div>
                  {comment.body}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

async function loader({ params, request: { signal } }: LoaderType) {
  const post = await fetch(`http://localhost:3000/posts/${params!.postId}`, {
    signal,
  }).then((res) => res.json());
  const user = fetch(`http://localhost:3000/users/${post.userId}`, {
    signal,
  }).then((res) => res.json());
  const comments = fetch(
    `http://localhost:3000/posts/${params!.postId}/comments`,
    {
      signal,
    }
  ).then((res) => {
    return res.json();
  });
  return { post, user: await user, comments: await comments };
}

export const singlePostRouter = {
  loader,
  element: <SinglePost />,
};
