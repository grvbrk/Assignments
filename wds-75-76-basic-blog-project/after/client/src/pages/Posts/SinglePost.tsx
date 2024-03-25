import { useLoaderData } from "react-router-dom";
import type { Comments, LoaderType, Post, User } from "../../../types.d.ts";

function SinglePost() {
  const { post, user, comments } = useLoaderData() as {
    post: Post;
    user: User;
    comments: Comments[];
  };

  return (
    <div className="container">
      <h1 className="page-title">{post.title}</h1>
      <span className="page-subtitle">
        By: <a href="user.html">{user.name}</a>
      </span>
      <div>{post.body}</div>
      <h3 className="mt-4 mb-2">Comments</h3>
      <div className="card-stack">
        {comments.map((comment) => {
          return (
            <div key={comment.id} className="card">
              <div className="card-body">
                <div className="text-sm mb-1">{comment.name}</div>
                {comment.body}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

async function loader({ params, request: { signal } }: LoaderType) {
  const post = await fetch(`http://localhost:3000/posts/${params!.postId}`, {
    signal,
  }).then((res) => res.json());
  const user = await fetch(`http://localhost:3000/users/${post.userId}`, {
    signal,
  }).then((res) => res.json());
  const comments = await fetch(
    `http://localhost:3000/users/${post.userId}/comments`,
    {
      signal,
    }
  ).then((res) => res.json());
  return { post, user, comments };
}

export const singlePostRouter = {
  loader,
  element: <SinglePost />,
};
