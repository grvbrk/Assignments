import { LoaderType, Post } from "../../../types";
import PostCard from "../../components/Posts/PostCard";
import { useLoaderData } from "react-router-dom";

function Posts() {
  const postsData = useLoaderData() as Post[];
  return (
    <>
      <h1 className="page-title">Posts</h1>
      <div className="card-grid">
        {postsData.map((post) => {
          return <PostCard key={post.id} post={post} />;
        })}
      </div>
    </>
  );
}

function loader({ request: { signal } }: LoaderType) {
  return fetch("http://localhost:3000/posts", { signal });
}

export const postRouter = {
  loader,
  element: <Posts />,
};
