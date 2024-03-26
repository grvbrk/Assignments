import { useLoaderData } from "react-router-dom";
import { getPosts } from "../api/posts";
import { PostCard } from "../components/PostCard";
import { LoaderType, Post } from "../../types";

function PostList() {
  const posts = useLoaderData() as Post[];

  return (
    <>
      <h1 className="page-title">Posts</h1>
      <div className="card-grid">
        {posts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </>
  );
}

function loader({ request: { signal } }: LoaderType) {
  return getPosts({ signal });
}

export const postListRoute = {
  loader,
  element: <PostList />,
};
