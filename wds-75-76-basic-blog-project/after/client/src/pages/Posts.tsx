import Card from "../components/Posts/Card";
import { useLoaderData } from "react-router-dom";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

function Posts() {
  const postsData = useLoaderData() as Post[];
  return (
    <div className="container">
      <h1 className="page-title">Posts</h1>
      <div className="card-grid">
        {postsData.map((post) => {
          return <Card key={post.id} post={post} />;
        })}
      </div>
    </div>
  );
}

export default Posts;
